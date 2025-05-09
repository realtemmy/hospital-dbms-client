import { useState } from "react";
import { Link } from "react-router";
import { 
  Calendar, 
  Search, 
  Filter, 
  ChevronDown, 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  MoreHorizontal,

  Calendar as CalendarIcon,
  Phone,
  Mail
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import StatusBadge from "../status-badge/StatusBadge";

// Expanded appointment data with more attributes
const appointments = [
  {
    id: 1,
    name: "Temiloluwa Oreoluwa",
    gender: "male",
    age: 26,
    date: "Apr 8, 2025",
    time: "09:00 AM",
    status: "scheduled",
    mobile: "8066771553",
    email: "temiloluwaogunti8@gmail.com",
    visitType: "New patient",
    avatar: "https://github.com/shadcn.png",
    address: "3, road 103, teachers estate, Ibafo, Ogun state.",
    lastVisit: "Feb 4, 2025",
    doctor: "Dr. Smith",
    department: "Cardiology",
    notes: "Patient has a history of high blood pressure"
  },
  {
    id: 2,
    name: "Realtemmy Oreoluwa",
    gender: "female",
    age: 24,
    date: "Apr 8, 2025",
    time: "09:30 AM",
    status: "confirmed",
    mobile: "7068401238",
    email: "temmy4jamb@gmail.com",
    visitType: "Follow-up",
    avatar: "https://github.com/shadcn.png",
    address: "Teachers estate, torotoro, Ibafo, Ogun state.",
    lastVisit: "Jan 2, 2024",
    doctor: "Dr. Johnson",
    department: "Neurology",
    notes: "Follow-up on medication effectiveness"
  },
  {
    id: 3,
    name: "Michael Chen",
    gender: "male",
    age: 45,
    date: "Apr 9, 2025",
    time: "10:15 AM",
    status: "completed",
    mobile: "5556667777",
    email: "michael.chen@example.com",
    visitType: "Check-up",
    avatar: "",
    address: "15 Oak Street, Riverside",
    lastVisit: "Mar 10, 2025",
    doctor: "Dr. Williams",
    department: "General Medicine",
    notes: "Annual physical examination"
  },
  {
    id: 4,
    name: "Sarah Miller",
    gender: "female",
    age: 35,
    date: "Apr 10, 2025",
    time: "01:45 PM",
    status: "cancelled",
    mobile: "8889990000",
    email: "sarah.miller@example.com",
    visitType: "Consultation",
    avatar: "",
    address: "78 Pine Avenue, Oakville",
    lastVisit: "Dec 15, 2024",
    doctor: "Dr. Davis",
    department: "Dermatology",
    notes: "Skin rash examination"
  },
  {
    id: 5,
    name: "James Wilson",
    gender: "male",
    age: 52,
    date: "Apr 11, 2025",
    time: "11:00 AM",
    status: "scheduled",
    mobile: "7773331111",
    email: "james.wilson@example.com",
    visitType: "Follow-up",
    avatar: "",
    address: "42 Maple Drive, Springfield",
    lastVisit: "Jan 30, 2025",
    doctor: "Dr. Brown",
    department: "Orthopedics",
    notes: "Post-surgery follow-up"
  },
];


// Appointment card component for mobile view
const AppointmentCard = ({ appointment }: { appointment: any }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex justify-between mb-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={appointment.avatar} alt={appointment.name} />
            <AvatarFallback>{appointment.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium text-gray-900">{appointment.name}</h3>
            <p className="text-sm text-gray-500">{appointment.visitType}</p>
          </div>
        </div>
        <StatusBadge status={appointment.status} />
      </div>

      <div className="grid grid-cols-1 gap-2 text-sm mb-4">
        <div className="flex items-center gap-2 text-gray-600">
          <CalendarIcon className="h-4 w-4 text-gray-400" />
          <span>{appointment.date}, {appointment.time}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Phone className="h-4 w-4 text-gray-400" />
          <span>{appointment.mobile}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Mail className="h-4 w-4 text-gray-400" />
          <span className="truncate">{appointment.email}</span>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm">
          <Eye className="h-4 w-4 mr-1" />
          <span>View</span>
        </Button>
        <Button variant="outline" size="sm">
          <Edit className="h-4 w-4 mr-1" />
          <span>Edit</span>
        </Button>
      </div>
    </div>
  );
};

const AppointmentList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDate, setFilterDate] = useState("all");

  // Filter appointments
  const filteredAppointments = appointments.filter(appointment => {
    // Filter by search term
    const matchesSearch = 
      searchTerm === "" || 
      appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.mobile.includes(searchTerm);

    // Filter by status
    const matchesStatus = 
      filterStatus === "all" || 
      appointment.status === filterStatus;

    // Logic for date filter would go here
    // For now we'll return true for all dates
    const matchesDate = true;

    return matchesSearch && matchesStatus && matchesDate;
  });

  return (
    <div className="bg-gray-50 rounded-lg pb-6">
      <div className="bg-white p-4 sm:p-6 rounded-t-lg shadow-sm border-b">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            New Appointment
          </Button>
        </div>

        {/* Filters and search */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
              icon={<Search className="h-4 w-4 text-gray-400" />}
            />
          </div>
          <div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
                <SelectItem value="noshow">No Show</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select value={filterDate} onValueChange={setFilterDate}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Dates</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="thisWeek">This Week</SelectItem>
                <SelectItem value="nextWeek">Next Week</SelectItem>
                <SelectItem value="thisMonth">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Button variant="outline" className="w-full justify-between">
              <div className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                <span>More Filters</span>
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {/* Desktop view */}
            <div className="hidden md:block rounded-lg border overflow-hidden bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patient
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Doctor
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAppointments.length > 0 ? (
                    filteredAppointments.map((appointment) => (
                      <tr key={appointment.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <Avatar>
                                <AvatarImage src={appointment.avatar} alt={appointment.name} />
                                <AvatarFallback>{appointment.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{appointment.name}</div>
                              <div className="text-sm text-gray-500">{appointment.visitType}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{appointment.date}</div>
                          <div className="text-sm text-gray-500">{appointment.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{appointment.doctor}</div>
                          <div className="text-sm text-gray-500">{appointment.department}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{appointment.mobile}</div>
                          <div className="text-sm text-gray-500 truncate max-w-[200px]">{appointment.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={appointment.status} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end items-center space-x-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Edit Appointment</DropdownMenuItem>
                                <DropdownMenuItem>Reschedule</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Cancel</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                        No appointments found matching your filters
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile view */}
            <div className="md:hidden space-y-4">
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((appointment) => (
                  <AppointmentCard key={appointment.id} appointment={appointment} />
                ))
              ) : (
                <div className="text-center py-10 bg-white rounded-lg border">
                  <p className="text-gray-500">No appointments found matching your filters</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg">
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredAppointments.length}</span> of{' '}
                    <span className="font-medium">{filteredAppointments.length}</span> results
                  </p>
                </div>
                <div>
                  <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <Button variant="outline" className="rounded-l-md">Previous</Button>
                    <Button variant="outline" className="rounded-r-md ml-2">Next</Button>
                  </nav>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            {/* Content for upcoming appointments */}
            <div className="bg-white p-6 rounded-lg text-center">
              <p>Showing upcoming appointments tab content</p>
            </div>
          </TabsContent>
          
          <TabsContent value="completed">
            {/* Content for completed appointments */}
            <div className="bg-white p-6 rounded-lg text-center">
              <p>Showing completed appointments tab content</p>
            </div>
          </TabsContent>
          
          <TabsContent value="cancelled">
            {/* Content for cancelled appointments */}
            <div className="bg-white p-6 rounded-lg text-center">
              <p>Showing cancelled appointments tab content</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AppointmentList;
