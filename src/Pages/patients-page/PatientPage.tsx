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
  Phone,
} from "lucide-react";
import { ScrollArea } from "../../components/ui/scroll-area";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/ui/avatar";

import AppointmentTable from "../../components/appointment-table/AppointmentTable";

const PatientPage = () => {
  // Find a way to add bloogType, blood group, allergies, and all other parameters to the patient profile
  // contact info: phone numbers, email address, emergency contacts
  // appointment history: past appointments, diagnosis, and treatments
  // clinical data: Medical history, allergies, medications, lab results etc
  // financial information: insurance details, payment history and outstanding balances
  const sampleAppointments = [
    {
      id: 1,
      name: "Temiloluwa Oreoluwa",
      gender: "male",
      age: 26,
      date: "04/08/2025",
      time: "09:00",
      status: "Scheduled",
      mobile: "8066771553",
      email: "temiloluwaogunti8@gmail.com",
      visitType: "New patient",
      avatar: "https://github.com/shadcn.png",
      address: "3, road 103, teachers estate, Ibafo, Ogun state.",
      lastVisit: "04/02/2025",
    },
    {
      id: 2,
      name: "Realtemmy Oreoluwa",
      gender: "female",
      age: 24,
      date: "04/08/2025",
      time: "09:30",
      status: "Confirmed",
      mobile: "7068401238",
      email: "temmy4jamb@gmail.com",
      visitType: "Follow-up",
      avatar: "https://github.com/shadcn.png",
      address: "Teachers estate, torotoro, Ibafo, Ogun state.",
      lastVisit: "02/01/2024",
    },
  ];
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
        <TabsContent value="profile" className="grid grid-cols-4 gap-4">
          {/* Personal Info Section */}
          <section className="col-span-4 bg-white shadow border rounded-lg overflow-hidden">
            <div className="relative h-48 bg-gradient-to-br from-indigo-700 via-blue-800 to-blue-900">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute left-0 right-0 bottom-0 h-full bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-8 flex items-center gap-6">
                <div className="relative group">
                  <Avatar className="w-32 h-32 border-4 border-white/90 rounded-2xl shadow-lg">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      className="rounded-2xl object-cover"
                    />
                    <AvatarFallback className="text-2xl">AH</AvatarFallback>
                  </Avatar>
                  <button className="absolute bottom-2 right-2 bg-white rounded-full p-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Edit className="w-4 h-4 text-blue-600" />
                  </button>
                </div>
                <div className="text-white drop-shadow-md">
                  <div className="flex items-center gap-3">
                    <h2 className="text-3xl font-bold text-white">Ahmed Ali Hussian</h2>
                    <div className="flex items-center gap-1 bg-emerald-500/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs border border-emerald-500/20">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <span className="text-emerald-50">Active Patient</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-gray-100">
                    <p className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                      <FileStack className="w-4 h-4 text-blue-200" />
                      <span className="text-white">ID: PAT-2024-001</span>
                    </p>
                    <p className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 text-blue-200" />
                      <span className="text-white">Registered: Jan 2024</span>
                    </p>
                    <p className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                      <MapPin className="w-4 h-4 text-blue-200" />
                      <span className="text-white">Elshiekh zayed, Giza</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white shadow-lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white shadow-lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
                <Button className="bg-white text-blue-700 hover:bg-white/90 shadow-lg">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>

            <div className="mt-6 p-6">
              <div className="grid grid-cols-4 gap-6">
                {/* Demographics */}
                <div className="col-span-2 space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Demographics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-500">Gender</p>
                      <p className="font-medium flex items-center gap-2">
                        <User size={16} />
                        Male
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Date of Birth</p>
                      <p className="font-medium flex items-center gap-2">
                        <Calendar size={16} />
                        12 Dec 1992
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Age</p>
                      <p className="font-medium">38 years</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Marital Status</p>
                      <p className="font-medium">Married</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Occupation</p>
                      <p className="font-medium flex items-center gap-2">
                        <Briefcase size={16} />
                        Accountant
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Language</p>
                      <p className="font-medium">English</p>
                    </div>
                  </div>
                </div>

                {/* Vital Statistics */}
                <div className="col-span-2 space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Vital Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-600 mb-1">Blood Type</p>
                      <p className="text-2xl font-bold text-blue-700">AB+</p>
                    </div>
                    <div className="col-span-1 bg-green-50 p-3 rounded-lg">
                      <p className="text-sm text-green-600 mb-1">Blood Pressure</p>
                      <p className="text-2xl font-bold text-green-700">124/80</p>
                    </div>
                    <div className="col-span-1 bg-purple-50 p-3 rounded-lg">
                      <p className="text-sm text-purple-600 mb-1">Weight</p>
                      <p className="text-2xl font-bold text-purple-700">92 <span className="text-base font-normal">kg</span></p>
                    </div>
                    <div className="col-span-1 bg-orange-50 p-3 rounded-lg">
                      <p className="text-sm text-orange-600 mb-1">Height</p>
                      <p className="text-2xl font-bold text-orange-700">175 <span className="text-base font-normal">cm</span></p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-sm text-yellow-600 mb-1">BMI Status</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-yellow-700">30.1</p>
                      <p className="text-sm font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded">Overweight</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="col-span-4 flex gap-4 mt-4 border-t pt-4">
                  <Button variant="outline" className="flex-1">
                    <FileStack className="w-4 h-4 mr-2" />
                    Medical Records
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Appointment
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <HeartPulse className="w-4 h-4 mr-2" />
                    View Lab Results
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Contact className="w-4 h-4 mr-2" />
                    Contact Patient
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="col-span-2 shadow-sm rounded-md">
            <div className="flex justify-between items-center border-b p-2">
              <h3 className="flex px-1">
                <Contact />
                <span className="ms-1 font-semibold">Contact Information</span>
              </h3>
              <Button variant="ghost" size="icon" className="w-6">
                <Edit />
              </Button>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-slate-500">Primary Phone</p>
                  <p className="font-medium">+234 806-677-1553</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Secondary Phone</p>
                  <p className="font-medium">+234 706-840-1238</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">temiloluwaogunti8@gmail.com</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-slate-500">Address</p>
                  <p className="font-medium">3, road 103, Teachers estate, Ibafo, Ogun state.</p>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3">Emergency Contacts</h4>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-3 rounded">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-sm text-slate-500">Name</p>
                        <p className="font-medium">John Doe</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Relationship</p>
                        <p className="font-medium">Spouse</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Phone</p>
                        <p className="font-medium">+234 802-345-6789</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Email</p>
                        <p className="font-medium">johndoe@email.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="col-span-2 shadow-sm rounded-md">
            <div className="flex justify-between items-center border-b p-2">
              <h3 className="flex px-1">
                <FileStack />
                <span className="ms-1 font-semibold">Financial Information</span>
              </h3>
              <Button variant="ghost" size="icon" className="w-6">
                <Edit />
              </Button>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Insurance Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-500">Provider</p>
                    <p className="font-medium">National Health Insurance</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Policy Number</p>
                    <p className="font-medium">NHI-2024-123456</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Coverage Type</p>
                    <p className="font-medium">Comprehensive</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Expiry Date</p>
                    <p className="font-medium">31 Dec 2024</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Payment History</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                    <div>
                      <p className="font-medium">General Consultation</p>
                      <p className="text-sm text-slate-500">15 Mar 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$150.00</p>
                      <p className="text-sm text-green-600">Paid</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                    <div>
                      <p className="font-medium">Lab Tests</p>
                      <p className="text-sm text-slate-500">10 Mar 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$75.00</p>
                      <p className="text-sm text-orange-600">Pending</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 mt-4">
                <h4 className="font-semibold mb-2">Outstanding Balance</h4>
                <div className="bg-orange-50 p-3 rounded">
                  <div className="flex justify-between items-center">
                    <p className="text-orange-800">Total Outstanding</p>
                    <p className="font-bold text-orange-800">$75.00</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="col-span-4 shadow-sm rounded-md">
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
                    Blood Information
                  </p>
                  <div className="flex gap-1 font-medium text-sm">
                    <div className="flex flex-wrap gap-1">
                      <div>Blood Type: AB+</div>
                      <div>Genotype: AA</div>
                      <div>Last Donation: 2023</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 shadow-sm p-2 rounded col-span-1">
                <HeartPulse />
                <div>
                  <p className="font-medium text-sm text-slate-500">
                    Allergies
                  </p>
                  <div className="flex gap-1 font-medium text-sm">
                    <div className="flex flex-wrap gap-1">
                      {["Penicillin", "Peanuts", "Shellfish"].map((el, index, array) => (
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
                    Current Medications
                  </p>
                  <div className="flex gap-1 font-medium text-sm">
                    <div className="flex flex-wrap gap-1">
                      {["Metformin", "Levothyroxine", "Aspirin"].map((el, index, array) => (
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
                      {["Obesity (Father)", "Diabetes (Mother)", "Hypertension (Sibling)"].map((el, index, array) => (
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
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Appointment History</h3>
            <div className="grid gap-4">
              {sampleAppointments.map((appointment) => (
                <div key={appointment.id} className="border rounded-lg p-4 bg-white">
                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-slate-500">Date & Time</p>
                      <p className="font-medium">{appointment.date} {appointment.time}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Visit Type</p>
                      <p className="font-medium">{appointment.visitType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Status</p>
                      <p className="font-medium">{appointment.status}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Last Visit</p>
                      <p className="font-medium">{appointment.lastVisit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
