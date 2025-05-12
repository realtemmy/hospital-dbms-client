import React from 'react';

const Admin = () => {
  // Mock data - Replace with actual data from your backend
  const todayAppointments = [
    { 
      id: 1, 
      patient: "John Doe", 
      doctor: "Dr. Smith", 
      date: "2024-03-20",
      time: "09:00 AM", 
      type: "Check-up",
      condition: "Hypertension",
      priority: "High",
      status: "Confirmed"
    },
    { 
      id: 2, 
      patient: "Jane Smith", 
      doctor: "Dr. Johnson", 
      date: "2024-03-20",
      time: "10:30 AM", 
      type: "Consultation",
      condition: "Diabetes Type 2",
      priority: "Medium",
      status: "Confirmed"
    },
    { 
      id: 3, 
      patient: "Mike Brown", 
      doctor: "Dr. Williams", 
      date: "2024-03-20",
      time: "02:00 PM", 
      type: "Follow-up",
      condition: "Post-surgery Check",
      priority: "Low",
      status: "Pending"
    },
  ];

  const doctors = [
    { 
      id: 1, 
      name: "Dr. Smith", 
      specialty: "Cardiology", 
      status: "Available",
      currentPatient: "None",
      nextAppointment: "09:00 AM",
      contact: "+1 234-567-8900"
    },
    { 
      id: 2, 
      name: "Dr. Johnson", 
      specialty: "Neurology", 
      status: "In Surgery",
      currentPatient: "Sarah Wilson",
      nextAppointment: "N/A",
      contact: "+1 234-567-8901"
    },
    { 
      id: 3, 
      name: "Dr. Williams", 
      specialty: "Pediatrics", 
      status: "Available",
      currentPatient: "None",
      nextAppointment: "02:00 PM",
      contact: "+1 234-567-8902"
    },
    { 
      id: 4, 
      name: "Dr. Brown", 
      specialty: "Orthopedics", 
      status: "On Leave",
      currentPatient: "N/A",
      nextAppointment: "N/A",
      contact: "+1 234-567-8903"
    },
  ];

  const rooms = [
    { id: 1, number: "101", type: "General", status: "Available" },
    { id: 2, number: "102", type: "ICU", status: "Occupied" },
    { id: 3, number: "103", type: "Operation", status: "In Use" },
    { id: 4, number: "104", type: "General", status: "Available" },
  ];

  const ongoingOperations = [
    {
      id: 1,
      patient: "Sarah Wilson",
      procedure: "Heart Surgery",
      room: "Operation Room 3",
      doctors: ["Dr. Johnson", "Dr. Smith"],
      startTime: "08:00 AM",
      estimatedDuration: "4 hours",
      status: "In Progress",
      priority: "High",
      notes: "Critical condition, requires immediate attention"
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Hospital Dashboard</h1>
      
      {/* Today's Appointments Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Today's Appointments</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {todayAppointments.map(appointment => (
                  <tr key={appointment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{appointment.patient}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{appointment.date}</div>
                      <div className="text-sm text-gray-500">{appointment.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{appointment.doctor}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{appointment.condition}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{appointment.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${appointment.priority === 'High' ? 'bg-red-100 text-red-800' : 
                          appointment.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-green-100 text-green-800'}`}>
                        {appointment.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {appointment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Doctors Status Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Doctors Status</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialty</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Appointment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {doctors.map(doctor => (
                  <tr key={doctor.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{doctor.specialty}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${doctor.status === 'Available' ? 'bg-green-100 text-green-800' : 
                          doctor.status === 'In Surgery' ? 'bg-red-100 text-red-800' : 
                          'bg-yellow-100 text-yellow-800'}`}>
                        {doctor.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{doctor.currentPatient}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{doctor.nextAppointment}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{doctor.contact}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Room Status Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Room Status</h2>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rooms.map(room => (
              <div key={room.id} className="border rounded-lg p-4">
                <h3 className="font-medium">Room {room.number}</h3>
                <p className="text-gray-600">{room.type}</p>
                <p className={`mt-2 ${
                  room.status === 'Available' ? 'text-green-600' :
                  room.status === 'Occupied' ? 'text-red-600' :
                  'text-yellow-600'
                }`}>
                  {room.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ongoing Operations Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Ongoing Operations</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Procedure</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctors</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {ongoingOperations.map(operation => (
                  <tr key={operation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{operation.patient}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{operation.procedure}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{operation.room}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{operation.doctors.join(', ')}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{operation.startTime}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{operation.estimatedDuration}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${operation.priority === 'High' ? 'bg-red-100 text-red-800' : 
                          operation.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-green-100 text-green-800'}`}>
                        {operation.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {operation.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
