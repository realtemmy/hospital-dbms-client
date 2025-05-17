import { useState } from "react";
import {
  Search,
  Plus,
  X,
  Filter,
  UserPlus,
  Edit,
  Phone,
  Mail,
  Building,
  Check,
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
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { Label } from "../../../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";


const Staff = () => {
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
  const [staffMembers, setStaffMembers] = useState([
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
  ]);

  // State for the new staff member form
  const [newStaff, setNewStaff] = useState({
    id: "",
    name: "",
    category: "",
    department: "",
    specialty: "",
    qualification: "",
    contactNumber: "",
    email: "",
    status: "active",
    joinDate: "",
    schedule: "",
    address: "",
    emergencyContact: "",
    image: null,
  });

  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showStaffDetails, setShowStaffDetails] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStaff((prev) => ({ ...prev, [name]: value }));
  };

  // Handle select changes
  const handleSelectChange = (value, field) => {
    setNewStaff((prev) => ({ ...prev, [field]: value }));
  };

  // Generate a unique ID for new staff members
  const generateStaffId = () => {
    const lastId =
      staffMembers.length > 0
        ? parseInt(staffMembers[staffMembers.length - 1].id.substring(1))
        : 1000;
    return `S${lastId + 1}`;
  };

  // Add new staff member
  const addStaffMember = () => {
    // Basic validation
    if (!newStaff.name || !newStaff.category || !newStaff.department) {
      // Show error (you could add a proper error state here)
      alert("Please fill all required fields");
      return;
    }

    // Generate ID if not provided
    const staffToAdd = {
      ...newStaff,
      id: newStaff.id || generateStaffId(),
    };

    setStaffMembers((prev) => [...prev, staffToAdd]);
    setShowAddDialog(false);

    // Show success message
    setSuccessMessage("Staff member added successfully");
    setTimeout(() => setSuccessMessage(""), 3000);

    // Reset form
    setNewStaff({
      id: "",
      name: "",
      category: "",
      department: "",
      specialty: "",
      qualification: "",
      contactNumber: "",
      email: "",
      status: "active",
      joinDate: "",
      schedule: "",
      address: "",
      emergencyContact: "",
      image: null,
    });
  };

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
  const viewStaffDetails = (staff) => {
    setSelectedStaff(staff);
    setShowStaffDetails(true);
  };

  // Get category name and color
  const getCategoryInfo = (categoryId) => {
    const category = staffCategories.find((cat) => cat.id === categoryId);
    return category || { name: "Unknown", color: "bg-gray-100 text-gray-800" };
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col space-y-4">
        {/* Header with title and add button */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Hospital Staff Management</h1>
          <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogTrigger asChild>
              <Button className="flex items-center">
                <UserPlus className="mr-2 h-4 w-4" /> Add Staff Member
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Staff Member</DialogTitle>
                <DialogDescription>
                  Enter the details of the new staff member to add them to the
                  system.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Full Name*</Label>
                    <Input
                      id="name"
                      name="name"
                      value={newStaff.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="category">Category*</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange(value, "category")
                      }
                      value={newStaff.category}
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {staffCategories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="department">Department*</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange(value, "department")
                      }
                      value={newStaff.department}
                    >
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((department) => (
                          <SelectItem key={department} value={department}>
                            {department}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="specialty">Specialty</Label>
                    <Input
                      id="specialty"
                      name="specialty"
                      value={newStaff.specialty}
                      onChange={handleInputChange}
                      placeholder="e.g. Cardiac Surgery"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="qualification">Qualification</Label>
                    <Input
                      id="qualification"
                      name="qualification"
                      value={newStaff.qualification}
                      onChange={handleInputChange}
                      placeholder="e.g. MD, PhD"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="joinDate">Join Date</Label>
                    <Input
                      id="joinDate"
                      name="joinDate"
                      type="date"
                      value={newStaff.joinDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="contactNumber">Contact Number</Label>
                    <Input
                      id="contactNumber"
                      name="contactNumber"
                      value={newStaff.contactNumber}
                      onChange={handleInputChange}
                      placeholder="+1234567890"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={newStaff.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@hospital.org"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="schedule">Schedule</Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange(value, "schedule")
                    }
                    value={newStaff.schedule}
                  >
                    <SelectTrigger id="schedule">
                      <SelectValue placeholder="Select schedule" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Morning Shift">
                        Morning Shift
                      </SelectItem>
                      <SelectItem value="Day Shift">Day Shift</SelectItem>
                      <SelectItem value="Evening Shift">
                        Evening Shift
                      </SelectItem>
                      <SelectItem value="Night Shift">Night Shift</SelectItem>
                      <SelectItem value="Rotating Shifts">
                        Rotating Shifts
                      </SelectItem>
                      <SelectItem value="Regular Hours">
                        Regular Hours
                      </SelectItem>
                      <SelectItem value="On-Call">On-Call</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setShowAddDialog(false)}
                >
                  Cancel
                </Button>
                <Button onClick={addStaffMember}>Add Staff Member</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Success message */}
        {successMessage && (
          <div className="bg-green-100 border border-green-200 text-green-800 p-3 rounded-md flex items-center">
            <Check className="h-5 w-5 mr-2" />
            {successMessage}
          </div>
        )}

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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => viewStaffDetails(staff)}
                  >
                    View Profile
                  </Button>
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
      <Dialog open={showStaffDetails} onOpenChange={setShowStaffDetails}>
        <DialogContent className="sm:max-w-xl">
          {selectedStaff && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">Staff Profile</DialogTitle>
              </DialogHeader>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-2">
                    <AvatarImage
                      src={selectedStaff.image || ""}
                      alt={selectedStaff.name}
                    />
                    <AvatarFallback className="text-xl">
                      {selectedStaff.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <Badge
                    className={getCategoryInfo(selectedStaff.category).color}
                  >
                    {getCategoryInfo(selectedStaff.category).name}
                  </Badge>
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold">{selectedStaff.name}</h2>
                  <p className="text-gray-500">{selectedStaff.specialty}</p>

                  <Tabs defaultValue="info" className="mt-4">
                    <TabsList className="w-full grid grid-cols-3">
                      <TabsTrigger value="info">Basic Info</TabsTrigger>
                      <TabsTrigger value="contact">Contact</TabsTrigger>
                      <TabsTrigger value="work">Work Details</TabsTrigger>
                    </TabsList>

                    <TabsContent value="info" className="space-y-3 mt-3">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="font-medium">Staff ID:</div>
                        <div>{selectedStaff.id}</div>

                        <div className="font-medium">Department:</div>
                        <div>{selectedStaff.department}</div>

                        <div className="font-medium">Qualification:</div>
                        <div>
                          {selectedStaff.qualification || "Not specified"}
                        </div>

                        <div className="font-medium">Join Date:</div>
                        <div>{selectedStaff.joinDate || "Not specified"}</div>
                      </div>
                    </TabsContent>

                    <TabsContent value="contact" className="space-y-3 mt-3">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="font-medium">Email:</div>
                        <div>{selectedStaff.email}</div>

                        <div className="font-medium">Contact Number:</div>
                        <div>{selectedStaff.contactNumber}</div>

                        <div className="font-medium">Address:</div>
                        <div>{selectedStaff.address || "Not specified"}</div>

                        <div className="font-medium">Emergency Contact:</div>
                        <div>
                          {selectedStaff.emergencyContact || "Not specified"}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="work" className="space-y-3 mt-3">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="font-medium">Status:</div>
                        <div>
                          <Badge
                            variant={
                              selectedStaff.status === "active"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {selectedStaff.status === "active"
                              ? "Active"
                              : "Inactive"}
                          </Badge>
                        </div>

                        <div className="font-medium">Schedule:</div>
                        <div>{selectedStaff.schedule || "Not specified"}</div>

                        <div className="font-medium">Specialty:</div>
                        <div>{selectedStaff.specialty || "Not specified"}</div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline">
                  <Edit className="h-4 w-4 mr-2" /> Edit Profile
                </Button>
                <Button onClick={() => setShowStaffDetails(false)}>
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}


export default Staff;
