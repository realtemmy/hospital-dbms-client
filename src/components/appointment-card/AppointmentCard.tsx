import type { Appointment } from "../appointment-table/AppointmentTable";

import { Avatar,AvatarFallback,AvatarImage } from "../ui/avatar";
import StatusBadge from "../status-badge/StatusBadge";
import { CalendarIcon, Edit, Eye, Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";

const AppointmentCard = ({ appointment }: { appointment: Appointment }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="flex justify-between mb-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={appointment.avatar} alt={appointment.name} />
            <AvatarFallback>
              {appointment.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
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
          <span>
            {appointment.date}, {appointment.time}
          </span>
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

export default AppointmentCard

