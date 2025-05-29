import { useRef, useState } from "react";
import { Filter, ChevronDown, Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../../components/ui/dialog";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { toast } from "sonner";

import AppointmentTable from "../appointment-table/AppointmentTable";
import ScheduleAppointment, {
  AppointmentFormValues,
  ScheduleAppointmentRef,
} from "../schedule-appointment/ScheduleAppointment";
import axiosService from "../../axios";
// Expanded appointment data with more attributes
// const appointments = [
//   {
//     id: 1,
//     name: "Temiloluwa Oreoluwa",
//     gender: "male",
//     age: 26,
//     date: "Apr 8, 2025",
//     time: "09:00 AM",
//     status: "scheduled",
//     mobile: "8066771553",
//     email: "temiloluwaogunti8@gmail.com",
//     visitType: "New patient",
//     avatar: "https://github.com/shadcn.png",
//     address: "3, road 103, teachers estate, Ibafo, Ogun state.",
//     lastVisit: "Feb 4, 2025",
//     doctor: "Dr. Smith",
//     department: "Cardiology",
//     notes: "Patient has a history of high blood pressure",
//   },
//   {
//     id: 2,
//     name: "Realtemmy Oreoluwa",
//     gender: "female",
//     age: 24,
//     date: "Apr 8, 2025",
//     time: "09:30 AM",
//     status: "confirmed",
//     mobile: "7068401238",
//     email: "temmy4jamb@gmail.com",
//     visitType: "Follow-up",
//     avatar: "https://github.com/shadcn.png",
//     address: "Teachers estate, torotoro, Ibafo, Ogun state.",
//     lastVisit: "Jan 2, 2024",
//     doctor: "Dr. Johnson",
//     department: "Neurology",
//     notes: "Follow-up on medication effectiveness",
//   },
//   {
//     id: 3,
//     name: "Michael Chen",
//     gender: "male",
//     age: 45,
//     date: "Apr 9, 2025",
//     time: "10:15 AM",
//     status: "completed",
//     mobile: "5556667777",
//     email: "michael.chen@example.com",
//     visitType: "Check-up",
//     avatar: "",
//     address: "15 Oak Street, Riverside",
//     lastVisit: "Mar 10, 2025",
//     doctor: "Dr. Williams",
//     department: "General Medicine",
//     notes: "Annual physical examination",
//   },
//   {
//     id: 4,
//     name: "Sarah Miller",
//     gender: "female",
//     age: 35,
//     date: "Apr 10, 2025",
//     time: "01:45 PM",
//     status: "cancelled",
//     mobile: "8889990000",
//     email: "sarah.miller@example.com",
//     visitType: "Consultation",
//     avatar: "",
//     address: "78 Pine Avenue, Oakville",
//     lastVisit: "Dec 15, 2024",
//     doctor: "Dr. Davis",
//     department: "Dermatology",
//     notes: "Skin rash examination",
//   },
//   {
//     id: 5,
//     name: "James Wilson",
//     gender: "male",
//     age: 52,
//     date: "Apr 11, 2025",
//     time: "11:00 AM",
//     status: "scheduled",
//     mobile: "7773331111",
//     email: "james.wilson@example.com",
//     visitType: "Follow-up",
//     avatar: "",
//     address: "42 Maple Drive, Springfield",
//     lastVisit: "Jan 30, 2025",
//     doctor: "Dr. Brown",
//     department: "Orthopedics",
//     notes: "Post-surgery follow-up",
//   },
// ];

// Appointment card component for mobile view

const AppointmentList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDate, setFilterDate] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const appointmentFormRef = useRef<ScheduleAppointmentRef>(null);

  const {
    data: appointments,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      const response = await axiosService.get("/appointment");
      return response.data;
    },
  });

  const handleAppointmentSubmit = async (values: AppointmentFormValues) => {
    try {
      // TODO: Implement your API call here
      console.log("Appointment values:", values);

      // Show success message
      toast.success("Appointment scheduled successfully");

      // Close the dialog
      setIsDialogOpen(false);

      // Reset the form
      appointmentFormRef.current?.reset();
    } catch (error) {
      console.error("Error scheduling appointment:", error);
      toast.error("Failed to schedule appointment");
    }
  };

  const handleScheduleClick = async () => {
    try {
      await appointmentFormRef.current?.submit();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg pb-6">
      <div className="bg-white p-4 sm:p-6 rounded-t-lg shadow-sm border-b">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                <Calendar className="h-5 w-5" />
                New Appointment
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  Schedule Appointment
                </DialogTitle>
                <DialogDescription>
                  Create a new appointment for a patient
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="h-[calc(100vh-20rem)]">
                <ScheduleAppointment
                  ref={appointmentFormRef}
                  onSubmit={handleAppointmentSubmit}
                />
              </ScrollArea>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    appointmentFormRef.current?.reset();
                    setIsDialogOpen(false);
                  }}
                >
                  Cancel
                </Button>
                <Button type="button" onClick={handleScheduleClick}>
                  Schedule Appointment
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters and search */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
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
        <AppointmentTable
          appointments={appointments}
          loading={isLoading}
          isError={isError}
          tabsStatus={["all", "upcoming", "completed", "cancelled"]}
        />
      </div>
    </div>
  );
};

export default AppointmentList;
