import {
  Briefcase,
  Calendar,
  MapPin,
  User,
  Edit,
  ChevronUpIcon,
  ChevronDownIcon,
  CalendarDays,
  CircleSmall,
  FileStack,
  HeartPulse,
  Contact,
  Eye,
} from "lucide-react";
import { ScrollArea } from "../../components/ui/scroll-area";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/ui/avatar";

const PatientPage = () => {
  // Find a way to add bloogType, blood group, allergies, and all other parameters to the patient profile
  // contact info: phone numbers, email address, emergency contacts
  // appointment history: past appointments, diagnosis, and treatments
  // clinical data: Medical history, allergies, medications, lab results etc
  // financial information: insurance details, payment history and outstanding balances
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
        <TabsContent value="profile" className="grid grid-cols-4 gap-2">
          <section className="col-span-4 grid grid-cols-5 shadow border rounded-md px-4 py-4 gap-2">
            <div className="col-span-4 flex gap-4">
              <Avatar className="w-35 h-35 rounded-none">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="rounded-md"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="flex flex-col justify-between w-full">
                <div>
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
                  <div className="shadow border border-dashed rounded-md p-2 pe-4">
                    <p className="font-bold text-xl">AA</p>
                    <div className="flex text-slate-600 text-sm font-semibold">
                      <span>Blood type</span>
                    </div>
                  </div>
                  <div className="shadow border border-dashed rounded-md p-2 pe-4">
                    <p className="font-bold text-xl">AB+</p>
                    <div className="flex text-slate-600 text-sm font-semibold">
                      <span>Genotype</span>
                    </div>
                  </div>
                  <div className="shadow border border-dashed rounded-md p-2 pe-8">
                    <p className="font-bold text-xl">
                      92
                      <span className="text-base font-normal text-slate-500">
                        kg
                      </span>
                    </p>
                    <div className="text-slate-600 text-sm font-semibold">
                      Weight
                    </div>
                  </div>
                  <div className="shadow border border-dashed rounded-md p-2 pe-8">
                    <p className="font-bold text-xl">
                      175
                      <span className="text-base font-normal text-slate-500">
                        Cm
                      </span>
                    </p>
                    <div className="text-slate-600 text-sm font-semibold">
                      Height
                    </div>
                  </div>
                  <div className="shadow border border-dashed rounded-md p-2 pe-8">
                    <p className="font-bold text-xl">124/80</p>
                    <div className="flex text-slate-600 text-sm font-semibold">
                      Blood pressure
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
                <p className="font-semibold text-sm text-slate-700">
                  Own diagnosis
                </p>
                <div className="flex text-xs capitalize gap-1 py-1">
                  {["obesity", "diabetes", "hypertension"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="bg-yellow-50 rounded-2xl px-1 text-orange-600 font-semibold"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="my-2">
                <p className="font-semibold text-sm text-slate-700">
                  Health barriers
                </p>
                <div className="flex text-xs capitalize gap-1 py-1">
                  {["fear of medication", "fear of insulin"].map(
                    (item, index) => (
                      <div
                        key={index}
                        title={item}
                        className="bg-blue-100 cursor-pointer text-blue-900 rounded-2xl px-1 font-semibold truncate"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="col-span-1 p-1 shadow-sm rounded-md h-auto">
            <div className="flex justify-between">
              <h3 className="flex ps-3 font-semibold items-center">Contact Information</h3>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="w-6">
                  <Edit />
                </Button>
                <Button variant="ghost" size="icon" className="w-6">
                  <Eye />
                </Button>
              </div>
            </div>

            <div className="p-2 text-sm font-medium text-slate-600">
              <div>
                Name: <span>Oreoluwa Temiloluwa</span>
              </div>
              <div>
                Email: <span>temmy4jamb@gmail.com</span>
              </div>
              <div>
                Phone: <span>+20 123 456 7890</span>
              </div>
              <div>
                <p className="font-medium text-sm text-black mt-2">
                  Emergency contacts
                </p>
                <div className="mb-2">
                  <div>Name: John Doe</div>
                  <div>Relationship: Sibling</div>
                  <div>Email: johndoe@mail.io</div>
                  <div>Phone: +20 123 456 7890</div>
                </div>
              </div>
            </div>
          </section>
          <section className="col-span-3 shadow-sm rounded-md">
            <div className="flex justify-between items-center border-b p-2">
              <h3 className="flex px-1">
                <FileStack />
                <span className="ms-1 font-semibold">Medical history</span>
              </h3>
              <span className="font-semibold text-slate-600 text-sm">Edit</span>
            </div>
            <div className="p-2 grid grid-cols-2 gap-2">
              <div className="flex gap-2 shadow-sm p-2 rounded col-span-1">
                <HeartPulse />
                <div>
                  <p className="font-medium text-sm text-slate-500">
                    Chronic disease
                  </p>
                  <div className="flex gap-1 font-medium text-sm">
                    <div className="flex flex-wrap gap-1">
                      {["obesity", "IHD", "Chronic thyroid disorder"].map(
                        (el, index, array) => (
                          <div key={index} className="capitalize">
                            {el}
                            {index < array.length - 1 && ","}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 shadow-sm p-2 rounded col-span-1">
                <HeartPulse />
                <div>
                  <p className="font-medium text-sm text-slate-500">
                    Diabetes Emergencies
                  </p>
                  <div className="flex gap-1 font-medium text-sm">
                    <div className="flex flex-wrap gap-1">
                      {["Diabetes ketoacidosis"].map((el, index, array) => (
                        <div key={index} className="capitalize">
                          {el}
                          {index < array.length - 1 && ","}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 shadow-sm p-2 rounded col-span-1">
                <HeartPulse />
                <div>
                  <p className="font-medium text-sm text-slate-500">Surgery</p>
                  <div className="flex gap-1 font-medium text-sm">
                    <div className="flex flex-wrap gap-1">
                      {["Liposuction"].map((el, index, array) => (
                        <div key={index} className="capitalize">
                          {el}
                          {index < array.length - 1 && ","}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 shadow-sm p-2 rounded col-span-1">
                <HeartPulse />
                <div>
                  <p className="font-medium text-sm text-slate-500">
                    Family disease
                  </p>
                  <div className="flex gap-1 font-medium text-sm">
                    <div className="flex flex-wrap gap-1">
                      {["Obesity (Father)"].map((el, index, array) => (
                        <div key={index} className="capitalize">
                          {el}
                          {index < array.length - 1 && ","}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 shadow-sm p-2 rounded col-span-2">
                <HeartPulse />
                <div>
                  <p className="font-medium text-sm text-slate-500">
                    Diabetes related complications
                  </p>
                  <div className="flex gap-1 font-medium text-sm">
                    <div className="flex flex-wrap gap-1">
                      {[
                        "nephropathy",
                        "neuropathy",
                        "retinopathy",
                        "diabetic foot",
                        "sexual dysfunction",
                      ].map((el, index, array) => (
                        <div key={index} className="capitalize">
                          {el}
                          {index < array.length - 1 && ","}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="grid-cols-1 p-1 shadow-sm rounded-md">
            <div className="flex justify-between items-center border-b p-2">
              <h3 className="flex px-1">
                <CalendarDays />
                <span className="ms-1 font-semibold">Timeline</span>
              </h3>
              <span className="font-semibold text-slate-600 text-sm">Edit</span>
            </div>
            <div className="p-2">
              <div className="flex gap-2">
                <div className="text-sm font-semibold">
                  Dec <span className="block text-slate-600">2022</span>
                </div>
                <div className="relative border-s-2 px-2 py-1">
                  <CircleSmall
                    size={15}
                    color="green"
                    className="absolute -left-2 bg-white"
                  />
                  <h4 className="font-semibold">Pre-diabetic</h4>
                  <span className="text-xs text-gray-500">A1c:10.4</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="text-sm font-semibold">
                  Dec <span className="block text-slate-600">2022</span>
                </div>
                <div className="relative border-s-2 px-2 py-1">
                  <CircleSmall
                    size={15}
                    color="green"
                    className="absolute -left-2 bg-white"
                  />
                  <h4 className="font-semibold">Pre-diabetic</h4>
                  <span className="text-xs text-gray-500">A1c:10.4</span>
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
