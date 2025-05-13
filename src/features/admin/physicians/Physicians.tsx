import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Plus, Search, Filter, Eye, Pencil } from 'lucide-react';
import { Input } from "../../../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";



const physicians = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    department: "Cardiology",
    specialization: "Interventional Cardiology",
    status: "Available",
    experience: "15 years",
    email: "sarah.johnson@hospital.com",
    phone: "+1 (555) 123-4567",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    department: "Neurology",
    specialization: "Neurosurgeon",
    status: "In Surgery",
    experience: "12 years",
    email: "michael.chen@hospital.com",
    phone: "+1 (555) 234-5678",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    department: "Pediatrics",
    specialization: "Pediatric Oncology",
    status: "Available",
    experience: "8 years",
    email: "emily.rodriguez@hospital.com",
    phone: "+1 (555) 345-6789",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    department: "Orthopedics",
    specialization: "Joint Replacement",
    status: "On Leave",
    experience: "20 years",
    email: "james.wilson@hospital.com",
    phone: "+1 (555) 456-7890",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop"
  },
  {
    id: 5,
    name: "Dr. Lisa Patel",
    department: "Dermatology",
    specialization: "Cosmetic Dermatology",
    status: "Available",
    experience: "10 years",
    email: "lisa.patel@hospital.com",
    phone: "+1 (555) 567-8901",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    department: "Gastroenterology",
    specialization: "Digestive Diseases",
    status: "In Consultation",
    experience: "14 years",
    email: "robert.kim@hospital.com",
    phone: "+1 (555) 678-9012",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: 7,
    name: "Dr. Maria Garcia",
    department: "Obstetrics & Gynecology",
    specialization: "High-Risk Pregnancy",
    status: "Available",
    experience: "16 years",
    email: "maria.garcia@hospital.com",
    phone: "+1 (555) 789-0123",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
  },
  {
    id: 8,
    name: "Dr. David Thompson",
    department: "Ophthalmology",
    specialization: "Retinal Surgery",
    status: "In Surgery",
    experience: "18 years",
    email: "david.thompson@hospital.com",
    phone: "+1 (555) 890-1234",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
];

// Function to get initials from name
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
};

const Physicians = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Physicians Directory
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage and view all physicians in the hospital
          </p>
        </div>
        <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          Add New Physician
        </Button>
      </div>

      <Card className="border-none shadow-lg">
        <CardHeader className="bg-gray-50/50 border-b">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-semibold">Physicians List</CardTitle>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search physicians..."
                  className="pl-10 w-[300px] bg-white"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2 border-gray-200">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50/50 hover:bg-gray-50/50">
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">Department</TableHead>
                <TableHead className="font-semibold">Specialization</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Experience</TableHead>
                <TableHead className="font-semibold">Contact</TableHead>
                <TableHead className="font-semibold text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {physicians.map((physician) => (
                <TableRow key={physician.id} className="hover:bg-gray-50/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 ring-2 ring-gray-100">
                        <AvatarImage
                          src={physician.avatar}
                          alt={physician.name}
                        />
                        <AvatarFallback>
                          {getInitials(physician.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className="font-medium truncate max-w-[200px]"
                        title={physician.name}
                      >
                        {physician.name}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{physician.department}</TableCell>
                  <TableCell>{physician.specialization}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        physician.status === "Available"
                          ? "default"
                          : physician.status === "In Surgery"
                          ? "destructive"
                          : "secondary"
                      }
                      className="font-medium"
                    >
                      {physician.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{physician.experience}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p
                        className="text-sm text-gray-600 truncate max-w-[200px]"
                        title={physician.email}
                      >
                        {physician.email}
                      </p>
                      <p className="text-sm text-gray-600">{physician.phone}</p>
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
                            <p>View Physician</p>
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
                            <p>Edit Physician</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Physicians;
