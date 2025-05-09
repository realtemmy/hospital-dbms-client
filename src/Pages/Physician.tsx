import { useState } from "react";
import { 
  CalendarDays, 
  Users, 
  Activity, 
  Clipboard, 
  Clock,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Pill,
  FileText,
  Bell
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ScrollArea } from "../components/ui/scroll-area";

// Import doctor images - replace these with actual paths when available
const maleDoctorImage = "https://cdn-icons-png.flaticon.com/512/3304/3304567.png";
const femaleDoctorImage = "https://cdn-icons-png.flaticon.com/512/3304/3304633.png";

const Physician = () => {
  const [timeFilter, setTimeFilter] = useState("today");
  
  // Doctor profile data
  const doctor = {
    firstName: "William",
    lastName: "Smith",
    gender: "male", // or "female"
    specialty: "Cardiologist",
    experience: 15,
    appointments: {
      today: 12,
      week: 45
    }
  };

  // Mock data
  const stats = [
    {
      title: "Total Patients",
      value: "248",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "blue"
    },
    {
      title: "Appointments",
      value: "12",
      change: "-3.8%",
      trend: "down",
      icon: CalendarDays,
      color: "purple"
    },
    {
      title: "Completed",
      value: "8",
      change: "+18.3%",
      trend: "up",
      icon: Clipboard,
      color: "green"
    },
    {
      title: "Avg. Visit Time",
      value: "32m",
      change: "5m less",
      trend: "up",
      icon: Clock,
      color: "amber"
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      patient: "Ahmed Ali",
      avatar: "https://github.com/shadcn.png",
      time: "10:00 AM",
      type: "Follow-up",
      status: "confirmed"
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      avatar: "",
      time: "11:30 AM",
      type: "New Patient",
      status: "confirmed"
    },
    {
      id: 3,
      patient: "Michael Chen",
      avatar: "",
      time: "1:15 PM",
      type: "Check-up",
      status: "pending"
    },
    {
      id: 4,
      patient: "Maria Garcia",
      avatar: "",
      time: "3:00 PM",
      type: "Consultation",
      status: "confirmed"
    }
  ];

  const recentPatients = [
    {
      id: 1,
      name: "Emily Wilson",
      avatar: "",
      lastVisit: "2 days ago",
      diagnosis: "Hypertension",
      status: "stable"
    },
    {
      id: 2,
      name: "David Jackson",
      avatar: "",
      lastVisit: "1 week ago",
      diagnosis: "Diabetes Type 2",
      status: "improving"
    },
    {
      id: 3,
      name: "Sophia Martinez",
      avatar: "",
      lastVisit: "3 days ago",
      diagnosis: "Influenza",
      status: "recovering"
    }
  ];

  const notifications = [
    {
      id: 1,
      title: "Lab results available",
      description: "New lab results for Ahmed Ali are available for review",
      time: "10 mins ago",
      read: false,
      icon: FileText
    },
    {
      id: 2,
      title: "Prescription refill request",
      description: "David Jackson requested a medication refill",
      time: "1 hour ago",
      read: false,
      icon: Pill
    },
    {
      id: 3,
      title: "Appointment rescheduled",
      description: "Maria Garcia rescheduled to next Friday",
      time: "2 hours ago",
      read: true,
      icon: CalendarDays
    }
  ];

  return (
    <div className="pb-10">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl overflow-hidden mb-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="p-8 md:p-10 flex-1">
            <span className="inline-block bg-blue-900/30 text-blue-100 px-3 py-1 rounded-full text-sm mb-4">
              {doctor.specialty} • {doctor.experience} Years Experience
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Welcome back, Dr. {doctor.lastName}
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-6">
              You have {doctor.appointments.today} appointments scheduled for today
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                <CalendarDays className="w-4 h-4 mr-2" />
                View Schedule
              </Button>
              <Button variant="outline" className="text-white border-white/30 hover:bg-blue-700/30 hover:border-white">
                <FileText className="w-4 h-4 mr-2" />
                Patient Records
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative h-full">
            <div className="absolute bottom-0 right-0">
              <img 
                src={doctor.gender === "female" ? femaleDoctorImage : maleDoctorImage} 
                alt={`Dr. ${doctor.lastName}`}
                className="h-64 object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-slate-500 mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <div className="flex items-center mt-1">
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4 mr-1 text-green-500" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 mr-1 text-red-500" />
                  )}
                  <span 
                    className={`text-xs ${
                      stat.trend === "up" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-500`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Appointments */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-5 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Today's Appointments</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Clock className="h-4 w-4 mr-1" />
                  Schedule
                </Button>
              </div>
            </div>
            <div className="p-4">
              {upcomingAppointments.length > 0 ? (
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between py-3 border-b last:border-0">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={appointment.avatar} />
                          <AvatarFallback>
                            {appointment.patient.split(" ").map(name => name[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{appointment.patient}</h4>
                          <div className="flex items-center text-sm text-slate-500">
                            <Clock className="h-3 w-3 mr-1" />
                            {appointment.time} • {appointment.type}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span 
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            appointment.status === "confirmed" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {appointment.status === "confirmed" ? "Confirmed" : "Pending"}
                        </span>
                        <Button variant="ghost" size="sm" className="ml-2">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-10">
                  <CalendarDays className="h-12 w-12 text-slate-300 mb-3" />
                  <h3 className="text-lg font-medium">No appointments today</h3>
                  <p className="text-slate-500 text-sm mt-1">Enjoy your free time!</p>
                </div>
              )}
            </div>
            <div className="p-4 border-t bg-slate-50 rounded-b-lg">
              <Button variant="link" className="w-full text-blue-600">
                View all appointments <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Recent Patients */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-5 border-b">
              <h2 className="text-xl font-semibold">Recent Patients</h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {recentPatients.map((patient) => (
                  <div key={patient.id} className="flex items-center justify-between py-3 border-b last:border-0">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={patient.avatar} />
                        <AvatarFallback>
                          {patient.name.split(" ").map(name => name[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{patient.name}</h4>
                        <div className="flex text-sm text-slate-500">
                          Last visit: {patient.lastVisit}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span 
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          patient.status === "stable" 
                            ? "bg-blue-100 text-blue-800" 
                            : patient.status === "improving" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {patient.status}
                      </span>
                      <span className="text-xs text-slate-500 mt-1">{patient.diagnosis}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 border-t bg-slate-50 rounded-b-lg">
              <Button variant="link" className="w-full text-blue-600">
                View all patients <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Tabs Section */}
          <div className="bg-white rounded-lg shadow">
            <Tabs defaultValue="activity">
              <div className="border-b">
                <TabsList className="w-full flex">
                  <TabsTrigger value="activity" className="flex-1 py-3">
                    Activity
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="flex-1 py-3">
                    Notifications
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="activity" className="p-0">
                <div className="p-5">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-sm font-medium">08:00 AM</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        Team Meeting
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-sm font-medium">10:00 AM</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        First Appointment
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-3">
                      <span className="text-sm font-medium">12:30 PM</span>
                      <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                        Lunch Break
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">03:00 PM</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                        Department Review
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="notifications" className="p-0">
                <ScrollArea className="h-[300px]">
                  <div className="p-4">
                    {notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`p-3 mb-3 rounded-lg ${!notification.read ? "bg-blue-50" : ""}`}
                      >
                        <div className="flex items-start">
                          <div className={`p-2 rounded-full bg-${notification.read ? "slate" : "blue"}-100 mr-3`}>
                            <notification.icon className={`h-4 w-4 text-${notification.read ? "slate" : "blue"}-500`} />
                          </div>
                          <div>
                            <p className={`text-sm font-medium ${!notification.read ? "text-blue-700" : ""}`}>
                              {notification.title}
                            </p>
                            <p className="text-xs text-slate-500 mt-1">{notification.description}</p>
                            <p className="text-xs text-slate-400 mt-2">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="p-4 border-t bg-slate-50">
                  <Button variant="link" className="w-full text-blue-600">
                    View all notifications <Bell className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Patient Demographics Card */}
          <div className="bg-white rounded-lg shadow p-5">
            <h3 className="font-semibold mb-4">Patient Demographics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">Male</span>
                  <span className="font-medium">62%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "62%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">Female</span>
                  <span className="font-medium">36%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-pink-500 h-2 rounded-full" style={{ width: "36%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">Other</span>
                  <span className="font-medium">2%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: "2%" }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-5 pt-5 border-t">
              <h4 className="font-medium mb-3">Age Distribution</h4>
              <div className="grid grid-cols-5 gap-2">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-full bg-blue-100 rounded-t-lg flex items-end">
                    <div className="bg-blue-500 w-full" style={{ height: "30%" }}></div>
                  </div>
                  <span className="text-xs mt-1">0-18</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-16 w-full bg-blue-100 rounded-t-lg flex items-end">
                    <div className="bg-blue-500 w-full" style={{ height: "45%" }}></div>
                  </div>
                  <span className="text-xs mt-1">19-35</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-16 w-full bg-blue-100 rounded-t-lg flex items-end">
                    <div className="bg-blue-500 w-full" style={{ height: "75%" }}></div>
                  </div>
                  <span className="text-xs mt-1">36-50</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-16 w-full bg-blue-100 rounded-t-lg flex items-end">
                    <div className="bg-blue-500 w-full" style={{ height: "95%" }}></div>
                  </div>
                  <span className="text-xs mt-1">51-65</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-16 w-full bg-blue-100 rounded-t-lg flex items-end">
                    <div className="bg-blue-500 w-full" style={{ height: "60%" }}></div>
                  </div>
                  <span className="text-xs mt-1">65+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Physician;
