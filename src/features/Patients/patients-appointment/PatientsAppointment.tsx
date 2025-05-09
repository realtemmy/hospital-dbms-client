import { Calendar, CalendarDays, ChevronUpIcon, Clock, Edit, Eye, FileStack } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar';

const PatientsAppointment = () => {
  return (
    <div>
      {/* Appointment Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
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
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-lg shadow mb-4">
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
              address: "123 Medical St.",
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
              address: "123 Medical St.",
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
              address: "123 Medical St.",
            },
          ].map((appointment) => (
            <div
              key={appointment.id}
              className="border rounded-lg p-4 hover:bg-slate-50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={appointment.avatar} />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{appointment.name}</h4>
                    <p className="text-sm text-slate-500">
                      {appointment.visitType}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          appointment.status === "Scheduled"
                            ? "bg-blue-500"
                            : appointment.status === "Confirmed"
                            ? "bg-green-500"
                            : appointment.status === "Cancelled"
                            ? "bg-red-500"
                            : "bg-yellow-500"
                        }`}
                      />
                      <span className="text-sm text-slate-600">
                        {appointment.status}
                      </span>
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
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </div>
        <div className="p-4">
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[140px]"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[160px]"
                  >
                    Doctor
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[80px]"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    date: "Mar 15, 2024",
                    time: "10:00 AM",
                    type: "Follow-up",
                    doctor: "Dr. Smith",
                    status: "Completed",
                  },
                  {
                    date: "Feb 28, 2024",
                    time: "2:30 PM",
                    type: "Consultation",
                    doctor: "Dr. Johnson",
                    status: "Completed",
                  },
                  {
                    date: "Feb 15, 2024",
                    time: "11:00 AM",
                    type: "Check-up",
                    doctor: "Dr. Davis",
                    status: "Cancelled",
                  },
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
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          apt.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : apt.status === "Cancelled"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {apt.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
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
              {
                date: "Mar 15, 2024",
                time: "10:00 AM",
                type: "Follow-up",
                doctor: "Dr. Smith",
                status: "Completed",
              },
              {
                date: "Feb 28, 2024",
                time: "2:30 PM",
                type: "Consultation",
                doctor: "Dr. Johnson",
                status: "Completed",
              },
              {
                date: "Feb 15, 2024",
                time: "11:00 AM",
                type: "Check-up",
                doctor: "Dr. Davis",
                status: "Cancelled",
              },
            ].map((apt, index) => (
              <div key={index} className="bg-white rounded-lg border p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium">{apt.doctor}</div>
                    <div className="text-sm text-gray-500">{apt.type}</div>
                  </div>
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      apt.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : apt.status === "Cancelled"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
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
    </div>
  );
}

export default PatientsAppointment
