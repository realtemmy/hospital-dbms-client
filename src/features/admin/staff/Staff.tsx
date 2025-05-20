import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Search,
  X,
  Filter,
  UserPlus,
  Building,
  Pencil,
  Eye,
} from "lucide-react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";


import StaffCard from "../../../components/staff-card/StaffCard";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../components/ui/tooltip";
import { Badge } from "../../../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";

export type Staff = {
  id: string;
  name: string;
  category: string;
  department: string;
  specialty: string;
  qualification: string;
  contactNumber: string;
  email: string;
  status: string;
  joinDate: string;
  schedule: string;
  address: string;
  emergencyContact: string;
  image: string | null;
};

const Staff = () => {
  const navigate = useNavigate();
  // Define staff categories
  const staffCategories = [
    { id: "doctor", name: "Doctors", color: "bg-blue-100 text-blue-800" },
    { id: "nurse", name: "Nurses", color: "bg-green-100 text-green-800" },
    {
      id: "specialist",
      name: "Specialists",
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: "administrative",
      name: "Administrative",
      color: "bg-amber-100 text-amber-800",
    },
    {
      id: "maintenance",
      name: "Maintenance",
      color: "bg-slate-100 text-slate-800",
    },
    { id: "security", name: "Security", color: "bg-red-100 text-red-800" },
    { id: "it", name: "IT", color: "bg-teal-100 text-teal-800" },
    { id: "other", name: "Other", color: "bg-gray-100 text-gray-800" },
  ];

  // // Define departments
  const departments = [
    "Emergency",
    "Surgery",
    "Pediatrics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "ICU",
    "Administration",
    "Facilities",
    "IT Support",
    "Security",
    "General",
    "Obstetrics",
    "Pharmacy",
  ];

  // // Staff data with example entries
  const staffMembers = [
    {
      id: "S1001",
      name: "Dr. Sarah Johnson",
      category: "doctor",
      department: "Cardiology",
      specialty: "Cardiac Surgery",
      qualification: "MD, PhD",
      contactNumber: "+1234567890",
      email: "sarah.johnson@hospital.org",
      status: "active",
      joinDate: "2020-05-12",
      schedule: "Morning Shift",
      address: "123 Medical Center Drive",
      emergencyContact: "+1987654321",
      image: null,
    },
    {
      id: "S1002",
      name: "Nurse Michael Chen",
      category: "nurse",
      department: "Emergency",
      specialty: "Trauma Care",
      qualification: "BSN, RN",
      contactNumber: "+1234567891",
      email: "michael.chen@hospital.org",
      status: "active",
      joinDate: "2021-03-15",
      schedule: "Rotating Shifts",
      address: "456 Health Avenue",
      emergencyContact: "+1987654322",
      image: null,
    },
    {
      id: "S1003",
      name: "Dr. James Wilson",
      category: "doctor",
      department: "Neurology",
      specialty: "Neurological Surgery",
      qualification: "MD",
      contactNumber: "+1234567892",
      email: "james.wilson@hospital.org",
      status: "active",
      joinDate: "2019-11-07",
      schedule: "Day Shift",
      address: "789 Wellness Boulevard",
      emergencyContact: "+1987654323",
      image: null,
    },
    {
      id: "S1004",
      name: "Emma Rodriguez",
      category: "administrative",
      department: "Administration",
      specialty: "Finance",
      qualification: "MBA",
      contactNumber: "+1234567893",
      email: "emma.rodriguez@hospital.org",
      status: "active",
      joinDate: "2022-01-20",
      schedule: "Regular Hours",
      address: "321 Hospital Lane",
      emergencyContact: "+1987654324",
      image: null,
    },
    {
      id: "S1005",
      name: "Robert Kim",
      category: "maintenance",
      department: "Facilities",
      specialty: "Equipment Maintenance",
      qualification: "Technical Certification",
      contactNumber: "+1234567894",
      email: "robert.kim@hospital.org",
      status: "active",
      joinDate: "2021-07-10",
      schedule: "Evening Shift",
      address: "654 Healthcare Street",
      emergencyContact: "+1987654325",
      image: null,
    },
    {
      id: "S1006",
      name: "Dr. Lisa Patel",
      category: "specialist",
      department: "Oncology",
      specialty: "Radiation Oncology",
      qualification: "MD, Specialist Certification",
      contactNumber: "+1234567895",
      email: "lisa.patel@hospital.org",
      status: "active",
      joinDate: "2020-09-25",
      schedule: "Regular Hours",
      address: "987 Medical Park",
      emergencyContact: "+1987654326",
      image: null,
    },
    {
      id: "S1007",
      name: "Daniel Brown",
      category: "security",
      department: "Security",
      specialty: "Main Entrance",
      qualification: "Security Certification",
      contactNumber: "+1234567896",
      email: "daniel.brown@hospital.org",
      status: "active",
      joinDate: "2022-03-05",
      schedule: "Night Shift",
      address: "135 Safety Road",
      emergencyContact: "+1987654327",
      image: null,
    },
    {
      id: "S1008",
      name: "Jessica Williams",
      category: "it",
      department: "IT Support",
      specialty: "Network Administration",
      qualification: "BS Computer Science",
      contactNumber: "+1234567897",
      email: "jessica.williams@hospital.org",
      status: "active",
      joinDate: "2021-05-15",
      schedule: "Regular Hours",
      address: "246 Tech Drive",
      emergencyContact: "+1987654328",
      image: null,
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col space-y-4">
        {/* Header with title and add button */}
        <div className="flex justify-between items-center flex-wrap">
          <h1 className="text-3xl font-bold">Hospital Staff Management</h1>
          <Button
            className="flex items-center"
            onClick={() => navigate("/admin/add-staff")}
          >
            <UserPlus className="mr-2 h-4 w-4" /> Add Staff Member
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              className="pl-10"
              placeholder="Search staff by name, ID or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter size={18} className="text-gray-500" />
            <Select onValueChange={setCategoryFilter} value={categoryFilter}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {staffCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Building size={18} className="text-gray-500" />
            <Select
              onValueChange={setDepartmentFilter}
              value={departmentFilter}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map((department) => (
                  <SelectItem key={department} value={department}>
                    {department}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Staff Cards Grid */}
        <div>
          <div className="hidden md:block rounded-lg border overflow-x-scroll bg-white">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
                  <TableHead className="font-semibold">Name</TableHead>
                  <TableHead className="font-semibold">Department</TableHead>
                  <TableHead className="font-semibold">
                    Specialization
                  </TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Qualification</TableHead>
                  <TableHead className="font-semibold">Contact</TableHead>
                  <TableHead className="font-semibold text-center">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staffMembers.map((staff) => (
                  <TableRow key={staff.id} className="hover:bg-gray-50/50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 ring-2 ring-gray-100">
                          <AvatarImage
                            src={staff.image || ""}
                            alt={staff.name}
                          />
                          <AvatarFallback>
                            {getInitials(staff.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className="font-medium truncate max-w-[150px] sm:max-w-[200px]"
                          title={staff.name}
                        >
                          {staff.name}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {staff.department}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {staff.specialty}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          staff.status === "active" ? "default" : "secondary"
                        }
                        className={`${
                          staff.status === "active" && "bg-green-800"
                        } font-medium`}
                      >
                        {staff.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {staff.qualification}
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <p
                          className="text-sm text-gray-600 truncate max-w-[150px] sm:max-w-[200px]"
                          title={staff.email}
                        >
                          {staff.email}
                        </p>
                        <p className="text-sm text-gray-600">
                          {staff.contactNumber}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center gap-3">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 hover:bg-gray-100"
                              >
                                <Eye className="h-4 w-4 text-gray-500" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>View Staff</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 hover:bg-gray-100"
                              >
                                <Pencil className="h-4 w-4 text-gray-500" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Edit Staff</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* Mobile */}
          <div className="md:hidden space-y-4">
            {staffMembers.map((staff) => (
              <StaffCard staff={staff} />
            ))}
          </div>

          {staffMembers.length === 0 && (
            <div className="col-span-full bg-gray-100 p-6 rounded-md flex flex-col items-center justify-center text-center">
              <div className="text-gray-400 mb-3">
                <X className="h-10 w-10 mx-auto" />
              </div>
              <h3 className="text-lg font-medium mb-1">
                No staff members found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Staff;
