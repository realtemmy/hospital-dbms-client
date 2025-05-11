import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Stethoscope, 
  FileText, 
  Pill, 
  Clock, 
  Calendar, 
  Heart, 
  Activity, 
  Thermometer, 
  Scale, 
  AlertCircle,
  CheckCircle2,
  XCircle,
  Plus
} from 'lucide-react';

type VitalSign = {
  name: string;
  value: string;
  unit: string;
  status: 'normal' | 'high' | 'low';
  icon: React.ElementType;
};

type Symptom = {
  id: string;
  name: string;
  severity: 'mild' | 'moderate' | 'severe';
  duration: string;
  notes?: string;
};

type Diagnosis = {
  id: string;
  condition: string;
  confidence: number;
  notes: string;
  date: Date;
};

type Treatment = {
  id: string;
  type: 'medication' | 'procedure' | 'lifestyle';
  name: string;
  dosage?: string;
  frequency?: string;
  duration: string;
  notes?: string;
};

const Diagnosis = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock patient data
  const patient = {
    id: 'P12345',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    bloodType: 'O+',
    allergies: ['Penicillin', 'Peanuts'],
    chronicConditions: ['Hypertension', 'Type 2 Diabetes'],
    lastVisit: new Date(2024, 2, 15),
  };

  // Mock vital signs
  const vitalSigns: VitalSign[] = [
    { name: 'Blood Pressure', value: '120/80', unit: 'mmHg', status: 'normal', icon: Activity },
    { name: 'Heart Rate', value: '72', unit: 'bpm', status: 'normal', icon: Heart },
    { name: 'Temperature', value: '37.0', unit: '°C', status: 'normal', icon: Thermometer },
    { name: 'Weight', value: '75', unit: 'kg', status: 'normal', icon: Scale },
  ];

  // Mock symptoms
  const symptoms: Symptom[] = [
    { id: '1', name: 'Fever', severity: 'moderate', duration: '3 days', notes: 'Temperature ranging from 38-39°C' },
    { id: '2', name: 'Cough', severity: 'mild', duration: '5 days', notes: 'Dry cough, worse at night' },
    { id: '3', name: 'Fatigue', severity: 'moderate', duration: '4 days' },
  ];

  // Mock diagnoses
  const diagnoses: Diagnosis[] = [
    {
      id: '1',
      condition: 'Acute Bronchitis',
      confidence: 85,
      notes: 'Based on symptoms and examination. Recommend chest X-ray if symptoms persist.',
      date: new Date(2024, 2, 20),
    },
  ];

  // Mock treatments
  const treatments: Treatment[] = [
    {
      id: '1',
      type: 'medication',
      name: 'Amoxicillin',
      dosage: '500mg',
      frequency: '3 times daily',
      duration: '7 days',
      notes: 'Take with food',
    },
    {
      id: '2',
      type: 'lifestyle',
      name: 'Rest and Hydration',
      duration: 'Until symptoms resolve',
      notes: 'Increase fluid intake, get adequate rest',
    },
  ];

  const getVitalSignStatusColor = (status: VitalSign['status']) => {
    switch (status) {
      case 'normal':
        return 'bg-green-100 text-green-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'low':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSymptomSeverityColor = (severity: Symptom['severity']) => {
    switch (severity) {
      case 'mild':
        return 'bg-green-100 text-green-800';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'severe':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="h-full p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-xl md:text-2xl font-bold">Patient Diagnosis</h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            <FileText className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button className="w-full sm:w-auto">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Save Diagnosis
          </Button>
        </div>
      </div>

      {/* Patient Overview */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold">{patient.name}</h2>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                  <span>ID: {patient.id}</span>
                  <span>•</span>
                  <span>{patient.age} years</span>
                  <span>•</span>
                  <span>{patient.gender}</span>
                  <span>•</span>
                  <span>Blood Type: {patient.bloodType}</span>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <Clock className="h-4 w-4 inline mr-1" />
              Last Visit: {patient.lastVisit.toLocaleDateString()}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Allergies</h3>
              <div className="flex flex-wrap gap-2">
                {patient.allergies.map((allergy, index) => (
                  <Badge key={index} variant="destructive">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {allergy}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Chronic Conditions</h3>
              <div className="flex flex-wrap gap-2">
                {patient.chronicConditions.map((condition, index) => (
                  <Badge key={index} variant="secondary">
                    <Activity className="h-3 w-3 mr-1" />
                    {condition}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Vital Signs */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Vital Signs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {vitalSigns.map((vital, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <vital.icon className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium">{vital.name}</p>
                      <p className="text-xl md:text-2xl font-semibold">
                        {vital.value}
                        <span className="text-sm text-gray-500 ml-1">{vital.unit}</span>
                      </p>
                    </div>
                  </div>
                  <Badge className={getVitalSignStatusColor(vital.status)}>
                    {vital.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Diagnosis Section */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Diagnosis Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
                <TabsTrigger value="diagnosis">Diagnosis</TabsTrigger>
                <TabsTrigger value="treatment">Treatment</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6 mt-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Current Symptoms</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {symptoms.map((symptom) => (
                      <div key={symptom.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{symptom.name}</p>
                          <p className="text-sm text-gray-500">{symptom.duration}</p>
                        </div>
                        <Badge className={getSymptomSeverityColor(symptom.severity)}>
                          {symptom.severity}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Current Diagnosis</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {diagnoses.map((diagnosis) => (
                      <div key={diagnosis.id} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{diagnosis.condition}</h4>
                          <Badge className="bg-blue-100 text-blue-800">
                            {diagnosis.confidence}% Confidence
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{diagnosis.notes}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          Diagnosed on {diagnosis.date.toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Current Treatment</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {treatments.map((treatment) => (
                      <div key={treatment.id} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          {treatment.type === 'medication' ? (
                            <Pill className="h-4 w-4 text-blue-600" />
                          ) : treatment.type === 'procedure' ? (
                            <Stethoscope className="h-4 w-4 text-blue-600" />
                          ) : (
                            <Activity className="h-4 w-4 text-blue-600" />
                          )}
                          <h4 className="font-medium">{treatment.name}</h4>
                        </div>
                        <div className="text-sm text-gray-600">
                          {treatment.dosage && (
                            <p>Dosage: {treatment.dosage}</p>
                          )}
                          {treatment.frequency && (
                            <p>Frequency: {treatment.frequency}</p>
                          )}
                          <p>Duration: {treatment.duration}</p>
                          {treatment.notes && (
                            <p className="text-gray-500 mt-1">{treatment.notes}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="symptoms" className="space-y-6 mt-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h3 className="font-medium">Record Symptoms</h3>
                    <Button className="w-full sm:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Symptom
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Symptom</label>
                        <Input placeholder="Enter symptom" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Severity</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select severity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mild">Mild</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="severe">Severe</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Duration</label>
                      <Input placeholder="e.g., 3 days" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Notes</label>
                      <Textarea placeholder="Additional details about the symptom" />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="diagnosis" className="space-y-6 mt-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h3 className="font-medium">Add Diagnosis</h3>
                    <Button className="w-full sm:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      New Diagnosis
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Condition</label>
                      <Input placeholder="Enter condition" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Confidence Level</label>
                      <Input type="number" min="0" max="100" placeholder="Enter confidence percentage" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Notes</label>
                      <Textarea placeholder="Additional notes about the diagnosis" />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="treatment" className="space-y-6 mt-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h3 className="font-medium">Prescribe Treatment</h3>
                    <Button className="w-full sm:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Treatment
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Treatment Type</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="medication">Medication</SelectItem>
                            <SelectItem value="procedure">Procedure</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <Input placeholder="Enter treatment name" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Dosage</label>
                        <Input placeholder="Enter dosage" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Frequency</label>
                        <Input placeholder="e.g., 3 times daily" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Duration</label>
                      <Input placeholder="e.g., 7 days" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Notes</label>
                      <Textarea placeholder="Additional instructions" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Diagnosis;
