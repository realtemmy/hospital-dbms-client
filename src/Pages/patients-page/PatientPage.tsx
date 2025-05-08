import {
  Briefcase,
  Calendar,
  MapPin,
  User,
  Edit,
  ChevronUpIcon,
  ChevronDownIcon,
  CalendarDays,
  CircleSmall,
  FileStack,
  HeartPulse,
  Contact,
  Eye,
  Phone,
  Clock,
} from "lucide-react";
import { ScrollArea } from "../../components/ui/scroll-area";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/ui/avatar";

import AppointmentTable from "../../components/appointment-table/AppointmentTable";

const PatientPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="overview" className="space-y-6">
          {/* Sticky Tabs Header */}
          <div className="sticky top-0 z-10 bg-gray-50/95 backdrop-blur-sm pt-2 pb-4 -mx-4 px-4 shadow-sm">
            <TabsList className="h-13 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full gap-2 p-1 bg-white rounded-xl shadow-sm">
              <TabsTrigger 
                value="overview" 
                // className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-sm rounded-lg px-3 py-2.5 text-sm font-medium transition-all"
              >
                <div className="flex items-center gap-2">
                  <FileStack className="w-4 h-4" />
                  Overview
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="profile"
                // className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-sm rounded-lg px-3 py-2.5 text-sm font-medium transition-all"
              >
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Patient Profile
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="appointments"
                // className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-sm rounded-lg px-3 py-2.5 text-sm font-medium transition-all"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Appointments
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="treatments"
                // className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-sm rounded-lg px-3 py-2.5 text-sm font-medium transition-all"
              >
                <div className="flex items-center gap-2">
                  <HeartPulse className="w-4 h-4" />
                  Treatments
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="medical"
                // className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-sm rounded-lg px-3 py-2.5 text-sm font-medium transition-all"
              >
                <div className="flex items-center gap-2">
                  <FileStack className="w-4 h-4" />
                  Medical Record
                </div>
              </TabsTrigger>
        </TabsList>
          </div>

          {/* Quick Actions Bar */}
          <div className="bg-white rounded-xl shadow-sm p-2 mb-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>AH</AvatarFallback>
                </Avatar>
              <div>
                  <h2 className="text-sm font-semibold">Ahmed Ali Hussian</h2>
                  <p className="text-xs text-slate-500">ID: PAT-2024-001</p>
              </div>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-end gap-2 w-full sm:w-auto">
                <Button variant="outline" size="sm" className="flex-1 sm:flex-none justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button variant="outline" size="sm" className="flex-1 sm:flex-none justify-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
                <Button size="sm" className="flex-1 sm:flex-none justify-center bg-blue-600 text-white hover:bg-blue-700">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>

          {/* Tab Content with Container */}
          <div className="max-w-[1600px] mx-auto">
            <TabsContent value="overview" className="space-y-6 mt-0">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
                  <div className="flex justify-between items-start">
              <div>
                      <p className="text-sm text-slate-600">Next Appointment</p>
                      <p className="text-lg font-semibold">Apr 15, 2024</p>
                      <p className="text-sm text-slate-500">10:30 AM</p>
              </div>
                    <Calendar className="w-8 h-8 text-blue-500" />
                      </div>
                    </div>
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
                  <div className="flex justify-between items-start">
              <div>
                      <p className="text-sm text-slate-600">Last Visit</p>
                      <p className="text-lg font-semibold">Mar 28, 2024</p>
                      <p className="text-sm text-slate-500">Regular Checkup</p>
              </div>
                    <FileStack className="w-8 h-8 text-green-500" />
                      </div>
                      </div>
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-purple-500">
                  <div className="flex justify-between items-start">
              <div>
                      <p className="text-sm text-slate-600">Active Prescriptions</p>
                      <p className="text-lg font-semibold">3 Medications</p>
                      <p className="text-sm text-slate-500">Last updated: Today</p>
              </div>
                    <HeartPulse className="w-8 h-8 text-purple-500" />
            </div>
            </div>
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-amber-500">
                  <div className="flex justify-between items-start">
            <div>
                      <p className="text-sm text-slate-600">Insurance Status</p>
                        <p className="text-lg font-semibold">Active</p>
                      <p className="text-sm text-slate-500">Valid until Dec 2024</p>
                      </div>
                    <FileStack className="w-8 h-8 text-amber-500" />
                  </div>
                </div>
              </div>

              {/* Patient Summary and Vitals */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Recent Vitals */}
                <div className="bg-white rounded-lg shadow">
                  <div className="flex items-center justify-between border-b p-4">
                    <h3 className="font-semibold">Recent Vitals</h3>
                    <Button variant="ghost" size="sm" className="text-blue-600">View History</Button>
                    </div>
                  <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
              <div>
                        <p className="text-sm text-slate-600">Blood Pressure</p>
                        <p className="text-lg font-semibold">120/80 mmHg</p>
              </div>
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Normal</div>
            </div>
                    <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-slate-600">Heart Rate</p>
                        <p className="text-lg font-semibold">72 bpm</p>
                    </div>
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Normal</div>
                  </div>
                    <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-slate-600">Temperature</p>
                        <p className="text-lg font-semibold">98.6°F</p>
                    </div>
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Normal</div>
                  </div>
                    <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-slate-600">Blood Sugar</p>
                        <p className="text-lg font-semibold">110 mg/dL</p>
                    </div>
                      <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Monitor</div>
                  </div>
                </div>
              </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow">
                  <div className="flex items-center justify-between border-b p-4">
                    <h3 className="font-semibold">Recent Activity</h3>
                    <Button variant="ghost" size="sm" className="text-blue-600">View All</Button>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      {[
                        { date: "Mar 28, 2024", type: "Appointment", desc: "Regular Checkup", status: "Completed" },
                        { date: "Mar 15, 2024", type: "Lab Test", desc: "Blood Work", status: "Results Available" },
                        { date: "Mar 10, 2024", type: "Prescription", desc: "Medication Refill", status: "Active" },
                        { date: "Mar 5, 2024", type: "Appointment", desc: "Follow-up", status: "Completed" },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0">
                          <div className={`mt-0.5 w-2 h-2 rounded-full ${
                            activity.type === 'Appointment' ? 'bg-blue-500' :
                            activity.type === 'Lab Test' ? 'bg-purple-500' :
                            'bg-green-500'
                          }`} />
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <p className="text-sm font-medium">{activity.type}</p>
                              <p className="text-xs text-slate-500">{activity.date}</p>
                          </div>
                            <p className="text-sm text-slate-600">{activity.desc}</p>
                            <p className="text-xs text-slate-500">{activity.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Upcoming Appointments */}
                <div className="bg-white rounded-lg shadow">
                  <div className="flex items-center justify-between border-b p-4">
                    <h3 className="font-semibold">Upcoming Appointments</h3>
                    <Button variant="ghost" size="sm" className="text-blue-600">Schedule New</Button>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      {[
                        { date: "Apr 15, 2024", time: "10:30 AM", type: "Follow-up", doctor: "Dr. Smith" },
                        { date: "May 1, 2024", time: "2:00 PM", type: "Lab Work", doctor: "Lab Services" },
                        { date: "May 15, 2024", time: "11:00 AM", type: "Consultation", doctor: "Dr. Johnson" },
                      ].map((appt, index) => (
                        <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex flex-col items-center justify-center">
                            <span className="text-sm font-semibold text-blue-700">{appt.date.split(',')[0].split(' ')[1]}</span>
                            <span className="text-xs text-blue-600">{appt.date.split(',')[0].split(' ')[0]}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{appt.type}</p>
                            <p className="text-sm text-slate-600">{appt.doctor}</p>
                            <p className="text-xs text-slate-500">{appt.time}</p>
                            </div>
                          <Button variant="ghost" size="sm" className="text-blue-600">
                            Details
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Medications and Alerts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Active Medications */}
                <div className="bg-white rounded-lg shadow">
                  <div className="flex items-center justify-between border-b p-4">
                    <h3 className="font-semibold">Active Medications</h3>
                    <Button variant="ghost" size="sm" className="text-blue-600">View All</Button>
                    </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      {[
                        { name: "Metformin", dosage: "500mg", frequency: "Twice daily", refill: "5 days" },
                        { name: "Levothyroxine", dosage: "25mcg", frequency: "Once daily", refill: "12 days" },
                        { name: "Aspirin", dosage: "81mg", frequency: "Once daily", refill: "20 days" },
                      ].map((med, index) => (
                        <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50">
                          <div>
                            <p className="font-medium">{med.name}</p>
                            <p className="text-sm text-slate-600">{med.dosage} - {med.frequency}</p>
                  </div>
                          <div className="text-right">
                            <p className="text-sm text-slate-600">Refill in</p>
                            <p className={`text-sm font-medium ${
                              parseInt(med.refill) <= 5 ? 'text-red-600' :
                              parseInt(med.refill) <= 10 ? 'text-yellow-600' :
                              'text-green-600'
                            }`}>{med.refill}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Alerts & Notifications */}
                <div className="bg-white rounded-lg shadow">
                  <div className="flex items-center justify-between border-b p-4">
                    <h3 className="font-semibold">Alerts & Reminders</h3>
                    <Button variant="ghost" size="sm" className="text-blue-600">View All</Button>
                </div>
                <div className="p-4">
                    <div className="space-y-3">
                      {[
                        { type: "Medication", message: "Metformin refill needed in 5 days", priority: "high" },
                        { type: "Appointment", message: "Lab work scheduled for May 1", priority: "medium" },
                        { type: "Test Result", message: "New blood work results available", priority: "low" },
                        { type: "Insurance", message: "Insurance renewal due in 3 months", priority: "medium" },
                      ].map((alert, index) => (
                        <div key={index} className={`p-3 rounded-lg ${
                          alert.priority === 'high' ? 'bg-red-50 border-l-4 border-red-500' :
                          alert.priority === 'medium' ? 'bg-yellow-50 border-l-4 border-yellow-500' :
                          'bg-blue-50 border-l-4 border-blue-500'
                        }`}>
                          <div className="flex justify-between items-start">
                            <div>
                              <p className={`text-sm font-medium ${
                                alert.priority === 'high' ? 'text-red-800' :
                                alert.priority === 'medium' ? 'text-yellow-800' :
                                'text-blue-800'
                              }`}>{alert.type}</p>
                              <p className="text-sm">{alert.message}</p>
                        </div>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
        </TabsContent>

            <TabsContent value="profile" className="space-y-6 mt-0">
              {/* Personal Info Section */}
              <section className="bg-white shadow border rounded-lg overflow-hidden">
                <div className="relative min-h-[200px] sm:h-48 bg-gradient-to-br from-indigo-700 via-blue-800 to-blue-900">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute left-0 right-0 bottom-0 h-full bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 sm:left-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <div className="relative group">
                      <Avatar className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-white/90 rounded-2xl shadow-lg">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                          className="rounded-2xl object-cover"
                />
                        <AvatarFallback className="text-xl sm:text-2xl">AH</AvatarFallback>
              </Avatar>
                      <button className="absolute bottom-2 right-2 bg-white rounded-full p-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                        <Edit className="w-4 h-4 text-blue-600" />
                      </button>
                    </div>
                    <div className="text-white drop-shadow-md">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">Ahmed Ali Hussian</h2>
                        <div className="flex items-center gap-1 bg-emerald-500/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs border border-emerald-500/20 w-fit">
                          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                          <span className="text-emerald-50">Active Patient</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mt-3 text-gray-100">
                        <p className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                          <FileStack className="w-4 h-4 text-blue-200" />
                          <span className="text-white">ID: PAT-2024-001</span>
                        </p>
                        <p className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                          <Calendar className="w-4 h-4 text-blue-200" />
                          <span className="text-white">Registered: Jan 2024</span>
                        </p>
                        <p className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                          <MapPin className="w-4 h-4 text-blue-200" />
                          <span className="text-white">Elshiekh zayed, Giza</span>
                    </p>
                  </div>
                </div>
                    </div>
                  <div className="absolute top-4 right-4 flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white shadow-lg sm:text-base text-sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white shadow-lg sm:text-base text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule
                    </Button>
                    <Button className="bg-white text-blue-700 hover:bg-white/90 shadow-lg sm:text-base text-sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                    </div>

                <div className="mt-6 p-4 sm:p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
                    {/* Demographics */}
                    <div className="lg:col-span-2 space-y-4">
                      <h3 className="font-semibold text-lg border-b pb-2">Demographics</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-slate-500">Gender</p>
                          <p className="font-medium flex items-center gap-2">
                            <User size={16} />
                            Male
                          </p>
                  </div>
                        <div>
                          <p className="text-sm text-slate-500">Date of Birth</p>
                          <p className="font-medium flex items-center gap-2">
                            <Calendar size={16} />
                            12 Dec 1992
                          </p>
                    </div>
                        <div>
                          <p className="text-sm text-slate-500">Age</p>
                          <p className="font-medium">38 years</p>
                  </div>
                        <div>
                          <p className="text-sm text-slate-500">Marital Status</p>
                          <p className="font-medium">Married</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Occupation</p>
                          <p className="font-medium flex items-center gap-2">
                            <Briefcase size={16} />
                            Accountant
                          </p>
                    </div>
                        <div>
                          <p className="text-sm text-slate-500">Language</p>
                          <p className="font-medium">English</p>
                  </div>
                    </div>
                  </div>

                    {/* Vital Statistics */}
                    <div className="lg:col-span-2 space-y-4">
                      <h3 className="font-semibold text-lg border-b pb-2">Vital Statistics</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1 bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm text-blue-600 mb-1">Blood Type</p>
                          <p className="text-2xl font-bold text-blue-700">AB+</p>
                </div>
                        <div className="col-span-1 bg-green-50 p-3 rounded-lg">
                          <p className="text-sm text-green-600 mb-1">Blood Pressure</p>
                          <p className="text-2xl font-bold text-green-700">124/80</p>
              </div>
                        <div className="col-span-1 bg-purple-50 p-3 rounded-lg">
                          <p className="text-sm text-purple-600 mb-1">Weight</p>
                          <p className="text-2xl font-bold text-purple-700">92 <span className="text-base font-normal">kg</span></p>
            </div>
                        <div className="col-span-1 bg-orange-50 p-3 rounded-lg">
                          <p className="text-sm text-orange-600 mb-1">Height</p>
                          <p className="text-2xl font-bold text-orange-700">175 <span className="text-base font-normal">cm</span></p>
                      </div>
                </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <p className="text-sm text-yellow-600 mb-1">BMI Status</p>
                        <div className="flex items-center justify-between">
                          <p className="text-2xl font-bold text-yellow-700">30.1</p>
                          <p className="text-sm font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded">Overweight</p>
              </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="lg:col-span-4 flex flex-col sm:flex-row gap-2 mt-4 border-t pt-4">
                      <Button variant="outline" className="flex-1 text-sm sm:text-base justify-center">
                        <FileStack className="w-4 h-4 mr-2" />
                        Medical Records
                      </Button>
                      <Button variant="outline" className="flex-1 text-sm sm:text-base justify-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Appointment
                      </Button>
                      <Button variant="outline" className="flex-1 text-sm sm:text-base justify-center">
                        <HeartPulse className="w-4 h-4 mr-2" />
                        View Lab Results
                      </Button>
                      <Button variant="outline" className="flex-1 text-sm sm:text-base justify-center">
                        <Contact className="w-4 h-4 mr-2" />
                        Contact Patient
                      </Button>
                </div>
              </div>
            </div>
          </section>

              {/* Contact and Financial Information */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <section className="shadow-sm rounded-md">
                  <div className="flex justify-between items-center border-b p-2">
                    <h3 className="flex px-1">
                      <Contact />
                      <span className="ms-1 font-semibold">Contact Information</span>
                    </h3>
                <Button variant="ghost" size="icon" className="w-6">
                  <Edit />
                </Button>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-slate-500">Primary Phone</p>
                        <p className="font-medium">+234 806-677-1553</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Secondary Phone</p>
                        <p className="font-medium">+234 706-840-1238</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-slate-500">Email</p>
                        <p className="font-medium">temiloluwaogunti8@gmail.com</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-slate-500">Address</p>
                        <p className="font-medium">3, road 103, Teachers estate, Ibafo, Ogun state.</p>
              </div>
            </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-3">Emergency Contacts</h4>
                      <div className="space-y-4">
                        <div className="bg-slate-50 p-3 rounded">
                          <div className="grid grid-cols-2 gap-2">
              <div>
                              <p className="text-sm text-slate-500">Name</p>
                              <p className="font-medium">John Doe</p>
              </div>
              <div>
                              <p className="text-sm text-slate-500">Relationship</p>
                              <p className="font-medium">Spouse</p>
              </div>
              <div>
                              <p className="text-sm text-slate-500">Phone</p>
                              <p className="font-medium">+234 802-345-6789</p>
              </div>
              <div>
                              <p className="text-sm text-slate-500">Email</p>
                              <p className="font-medium">johndoe@email.com</p>
                            </div>
                          </div>
                        </div>
                </div>
              </div>
            </div>
          </section>

                <section className="shadow-sm rounded-md">
            <div className="flex justify-between items-center border-b p-2">
              <h3 className="flex px-1">
                <FileStack />
                      <span className="ms-1 font-semibold">Financial Information</span>
              </h3>
                    <Button variant="ghost" size="icon" className="w-6">
                      <Edit />
                    </Button>
            </div>
                  <div className="p-4">
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Insurance Details</h4>
                      <div className="grid grid-cols-2 gap-4">
                <div>
                          <p className="text-sm text-slate-500">Provider</p>
                          <p className="font-medium">National Health Insurance</p>
                          </div>
                        <div>
                          <p className="text-sm text-slate-500">Policy Number</p>
                          <p className="font-medium">NHI-2024-123456</p>
                    </div>
                        <div>
                          <p className="text-sm text-slate-500">Coverage Type</p>
                          <p className="font-medium">Comprehensive</p>
                  </div>
                        <div>
                          <p className="text-sm text-slate-500">Expiry Date</p>
                          <p className="font-medium">31 Dec 2024</p>
                </div>
              </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Payment History</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                <div>
                            <p className="font-medium">General Consultation</p>
                            <p className="text-sm text-slate-500">15 Mar 2024</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">$150.00</p>
                            <p className="text-sm text-green-600">Paid</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                          <div>
                            <p className="font-medium">Lab Tests</p>
                            <p className="text-sm text-slate-500">10 Mar 2024</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">$75.00</p>
                            <p className="text-sm text-orange-600">Pending</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4 mt-4">
                      <h4 className="font-semibold mb-2">Outstanding Balance</h4>
                      <div className="bg-orange-50 p-3 rounded">
                        <div className="flex justify-between items-center">
                          <p className="text-orange-800">Total Outstanding</p>
                          <p className="font-bold text-orange-800">$75.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Medical Information Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Blood Information & Vitals */}
                <section className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between border-b p-4">
                    <h3 className="flex items-center gap-2 font-semibold text-lg">
                      <HeartPulse className="w-5 h-5 text-red-500" />
                      Blood Information
                    </h3>
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-50 rounded-lg p-3">
                        <p className="text-sm text-red-600 mb-1">Blood Type</p>
                        <p className="text-2xl font-bold text-red-700">AB+</p>
                      </div>
                      <div className="bg-red-50 rounded-lg p-3">
                        <p className="text-sm text-red-600 mb-1">Genotype</p>
                        <p className="text-2xl font-bold text-red-700">AA</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-blue-600 mb-1">Last Donation</p>
                          <p className="text-lg font-semibold text-blue-700">March 15, 2023</p>
                        </div>
                        <div className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Eligible to donate
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-purple-50 rounded-lg p-3">
                        <p className="text-sm text-purple-600 mb-1">Blood Pressure</p>
                        <p className="text-xl font-bold text-purple-700">120/80</p>
                        <p className="text-xs text-purple-600">Last checked: Today</p>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <p className="text-sm text-purple-600 mb-1">Pulse Rate</p>
                        <p className="text-xl font-bold text-purple-700">72 bpm</p>
                        <p className="text-xs text-purple-600">Last checked: Today</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Allergies */}
                <section className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between border-b p-4">
                    <h3 className="flex items-center gap-2 font-semibold text-lg">
                      <FileStack className="w-5 h-5 text-orange-500" />
                      Allergies
                    </h3>
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      {[
                        { name: "Penicillin", severity: "Severe", reaction: "Anaphylaxis" },
                        { name: "Peanuts", severity: "Moderate", reaction: "Skin rash" },
                        { name: "Shellfish", severity: "Mild", reaction: "Nausea" },
                      ].map((allergy, index) => (
                        <div key={index} className="bg-orange-50 rounded-lg p-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-orange-700">{allergy.name}</p>
                              <p className="text-sm text-orange-600">Reaction: {allergy.reaction}</p>
                            </div>
                            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                              allergy.severity === 'Severe' ? 'bg-red-100 text-red-700' :
                              allergy.severity === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {allergy.severity}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Current Medications */}
                <section className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between border-b p-4">
                    <h3 className="flex items-center gap-2 font-semibold text-lg">
                      <FileStack className="w-5 h-5 text-emerald-500" />
                      Current Medications
                    </h3>
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <Edit className="w-4 h-4" />
                    </Button>
                </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      {[
                        { name: "Metformin", dosage: "500mg", frequency: "Twice daily", startDate: "Jan 2024" },
                        { name: "Levothyroxine", dosage: "25mcg", frequency: "Once daily", startDate: "Dec 2023" },
                        { name: "Aspirin", dosage: "81mg", frequency: "Once daily", startDate: "Feb 2024" },
                      ].map((medication, index) => (
                        <div key={index} className="bg-emerald-50 rounded-lg p-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-emerald-700">{medication.name}</p>
                              <p className="text-sm text-emerald-600">{medication.dosage} - {medication.frequency}</p>
              </div>
                            <span className="text-xs bg-emerald-100 text-emerald-700 font-medium px-2.5 py-0.5 rounded-full">
                              Since {medication.startDate}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>

              {/* Chronic Conditions & Medical History */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Chronic Conditions */}
                <section className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between border-b p-4">
                    <h3 className="flex items-center gap-2 font-semibold text-lg">
                      <HeartPulse className="w-5 h-5 text-indigo-500" />
                      Chronic Conditions
                    </h3>
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      {[
                        { condition: "Type 2 Diabetes", diagnosed: "2020", status: "Controlled" },
                        { condition: "Hypertension", diagnosed: "2019", status: "Monitoring" },
                        { condition: "Obesity", diagnosed: "2018", status: "Treatment" },
                      ].map((condition, index) => (
                        <div key={index} className="bg-indigo-50 rounded-lg p-3">
                          <div className="flex justify-between items-start">
                <div>
                              <p className="font-semibold text-indigo-700">{condition.condition}</p>
                              <p className="text-sm text-indigo-600">Diagnosed: {condition.diagnosed}</p>
                            </div>
                            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                              condition.status === 'Controlled' ? 'bg-green-100 text-green-700' :
                              condition.status === 'Monitoring' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {condition.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Family History */}
                <section className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between border-b p-4">
                    <h3 className="flex items-center gap-2 font-semibold text-lg">
                      <FileStack className="w-5 h-5 text-violet-500" />
                      Family History
                    </h3>
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <Edit className="w-4 h-4" />
                    </Button>
                </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      {[
                        { condition: "Diabetes", relation: "Mother", age: "Onset at 45" },
                        { condition: "Hypertension", relation: "Father", age: "Onset at 50" },
                        { condition: "Heart Disease", relation: "Grandfather", age: "Onset at 60" },
                      ].map((history, index) => (
                        <div key={index} className="bg-violet-50 rounded-lg p-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-violet-700">{history.condition}</p>
                              <p className="text-sm text-violet-600">{history.relation} - {history.age}</p>
              </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </TabsContent>

            <TabsContent value="appointments" className="space-y-6 mt-0">
              {/* Appointment Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
                  <div className="flex justify-between items-start">
                <div>
                      <p className="text-sm text-slate-600">Total Appointments</p>
                      <p className="text-2xl font-semibold">24</p>
                      <p className="text-sm text-slate-500">This Year</p>
                    </div>
                    <Calendar className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-slate-600">Completed</p>
                      <p className="text-2xl font-semibold">18</p>
                      <p className="text-sm text-green-500">75% completion rate</p>
                    </div>
                    <FileStack className="w-8 h-8 text-green-500" />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-yellow-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-slate-600">Upcoming</p>
                      <p className="text-2xl font-semibold">3</p>
                      <p className="text-sm text-yellow-500">Next: Tomorrow</p>
                    </div>
                    <CalendarDays className="w-8 h-8 text-yellow-500" />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-red-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-slate-600">Cancelled</p>
                      <p className="text-2xl font-semibold">3</p>
                      <p className="text-sm text-red-500">12.5% cancellation rate</p>
                    </div>
                    <FileStack className="w-8 h-8 text-red-500" />
                  </div>
                </div>
              </div>

              {/* Appointment Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-lg shadow">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    New Appointment
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <ChevronUpIcon className="w-4 h-4 mr-2" />
                      Sort
                    </Button>
                    <Button variant="outline">
                      <FileStack className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
                <div className="relative w-full sm:w-64">
                  <input
                    type="text"
                    placeholder="Search appointments..."
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Upcoming Appointments */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b">
                  <h3 className="text-lg font-semibold">Upcoming Appointments</h3>
                </div>
                <div className="p-4 space-y-4">
                  {[
                    {
                      id: "apt-1",
                      date: "Apr 15, 2024",
                      time: "10:30 AM",
                      type: "Follow-up",
                      doctor: "Dr. Smith",
                      name: "Ahmed Ali Hussian",
                      visitType: "Follow-up",
                      status: "Scheduled",
                      avatar: "https://github.com/shadcn.png",
                      mobile: "+1234567890",
                      email: "ahmed@example.com",
                      address: "123 Medical St."
                    },
                    {
                      id: "apt-2",
                      date: "May 1, 2024",
                      time: "2:00 PM",
                      type: "Lab Work",
                      doctor: "Lab Services",
                      name: "Ahmed Ali Hussian",
                      visitType: "Lab Work",
                      status: "Confirmed",
                      avatar: "https://github.com/shadcn.png",
                      mobile: "+1234567890",
                      email: "ahmed@example.com",
                      address: "123 Medical St."
                    },
                    {
                      id: "apt-3",
                      date: "May 15, 2024",
                      time: "11:00 AM",
                      type: "Consultation",
                      doctor: "Dr. Johnson",
                      name: "Ahmed Ali Hussian",
                      visitType: "Consultation",
                      status: "Pending",
                      avatar: "https://github.com/shadcn.png",
                      mobile: "+1234567890",
                      email: "ahmed@example.com",
                      address: "123 Medical St."
                    }
                  ].map((appointment) => (
                    <div key={appointment.id} className="border rounded-lg p-4 hover:bg-slate-50 transition-colors">
                      <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="flex gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={appointment.avatar} />
                            <AvatarFallback>DR</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{appointment.name}</h4>
                            <p className="text-sm text-slate-500">{appointment.visitType}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <div className={`w-2 h-2 rounded-full ${
                                appointment.status === 'Scheduled' ? 'bg-blue-500' :
                                appointment.status === 'Confirmed' ? 'bg-green-500' :
                                appointment.status === 'Cancelled' ? 'bg-red-500' :
                                'bg-yellow-500'
                              }`} />
                              <span className="text-sm text-slate-600">{appointment.status}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1">
                          <div className="flex items-center gap-2 text-slate-600">
                            <Calendar className="w-4 h-4" />
                            <span>{appointment.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <Clock className="w-4 h-4" />
                            <span>{appointment.time}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 sm:flex-col md:flex-row">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-slate-500">Phone</p>
                          <p className="font-medium">{appointment.mobile}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Email</p>
                          <p className="font-medium">{appointment.email}</p>
                        </div>
                        <div className="lg:col-span-2">
                          <p className="text-sm text-slate-500">Address</p>
                          <p className="font-medium">{appointment.address}</p>
                        </div>
                      </div>
                        </div>
                      ))}
                    </div>
                  </div>

              {/* Past Appointments */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Past Appointments</h3>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
                <div className="p-4">
                  <div className="hidden md:block overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
                            Date
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">
                            Time
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[140px]">
                            Type
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[160px]">
                            Doctor
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
                            Status
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[80px]">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { date: "Mar 15, 2024", time: "10:00 AM", type: "Follow-up", doctor: "Dr. Smith", status: "Completed" },
                          { date: "Feb 28, 2024", time: "2:30 PM", type: "Consultation", doctor: "Dr. Johnson", status: "Completed" },
                          { date: "Feb 15, 2024", time: "11:00 AM", type: "Check-up", doctor: "Dr. Davis", status: "Cancelled" },
                        ].map((apt, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              {apt.date}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              {apt.time}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              {apt.type}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              {apt.doctor}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                apt.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                apt.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {apt.status}
                              </span>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <Eye className="h-4 w-4" />
                                </Button>
              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {/* Mobile View for Past Appointments */}
                  <div className="md:hidden space-y-4 mt-4">
                    {[
                      { date: "Mar 15, 2024", time: "10:00 AM", type: "Follow-up", doctor: "Dr. Smith", status: "Completed" },
                      { date: "Feb 28, 2024", time: "2:30 PM", type: "Consultation", doctor: "Dr. Johnson", status: "Completed" },
                      { date: "Feb 15, 2024", time: "11:00 AM", type: "Check-up", doctor: "Dr. Davis", status: "Cancelled" },
                    ].map((apt, index) => (
                      <div key={index} className="bg-white rounded-lg border p-4">
                        <div className="flex justify-between items-start mb-2">
                <div>
                            <div className="font-medium">{apt.doctor}</div>
                            <div className="text-sm text-gray-500">{apt.type}</div>
                          </div>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            apt.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            apt.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {apt.status}
                          </span>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            {apt.date}
                          </div>
                          <p className="mt-2 text-sm text-gray-600">{apt.time}</p>
                        </div>
                        <div className="mt-3 flex justify-end">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="treatments" className="space-y-6 mt-0">
              {/* Treatment Summary Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-slate-600">Active Treatments</p>
                      <p className="text-2xl font-semibold">4</p>
                      <p className="text-sm text-blue-500">2 medications, 2 therapies</p>
                    </div>
                    <HeartPulse className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-slate-600">Completed</p>
                      <p className="text-2xl font-semibold">12</p>
                      <p className="text-sm text-green-500">Last: 2 weeks ago</p>
                    </div>
                    <FileStack className="w-8 h-8 text-green-500" />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-yellow-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-slate-600">Next Review</p>
                      <p className="text-2xl font-semibold">Mar 28</p>
                      <p className="text-sm text-yellow-500">In 2 weeks</p>
                    </div>
                    <CalendarDays className="w-8 h-8 text-yellow-500" />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-purple-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-slate-600">Success Rate</p>
                      <p className="text-2xl font-semibold">85%</p>
                      <p className="text-sm text-purple-500">Above average</p>
                    </div>
                    <HeartPulse className="w-8 h-8 text-purple-500" />
                  </div>
                </div>
              </div>

              {/* Current Treatment Plan */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">Current Treatment Plan</h3>
                      <p className="text-sm text-slate-500">Started: Jan 15, 2024</p>
                    </div>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
                      <Edit className="w-4 h-4 mr-2" />
                      Update Plan
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Active Medications */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                        <FileStack className="w-5 h-5 text-blue-500" />
                        Active Medications
                      </h4>
                      <div className="space-y-3">
                        {[
                          {
                            name: "Metformin",
                            dosage: "500mg",
                            frequency: "Twice daily",
                            startDate: "Jan 2024",
                            nextRefill: "Mar 28",
                            status: "Active",
                            notes: "Take with meals"
                          },
                          {
                            name: "Lisinopril",
                            dosage: "10mg",
                            frequency: "Once daily",
                            startDate: "Feb 2024",
                            nextRefill: "Apr 15",
                            status: "Active",
                            notes: "Take in the morning"
                          }
                        ].map((med, index) => (
                          <div key={index} className="bg-blue-50 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h5 className="font-semibold text-blue-900">{med.name}</h5>
                                <p className="text-sm text-blue-700">{med.dosage} - {med.frequency}</p>
                              </div>
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                {med.status}
                              </span>
                            </div>
                            <div className="text-sm text-blue-600">
                              <p>Started: {med.startDate}</p>
                              <p>Next Refill: {med.nextRefill}</p>
                              <p className="mt-1 text-blue-700">{med.notes}</p>
                            </div>
                        </div>
                      ))}
                    </div>
                  </div>

                    {/* Active Therapies */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                        <HeartPulse className="w-5 h-5 text-purple-500" />
                        Active Therapies
                      </h4>
                      <div className="space-y-3">
                        {[
                          {
                            type: "Physical Therapy",
                            frequency: "Twice weekly",
                            provider: "Dr. Sarah Johnson",
                            nextSession: "Mar 15, 2024",
                            progress: "Good",
                            notes: "Focus on lower back exercises"
                          },
                          {
                            type: "Nutritional Counseling",
                            frequency: "Monthly",
                            provider: "Dr. Michael Chen",
                            nextSession: "Mar 28, 2024",
                            progress: "Excellent",
                            notes: "Following diabetic diet plan"
                          }
                        ].map((therapy, index) => (
                          <div key={index} className="bg-purple-50 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h5 className="font-semibold text-purple-900">{therapy.type}</h5>
                                <p className="text-sm text-purple-700">{therapy.frequency}</p>
                </div>
                              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                                {therapy.progress}
                              </span>
              </div>
                            <div className="text-sm text-purple-600">
                              <p>Provider: {therapy.provider}</p>
                              <p>Next Session: {therapy.nextSession}</p>
                              <p className="mt-1 text-purple-700">{therapy.notes}</p>
            </div>
            </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Treatment History */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Treatment History</h3>
              <div className="flex gap-2">
                    <Button variant="outline">
                      <FileStack className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline">Export</Button>
                </div>
                </div>
                <div className="p-4">
                  <div className="hidden md:block overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
                            Date
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[160px]">
                            Treatment
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[140px]">
                            Provider
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
                            Status
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px]">
                            Outcome
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[80px]">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          {
                            date: "Feb 15, 2024",
                            treatment: "Antibiotic Therapy",
                            provider: "Dr. Smith",
                            status: "Completed",
                            outcome: "Infection cleared"
                          },
                          {
                            date: "Jan 28, 2024",
                            treatment: "Physical Therapy",
                            provider: "Dr. Johnson",
                            status: "Completed",
                            outcome: "Improved mobility"
                          },
                          {
                            date: "Jan 15, 2024",
                            treatment: "Dietary Changes",
                            provider: "Dr. Chen",
                            status: "Completed",
                            outcome: "Weight reduction achieved"
                          }
                        ].map((treatment, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              {treatment.date}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              {treatment.treatment}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              {treatment.provider}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                treatment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                treatment.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {treatment.status}
                              </span>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-900">
                              {treatment.outcome}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile View for Treatment History */}
                  <div className="md:hidden space-y-4">
                    {[
                      {
                        date: "Feb 15, 2024",
                        treatment: "Antibiotic Therapy",
                        provider: "Dr. Smith",
                        status: "Completed",
                        outcome: "Infection cleared"
                      },
                      {
                        date: "Jan 28, 2024",
                        treatment: "Physical Therapy",
                        provider: "Dr. Johnson",
                        status: "Completed",
                        outcome: "Improved mobility"
                      },
                      {
                        date: "Jan 15, 2024",
                        treatment: "Dietary Changes",
                        provider: "Dr. Chen",
                        status: "Completed",
                        outcome: "Weight reduction achieved"
                      }
                    ].map((treatment, index) => (
                      <div key={index} className="bg-white rounded-lg border p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium text-gray-900">{treatment.treatment}</h4>
                            <p className="text-lg font-semibold text-gray-900">{treatment.outcome}</p>
                          </div>
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            treatment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            treatment.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {treatment.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            {treatment.date}
              </div>
              <div className="flex gap-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Eye className="h-4 w-4" />
                            </Button>
                </div>
                </div>
              </div>
                    ))}
            </div>
                </div>
              </div>
        </TabsContent>

            <TabsContent value="medical" className="space-y-6 mt-0">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-slate-600">Total Records</p>
                      <p className="text-2xl font-semibold">48</p>
                      <p className="text-sm text-blue-500">Last updated: Today</p>
                    </div>
                    <FileStack className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-slate-600">Lab Results</p>
                      <p className="text-2xl font-semibold">12</p>
                      <p className="text-sm text-green-500">3 pending</p>
                    </div>
                    <HeartPulse className="w-8 h-8 text-green-500" />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-purple-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-slate-600">Diagnoses</p>
                      <p className="text-2xl font-semibold">8</p>
                      <p className="text-sm text-purple-500">2 active conditions</p>
                    </div>
                    <FileStack className="w-8 h-8 text-purple-500" />
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-orange-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-slate-600">Documents</p>
                      <p className="text-2xl font-semibold">15</p>
                      <p className="text-sm text-orange-500">5 categories</p>
                    </div>
                    <FileStack className="w-8 h-8 text-orange-500" />
                  </div>
                </div>
              </div>

              {/* Medical History Timeline */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">Medical History Timeline</h3>
                      <p className="text-sm text-slate-500">Showing recent medical events</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                      <Button variant="outline" className="w-full sm:w-auto justify-center">
                        <FileStack className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                      <Button variant="outline" className="w-full sm:w-auto justify-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Date Range
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="space-y-6">
                    {[
                      {
                        date: "Mar 15, 2024",
                        type: "Lab Result",
                        title: "Complete Blood Count",
                        details: "All values within normal range",
                        status: "Normal",
                        doctor: "Dr. Smith"
                      },
                      {
                        date: "Mar 1, 2024",
                        type: "Diagnosis",
                        title: "Type 2 Diabetes",
                        details: "Initial diagnosis based on blood sugar levels",
                        status: "Active",
                        doctor: "Dr. Johnson"
                      },
                      {
                        date: "Feb 15, 2024",
                        type: "Procedure",
                        title: "ECG",
                        details: "Regular sinus rhythm",
                        status: "Completed",
                        doctor: "Dr. Davis"
                      }
                    ].map((event, index) => (
                      <div key={index} className="relative pl-8 pb-8 last:pb-0">
                        <div className="absolute left-0 top-0 h-full w-px bg-blue-200">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500" />
                        </div>
                        <div className="bg-white rounded-lg border p-4">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                            <div>
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                event.type === 'Lab Result' ? 'bg-green-100 text-green-800' :
                                event.type === 'Diagnosis' ? 'bg-purple-100 text-purple-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {event.type}
                              </span>
                              <h4 className="text-lg font-medium mt-2">{event.title}</h4>
                            </div>
                            <div className="text-sm text-slate-500">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {event.date}
                              </div>
                            </div>
                          </div>
                          <p className="text-slate-600 mb-3">{event.details}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              {event.doctor}
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              event.status === 'Normal' ? 'bg-green-100 text-green-800' :
                              event.status === 'Active' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {event.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lab Results */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold">Lab Results</h3>
                    <Button className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700">
                      <FileStack className="w-4 h-4 mr-2" />
                      Upload New Results
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="hidden md:block overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
                            Date
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[160px]">
                            Test Name
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
                            Result
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
                            Range
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
                            Status
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[100px]">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          {
                            date: "Mar 15, 2024",
                            test: "Blood Glucose",
                            result: "126 mg/dL",
                            range: "70-99 mg/dL",
                            status: "High"
                          },
                          {
                            date: "Mar 15, 2024",
                            test: "HbA1c",
                            result: "6.8%",
                            range: "4.0-5.6%",
                            status: "High"
                          },
                          {
                            date: "Mar 15, 2024",
                            test: "Cholesterol",
                            result: "185 mg/dL",
                            range: "<200 mg/dL",
                            status: "Normal"
                          }
                        ].map((test, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              {test.date}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              {test.test}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {test.result}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                              {test.range}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                test.status === 'Normal' ? 'bg-green-100 text-green-800' :
                                test.status === 'High' ? 'bg-red-100 text-red-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {test.status}
                              </span>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile View for Lab Results */}
                  <div className="md:hidden space-y-4">
                    {[
                      {
                        date: "Mar 15, 2024",
                        test: "Blood Glucose",
                        result: "126 mg/dL",
                        range: "70-99 mg/dL",
                        status: "High"
                      },
                      {
                        date: "Mar 15, 2024",
                        test: "HbA1c",
                        result: "6.8%",
                        range: "4.0-5.6%",
                        status: "High"
                      },
                      {
                        date: "Mar 15, 2024",
                        test: "Cholesterol",
                        result: "185 mg/dL",
                        range: "<200 mg/dL",
                        status: "Normal"
                      }
                    ].map((test, index) => (
                      <div key={index} className="bg-white rounded-lg border p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium text-gray-900">{test.test}</h4>
                            <p className="text-lg font-semibold text-gray-900">{test.result}</p>
                          </div>
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            test.status === 'Normal' ? 'bg-green-100 text-green-800' :
                            test.status === 'High' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {test.status}
                          </span>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            {test.date}
                          </div>
                        </div>
                        <div className="mt-3 flex justify-end">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Medical Documents */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold">Medical Documents</h3>
                    <Button className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700">
                      <FileStack className="w-4 h-4 mr-2" />
                      Upload Document
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        type: "Imaging",
                        title: "Chest X-Ray",
                        date: "Mar 10, 2024",
                        fileType: "DICOM",
                        size: "15.2 MB"
                      },
                      {
                        type: "Report",
                        title: "Annual Physical Report",
                        date: "Mar 1, 2024",
                        fileType: "PDF",
                        size: "2.1 MB"
                      },
                      {
                        type: "Prescription",
                        title: "Medication List",
                        date: "Feb 28, 2024",
                        fileType: "PDF",
                        size: "1.1 MB"
                      }
                    ].map((doc, index) => (
                      <div key={index} className="bg-white border rounded-lg p-4">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              doc.type === 'Imaging' ? 'bg-purple-100 text-purple-800' :
                              doc.type === 'Report' ? 'bg-blue-100 text-blue-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {doc.type}
                            </span>
                            <h4 className="font-medium mt-2">{doc.title}</h4>
                          </div>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {doc.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {doc.fileType}
                            </span>
                            <span className="text-xs">
                              {doc.size}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
        </TabsContent>
          </div>
      </Tabs>
      </div>
    </div>
  );
};

export default PatientPage;
