import React, { useState } from "react";
import { Outlet } from "react-router";
import {
  Phone,
  Video,
  MoreVertical,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTitle,
  DrawerHeader,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import ChatSidebar from "../../components/chat-sidebar/ChatSidebar";

const ChatLayout = () => {
  const [show, setShow] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleShow = () => setShow(!show);

  const conversations = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      role: "Cardiologist",
      lastMessage: "Your test results are ready for review",
      time: "10:30 AM",
      unread: 2,
      avatar: "SJ",
      status: "online",
      department: "Cardiology",
      email: "sarah.johnson@hospital.com",
      phone: "+1 234 567 8900",
      nextAppointment: "2024-03-20 14:00",
      specialization: "Cardiac Care",
      experience: "15 years",
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      role: "Neurologist",
      lastMessage: "Please schedule your follow-up appointment",
      time: "Yesterday",
      unread: 0,
      avatar: "MC",
      status: "offline",
      department: "Neurology",
      email: "michael.chen@hospital.com",
      phone: "+1 234 567 8901",
      nextAppointment: "2024-03-25 10:30",
      specialization: "Neurological Disorders",
      experience: "12 years",
    },
  ];

  return (
    <div className="h-[calc(100vh-70px)] w-full overflow-y-hidden flex bg-white">
      {/* Sidebar */}
      {show && (
        <div className="hidden lg:flex w-80 flex-col border-r border-gray-200">
          <ChatSidebar
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            conversations={conversations}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-12 bg-white border-b border-gray-200 grid grid-cols-[50px_1fr] w-full">
          <div className="flex items-center justify-center w-full">
            {window.innerWidth < 1024 ? (
              <Drawer>
                <DrawerTrigger>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 p-0"
                    onClick={handleToggleShow}
                  >
                    <Menu className="h-5 w-5 text-gray-500" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[100vh]">
                  <DrawerHeader>
                    <DrawerTitle>Chat</DrawerTitle>

                  </DrawerHeader>
                  <div className="h-full overflow-y-auto">
                    <ChatSidebar
                      selectedChat={selectedChat}
                      setSelectedChat={setSelectedChat}
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                      conversations={conversations}
                    />
                  </div>
                </DrawerContent>
              </Drawer>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 p-0"
                onClick={handleToggleShow}
              >
                <Menu className="h-5 w-5 text-gray-500" />
              </Button>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-medium text-gray-900">
                Medical Chat
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-500 hover:text-gray-700"
              >
                <Phone className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-500 hover:text-gray-700"
              >
                <Video className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-500 hover:text-gray-700"
              >
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ChatLayout;
