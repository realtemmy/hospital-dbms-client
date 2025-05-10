import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { conversations, messages, users } from '@/lib/db/schema';
import { eq, or, and, desc } from 'drizzle-orm';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return new NextResponse('Missing required parameters', { status: 400 });
    }

    // Get all conversations where the user is a participant
    const userConversations = await db
      .select({
        id: conversations.id,
        participantId: or(
          eq(conversations.participant1Id, userId),
          eq(conversations.participant2Id, userId)
        ),
        lastMessage: messages.content,
        lastMessageTime: messages.timestamp,
        unreadCount: db
          .select({ count: db.fn.count() })
          .from(messages)
          .where(
            and(
              eq(messages.receiverId, userId),
              eq(messages.read, false)
            )
          ),
      })
      .from(conversations)
      .leftJoin(messages, eq(conversations.lastMessageId, messages.id))
      .where(
        or(
          eq(conversations.participant1Id, userId),
          eq(conversations.participant2Id, userId)
        )
      )
      .orderBy(desc(messages.timestamp));

    // Get participant information for each conversation
    const conversationsWithParticipants = await Promise.all(
      userConversations.map(async (conv) => {
        const participantId =
          conv.participantId === userId
            ? conv.participant2Id
            : conv.participant1Id;

        const participant = await db
          .select({
            id: users.id,
            name: users.name,
          })
          .from(users)
          .where(eq(users.id, participantId))
          .limit(1);

        return {
          ...conv,
          participantId: participant[0].id,
          participantName: participant[0].name,
        };
      })
    );

    return NextResponse.json(conversationsWithParticipants);
  } catch (error) {
    console.error('Error fetching conversations:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await request.json();
    const { participant1Id, participant2Id } = body;

    // Check if conversation already exists
    const existingConversation = await db
      .select()
      .from(conversations)
      .where(
        or(
          and(
            eq(conversations.participant1Id, participant1Id),
            eq(conversations.participant2Id, participant2Id)
          ),
          and(
            eq(conversations.participant1Id, participant2Id),
            eq(conversations.participant2Id, participant1Id)
          )
        )
      )
      .limit(1);

    if (existingConversation.length > 0) {
      return NextResponse.json(existingConversation[0]);
    }

    // Create new conversation
    const conversation = await db
      .insert(conversations)
      .values({
        id: crypto.randomUUID(),
        participant1Id,
        participant2Id,
      })
      .returning();

    return NextResponse.json(conversation[0]);
  } catch (error) {
    console.error('Error creating conversation:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 