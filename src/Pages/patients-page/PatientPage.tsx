import {
  Briefcase,
  Calendar,
  MapPin,
  User,
  Edit,
  ChevronUpIcon,
  ChevronDownIcon,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/ui/avatar";

const PatientPage = () => {
  return (
    <div>
      <Tabs defaultValue="overview" className="order">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="profile">Patient Profile</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="treatments">Treatments</TabsTrigger>
          {/*Treatment can be drugs, therapy or surgery */}
          <TabsTrigger value="medical">Medical record</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="grid grid-cols-4 gap-2">
          <section className="shadow rounded-md border px-4 py-2 col-span-3">
            <h2 className="border-s-blue-500 border-s-2 ps-4 my-2 font-semibold">
              Medical Record{" "}
              <span className="text-xs text-slate-600">
                Last updated 26 Aug, 2024
              </span>
            </h2>
            <div className="font-medium grid grid-cols-4">
              <div>
                <p className="text-slate-600">Blood group</p>
                <div>AB+ (ve)</div>
              </div>
              <div>
                <p className="text-slate-600">Blood pressure</p>
                <div>130mm, 80 HG</div>
              </div>
              <div>
                <p className="text-slate-600">Particular sickness</p>
                <div>Heart disease</div>
              </div>
              <div>
                <p className="text-slate-600">Allergic condition</p>
                <div>Moderate</div>
              </div>
            </div>
          </section>
          <section className="shadow border rounded-md px-4 py-2">
            <div className="font-medium text-sm flex justify-between">
              <h2>Recent consultations</h2>
              <p>See all</p>
            </div>
            <div>
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="profile">
          <section className="grid grid-cols-5 shadow border rounded-md px-4 py-4 gap-2">
            <div className="col-span-4 flex gap-4">
              <Avatar className="w-35 h-35 rounded-none">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="rounded-md"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="flex flex-col justify-between w-full">
                <div >
                  <h2 className="font-semibold">Ahmed Ali Hussian</h2>
                  <div className="flex flex-wrap gap-2 text-xs my-1">
                    <p className="flex items-center">
                      <User size={15} />
                      <span className="text-slate-600 font-semibold">Male</span>
                    </p>
                    <p className="flex items-center">
                      <MapPin size={15} />
                      <span className="text-slate-600 font-semibold">
                        Elshiekh zayed, Giza
                      </span>
                    </p>
                    <p className="flex items-center">
                      <Briefcase size={15} />
                      <span className="text-slate-600 font-semibold">
                        Accountant
                      </span>
                    </p>
                    <p className="flex items-center">
                      <Calendar size={15} />
                      <span className="text-slate-600 font-semibold">
                        12 Dec 1992 (38 years)
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 text-sm">
                  <div className="shadow border border-dashed rounded-md p-2 pe-8">
                    <p className="font-bold text-xl">22.4</p>
                    <div className="flex text-slate-600 text-sm font-semibold">
                      <span>BMI</span> <ChevronUpIcon size={20} color="green" />
                      <span className="text-green-500">10</span>
                    </div>
                  </div>
                  <div className="shadow border border-dashed rounded-md p-2 pe-8">
                    <p className="font-bold text-xl">
                      92
                      <span className="text-base font-normal text-slate-500">
                        kg
                      </span>
                    </p>
                    <div className="flex text-slate-600 text-sm font-semibold">
                      <span>Weight </span>{" "}
                      <ChevronUpIcon size={20} color="green" />
                      <span className="text-green-500">10kg</span>
                    </div>
                  </div>
                  <div className="shadow border border-dashed rounded-md p-2 pe-8">
                    <p className="font-bold text-xl">
                      175
                      <span className="text-base font-normal text-slate-500">
                        Cm
                      </span>
                    </p>
                    <div className="flex text-slate-600 text-sm font-semibold">
                      <span>BMI</span> <ChevronUpIcon size={20} color="green" />
                      <span className="text-green-500">10</span>
                    </div>
                  </div>
                  <div className="shadow border border-dashed rounded-md p-2 pe-8">
                    <p className="font-bold text-xl">124/80</p>
                    <div className="flex text-slate-600 text-sm font-semibold">
                      <span>Blood pressure</span>{" "}
                      <ChevronDownIcon size={20} color="red" />
                      <span className="text-red-500">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 text-end">
              <Button variant="outline">
                <Edit /> Edit
              </Button>
              <div className="my-2">
                <p className="font-semibold text-sm text-slate-700">Own diagnosis</p>
                <div className="flex text-xs capitalize gap-1 py-1">
                  {["obesity", "diabetes", "hypertension"].map((item, index) => (
                  <div key={index} className="bg-yellow-50 rounded-2xl px-1 text-orange-600 font-semibold">{item}</div>
                ))}
                </div>
                
              </div>
              <div className="my-2">
                <p className="font-semibold text-sm text-slate-700">Health barriers</p>
                <div className="flex text-xs capitalize gap-1 py-1">
                  {["obesity", "diabetes", "hypertension"].map((item, index) => (
                  <div key={index} className="bg-blue-100 text-blue-900 rounded-2xl px-1 font-semibold">{item}</div>
                ))}
                </div>
                
              </div>
            </div>
          </section>
        </TabsContent>
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
