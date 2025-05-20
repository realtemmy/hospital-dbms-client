import { DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { Edit } from "lucide-react";

import type { Staff } from "../../features/admin/staff/Staff";
import { staffCardStyles } from "../staff-card/StaffCard";
import { cn } from "../../lib/utils";

const PreviewStaffProfile = ({ staff }: { staff: Staff }) => {
  return (
    <div>
      <DialogHeader>
        <DialogTitle className="text-xl">Staff Profile</DialogTitle>
      </DialogHeader>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 mb-2">
            <AvatarImage src={staff.image || ""} alt={staff.name} />
            <AvatarFallback className="text-xl">
              {staff.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <Badge
            className={cn(
              staffCardStyles[staff.category as keyof typeof staffCardStyles]
            )}
          >
            {staff.name}
          </Badge>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold">{staff.name}</h2>
          <p className="text-gray-500">{staff.specialty}</p>

          <Tabs defaultValue="info" className="mt-4">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="info">Basic Info</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
              <TabsTrigger value="work">Work Details</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="space-y-3 mt-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-medium">Staff ID:</div>
                <div>{staff.id}</div>

                <div className="font-medium">Department:</div>
                <div>{staff.department}</div>

                <div className="font-medium">Qualification:</div>
                <div>{staff.qualification || "Not specified"}</div>

                <div className="font-medium">Join Date:</div>
                <div>{staff.joinDate || "Not specified"}</div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-3 mt-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-medium">Email:</div>
                <div>{staff.email}</div>

                <div className="font-medium">Contact Number:</div>
                <div>{staff.contactNumber}</div>

                <div className="font-medium">Address:</div>
                <div>{staff.address || "Not specified"}</div>

                <div className="font-medium">Emergency Contact:</div>
                <div>{staff.emergencyContact || "Not specified"}</div>
              </div>
            </TabsContent>

            <TabsContent value="work" className="space-y-3 mt-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-medium">Status:</div>
                <div>
                  <Badge
                    variant={
                      staff.status === "active" ? "default" : "secondary"
                    }
                  >
                    {staff.status === "active" ? "Active" : "Inactive"}
                  </Badge>
                </div>

                <div className="font-medium">Schedule:</div>
                <div>{staff.schedule || "Not specified"}</div>

                <div className="font-medium">Specialty:</div>
                <div>{staff.specialty || "Not specified"}</div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <DialogFooter className="mt-2">
        <Button variant="outline">
          <Edit className="h-4 w-4 mr-2" /> Edit Profile
        </Button>
        <Button>Close</Button>
      </DialogFooter>
    </div>
  );
};

export default PreviewStaffProfile;
