import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { messages } from '@/lib/db/schema';
import { eq, and, or } from 'drizzle-orm';
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
    const receiverId = searchParams.get('receiverId');

    if (!userId || !receiverId) {
      return new NextResponse('Missing required parameters', { status: 400 });
    }

    const messageHistory = await db
      .select()
      .from(messages)
      .where(
        or(
          and(eq(messages.senderId, userId), eq(messages.receiverId, receiverId)),
          and(eq(messages.senderId, receiverId), eq(messages.receiverId, userId))
        )
      )
      .orderBy(messages.timestamp);

    return NextResponse.json(messageHistory);
  } catch (error) {
    console.error('Error fetching messages:', error);
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
    const { id, senderId, receiverId, content, timestamp } = body;

    const message = await db
      .insert(messages)
      .values({
        id,
        senderId,
        receiverId,
        content,
        timestamp: new Date(timestamp),
      })
      .returning();

    return NextResponse.json(message[0]);
  } catch (error) {
    console.error('Error creating message:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 