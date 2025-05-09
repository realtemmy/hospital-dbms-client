import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Calendar, File, MapPin, Phone, Mail, Activity } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { useNavigate } from "react-router";

type patientInfo = {
  name: string;
  email: string;
  timeSlot: string;
  id: string;
  address: string;
  mobile: string;
  bloodGroup: string;
  date: string;
};

const PatientCard = ({ patient }: { patient: patientInfo }) => {
  const navigate = useNavigate();
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getBloodGroupColor = (bloodGroup: string) => {
    const colors: Record<string, string> = {
      "A+": "bg-emerald-50 text-emerald-600 border-emerald-200",
      "A-": "bg-blue-50 text-blue-600 border-blue-200",
      "B+": "bg-violet-50 text-violet-600 border-violet-200",
      "B-": "bg-indigo-50 text-indigo-600 border-indigo-200",
      "AB+": "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200",
      "AB-": "bg-pink-50 text-pink-600 border-pink-200",
      "O+": "bg-amber-50 text-amber-600 border-amber-200",
      "O-": "bg-orange-50 text-orange-600 border-orange-200",
    };
    
    return colors[bloodGroup] || "bg-gray-50 text-gray-600 border-gray-200";
  };

  const handleViewPatient = () => {
    navigate(`/doctor/patients/${patient.id}`);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border bg-background shadow-sm transition-all hover:shadow-md">
      
      <div className="flex flex-col h-full p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex gap-3">
            <Avatar className="h-12 w-12 border-2 border-primary/10">
              <AvatarImage
                src={`https://ui-avatars.com/api/?name=${patient.name}&background=random`}
              />
              <AvatarFallback>{getInitials(patient.name)}</AvatarFallback>
            </Avatar>
            
            <div>
              <h3 className="font-medium text-base">{patient.name}</h3>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <span className="font-mono">ID: {patient.id}</span>
              </div>
            </div>
          </div>
          
          <Badge 
            variant="outline" 
            className={`${getBloodGroupColor(
              patient.bloodGroup
            )} px-2 py-0.5 text-xs font-medium`}
          >
            {patient.bloodGroup}
          </Badge>
        </div>
        
        <div className="space-y-3 text-sm flex-1">
          <div className="flex items-start gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="text-muted-foreground font-medium">Appointment</p>
              <p>{patient.timeSlot}</p>
              <p className="text-xs mt-0.5 text-muted-foreground">
                {patient.date}
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Mail className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="text-muted-foreground font-medium">Email</p>
              <p className="truncate max-w-[200px]">{patient.email}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Phone className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="text-muted-foreground font-medium">Phone</p>
              <p>{patient.mobile}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="text-muted-foreground font-medium">Address</p>
              <p className="line-clamp-2">{patient.address}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-5 pt-4 border-t">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium">
              Medical Reports Available
            </span>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            className="text-xs h-8 transition-colors"
            onClick={handleViewPatient}
          >
            View Patient
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
