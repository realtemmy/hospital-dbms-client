import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import {
  Plus,
  Search,
  FileText,
  Calendar,
  Clock,
  Eye,
  Printer,
  FileUp,
  Baby,
  Skull,
  ArrowUp,
  ArrowDown,
  Link,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { Input } from "../../../components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";

const Records = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl shadow-sm">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Birth & Death Records
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage birth and death records, certificates, and statistics
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <FileUp className="h-4 w-4" />
            Import Records
          </Button>
          <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all duration-200">
            <Plus className="h-4 w-4" />
            New Record
          </Button>
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-pink-50 to-white border-none shadow-md hover:shadow-lg transition-all duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-pink-600">
                  Total Births (This Month)
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-1">48</p>
                <div className="flex items-center text-green-600 text-sm mt-1">
                  <ArrowUp className="h-4 w-4" />
                  <span>12% increase</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center">
                <Baby className="h-6 w-6 text-pink-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-gray-50 to-white border-none shadow-md hover:shadow-lg transition-all duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Deaths (This Month)
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-1">12</p>
                <div className="flex items-center text-red-600 text-sm mt-1">
                  <ArrowDown className="h-4 w-4" />
                  <span>5% decrease</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Skull className="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-red-50 to-white border-none shadow-md hover:shadow-lg transition-all duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-red-600">
                  Infant Mortality Rate
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-1">0.8%</p>
                <div className="flex items-center text-green-600 text-sm mt-1">
                  <ArrowDown className="h-4 w-4" />
                  <span>0.2% decrease</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-md hover:shadow-lg transition-all duration-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">
                  Pending Certificates
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-1">8</p>
                <div className="flex items-center text-yellow-600 text-sm mt-1">
                  <Clock className="h-4 w-4" />
                  <span>Needs attention</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Records Tabs */}
      <Tabs defaultValue="birth" className="space-y-6">
        <TabsList className="bg-white p-1 rounded-lg shadow-sm">
          <TabsTrigger
            value="birth"
            className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 rounded-md"
          >
            <Baby className="h-4 w-4 mr-2" />
            Birth Records
          </TabsTrigger>
          <TabsTrigger
            value="death"
            className="data-[state=active]:bg-gray-50 data-[state=active]:text-gray-700 rounded-md"
          >
            <Skull className="h-4 w-4 mr-2" />
            Death Records
          </TabsTrigger>
        </TabsList>

        {/* Birth Records Tab */}
        <TabsContent value="birth">
          <Card className="border-none shadow-lg">
            <CardHeader className="bg-white border-b border-gray-100">
              <div className="flex flex-col gap-4">
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Birth Records
                </CardTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search birth records..."
                      className="pl-10 w-full bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-full bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Delivery Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="vaginal">Vaginal</SelectItem>
                      <SelectItem value="c-section">C-section</SelectItem>
                      <SelectItem value="forceps">Forceps</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Conditions</SelectItem>
                      <SelectItem value="healthy">Healthy</SelectItem>
                      <SelectItem value="underweight">Underweight</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
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
                      <TableHead className="font-semibold text-gray-900">
                        Birth ID
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Baby's Name
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Date & Time
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Gender
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Weight
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Delivery Type
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Condition
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Mother
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Doctor
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-gray-50 transition-colors">
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-gray-50 text-gray-700 border-gray-200"
                        >
                          B-2024-001
                        </Badge>
                      </TableCell>
                      <TableCell>Emma Johnson</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>2024-03-28 14:30</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-pink-50 text-pink-700 border-pink-200"
                        >
                          Female
                        </Badge>
                      </TableCell>
                      <TableCell>3.2 kg</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-700 border-green-200"
                        >
                          Vaginal
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                          Healthy
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6 border-2 border-blue-100">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className="bg-blue-50 text-blue-600">
                              SJ
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">Sarah Johnson</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6 border-2 border-green-100">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className="bg-green-50 text-green-600">
                              DS
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">Dr. Smith</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="hover:bg-blue-50 hover:text-blue-600"
                                  title="View Details"
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View Details</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="hover:bg-blue-50 hover:text-blue-600"
                                  title="Print Certificate"
                                >
                                  <Printer className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Print Certificate</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="hover:bg-blue-50 hover:text-blue-600"
                                  title="Link to Patient Record"
                                >
                                  <Link className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Link to Patient Record</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="hover:bg-blue-50 hover:text-blue-600"
                                  title="Special Follow-up"
                                >
                                  <AlertCircle className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Special Follow-up</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Death Records Tab */}
        <TabsContent value="death">
          <Card className="border-none shadow-lg">
            <CardHeader className="bg-white border-b border-gray-100">
              <div className="flex flex-col gap-4">
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Death Records
                </CardTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search death records..."
                      className="pl-10 w-full bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-full bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="icu">ICU</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                      <SelectItem value="surgery">Surgery</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="notified">Family Notified</SelectItem>
                      <SelectItem value="pending">
                        Pending Notification
                      </SelectItem>
                      <SelectItem value="autopsy">Autopsy Required</SelectItem>
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
                      <TableHead className="font-semibold text-gray-900">
                        Death ID
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Patient Name
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Patient ID
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Age
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Gender
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Date & Time
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Cause of Death
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Location
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Status
                      </TableHead>
                      <TableHead className="font-semibold text-gray-900">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-gray-50 transition-colors">
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-gray-50 text-gray-700 border-gray-200"
                        >
                          D-2024-001
                        </Badge>
                      </TableCell>
                      <TableCell>Robert Wilson</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-gray-50 text-gray-700 border-gray-200"
                        >
                          P-2024-001
                        </Badge>
                      </TableCell>
                      <TableCell>78</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="bg-blue-50 text-blue-700 border-blue-200"
                        >
                          Male
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>2024-03-28 09:15</span>
                        </div>
                      </TableCell>
                      <TableCell>Cardiac Arrest (ICD-10: I46.9)</TableCell>
                      <TableCell>ICU Room 302</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>Family Notified</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="hover:bg-blue-50 hover:text-blue-600"
                                  title="View Details"
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View Details</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="hover:bg-blue-50 hover:text-blue-600"
                                  title="Print Certificate"
                                >
                                  <Printer className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Print Certificate</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="hover:bg-blue-50 hover:text-blue-600"
                                  title="View Medical History"
                                >
                                  <FileText className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View Medical History</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="hover:bg-blue-50 hover:text-blue-600"
                                  title="View Audit Trail"
                                >
                                  <Clock className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View Audit Trail</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Records;
