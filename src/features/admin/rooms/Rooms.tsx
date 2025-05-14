import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Plus, Search, Filter, Eye, Edit, Home, Users, Wrench, CheckCircle, Calendar, Phone, DollarSign } from 'lucide-react';
import { Input } from "../../../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import KPICards from '../../../components/kpi-cards/KPICards';

const Rooms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl shadow-sm">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Room Management
          </h1>
          <p className="text-sm text-gray-500 mt-1">Manage and monitor hospital rooms efficiently</p>
        </div>
        <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all duration-200">
          <Plus className="h-4 w-4" />
          Add New Room
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICards kpis={{color: "blue", icon: Home, count: 24, title: "Total rooms"}} />
        <KPICards kpis={{color: "green", icon: Users, count: 18, title: "Occupied rooms"}} />
        <KPICards kpis={{color: "purple", icon: CheckCircle, count: 4, title: "Available rooms"}} />
        <KPICards kpis={{color: "orange", icon: Wrench, count: 2, title: "Under maintenance"}} />
      </div>

      {/* Filters and Search */}
      <Card className="border-none shadow-lg">
        <CardHeader className="bg-white border-b border-gray-100">
          <div className="flex flex-col gap-4">
            <CardTitle className="text-xl font-semibold text-gray-900">Room List</CardTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search rooms or patients..."
                  className="pl-10 w-full bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full bg-gray-50 border-gray-200">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Available">Available</SelectItem>
                  <SelectItem value="Occupied">Occupied</SelectItem>
                  <SelectItem value="Under Maintenance">Under Maintenance</SelectItem>
                  <SelectItem value="Reserved">Reserved</SelectItem>
                  <SelectItem value="Cleaning in Progress">Cleaning in Progress</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full bg-gray-50 border-gray-200">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="ICU">ICU</SelectItem>
                  <SelectItem value="General Ward">General Ward</SelectItem>
                  <SelectItem value="Maternity">Maternity</SelectItem>
                  <SelectItem value="Private">Private</SelectItem>
                  <SelectItem value="Isolation">Isolation</SelectItem>
                  <SelectItem value="Emergency">Emergency</SelectItem>
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
                  <TableHead className="font-semibold text-gray-900">Room No.</TableHead>
                  <TableHead className="font-semibold text-gray-900">Patient Name</TableHead>
                  <TableHead className="font-semibold text-gray-900">Room Type</TableHead>
                  <TableHead className="font-semibold text-gray-900">Bed ID</TableHead>
                  <TableHead className="font-semibold text-gray-900">Admission Date</TableHead>
                  <TableHead className="font-semibold text-gray-900">Gender</TableHead>
                  <TableHead className="font-semibold text-gray-900">Mobile</TableHead>
                  <TableHead className="font-semibold text-gray-900">Doctor</TableHead>
                  <TableHead className="font-semibold text-gray-900">Amount</TableHead>
                  <TableHead className="font-semibold text-gray-900">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium">203</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8 border-2 border-blue-100">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-blue-50 text-blue-600">JD</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">John Doe</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      ICU
                    </Badge>
                  </TableCell>
                  <TableCell>B-203-1</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>2024-03-28</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                      Male
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>+1 234-567-8900</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8 border-2 border-green-100">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-green-50 text-green-600">DS</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">Dr. Smith</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-green-600 font-medium">
                      <DollarSign className="h-4 w-4" />
                      <span>1,200/day</span>
                    </div>
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
                  <TableCell className="font-medium">205</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8 border-2 border-purple-100">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-purple-50 text-purple-600">JS</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">Jane Smith</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                      General
                    </Badge>
                  </TableCell>
                  <TableCell>B-205-2</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>2024-03-27</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                      Female
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>+1 234-567-8901</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8 border-2 border-green-100">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-green-50 text-green-600">DJ</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">Dr. Johnson</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-green-600 font-medium">
                      <DollarSign className="h-4 w-4" />
                      <span>800/day</span>
                    </div>
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

export default Rooms;
