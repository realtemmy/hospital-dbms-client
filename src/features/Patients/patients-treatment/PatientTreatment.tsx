import { Calendar, CalendarDays, Edit, Eye, FileStack, HeartPulse } from 'lucide-react';
import { Button } from '../../../components/ui/button';

const PatientTreatment = () => {
  return (
    <div>
      {/* Treatment Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-600">Active Treatments</p>
              <p className="text-2xl font-semibold">4</p>
              <p className="text-sm text-blue-500">
                2 medications, 2 therapies
              </p>
            </div>
            <HeartPulse className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-600">Completed</p>
              <p className="text-2xl font-semibold">12</p>
              <p className="text-sm text-green-500">Last: 2 weeks ago</p>
            </div>
            <FileStack className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-yellow-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-600">Next Review</p>
              <p className="text-2xl font-semibold">Mar 28</p>
              <p className="text-sm text-yellow-500">In 2 weeks</p>
            </div>
            <CalendarDays className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-purple-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-600">Success Rate</p>
              <p className="text-2xl font-semibold">85%</p>
              <p className="text-sm text-purple-500">Above average</p>
            </div>
            <HeartPulse className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Current Treatment Plan */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Current Treatment Plan</h3>
              <p className="text-sm text-slate-500">Started: Jan 15, 2024</p>
            </div>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
              <Edit className="w-4 h-4 mr-2" />
              Update Plan
            </Button>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Active Medications */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                <FileStack className="w-5 h-5 text-blue-500" />
                Active Medications
              </h4>
              <div className="space-y-3">
                {[
                  {
                    name: "Metformin",
                    dosage: "500mg",
                    frequency: "Twice daily",
                    startDate: "Jan 2024",
                    nextRefill: "Mar 28",
                    status: "Active",
                    notes: "Take with meals",
                  },
                  {
                    name: "Lisinopril",
                    dosage: "10mg",
                    frequency: "Once daily",
                    startDate: "Feb 2024",
                    nextRefill: "Apr 15",
                    status: "Active",
                    notes: "Take in the morning",
                  },
                ].map((med, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h5 className="font-semibold text-blue-900">
                          {med.name}
                        </h5>
                        <p className="text-sm text-blue-700">
                          {med.dosage} - {med.frequency}
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {med.status}
                      </span>
                    </div>
                    <div className="text-sm text-blue-600">
                      <p>Started: {med.startDate}</p>
                      <p>Next Refill: {med.nextRefill}</p>
                      <p className="mt-1 text-blue-700">{med.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Therapies */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-purple-500" />
                Active Therapies
              </h4>
              <div className="space-y-3">
                {[
                  {
                    type: "Physical Therapy",
                    frequency: "Twice weekly",
                    provider: "Dr. Sarah Johnson",
                    nextSession: "Mar 15, 2024",
                    progress: "Good",
                    notes: "Focus on lower back exercises",
                  },
                  {
                    type: "Nutritional Counseling",
                    frequency: "Monthly",
                    provider: "Dr. Michael Chen",
                    nextSession: "Mar 28, 2024",
                    progress: "Excellent",
                    notes: "Following diabetic diet plan",
                  },
                ].map((therapy, index) => (
                  <div key={index} className="bg-purple-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h5 className="font-semibold text-purple-900">
                          {therapy.type}
                        </h5>
                        <p className="text-sm text-purple-700">
                          {therapy.frequency}
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                        {therapy.progress}
                      </span>
                    </div>
                    <div className="text-sm text-purple-600">
                      <p>Provider: {therapy.provider}</p>
                      <p>Next Session: {therapy.nextSession}</p>
                      <p className="mt-1 text-purple-700">{therapy.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Treatment History */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">Treatment History</h3>
          <div className="flex gap-2">
            <Button variant="outline">
              <FileStack className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">Export</Button>
          </div>
        </div>
        <div className="p-4">
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[160px]"
                  >
                    Treatment
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[140px]"
                  >
                    Provider
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px]"
                  >
                    Outcome
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[80px]"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    date: "Feb 15, 2024",
                    treatment: "Antibiotic Therapy",
                    provider: "Dr. Smith",
                    status: "Completed",
                    outcome: "Infection cleared",
                  },
                  {
                    date: "Jan 28, 2024",
                    treatment: "Physical Therapy",
                    provider: "Dr. Johnson",
                    status: "Completed",
                    outcome: "Improved mobility",
                  },
                  {
                    date: "Jan 15, 2024",
                    treatment: "Dietary Changes",
                    provider: "Dr. Chen",
                    status: "Completed",
                    outcome: "Weight reduction achieved",
                  },
                ].map((treatment, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {treatment.date}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {treatment.treatment}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {treatment.provider}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          treatment.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : treatment.status === "Cancelled"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {treatment.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900">
                      {treatment.outcome}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View for Treatment History */}
          <div className="md:hidden space-y-4">
            {[
              {
                date: "Feb 15, 2024",
                treatment: "Antibiotic Therapy",
                provider: "Dr. Smith",
                status: "Completed",
                outcome: "Infection cleared",
              },
              {
                date: "Jan 28, 2024",
                treatment: "Physical Therapy",
                provider: "Dr. Johnson",
                status: "Completed",
                outcome: "Improved mobility",
              },
              {
                date: "Jan 15, 2024",
                treatment: "Dietary Changes",
                provider: "Dr. Chen",
                status: "Completed",
                outcome: "Weight reduction achieved",
              },
            ].map((treatment, index) => (
              <div key={index} className="bg-white rounded-lg border p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {treatment.treatment}
                    </h4>
                    <p className="text-lg font-semibold text-gray-900">
                      {treatment.outcome}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      treatment.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : treatment.status === "Cancelled"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {treatment.status}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    {treatment.date}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientTreatment
