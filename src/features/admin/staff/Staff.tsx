import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Search,
  X,
  Filter,
  UserPlus,
  Phone,
  Mail,
  Building,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Badge } from "../../../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../../components/ui/dialog";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";

import PreviewStaffProfile from "../../../components/staff-profile-preview/PreviewStaffProfile";

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

  // Define departments
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

  // Staff data with example entries
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

  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  // Filter staff based on search and filter criteria
  const filteredStaff = staffMembers.filter((staff) => {
    const matchesSearch =
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" || staff.category === categoryFilter;
    const matchesDepartment =
      departmentFilter === "all" || staff.department === departmentFilter;

    return matchesSearch && matchesCategory && matchesDepartment;
  });

  // Show staff details

  // Get category name and color
  const getCategoryInfo = (categoryId: string) => {
    const category = staffCategories.find((cat) => cat.id === categoryId);
    return category || { name: "Unknown", color: "bg-gray-100 text-gray-800" };
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col space-y-4">
        {/* Header with title and add button */}
        <div className="flex justify-between items-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredStaff.map((staff) => {
            const categoryInfo = getCategoryInfo(staff.category);
            return (
              <Card
                key={staff.id}
                className="overflow-hidden hover:shadow-md transition-shadow"
              >
                <CardHeader className="p-4 pb-0">
                  <div className="flex justify-between items-start">
                    <Badge className={categoryInfo.color}>
                      {categoryInfo.name}
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
                      <span className="text-gray-600">
                        {staff.email || "Not provided"}
                      </span>
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
          })}

          {filteredStaff.length === 0 && (
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

      {/* Staff Details Dialog */}
    </div>
  );
};

export default Staff;
