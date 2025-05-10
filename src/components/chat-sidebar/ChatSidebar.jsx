import { Calendar, MessageSquare, Search,LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";


const ChatSidebar = ({
  selectedChat,
  setSelectedChat,
  searchQuery,
  setSearchQuery,
  conversations,
  onChatSelect,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-200">
        <h1 className="font-bold text-xl text-blue-600 mb-4">Patient Portal</h1>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search conversations..."
            className="pl-10 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="chats" className="flex-1">
        <TabsList className="grid w-full grid-cols-2 bg-gray-50 p-1">
          <TabsTrigger
            value="chats"
            className="flex items-center gap-2 data-[state=active]:bg-white text-gray-600 data-[state=active]:text-blue-600"
          >
            <MessageSquare className="h-4 w-4" />
            Chats
          </TabsTrigger>
          <TabsTrigger
            value="appointments"
            className="flex items-center gap-2 data-[state=active]:bg-white text-gray-600 data-[state=active]:text-blue-600"
          >
            <Calendar className="h-4 w-4" />
            Appointments
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chats" className="mt-0">
          <ScrollArea className="h-[calc(100vh-16rem)]">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => {
                  setSelectedChat(conv.id);
                  onChatSelect && onChatSelect();
                }}
                className={`w-full p-4 hover:bg-gray-50 transition-colors rounded border-b border-gray-200 cursor-pointer ${
                  selectedChat === conv.id ? "bg-gray-200" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar className="h-12 w-12 bg-blue-100">
                      <span className="text-base font-medium text-blue-600">
                        {conv.avatar}
                      </span>
                    </Avatar>
                    <span
                      className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                        conv.status === "online"
                          ? "bg-green-500"
                          : "bg-gray-400"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div className="max-w-[180px]">
                        <h3 className="font-semibold text-gray-900 text-start">
                          {conv.name}
                        </h3>
                        <p className="text-sm text-gray-600 text-start truncate">
                          {conv.lastMessage}
                        </p>
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-500">
                          {conv.time}
                        </span>
                        {conv.unread > 0 && (
                          <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1">
                            {conv.unread}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </ScrollArea>
        </TabsContent>

        <TabsContent value="appointments" className="mt-0">
          <ScrollArea className="h-[calc(100vh-16rem)]">
            <div className="p-4">
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Next Appointment
                    </h3>
                    <p className="text-sm text-gray-600">
                      March 20, 2024 at 2:00 PM
                    </p>
                    <p className="text-sm text-blue-600">
                      With Dr. Sarah Johnson
                    </p>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Schedule New Appointment
              </Button>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 p-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>PT</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900">Ahmed Ali</div>
            <div className="text-xs text-gray-500">ahmed@example.com</div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-700"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
