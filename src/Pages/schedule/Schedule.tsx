import React, { useState } from 'react';
import { Calendar } from '../../components/ui/calendar';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { ScrollArea } from '../../components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Badge } from '../../components/ui/badge';
import { Clock, Stethoscope, Search, Plus, Building2, Microscope, Activity, Heart, Brain, Bone } from 'lucide-react';

type Appointment = {
  id: string;
  patientName: string;
  doctorName: string;
  hospitalName: string;
  date: Date;
  time: string;
  type: 'checkup' | 'consultation' | 'follow-up' | 'emergency' | 'test';
  testType?: 'blood' | 'xray' | 'mri' | 'ct-scan' | 'ultrasound' | 'ecg' | 'urine' | 'stool';
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
};

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHospital, setSelectedHospital] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedTestType, setSelectedTestType] = useState('');
  const [appointmentType, setAppointmentType] = useState<'doctor' | 'test'>('doctor');

  // Mock data for hospitals
  const hospitals = [
    { id: '1', name: 'Central Medical Center', location: 'Downtown' },
    { id: '2', name: 'City General Hospital', location: 'Westside' },
    { id: '3', name: 'St. Mary\'s Medical Center', location: 'Eastside' },
  ];

  // Mock data for doctors
  const doctors = [
    { id: '1', name: 'Dr. Sarah Johnson', specialization: 'Cardiology', hospitalId: '1' },
    { id: '2', name: 'Dr. Michael Chen', specialization: 'Neurology', hospitalId: '1' },
    { id: '3', name: 'Dr. Emily Brown', specialization: 'Pediatrics', hospitalId: '2' },
  ];

  // Mock data for tests
  const testTypes = [
    { id: 'blood', name: 'Blood Test', icon: Activity, duration: '30 mins' },
    { id: 'xray', name: 'X-Ray', icon: Bone, duration: '45 mins' },
    { id: 'mri', name: 'MRI Scan', icon: Brain, duration: '1 hour' },
    { id: 'ct-scan', name: 'CT Scan', icon: Brain, duration: '45 mins' },
    { id: 'ultrasound', name: 'Ultrasound', icon: Microscope, duration: '30 mins' },
    { id: 'ecg', name: 'ECG', icon: Heart, duration: '20 mins' },
    { id: 'urine', name: 'Urine Test', icon: Microscope, duration: '15 mins' },
    { id: 'stool', name: 'Stool Test', icon: Microscope, duration: '15 mins' },
  ];

  // Mock data for appointments
  const appointments: Appointment[] = [
    {
      id: '1',
      patientName: 'John Doe',
      doctorName: 'Dr. Sarah Johnson',
      hospitalName: 'Central Medical Center',
      date: new Date(2024, 2, 20),
      time: '09:00 AM',
      type: 'checkup',
      status: 'scheduled',
      notes: 'Regular checkup appointment'
    },
    {
      id: '2',
      patientName: 'Jane Smith',
      doctorName: 'Dr. Michael Chen',
      hospitalName: 'Central Medical Center',
      date: new Date(2024, 2, 20),
      time: '10:30 AM',
      type: 'test',
      testType: 'mri',
      status: 'scheduled',
      notes: 'Brain MRI scan'
    },
    {
      id: '3',
      patientName: 'Robert Wilson',
      doctorName: 'Dr. Sarah Johnson',
      hospitalName: 'City General Hospital',
      date: new Date(2024, 2, 21),
      time: '02:00 PM',
      type: 'follow-up',
      status: 'scheduled',
      notes: 'Post-surgery follow-up'
    }
  ];

  const getAppointmentTypeColor = (type: Appointment['type']) => {
    switch (type) {
      case 'checkup':
        return 'bg-blue-100 text-blue-800';
      case 'consultation':
        return 'bg-purple-100 text-purple-800';
      case 'follow-up':
        return 'bg-green-100 text-green-800';
      case 'emergency':
        return 'bg-red-100 text-red-800';
      case 'test':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = 
      appointment.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.hospitalName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTab = selectedTab === 'upcoming' ? 
      appointment.status === 'scheduled' : 
      appointment.status === 'completed';

    return matchesSearch && matchesTab;
  });

  const filteredDoctors = doctors.filter(doctor => 
    !selectedHospital || doctor.hospitalId === selectedHospital
  );

  return (
    <div className="h-full p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-xl md:text-2xl font-bold">Schedule</h1>
        <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Appointment
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Calendar Section */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Schedule Appointment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="doctor" onValueChange={(value: string) => setAppointmentType(value as 'doctor' | 'test')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="doctor">Doctor Visit</TabsTrigger>
                <TabsTrigger value="test">Medical Test</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Hospital</label>
                <Select value={selectedHospital} onValueChange={setSelectedHospital}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select hospital" />
                  </SelectTrigger>
                  <SelectContent>
                    {hospitals.map(hospital => (
                      <SelectItem key={hospital.id} value={hospital.id}>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          <span>{hospital.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {appointmentType === 'doctor' ? (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Doctor</label>
                  <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredDoctors.map(doctor => (
                        <SelectItem key={doctor.id} value={doctor.id}>
                          <div className="flex items-center gap-2">
                            <Stethoscope className="h-4 w-4" />
                            <span>{doctor.name}</span>
                            <span className="text-gray-500">({doctor.specialization})</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Test Type</label>
                  <Select value={selectedTestType} onValueChange={setSelectedTestType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select test type" />
                    </SelectTrigger>
                    <SelectContent>
                      {testTypes.map(test => (
                        <SelectItem key={test.id} value={test.id}>
                          <div className="flex items-center gap-2">
                            <test.icon className="h-4 w-4" />
                            <span>{test.name}</span>
                            <span className="text-gray-500">({test.duration})</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date</label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Time</label>
                  <Input type="time" />
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Check Availability
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Appointments List */}
      <Card>
        <CardHeader>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <CardTitle className="text-lg md:text-xl">Appointments</CardTitle>
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-[250px] lg:w-[300px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search appointments..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full h-10 md:h-9"
                />
              </div>
              <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full md:w-auto">
                <TabsList className="w-full md:w-auto grid grid-cols-2 md:inline-flex">
                  <TabsTrigger value="upcoming" className="flex-1 md:flex-none">Upcoming</TabsTrigger>
                  <TabsTrigger value="completed" className="flex-1 md:flex-none">Completed</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] md:h-[400px] lg:h-[500px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex flex-col p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center justify-center w-16 h-16 bg-gray-100 rounded-lg shrink-0">
                      <span className="text-sm font-medium">
                        {appointment.date.toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="text-2xl font-bold">
                        {appointment.date.getDate()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium truncate text-base md:text-sm">{appointment.patientName}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
                        {appointment.type === 'test' ? (
                          <>
                            <Microscope className="h-4 w-4 shrink-0" />
                            <span className="truncate text-xs md:text-sm">{appointment.testType}</span>
                          </>
                        ) : (
                          <>
                            <Stethoscope className="h-4 w-4 shrink-0" />
                            <span className="truncate text-xs md:text-sm">{appointment.doctorName}</span>
                          </>
                        )}
                        <Building2 className="h-4 w-4 shrink-0" />
                        <span className="truncate text-xs md:text-sm">{appointment.hospitalName}</span>
                        <Clock className="h-4 w-4 shrink-0" />
                        <span className="text-xs md:text-sm">{appointment.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <Badge className={getAppointmentTypeColor(appointment.type)}>
                      <span className="text-xs md:text-sm">{appointment.type}</span>
                    </Badge>
                    <Button variant="outline" size="sm" className="h-8 md:h-7 text-xs md:text-sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default Schedule;
