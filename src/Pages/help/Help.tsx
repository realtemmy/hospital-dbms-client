import { useState } from "react";
import {
  Search,
  HelpCircle,
  FileText,
  MessageSquare,
  Phone,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqItems = [
    {
      question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking on the 'Forgot Password' link on the login page. You will receive an email with instructions to create a new password.",
    },
    {
      question: "How do I schedule a patient appointment?",
      answer:
        "Navigate to the Appointments module, click on 'New Appointment', select the patient, choose an available time slot, select the appropriate doctor or department, and click 'Save'.",
    },
    {
      question: "Where can I find patient history?",
      answer:
        "Access the patient's profile by searching for them in the Patient Directory. Click on their name and navigate to the 'Medical History' tab to view their complete medical records.",
    },
    {
      question: "How do I generate reports?",
      answer:
        "Go to the Reports module in the main navigation. Select the type of report you need (financial, patient statistics, inventory, etc.), set your parameters and date range, and click 'Generate Report'.",
    },
    {
      question: "How do I update system settings?",
      answer:
        "Only administrators can update system settings. Navigate to the Admin Panel, select 'System Settings', make your changes, and click 'Save Changes'. Note that some settings may require system restart.",
    },
  ];

  const videoTutorials = [
    {
      title: "Getting Started with HMS",
      duration: "5:24",
      thumbnail: "/api/placeholder/160/90",
    },
    {
      title: "Patient Registration Workflow",
      duration: "7:12",
      thumbnail: "/api/placeholder/160/90",
    },
    {
      title: "Managing Appointments",
      duration: "4:45",
      thumbnail: "/api/placeholder/160/90",
    },
    {
      title: "Billing and Insurance",
      duration: "10:30",
      thumbnail: "/api/placeholder/160/90",
    },
  ];

  const supportTeam = [
    {
      name: "Alex Johnson",
      role: "Technical Support Lead",
      avatar: "AJ",
    },
    {
      name: "Maria Garcia",
      role: "Implementation Specialist",
      avatar: "MG",
    },
    {
      name: "David Kim",
      role: "Training Coordinator",
      avatar: "DK",
    },
  ];

  const quickLinks = [
    { title: "User Manual", icon: <FileText size={16} /> },
    { title: "Video Library", icon: <ExternalLink size={16} /> },
    { title: "Release Notes", icon: <FileText size={16} /> },
    { title: "Schedule Training", icon: <Phone size={16} /> },
  ];

  const filteredFAQs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Help & Support Center</h1>
          <p className="text-blue-100 mb-8 max-w-2xl">
            Get help with your Hospital Management System. Search our knowledge
            base, watch tutorial videos, or contact our support team.
          </p>

          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-blue-300" />
            </div>
            <Input
              type="text"
              placeholder="Search for help topics..."
              className="pl-10 py-6 rounded-lg border-0 shadow-lg w-full focus:ring-2 focus:ring-blue-500 text-gray-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar with quick links */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start text-left font-normal hover:bg-blue-50"
                    >
                      <span className="flex items-center">
                        {link.icon}
                        <span className="ml-2">{link.title}</span>
                      </span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Need Urgent Help?</CardTitle>
                <CardDescription>
                  Our support team is available 24/7
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone size={20} className="text-blue-600" />
                    <div>
                      <p className="font-medium">Support Hotline</p>
                      <p className="text-sm text-gray-500">1-800-HMS-HELP</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MessageSquare size={20} className="text-blue-600" />
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm text-gray-500">Available 24/7</p>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-2">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Support Team</CardTitle>
                <CardDescription>
                  Meet our dedicated specialists
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supportTeam.map((member, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={`/api/placeholder/40/40`} />
                        <AvatarFallback className="bg-blue-600 text-white">
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main content area */}
          <div className="lg:col-span-2">
            <Alert className="mb-8 border-blue-200 bg-blue-50">
              <HelpCircle className="h-4 w-4 text-blue-600" />
              <AlertTitle>System Update Coming Soon</AlertTitle>
              <AlertDescription>
                We're upgrading the Hospital Management System on June 5, 2025.
                Check out our new features and prepare your team.
              </AlertDescription>
            </Alert>

            <Tabs defaultValue="faq" className="mb-8">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="faq">FAQs</TabsTrigger>
                <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
                <TabsTrigger value="docs">Documentation</TabsTrigger>
              </TabsList>

              <TabsContent value="faq">
                <h2 className="text-2xl font-semibold mb-6">
                  Frequently Asked Questions
                </h2>

                {searchQuery && filteredFAQs.length === 0 ? (
                  <div className="text-center py-8">
                    <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium">No results found</h3>
                    <p className="text-gray-500 mt-2">
                      Try using different keywords or contact our support team.
                    </p>
                  </div>
                ) : (
                  <Accordion type="single" collapsible className="w-full">
                    {(searchQuery ? filteredFAQs : faqItems).map(
                      (item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left font-medium hover:text-blue-600">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      )
                    )}
                  </Accordion>
                )}

                <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
                  <h3 className="font-medium mb-2">
                    Didn't find what you're looking for?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our support team is ready to assist you with any questions.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Submit a Support Ticket
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="videos">
                <h2 className="text-2xl font-semibold mb-6">Video Tutorials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {videoTutorials.map((video, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{video.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full">
                          Watch Tutorial
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="mx-auto">
                    View All Tutorials
                    <ChevronRight size={16} className="ml-2" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="docs">
                <h2 className="text-2xl font-semibold mb-6">Documentation</h2>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>User Manuals</CardTitle>
                        <Badge
                          variant="outline"
                          className="text-blue-600 border-blue-200 bg-blue-50"
                        >
                          Updated
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md">
                          <div className="flex items-center">
                            <FileText
                              size={18}
                              className="text-blue-600 mr-3"
                            />
                            <span>Administrator Guide</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink size={16} />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md">
                          <div className="flex items-center">
                            <FileText
                              size={18}
                              className="text-blue-600 mr-3"
                            />
                            <span>Nurse Station Guide</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink size={16} />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md">
                          <div className="flex items-center">
                            <FileText
                              size={18}
                              className="text-blue-600 mr-3"
                            />
                            <span>Doctor's Portal Guide</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink size={16} />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md">
                          <div className="flex items-center">
                            <FileText
                              size={18}
                              className="text-blue-600 mr-3"
                            />
                            <span>Billing & Insurance Guide</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink size={16} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Technical Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md">
                          <div className="flex items-center">
                            <FileText
                              size={18}
                              className="text-blue-600 mr-3"
                            />
                            <span>System Requirements</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink size={16} />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md">
                          <div className="flex items-center">
                            <FileText
                              size={18}
                              className="text-blue-600 mr-3"
                            />
                            <span>API Documentation</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink size={16} />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md">
                          <div className="flex items-center">
                            <FileText
                              size={18}
                              className="text-blue-600 mr-3"
                            />
                            <span>Integration Guide</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink size={16} />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-md">
                          <div className="flex items-center">
                            <FileText
                              size={18}
                              className="text-blue-600 mr-3"
                            />
                            <span>Security Whitepaper</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink size={16} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
