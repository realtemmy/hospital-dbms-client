import { Calendar, Eye, FileStack, HeartPulse, User } from 'lucide-react';
import React from 'react'
import { Button } from '../../../components/ui/button';

const MedicalRecord = () => {
  return (
    <div>
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-600">Total Records</p>
              <p className="text-2xl font-semibold">48</p>
              <p className="text-sm text-blue-500">Last updated: Today</p>
            </div>
            <FileStack className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-600">Lab Results</p>
              <p className="text-2xl font-semibold">12</p>
              <p className="text-sm text-green-500">3 pending</p>
            </div>
            <HeartPulse className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-purple-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-600">Diagnoses</p>
              <p className="text-2xl font-semibold">8</p>
              <p className="text-sm text-purple-500">2 active conditions</p>
            </div>
            <FileStack className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-orange-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-600">Documents</p>
              <p className="text-2xl font-semibold">15</p>
              <p className="text-sm text-orange-500">5 categories</p>
            </div>
            <FileStack className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Medical History Timeline */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                Medical History Timeline
              </h3>
              <p className="text-sm text-slate-500">
                Showing recent medical events
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto justify-center"
              >
                <FileStack className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto justify-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Date Range
              </Button>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="space-y-6">
            {[
              {
                date: "Mar 15, 2024",
                type: "Lab Result",
                title: "Complete Blood Count",
                details: "All values within normal range",
                status: "Normal",
                doctor: "Dr. Smith",
              },
              {
                date: "Mar 1, 2024",
                type: "Diagnosis",
                title: "Type 2 Diabetes",
                details: "Initial diagnosis based on blood sugar levels",
                status: "Active",
                doctor: "Dr. Johnson",
              },
              {
                date: "Feb 15, 2024",
                type: "Procedure",
                title: "ECG",
                details: "Regular sinus rhythm",
                status: "Completed",
                doctor: "Dr. Davis",
              },
            ].map((event, index) => (
              <div key={index} className="relative pl-8 pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-full w-px bg-blue-200">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500" />
                </div>
                <div className="bg-white rounded-lg border p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                    <div>
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          event.type === "Lab Result"
                            ? "bg-green-100 text-green-800"
                            : event.type === "Diagnosis"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {event.type}
                      </span>
                      <h4 className="text-lg font-medium mt-2">
                        {event.title}
                      </h4>
                    </div>
                    <div className="text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-3">{event.details}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {event.doctor}
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        event.status === "Normal"
                          ? "bg-green-100 text-green-800"
                          : event.status === "Active"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lab Results */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg font-semibold">Lab Results</h3>
            <Button className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700">
              <FileStack className="w-4 h-4 mr-2" />
              Upload New Results
            </Button>
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
                    Test Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]"
                  >
                    Result
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]"
                  >
                    Range
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[100px]"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    date: "Mar 15, 2024",
                    test: "Blood Glucose",
                    result: "126 mg/dL",
                    range: "70-99 mg/dL",
                    status: "High",
                  },
                  {
                    date: "Mar 15, 2024",
                    test: "HbA1c",
                    result: "6.8%",
                    range: "4.0-5.6%",
                    status: "High",
                  },
                  {
                    date: "Mar 15, 2024",
                    test: "Cholesterol",
                    result: "185 mg/dL",
                    range: "<200 mg/dL",
                    status: "Normal",
                  },
                ].map((test, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {test.date}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {test.test}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {test.result}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {test.range}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          test.status === "Normal"
                            ? "bg-green-100 text-green-800"
                            : test.status === "High"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {test.status}
                      </span>
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

          {/* Mobile View for Lab Results */}
          <div className="md:hidden space-y-4">
            {[
              {
                date: "Mar 15, 2024",
                test: "Blood Glucose",
                result: "126 mg/dL",
                range: "70-99 mg/dL",
                status: "High",
              },
              {
                date: "Mar 15, 2024",
                test: "HbA1c",
                result: "6.8%",
                range: "4.0-5.6%",
                status: "High",
              },
              {
                date: "Mar 15, 2024",
                test: "Cholesterol",
                result: "185 mg/dL",
                range: "<200 mg/dL",
                status: "Normal",
              },
            ].map((test, index) => (
              <div key={index} className="bg-white rounded-lg border p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{test.test}</h4>
                    <p className="text-lg font-semibold text-gray-900">
                      {test.result}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      test.status === "Normal"
                        ? "bg-green-100 text-green-800"
                        : test.status === "High"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {test.status}
                  </span>
                </div>
                <div className="mt-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    {test.date}
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Medical Documents */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg font-semibold">Medical Documents</h3>
            <Button className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700">
              <FileStack className="w-4 h-4 mr-2" />
              Upload Document
            </Button>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                type: "Imaging",
                title: "Chest X-Ray",
                date: "Mar 10, 2024",
                fileType: "DICOM",
                size: "15.2 MB",
              },
              {
                type: "Report",
                title: "Annual Physical Report",
                date: "Mar 1, 2024",
                fileType: "PDF",
                size: "2.1 MB",
              },
              {
                type: "Prescription",
                title: "Medication List",
                date: "Feb 28, 2024",
                fileType: "PDF",
                size: "1.1 MB",
              },
            ].map((doc, index) => (
              <div key={index} className="bg-white border rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        doc.type === "Imaging"
                          ? "bg-purple-100 text-purple-800"
                          : doc.type === "Report"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {doc.type}
                    </span>
                    <h4 className="font-medium mt-2">{doc.title}</h4>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {doc.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {doc.fileType}
                    </span>
                    <span className="text-xs">{doc.size}</span>
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

export default MedicalRecord
