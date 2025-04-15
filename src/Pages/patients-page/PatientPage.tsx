import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const PatientPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Patient Details</h2>
        <Button variant="outline">Edit Patient</Button>
      </div>
      <Tabs defaultValue="overview" className="order">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="profile">Patient Profile</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="treatments">Treatments</TabsTrigger>
          {/*Treatment can be drugs, therapy or surgery */}
          <TabsTrigger value="medical">Medical record</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="profile">Change your password here.</TabsContent>
        <TabsContent value="appointments">
          <p>Appointments can be by drugs, therapy or surgery</p>
        </TabsContent>
        <TabsContent value="treatments">
          <p>Treatments</p>
        </TabsContent>
        <TabsContent value="medical">
          <p>Medical record</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PatientPage;
