import React, { useState, useRef, useEffect } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Send, Paperclip, Smile } from "lucide-react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Mock data for demonstration
  const messages = [
    {
      id: "1",
      sender: "Dr. Sarah Johnson",
      content:
        "Hello! I've reviewed your latest test results. Would you like to discuss them?",
      time: "10:30 AM",
      isDoctor: true,
      status: "read",
      type: "text",
    },
    {
      id: "2",
      sender: "You",
      content:
        "Yes, please. I've been feeling a bit concerned about the numbers.",
      time: "10:31 AM",
      isDoctor: false,
      status: "read",
      type: "text",
    },
    {
      id: "3",
      sender: "Dr. Sarah Johnson",
      content:
        "I understand your concern. The numbers are slightly elevated but within a manageable range. Let's schedule a detailed discussion during your next appointment.",
      time: "10:32 AM",
      isDoctor: true,
      status: "read",
      type: "text",
    },
    {
      id: "4",
      sender: "You",
      content:
        "Okay sure, I'd be awaiting your response when you're done with the fixing ofthe issue",
      time: "10:31 AM",
      isDoctor: false,
      status: "read",
      type: "text",
    },
  ];

  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Messages */}
      <ScrollArea
        className="h-[calc(100vh-13rem)]"
        ref={scrollRef}
      >
        <div className="max-w-3xl mx-auto p-4 md:p-6">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.isDoctor ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[85%] md:max-w-[70%] rounded-2xl p-4 shadow-sm ${
                    msg.isDoctor
                      ? "bg-gray-50 text-gray-800"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                    {msg.content}
                  </p>
                  <p
                    className={`text-xs mt-2 ${
                      msg.isDoctor ? "text-gray-500" : "text-blue-100"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>

      {/* Message Input */}
      <div className="border-t border-gray-100 bg-white">
        <div className="max-w-3xl mx-auto p-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-end gap-2">
              <Textarea
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1 min-h-[60px] max-h-[120px] resize-none rounded-2xl bg-gray-50 border-0 focus-visible:ring-1 focus-visible:ring-blue-500"
                rows={1}
              />
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Smile className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-full"
                  onClick={handleSendMessage}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
