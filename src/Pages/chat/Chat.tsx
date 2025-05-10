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
    <div className="h-screen flex flex-col md:flex-row text-white">
      {/* Mobile Header */}

    </div>
  )
}

export default Chat 