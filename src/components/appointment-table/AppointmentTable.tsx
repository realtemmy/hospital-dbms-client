import { Clock, Download, Edit, Phone, Trash2, Ellipsis } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample usage: <AppointmentTable appointments={[{...}, {...}]} />

type Appointment = {
  name: string;
  gender: string;
  age: number;
  date: string;
  time: string;
  status: string;
  mobile: string;
  email: string;
  visitType: string;
  avatar?: string;
};

const AppointmentTable = ({
  appointments = [],
}: {
  appointments: Appointment[];
}) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div>
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <Label htmlFor="simple-search" className="sr-only">
                  Search
                </Label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 right-2 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <Input
                    type="text"
                    id="simple-search"
                    placeholder="Search"
                    className="pl-10 p-2 w-full text-sm rounded-lg dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </form>
            </div>

            <div className="w-full md:w-auto flex flex-col md:flex-row items-stretch md:items-center justify-end space-y-2 md:space-y-0 md:space-x-3 flex-shrink-0">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Download className="cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* Scrollable container */}
        <div className="overflow-x-auto overflow-y-auto max-h-[500px] rounded-md rounded-t-none border">
          <Table>
            {/* <TableCaption>Appointment list</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Patient Name</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Mobile</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Visit Type</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appt, idx) => (
                <TableRow key={idx}>
                  <TableCell className="max-w-[150px] flex items-center gap-1">
                    <Avatar>
                      <AvatarImage src={appt.avatar || ""} alt={appt.name} />
                      <AvatarFallback>
                        {appt.name?.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="truncate capitalize">{appt.name}</span>
                  </TableCell>
                  <TableCell className="capitalize">{appt.gender}</TableCell>
                  <TableCell>{appt.age}</TableCell>
                  <TableCell>{appt.date}</TableCell>
                  <TableCell className="flex items-center gap-1">
                    <Clock color="blue" size={18} /> <span>{appt.time}</span>
                  </TableCell>
                  <TableCell>{appt.status}</TableCell>
                  <TableCell className="flex items-center gap-1">
                    <Phone size={15} />
                    <span>{appt.mobile}</span>
                  </TableCell>
                  <TableCell className="truncate max-w-[100px]">
                    {appt.email}
                  </TableCell>
                  <TableCell>{appt.visitType}</TableCell>
                  <TableCell className="text-right flex justify-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="cursor-pointer">
                        <Ellipsis  />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuItem>Cancel appointment</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default AppointmentTable;
