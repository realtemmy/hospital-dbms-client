import { Mail, Phone } from "lucide-react";
import type { Staff } from "../../features/admin/staff/Staff";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import PreviewStaffProfile from "../staff-profile-preview/PreviewStaffProfile";

export const staffCardStyles = {
  doctor: "bg-blue-100 text-blue-800",
  nurse: "bg-green-100 text-green-800",
  spacialist: "bg-purple-100 text-purple-800",
  administrative: "bg-amber-100 text-amber-800",
  maintenance: "bg-fuchsia-100 text-fuchsia-800",
  security: "bg-red-100 text-red-800",
  it: "bg-cyan-100 text-cyan-800",
  other: "bg-slate-100 text-slate-800",
};

const StaffCard = ({ staff }: { staff: Staff }) => {
  return (
    <Card
      //   key={staff.id}
      className="overflow-hidden hover:shadow-md transition-shadow"
    >
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <Badge
            className={cn(
              staffCardStyles[staff.category as keyof typeof staffCardStyles],
              "capitalize"
            )}
          >
            {staff.category}
          </Badge>
          <Badge variant="outline">{staff.department}</Badge>
        </div>
        <div className="flex items-center mt-2">
          <Avatar className="h-12 w-12 mr-3">
            <AvatarImage src={staff.image || ""} alt={staff.name} />
            <AvatarFallback>
              {staff.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{staff.name}</CardTitle>
            <CardDescription>
              {staff.specialty || staff.qualification}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-3">
        <div className="text-sm space-y-1">
          <div className="flex items-center">
            <Phone className="h-3.5 w-3.5 mr-2 text-gray-400" />
            <span className="text-gray-600">
              {staff.contactNumber || "Not provided"}
            </span>
          </div>
          <div className="flex items-center">
            <Mail className="h-3.5 w-3.5 mr-2 text-gray-400" />
            <span className="text-gray-600">{staff.email}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 p-4 flex justify-end">
        <Dialog>
          <DialogTrigger>
            <Button variant="outline" size="sm">
              View Profile
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-xl">
            {staff && <PreviewStaffProfile staff={staff} />}
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default StaffCard;
