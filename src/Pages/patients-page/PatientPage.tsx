import {
  Calendar,
  User,
  Edit,
  FileStack,
  HeartPulse,
  Phone,
} from "lucide-react";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { Button } from "../../components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


import PatientOverview from "../../features/Patients/patients-overview/PatientOverview";
import PatientsProfile from "../../features/Patients/patients-profile/PatientsProfile";
import PatientsAppointment from "../../features/Patients/patients-appointment/PatientsAppointment";
import PatientTreatment from "../../features/Patients/patients-treatment/PatientTreatment";
import MedicalRecord from "../../features/Patients/patient-medical-record/MedicalRecord";
import VoiceCalls from "../../features/calls/voice-calls/VoiceCalls";

const PatientPage = () => {
  const data = [
    {
      icon: FileStack,
      text: "overview",
      value: "overview",
    },
    {
      icon: User,
      text: "Patient patient",
      value: "profile",
    },
    {
      icon: Calendar,
      text: "appointments",
      value: "appointments",
    },
    {
      icon: HeartPulse,
      text: "treatments",
      value: "treatments",
    },
    {
      icon: FileStack,
      text: "Medical record",
      value: "medical",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="overview" className="space-y-6">
          {/* Sticky Tabs Header */}
          <div className="sticky top-0 z-10 bg-gray-50/95 backdrop-blur-sm pt-2 pb-4 -mx-4 px-4 shadow-sm">
            <ScrollArea className="w-full whitespace-nowrap">
              <TabsList className="mb-2 flex w-full gap-2 p-1 bg-white rounded-xl shadow-sm">
                {data.map((item, index) => (
                  <TabsTrigger
                    key={index}
                    value={item.value}
                    className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-sm rounded-lg px-3 py-2.5 text-sm font-medium transition-all"
                  >
                    <div className="flex items-center gap-2 capitalize">
                      <item.icon className="w-4 h-4" />
                      {item.text}
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          {/* Quick Actions Bar */}
          <div className="bg-white rounded-xl shadow-sm p-2 mb-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>AH</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-sm font-semibold">Ahmed Ali Hussian</h2>
                  <p className="text-xs text-slate-500">ID: PAT-2024-001</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-end gap-2 w-full sm:w-auto">
                <Dialog className="">
                  <DialogTrigger>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 sm:flex-none justify-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="h-[calc(100vh-50px)]">
                    <VoiceCalls />
                  </DialogContent>
                </Dialog>

                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 sm:flex-none justify-center"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
                <Button
                  size="sm"
                  className="flex-1 sm:flex-none justify-center bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>

          {/* Tab Content with Container */}
          <div className="w-full mx-auto">
            <TabsContent value="overview" className="space-y-6 mt-0">
              <PatientOverview />
            </TabsContent>

            <TabsContent value="profile" className="space-y-6 mt-0">
              <PatientsProfile />
            </TabsContent>

            <TabsContent value="appointments" className="space-y-6 mt-0 w-full">
              <PatientsAppointment />
            </TabsContent>

            <TabsContent value="treatments" className="space-y-6 mt-0">
              <PatientTreatment />
            </TabsContent>

            <TabsContent value="medical" className="space-y-6 mt-0">
              <MedicalRecord />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default PatientPage;
