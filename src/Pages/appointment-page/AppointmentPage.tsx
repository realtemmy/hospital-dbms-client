import {
  File,
  ChevronRight,
  Clock,
  Pill,
  CircleCheck,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ScrollArea } from "../../components/ui/scroll-area";

const AppointmentPage = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 text-end">
        <Sheet>
          <SheetTrigger>
            <Button variant="outline">View appointment history</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Appointment history</SheetTitle>
              <SheetDescription>
                Summary of all your past appointments
              </SheetDescription>
            </SheetHeader>
            <ScrollArea className="text-sm mx-2 h-[calc(100vh-10rem)]">
              <ol className="relative ms-3 border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-6">
                  <span className="rounded-full bg-yellow-500 absolute -start-3 flex h-2 ml-2 w-2 top-2 items-center justify-center ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800"></span>
                  <div className="flex gap-4 items-center">
                    <div className="text-sm">
                      <p className="text-slate-700 font-semibold">03/02/2025</p>
                      <span className="text-slate-500">06:30 PM</span>
                    </div>

                    <div className="flex w-full items-center justify-between gap-2 py-3 px-2 rounded border border-yellow-400 bg-yellow-100">
                      <p className="font-medium">High blood pressure checkup</p>
                      <Clock
                        className="bg-yellow-500 text-white rounded-full"
                        size={20}
                      />
                    </div>
                  </div>
                </li>

                <li className="mb-10 ms-6 relative">
                  <span className="rounded-full bg-green-500 absolute -start-9 top-2 flex h-2 ml-2 w-2 items-center justify-center ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800"></span>

                  <div className="flex gap-4 items-center">
                    <div className="text-sm">
                      <p className="text-slate-700 font-semibold">03/02/2025</p>
                      <span className="text-slate-500">06:30 PM</span>
                    </div>

                    <div className="flex w-full items-center justify-between gap-2 py-3 px-2 rounded border border-green-400 bg-green-100">
                      <p className="font-medium">Routine Checkup</p>
                      <CircleCheck
                        className="bg-green-500 text-white rounded-full"
                        size={20}
                      />
                    </div>
                  </div>
                </li>

                <li className="mb-10 ms-6 text-primary-700 dark:text-primary-500 relative">
                  <span className="rounded-full bg-green-500 absolute -start-9 top-2 flex h-2 ml-2 w-2 items-center justify-center ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800"></span>
                  <div className="flex gap-4 items-center">
                    <div className="text-sm">
                      <p className="text-slate-700 font-semibold">03/02/2025</p>
                      <span className="text-slate-500">06:30 PM</span>
                    </div>

                    <div className="flex w-full items-center justify-between gap-2 py-3 px-2 rounded border border-green-400 bg-green-100">
                      <p className="font-medium max-w-[180px] truncate">
                        Follow up for diagnosis and Hypertension
                      </p>
                      <CircleCheck
                        className="bg-green-500 text-white rounded-full"
                        size={20}
                      />
                    </div>
                  </div>
                </li>

                <li className="mb-10 ms-6 text-primary-700 dark:text-primary-500 relative">
                  <span className="rounded-full bg-green-500 absolute -start-9 top-2 flex h-2 ml-2 w-2 items-center justify-center ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800"></span>
                  <div className="flex gap-4 items-center">
                    <div className="text-sm">
                      <p className="text-slate-700 font-semibold">03/02/2025</p>
                      <span className="text-slate-500">06:30 PM</span>
                    </div>

                    <div className="flex w-full items-center justify-between gap-2 py-3 px-2 rounded border border-green-400 bg-green-100">
                      <p className="font-medium max-w-[180px] truncate">
                        Medication review and side effects
                      </p>
                      <CircleCheck
                        className="bg-green-500 text-white rounded-full"
                        size={20}
                      />
                    </div>
                  </div>
                </li>

                <li className="mb-10 ms-6 text-primary-700 dark:text-primary-500 relative">
                  <span className="rounded-full bg-green-500 absolute -start-9 top-2 flex h-2 ml-2 w-2 items-center justify-center ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800"></span>
                  <div className="flex gap-4 items-center">
                    <div className="text-sm">
                      <p className="text-slate-700 font-semibold">03/02/2025</p>
                      <span className="text-slate-500">06:30 PM</span>
                    </div>

                    <div className="flex w-full items-center justify-between gap-2 py-3 px-2 rounded border border-green-400 bg-green-100">
                      <p className="font-medium">High cholesterol check</p>
                      <CircleCheck
                        className="bg-green-500 text-white rounded-full"
                        size={20}
                      />
                    </div>
                  </div>
                </li>

                <li className="mb-10 ms-6 text-primary-700 dark:text-primary-500 relative">
                  <span className="rounded-full bg-green-500 absolute -start-9 top-2 flex h-2 ml-2 w-2 items-center justify-center ring-8 ring-white dark:bg-gray-700 dark:ring-gray-800"></span>
                  <div className="flex gap-4 items-center">
                    <div className="text-sm">
                      <p className="text-slate-700 font-semibold">03/02/2025</p>
                      <span className="text-slate-500">06:30 PM</span>
                    </div>

                    <div className="flex w-full items-center justify-between gap-2 py-3 px-2 rounded border border-green-400 bg-green-100">
                      <p className="font-medium">Dizziness and fatigue</p>
                      <CircleCheck
                        className="bg-green-500 text-white rounded-full"
                        size={20}
                      />
                    </div>
                  </div>
                </li>
              </ol>
            </ScrollArea>
            <SheetFooter className="border p-0">
              <SheetClose asChild>
                <Button
                  variant="link"
                  className="w-full text-blue-700 hover:text-blue-600"
                >
                  +View more
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Appointment details */}
      <section className="border shadow rounded-2xl col-span-2">
        <div className="flex justify-between items-center border-b py-4 px-4">
          <h2 className="font-bold">Appointment Details</h2>
          <div>
            Status{" "}
            <span className="bg-yellow-200 p-1 rounded-full px-2 uppercase text-xs text-yellow-700">
              upcoming
            </span>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-4 p-4 border-b">
          <div>
            <p className="text-gray-600">Appointment ID</p>
            <div className="font-semibold">#123456</div>
          </div>
          <div>
            <p className="text-gray-600">Booked on</p>
            <div className="font-semibold">24/01/2025</div>
          </div>
          <div>
            <p className="text-gray-600">Appointment Date</p>
            <div className="font-semibold">03/02/2025</div>
          </div>
          <div>
            <p className="text-gray-600">Appointment Time</p>
            <div className="font-semibold">6:30PM</div>
          </div>
          <div>
            <p className="text-gray-600">Doctor assigned</p>
            <div className="font-semibold">Dr Micheal Smith</div>
          </div>
          <div>
            <p className="text-gray-600">Department</p>
            <div className="font-semibold">Cardiology</div>
          </div>
          <div>
            <p className="text-gray-600">Reason for visit</p>
            <div className="font-semibold">High BP Check</div>
          </div>
          <div>
            <p className="text-gray-600">Consultation Type</p>
            <div className="font-semibold">In-Person</div>
          </div>
        </div>
        <div className="flex gap-4 p-4">
          <Button size="sm" color="blue">
            Reschedule
          </Button>
          <Button variant="destructive" size="sm">
            Cancel
          </Button>
        </div>
      </section>
      {/* Patient details */}
      <section className="border shadow rounded-2xl col-span-2">
        <h2 className="font-bold p-4 border-b">Patient Details</h2>
        <div className="grid gap-4 grid-cols-4 p-4">
          <div>
            <p className="text-gray-600">First Name</p>
            <div className="font-semibold">Temiloluwa</div>
          </div>
          <div>
            <p className="text-gray-600">Last Name</p>
            <div className="font-semibold">Oreoluwa</div>
          </div>
          <div>
            <p className="text-gray-600">Age</p>
            <div className="font-semibold">45</div>
          </div>
          <div>
            <p className="text-gray-600">Gender</p>
            <div className="font-semibold">Male</div>
          </div>
          <div>
            <p className="text-gray-600">Email Address</p>
            <div className="font-semibold">temiloluwaOgunti8@gmail.com</div>
          </div>
          <div>
            <p className="text-gray-600">Contact no</p>
            <div className="font-semibold">(234)8066771553</div>
          </div>
          <div>
            <p className="text-gray-600">Address</p>
            <div className="font-semibold">Teachers Estate, Ibafo</div>
          </div>
        </div>
      </section>
      {/* Medical records */}
      <section className="border shadow rounded-2xl col-span-1">
        <h2 className="font-bold p-4 border-b">Medical records</h2>
        <div className="mx-4 my-2">
          <div className="border p-2 flex justify-between my-1 rounded-md bg-gray-100 cursor-pointer">
            <div className="flex gap-2 items-center">
              <File /> <span>Blood pressure report</span>
            </div>
            <ChevronRight />
          </div>
          <div className="border p-2 flex justify-between my-1 rounded-md bg-gray-100 cursor-pointer">
            <div className="flex gap-2 items-center">
              <File /> <span>Blood sugar level</span>
            </div>
            <ChevronRight />
          </div>
          <div className="border p-2 flex justify-between my-1 rounded-md bg-gray-100 cursor-pointer">
            <div className="flex gap-2 items-center">
              <File /> <span>ECG report</span>
            </div>
            <ChevronRight />
          </div>
          <div className="border p-2 flex justify-between my-1 rounded-md bg-gray-100 cursor-pointer">
            <div className="flex gap-2 items-center">
              <File /> <span>Cholesterol level</span>
            </div>
            <ChevronRight />
          </div>
        </div>
        <div className="text-center">
          <Button
            size="sm"
            variant="link"
            className="text-blue-700 hover:text-blue-600"
          >
            +View more
          </Button>
        </div>
      </section>
      {/* Prescriptions */}
      <section className="border shadow rounded-2xl col-span-1">
        <h2 className="font-bold p-4 border-b">Prescriptions</h2>
        <div className="mx-4 my-2">
          <div className="border p-2 flex justify-between my-1 rounded-md bg-gray-100 cursor-pointer">
            <div className="flex gap-2 items-center">
              <Pill /> <span>Amlodipine 2.5mg - Morning dose</span>
            </div>
            <ChevronRight />
          </div>
          <div className="border p-2 flex justify-between my-1 rounded-md bg-gray-100 cursor-pointer">
            <div className="flex gap-2 items-center">
              <Pill /> <span>Metformin 500mg - Twice daily</span>
            </div>
            <ChevronRight />
          </div>
          <div className="border p-2 flex justify-between my-1 rounded-md bg-gray-100 cursor-pointer">
            <div className="flex gap-2 items-center">
              <Pill /> <span>Atorvastatine 10mg - Night dose</span>
            </div>
            <ChevronRight />
          </div>
          <div className="border p-2 flex justify-between my-1 rounded-md bg-gray-100 cursor-pointer">
            <div className="flex gap-2 items-center">
              <Pill /> <span>Varsatan 40mg- Morning dose</span>
            </div>
            <ChevronRight />
          </div>
        </div>
        <div className="text-center">
          <Button
            size="sm"
            variant="link"
            className="text-blue-700 hover:text-blue-600"
          >
            +View more
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AppointmentPage;
