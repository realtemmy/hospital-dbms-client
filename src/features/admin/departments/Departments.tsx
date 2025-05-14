import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Plus, Search, Users, Stethoscope, Clock, Building2, Phone, Mail, MapPin, Eye, Edit } from 'lucide-react';
import { Input } from "../../../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import KPICards from "../../../components/kpi-cards/KPICards";

const Departments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl shadow-sm">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Hospital Departments
          </h1>
          <p className="text-sm text-gray-500 mt-1">Manage and monitor hospital departments</p>
        </div>
        <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all duration-200">
          <Plus className="h-4 w-4" />
          Add New Department
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <KPICards kpis={{color: "blue", icon: Building2, count: 12, title: "Total Departments"}} />

        <KPICards kpis={{color: "green", icon: Users, count: 156, title: "Total staff"}} />

        <KPICards kpis={{color: "purple", icon: Stethoscope, count: 48, title: "Active Doctors"}} />

        <KPICards kpis={{color: "orange", icon: Clock, count: 15, title: "Avg. Wait Time (mins)"}} />
      </div>

      {/* Filters and Search */}
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-white border-b border-gray-100">
          <div className="flex flex-col gap-4">
            <CardTitle className="text-xl font-semibold text-gray-900">Department List</CardTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search departments..."
                  className="pl-10 w-full bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full bg-gray-50 border-gray-200">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="maintenance">Under Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 hover:bg-gray-50">
                  <TableHead className="font-semibold text-gray-900">Department</TableHead>
                  <TableHead className="font-semibold text-gray-900">Head of Department</TableHead>
                  <TableHead className="font-semibold text-gray-900">Staff Count</TableHead>
                  <TableHead className="font-semibold text-gray-900">Description</TableHead>
                  <TableHead className="font-semibold text-gray-900">Contact</TableHead>
                  <TableHead className="font-semibold text-gray-900">Status</TableHead>
                  <TableHead className="font-semibold text-gray-900">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-gray-50 transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Stethoscope className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Cardiology</p>
                        <p className="text-sm text-gray-500">Floor 2, Wing A</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8 border-2 border-blue-100">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-blue-50 text-blue-600">JD</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">Dr. John Smith</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      24 Staff
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm text-gray-600 max-w-[200px] truncate">
                      Specialized in heart conditions, offering advanced cardiac care and treatment.
                    </p>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>+1 234-567-8900</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span>cardio@hospital.com</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      Active
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="hover:bg-blue-50 hover:text-blue-600">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-blue-50 hover:text-blue-600">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50 transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Stethoscope className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">Neurology</p>
                        <p className="text-sm text-gray-500">Floor 3, Wing B</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8 border-2 border-purple-100">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-purple-50 text-purple-600">MJ</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">Dr. Mary Johnson</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                      18 Staff
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm text-gray-600 max-w-[200px] truncate">
                      Expert care for neurological disorders, brain and spinal cord conditions.
                    </p>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>+1 234-567-8901</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span>neuro@hospital.com</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      Active
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="hover:bg-blue-50 hover:text-blue-600">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-blue-50 hover:text-blue-600">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Departments;
