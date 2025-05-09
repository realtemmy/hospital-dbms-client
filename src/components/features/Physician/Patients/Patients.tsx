import { useState, useEffect } from "react";
import { Search, Filter, UserRound, ChevronRight } from "lucide-react";
import PatientCard from "../../../../components/patient-card/PatientCard";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

// Define type for patient information
type PatientInfo = {
  name: string;
  email: string;
  timeSlot: string;
  date: string;
  address: string;
  mobile: string;
  bloodGroup: string;
  id: string;
};

const Patients = () => {
  // Mock patient data - would normally come from an API
  const patientsData = [
    {
      name: "Temiloluwa Oreoluwa",
      email: "temiloluwaogunti8@gmail.com",
      timeSlot: "10:30 - 11:00 AM",
      date: "Friday, June 26th",
      address: "3, road 103, Teachers-estate, Ibafo, Ogun state.",
      mobile: "8066771553",
      bloodGroup: "A+",
      id: "1234",
    },
    {
      name: "Realtemmy Akorede",
      email: "temmy4jamb@gmail.com",
      timeSlot: "11:00 - 11:30 AM",
      date: "Friday, June 26th",
      address:
        "9, Ayedogbon street, Olainukan, Isawo, Agric, Ikorodu, Lagos state",
      mobile: "8023456789",
      bloodGroup: "AB+",
      id: "1235",
    },
    {
      name: "Ifezzon Oluwashayo",
      email: "ifeoluwa@gmail.com",
      timeSlot: "11:30 - 12:00 PM",
      date: "Friday, June 26th",
      address: "3, road 103, Teachers-estate, Ibafo, Ogun state.",
      mobile: "8066771553",
      bloodGroup: "O-",
      id: "1236",
    },
    {
      name: "Dumbor David",
      email: "David@mail.com",
      timeSlot: "12:00 - 12:30 PM",
      date: "Friday, June 26th",
      address: "3, road 103, Teachers-estate, Ibafo, Ogun state.",
      mobile: "8012345678",
      bloodGroup: "B+",
      id: "1237",
    },
    {
      name: "Oluwatobi Temitope",
      email: "tobi@email.com",
      timeSlot: "12:30 - 1:00 PM",
      date: "Friday, June 26th",
      address: "3, road 103, Teachers-estate, Ibafo, Ogun state.",
      mobile: "8098765432",
      bloodGroup: "A-",
      id: "1238",
    },
    {
      name: "Adeola Oluwaseun",
      email: "adeola@email.com",
      timeSlot: "1:00 - 1:30 PM",
      date: "Friday, June 26th",
      address: "3, road 103, Teachers-estate, Ibafo, Ogun state.",
      mobile: "8062571401",
      bloodGroup: "AB-",
      id: "1239",
    },
  ];

  const [patients, setPatients] = useState<PatientInfo[]>(patientsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Filter patients based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setPatients(patientsData);
    } else {
      const filteredResults = patientsData.filter(
        (patient) =>
          patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          patient.id.includes(searchTerm)
      );
      setPatients(filteredResults);
    }
  }, [searchTerm]);

  // Handle sorting
  const handleSort = (sortBy: string) => {
    let sortedPatients = [...patients];
    
    switch (sortBy) {
      case "name":
        sortedPatients.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "timeSlot":
        sortedPatients.sort((a, b) => a.timeSlot.localeCompare(b.timeSlot));
        break;
      case "bloodGroup":
        sortedPatients.sort((a, b) => a.bloodGroup.localeCompare(b.bloodGroup));
        break;
      default:
        break;
    }
    
    setPatients(sortedPatients);
  };

  // Filter patients by blood group tab
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    
    if (value === "all") {
      setPatients(patientsData);
    } else {
      const filteredByBloodGroup = patientsData.filter(
        (patient) => patient.bloodGroup.toLowerCase().includes(value.toLowerCase())
      );
      setPatients(filteredByBloodGroup);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <UserRound className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Patients</h1>
            <p className="text-muted-foreground">
              Manage and view patient information
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search patients..."
              className="pl-8 w-full md:w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-1">
                <Filter className="h-4 w-4" />
                <span>Sort</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => handleSort("name")}>
                  By Name
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSort("timeSlot")}>
                  By Appointment Time
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSort("bloodGroup")}>
                  By Blood Group
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button className="gap-1">
            <span>Add Patient</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Patients</TabsTrigger>
          <TabsTrigger value="a">Group A</TabsTrigger>
          <TabsTrigger value="b">Group B</TabsTrigger>
          <TabsTrigger value="ab">Group AB</TabsTrigger>
          <TabsTrigger value="o">Group O</TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab} className="mt-0">
          {patients.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <UserRound className="h-12 w-12 text-muted-foreground/50 mb-3" />
              <h3 className="text-xl font-semibold">No patients found</h3>
              <p className="text-muted-foreground max-w-sm mx-auto mt-1">
                {searchTerm 
                  ? `No results for "${searchTerm}". Try a different search term.` 
                  : "No patients match the selected filter."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
              {patients.map((patient, index) => (
                <PatientCard key={index} patient={patient} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Patients;
