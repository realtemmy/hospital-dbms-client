import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { File, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";

type patientInfo = {
  name: string;
  email: string;
  timeSlot: string;
  id: string;
  address: string;
  mobile: string;
  bloodGroup: string;
};

const PatientCard = ({ patient }: { patient: patientInfo }) => {
  return (
    <section className="shadow w-[320px] border rounded-md p-4 bg-white dark:bg-gray-800 text-sm leading-6">
      <div className="pt-2 pb-6 grid grid-cols-3 items-center border-b">
        <div className="col-span-2 flex gap-2 items-center">
          <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-green-600 mb-2">{patient.name}</p>
            <div>PatientId: {patient.id}</div>
          </div>
        </div>
        <div className="text-xs col-span-1 font-semibold text-slate-600">
          <p className="mb-2">{patient.timeSlot}</p>
          <p>Friday, June 26</p>
        </div>
      </div>
      <div className="py-4 border-b">
        <p className="flex gap-2">
          <MapPin />
          <span>{patient.address}</span>
        </p>
        <p className="flex items-center gap-2">
          <Phone size={20} /> {patient.mobile}
        </p>
      </div>
      <div className="py-4 border-b">
        <p>Blood group: {patient.bloodGroup}</p>
        <p className="flex items-center gap-2">
          <span>Reports: </span> <File size={20} color="orangered" />
        </p>
      </div>
      <div className="py-4 flex items-center justify-center">
        <Button
          variant="outline"
          className="cursor-pointer text-blue-700 hover:text-blue-600"
        >
          Read more
        </Button>
      </div>
    </section>
  );
};

export default PatientCard;
