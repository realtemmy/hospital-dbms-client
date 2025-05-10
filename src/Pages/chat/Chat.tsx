import React, { useState } from 'react'
import { Avatar } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search, Send, Phone, Video, MoreVertical, Paperclip, Smile, User, Mail, Calendar, FileText, MessageSquare, Clock, AlertCircle, ChevronLeft } from 'lucide-react'

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null)
  const [message, setMessage] = useState('')
  const [activeTab, setActiveTab] = useState('chats')

  // Mock data for demonstration
  const conversations = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      role: 'Cardiologist',
      lastMessage: 'Your test results are ready for review',
      time: '10:30 AM',
      unread: 2,
      avatar: 'SJ',
      status: 'online',
      department: 'Cardiology',
      email: 'sarah.johnson@hospital.com',
      phone: '+1 234 567 8900',
      nextAppointment: '2024-03-20 14:00',
      specialization: 'Cardiac Care',
      experience: '15 years'
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      role: 'Neurologist',
      lastMessage: 'Please schedule your follow-up appointment',
      time: 'Yesterday',
      unread: 0,
      avatar: 'MC',
      status: 'offline',
      department: 'Neurology',
      email: 'michael.chen@hospital.com',
      phone: '+1 234 567 8901',
      nextAppointment: '2024-03-25 10:30',
      specialization: 'Neurological Disorders',
      experience: '12 years'
    }
  ]

  const messages = [
    {
      id: '1',
      sender: 'Dr. Sarah Johnson',
      content: "Hello! I've reviewed your latest test results. Would you like to discuss them?",
      time: '10:30 AM',
      isDoctor: true,
      status: 'read',
      type: 'text'
    },
    {
      id: '2',
      sender: 'You',
      content: "Yes, please. I've been feeling a bit concerned about the numbers.",
      time: '10:31 AM',
      isDoctor: false,
      status: 'read',
      type: 'text'
    },
    {
      id: '3',
      sender: 'Dr. Sarah Johnson',
      content: "I understand your concern. The numbers are slightly elevated but within a manageable range. Let's schedule a detailed discussion during your next appointment.",
      time: '10:32 AM',
      isDoctor: true,
      status: 'read',
      type: 'text'
    }
  ]

  return (
    <div className="h-screen flex flex-col md:flex-row bg-[#1A1A1A] text-white">
      {/* Mobile Header */}
      <div className="md:hidden p-4 border-b border-gray-800 flex items-center justify-between">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold">Medical Chat</h1>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Conversations List */}
        <div className="w-full md:w-80 border-r border-gray-800 bg-[#1A1A1A]">
          <div className="p-4 border-b border-gray-800">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search doctors..."
                className="pl-10 bg-[#2A2A2A] border-gray-800 text-white placeholder:text-gray-500"
              />
            </div>
            <Tabs defaultValue="chats" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-[#2A2A2A]">
                <TabsTrigger value="chats" className="flex items-center gap-2 data-[state=active]:bg-[#3A3A3A] text-gray-400 data-[state=active]:text-white">
                  <User className="h-4 w-4" />
                  Chats
                </TabsTrigger>
                <TabsTrigger value="appointments" className="flex items-center gap-2 data-[state=active]:bg-[#3A3A3A] text-gray-400 data-[state=active]:text-white">
                  <Calendar className="h-4 w-4" />
                  Appointments
                </TabsTrigger>
              </TabsList>
              <TabsContent value="chats" className="mt-4">
                <ScrollArea className="h-[calc(100vh-12rem)] md:h-[calc(100vh-8rem)]">
                  {conversations.map((conv) => (
                    <button
                      key={conv.id}
                      onClick={() => setSelectedChat(conv.id)}
                      className={`w-full p-4 hover:bg-[#2A2A2A] transition-colors border-b border-gray-800 ${
                        selectedChat === conv.id ? 'bg-[#2A2A2A]' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <Avatar className="h-12 w-12 bg-[#3A3A3A]">
                            <span className="text-base font-medium text-white">{conv.avatar}</span>
                          </Avatar>
                          <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#1A1A1A] ${
                            conv.status === 'online' ? 'bg-green-500' : 'bg-gray-600'
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-white">{conv.name}</h3>
                              <p className="text-sm text-gray-400">{conv.department}</p>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="text-xs text-gray-500">{conv.time}</span>
                              {conv.unread > 0 && (
                                <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1">
                                  {conv.unread}
                                </div>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-gray-400 truncate mt-1">
                            {conv.lastMessage}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </ScrollArea>
              </TabsContent>
              <TabsContent value="appointments" className="mt-4">
                <ScrollArea className="h-[calc(100vh-12rem)] md:h-[calc(100vh-8rem)]">
                  <div className="p-4">
                    <div className="bg-[#2A2A2A] rounded-lg p-4 mb-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <h3 className="font-semibold text-white">Next Appointment</h3>
                          <p className="text-sm text-gray-300">March 20, 2024 at 2:00 PM</p>
                          <p className="text-sm text-blue-500">With Dr. Sarah Johnson</p>
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
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-800 bg-[#1A1A1A] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 bg-[#3A3A3A]">
                    <span className="text-base font-medium text-white">
                      {conversations.find(c => c.id === selectedChat)?.avatar}
                    </span>
                  </Avatar>
                  <div>
                    <h2 className="font-semibold text-white">
                      {conversations.find(c => c.id === selectedChat)?.name}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {conversations.find(c => c.id === selectedChat)?.department}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-6 bg-[#1A1A1A]">
                <div className="space-y-6">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isDoctor ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className="flex gap-3 max-w-[70%]">
                        {message.isDoctor && (
                          <Avatar className="h-8 w-8 mt-1 bg-[#3A3A3A]">
                            <span className="text-xs font-medium text-white">
                              {conversations.find(c => c.id === selectedChat)?.avatar}
                            </span>
                          </Avatar>
                        )}
                        <div
                          className={`rounded-2xl p-4 ${
                            message.isDoctor
                              ? 'bg-[#2A2A2A] text-white'
                              : 'bg-blue-600 text-white'
                          }`}
                        >
                          {message.isDoctor && (
                            <span className="text-sm font-medium block mb-1 text-gray-300">
                              {message.sender}
                            </span>
                          )}
                          <p className="text-sm">{message.content}</p>
                          <div className={`flex items-center gap-1 mt-1 ${
                            message.isDoctor ? 'text-gray-500' : 'text-blue-200'
                          }`}>
                            <span className="text-xs">{message.time}</span>
                            {!message.isDoctor && (
                              <span className="text-xs">• {message.status}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-800 bg-[#1A1A1A]">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    className="flex-1 bg-[#2A2A2A] border-gray-800 text-white placeholder:text-gray-500"
                    value={message}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                  />
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Smile className="h-5 w-5" />
                  </Button>
                  <Button 
                    size="icon" 
                    className="bg-blue-600 hover:bg-blue-700 text-white" 
                    disabled={!message.trim()}
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-[#1A1A1A]">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#2A2A2A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">No conversation selected</h3>
                <p className="text-gray-400">Choose a doctor to start chatting</p>
              </div>
            </div>
          )}
        </div>

        {/* Doctor Details Sidebar */}
        {selectedChat && (
          <div className="hidden lg:block w-80 border-l border-gray-800 bg-[#1A1A1A] p-6">
            <div className="space-y-6">
              <div className="text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4 bg-[#3A3A3A]">
                  <span className="text-2xl font-medium text-white">
                    {conversations.find(c => c.id === selectedChat)?.avatar}
                  </span>
                </Avatar>
                <h3 className="text-lg font-semibold text-white">
                  {conversations.find(c => c.id === selectedChat)?.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {conversations.find(c => c.id === selectedChat)?.department}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">
                    {conversations.find(c => c.id === selectedChat)?.email}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="h-5 w-5" />
                  <span className="text-sm">
                    {conversations.find(c => c.id === selectedChat)?.phone}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Clock className="h-5 w-5" />
                  <span className="text-sm">
                    Experience: {conversations.find(c => c.id === selectedChat)?.experience}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm">
                    Next Appointment: {conversations.find(c => c.id === selectedChat)?.nextAppointment}
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-800">
                <h4 className="font-semibold mb-4 text-white">Specialization</h4>
                <p className="text-sm text-gray-400">
                  {conversations.find(c => c.id === selectedChat)?.specialization}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-800">
                <h4 className="font-semibold mb-4 text-white">Shared Files</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 hover:bg-[#2A2A2A] rounded-lg cursor-pointer">
                    <div className="h-10 w-10 bg-[#3A3A3A] rounded flex items-center justify-center">
                      <FileText className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Medical Report.pdf</p>
                      <p className="text-xs text-gray-500">2.4 MB • 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-[#2A2A2A] rounded-lg cursor-pointer">
                    <div className="h-10 w-10 bg-[#3A3A3A] rounded flex items-center justify-center">
                      <FileText className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Test Results.pdf</p>
                      <p className="text-xs text-gray-500">1.8 MB • 1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-800">
                <Button variant="outline" className="w-full text-red-500 hover:text-red-600 hover:bg-red-950/50 border-gray-800">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Report an Issue
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Chat 