import { Briefcase, Contact, Edit, FileStack, HeartPulse, User } from 'lucide-react';
import { Button } from '../../../components/ui/button';

import { Calendar } from 'lucide-react';

const PatientsProfile = () => {
  return (
    <div>
      {/* Personal Info Section */}
      <section className="bg-white shadow border rounded-lg overflow-hidden">
        <div className="mt-6 p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Demographics */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">
                Demographics
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500">Gender</p>
                  <p className="font-medium flex items-center gap-2">
                    <User size={16} />
                    Male
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Date of Birth</p>
                  <p className="font-medium flex items-center gap-2">
                    <Calendar size={16} />
                    12 Dec 1992
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Age</p>
                  <p className="font-medium">38 years</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Marital Status</p>
                  <p className="font-medium">Married</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Occupation</p>
                  <p className="font-medium flex items-center gap-2">
                    <Briefcase size={16} />
                    Accountant
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Language</p>
                  <p className="font-medium">English</p>
                </div>
                <div className='col-span-2'>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-medium">
                    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, blanditiis?
                  </p>
                </div>
              </div>
            </div>

            {/* Vital Statistics */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">
                Vital Statistics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-600 mb-1">Blood Type</p>
                  <p className="text-2xl font-bold text-blue-700">AB+</p>
                </div>
                <div className="col-span-1 bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-600 mb-1">Blood Pressure</p>
                  <p className="text-2xl font-bold text-green-700">124/80</p>
                </div>
                <div className="col-span-1 bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm text-purple-600 mb-1">Weight</p>
                  <p className="text-2xl font-bold text-purple-700">
                    92 <span className="text-base font-normal">kg</span>
                  </p>
                </div>
                <div className="col-span-1 bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-orange-600 mb-1">Height</p>
                  <p className="text-2xl font-bold text-orange-700">
                    175 <span className="text-base font-normal">cm</span>
                  </p>
                </div>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="text-sm text-yellow-600 mb-1">BMI Status</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-yellow-700">30.1</p>
                  <p className="text-sm font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                    Overweight
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row gap-2 mt-4 border-t pt-4">
              <Button
                variant="outline"
                className="flex-1 text-sm sm:text-base justify-center"
              >
                <FileStack className="w-4 h-4 mr-2" />
                Medical Records
              </Button>
              <Button
                variant="outline"
                className="flex-1 text-sm sm:text-base justify-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Appointment
              </Button>
              <Button
                variant="outline"
                className="flex-1 text-sm sm:text-base justify-center"
              >
                <HeartPulse className="w-4 h-4 mr-2" />
                View Lab Results
              </Button>
              <Button
                variant="outline"
                className="flex-1 text-sm sm:text-base justify-center"
              >
                <Contact className="w-4 h-4 mr-2" />
                Contact Patient
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Financial Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <section className="shadow-sm rounded-md">
          <div className="flex justify-between items-center border-b p-2">
            <h3 className="flex px-1">
              <Contact />
              <span className="ms-1 font-semibold">Contact Information</span>
            </h3>
            <Button variant="ghost" size="icon" className="w-6">
              <Edit />
            </Button>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-slate-500">Primary Phone</p>
                <p className="font-medium">+234 806-677-1553</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Secondary Phone</p>
                <p className="font-medium">+234 706-840-1238</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-slate-500">Email</p>
                <p className="font-medium">temiloluwaogunti8@gmail.com</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-slate-500">Address</p>
                <p className="font-medium">
                  3, road 103, Teachers estate, Ibafo, Ogun state.
                </p>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold mb-3">Emergency Contacts</h4>
              <div className="space-y-4">
                <div className="bg-slate-50 p-3 rounded">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm text-slate-500">Name</p>
                      <p className="font-medium">John Doe</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Relationship</p>
                      <p className="font-medium">Spouse</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Phone</p>
                      <p className="font-medium">+234 802-345-6789</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="font-medium">johndoe@email.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="shadow-sm rounded-md">
          <div className="flex justify-between items-center border-b p-2">
            <h3 className="flex px-1">
              <FileStack />
              <span className="ms-1 font-semibold">Financial Information</span>
            </h3>
            <Button variant="ghost" size="icon" className="w-6">
              <Edit />
            </Button>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Insurance Details</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500">Provider</p>
                  <p className="font-medium">National Health Insurance</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Policy Number</p>
                  <p className="font-medium">NHI-2024-123456</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Coverage Type</p>
                  <p className="font-medium">Comprehensive</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Expiry Date</p>
                  <p className="font-medium">31 Dec 2024</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold mb-2">Payment History</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                  <div>
                    <p className="font-medium">General Consultation</p>
                    <p className="text-sm text-slate-500">15 Mar 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$150.00</p>
                    <p className="text-sm text-green-600">Paid</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                  <div>
                    <p className="font-medium">Lab Tests</p>
                    <p className="text-sm text-slate-500">10 Mar 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$75.00</p>
                    <p className="text-sm text-orange-600">Pending</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-4 mt-4">
              <h4 className="font-semibold mb-2">Outstanding Balance</h4>
              <div className="bg-orange-50 p-3 rounded">
                <div className="flex justify-between items-center">
                  <p className="text-orange-800">Total Outstanding</p>
                  <p className="font-bold text-orange-800">$75.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Medical Information Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Blood Information & Vitals */}
        <section className="bg-white shadow rounded-lg overflow-hidden">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="flex items-center gap-2 font-semibold text-lg">
              <HeartPulse className="w-5 h-5 text-red-500" />
              Blood Information
            </h3>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Edit className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-lg p-3">
                <p className="text-sm text-red-600 mb-1">Blood Type</p>
                <p className="text-2xl font-bold text-red-700">AB+</p>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <p className="text-sm text-red-600 mb-1">Genotype</p>
                <p className="text-2xl font-bold text-red-700">AA</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-blue-600 mb-1">Last Donation</p>
                  <p className="text-lg font-semibold text-blue-700">
                    March 15, 2023
                  </p>
                </div>
                <div className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Eligible to donate
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-lg p-3">
                <p className="text-sm text-purple-600 mb-1">Blood Pressure</p>
                <p className="text-xl font-bold text-purple-700">120/80</p>
                <p className="text-xs text-purple-600">Last checked: Today</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3">
                <p className="text-sm text-purple-600 mb-1">Pulse Rate</p>
                <p className="text-xl font-bold text-purple-700">72 bpm</p>
                <p className="text-xs text-purple-600">Last checked: Today</p>
              </div>
            </div>
          </div>
        </section>

        {/* Allergies */}
        <section className="bg-white shadow rounded-lg overflow-hidden">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="flex items-center gap-2 font-semibold text-lg">
              <FileStack className="w-5 h-5 text-orange-500" />
              Allergies
            </h3>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Edit className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {[
                {
                  name: "Penicillin",
                  severity: "Severe",
                  reaction: "Anaphylaxis",
                },
                {
                  name: "Peanuts",
                  severity: "Moderate",
                  reaction: "Skin rash",
                },
                {
                  name: "Shellfish",
                  severity: "Mild",
                  reaction: "Nausea",
                },
              ].map((allergy, index) => (
                <div key={index} className="bg-orange-50 rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-orange-700">
                        {allergy.name}
                      </p>
                      <p className="text-sm text-orange-600">
                        Reaction: {allergy.reaction}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        allergy.severity === "Severe"
                          ? "bg-red-100 text-red-700"
                          : allergy.severity === "Moderate"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {allergy.severity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Medications */}
        <section className="bg-white shadow rounded-lg overflow-hidden">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="flex items-center gap-2 font-semibold text-lg">
              <FileStack className="w-5 h-5 text-emerald-500" />
              Current Medications
            </h3>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Edit className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {[
                {
                  name: "Metformin",
                  dosage: "500mg",
                  frequency: "Twice daily",
                  startDate: "Jan 2024",
                },
                {
                  name: "Levothyroxine",
                  dosage: "25mcg",
                  frequency: "Once daily",
                  startDate: "Dec 2023",
                },
                {
                  name: "Aspirin",
                  dosage: "81mg",
                  frequency: "Once daily",
                  startDate: "Feb 2024",
                },
              ].map((medication, index) => (
                <div key={index} className="bg-emerald-50 rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-emerald-700">
                        {medication.name}
                      </p>
                      <p className="text-sm text-emerald-600">
                        {medication.dosage} - {medication.frequency}
                      </p>
                    </div>
                    <span className="text-xs bg-emerald-100 text-emerald-700 font-medium px-2.5 py-0.5 rounded-full">
                      Since {medication.startDate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Chronic Conditions & Medical History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Chronic Conditions */}
        <section className="bg-white shadow rounded-lg overflow-hidden">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="flex items-center gap-2 font-semibold text-lg">
              <HeartPulse className="w-5 h-5 text-indigo-500" />
              Chronic Conditions
            </h3>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Edit className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {[
                {
                  condition: "Type 2 Diabetes",
                  diagnosed: "2020",
                  status: "Controlled",
                },
                {
                  condition: "Hypertension",
                  diagnosed: "2019",
                  status: "Monitoring",
                },
                {
                  condition: "Obesity",
                  diagnosed: "2018",
                  status: "Treatment",
                },
              ].map((condition, index) => (
                <div key={index} className="bg-indigo-50 rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-indigo-700">
                        {condition.condition}
                      </p>
                      <p className="text-sm text-indigo-600">
                        Diagnosed: {condition.diagnosed}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        condition.status === "Controlled"
                          ? "bg-green-100 text-green-700"
                          : condition.status === "Monitoring"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {condition.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Family History */}
        <section className="bg-white shadow rounded-lg overflow-hidden">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="flex items-center gap-2 font-semibold text-lg">
              <FileStack className="w-5 h-5 text-violet-500" />
              Family History
            </h3>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Edit className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {[
                {
                  condition: "Diabetes",
                  relation: "Mother",
                  age: "Onset at 45",
                },
                {
                  condition: "Hypertension",
                  relation: "Father",
                  age: "Onset at 50",
                },
                {
                  condition: "Heart Disease",
                  relation: "Grandfather",
                  age: "Onset at 60",
                },
              ].map((history, index) => (
                <div key={index} className="bg-violet-50 rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-violet-700">
                        {history.condition}
                      </p>
                      <p className="text-sm text-violet-600">
                        {history.relation} - {history.age}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PatientsProfile
