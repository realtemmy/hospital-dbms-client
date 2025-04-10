import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Map, Phone } from "lucide-react";
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

const PatientCard = () => {
  return (
    <section className="shadow border rounded-md p-4 bg-white dark:bg-gray-800">
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-green-600">Lindley johnson</p>
          <div>PatientId: 12345</div>
        </div>
        <div>
          <p>10:00 - 10:30 AM</p>
          <p>Friday, June 26</p>
        </div>
      </div>
      <div>
        <p className="flex items-center space-x-1">
          <Map />
          <span>
            3, road 103, teachers estate, Ibafo, Obafemi Owode, Ogun state.
          </span>
        </p>
        <p className="flex items-center space-x-1">
          <Phone /> +234-8066771553
        </p>
      </div>
      <div>
        <p>Blood group: O+</p>
        <p>Reports: </p>
      </div>
      <div>
        <Button variant="outline">Read more</Button>
      </div>
    </section>
  );
};

export default PatientCard;
