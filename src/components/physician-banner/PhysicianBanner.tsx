import { 
  CalendarDays, 
  Activity, 
  FileText
} from "lucide-react";
import { Button } from "../ui/button";

interface Doctor {
  firstName: string;
  lastName: string;
  gender: "male" | "female";
  specialty: string;
  experience: number;
  appointments: {
    today: number;
    week: number;
  };
}

interface PhysicianBannerProps {
  doctor: Doctor;
}

const PhysicianBanner = ({ doctor }: PhysicianBannerProps) => {
  // Get current time of day for greeting
  const getCurrentTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 18) return "afternoon";
    return "evening";
  };

  return (
    <div className="relative mb-8 overflow-hidden">
      {/* Background with patterns */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800">
        <svg
          className="absolute right-0 top-0 h-full w-1/2 translate-x-1/3 transform text-blue-700 opacity-20"
          fill="none"
          viewBox="0 0 400 400"
        >
          <defs>
            <pattern
              id="pattern-circles"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
            >
              <circle
                id="pattern-circle"
                cx="10"
                cy="10"
                r="8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              ></circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-400"></span>
              <span>{doctor.appointments.today} appointments today</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Good {getCurrentTimeOfDay()}, <br />
              Dr. {doctor.lastName}
            </h1>

            <p className="mt-3 text-lg text-blue-100">
              {doctor.specialty} with {doctor.experience} years of experience
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                <CalendarDays className="mr-2 h-4 w-4" />
                View Schedule
              </Button>
              <Button
                variant="outline"
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                <FileText className="mr-2 h-4 w-4" />
                Patient Records
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                <span>Heart Rate: 72 bpm</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5" />
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Doctor SVG Illustration */}
          <div className="flex justify-center md:justify-end">
            <div className="relative h-64 w-64 md:h-72 md:w-72">
              {/* Abstract shapes */}
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-blue-500 opacity-20"></div>
              <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-blue-300 opacity-20"></div>
              <div className="absolute bottom-12 left-12 h-8 w-8 rounded-full bg-blue-400 opacity-30"></div>

              {/* SVG Doctor illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                {doctor.gender === "female" ? (
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 500 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Female doctor SVG */}
                    <g>
                      <path
                        d="M240 400 L260 400 L270 320 L230 320 Z"
                        fill="#f0f0f0"
                      />
                      <path
                        d="M180 285 C180 285, 220 310, 250 310 C280 310, 320 285, 320 285 L310 400 L190 400 Z"
                        fill="#2563eb"
                      />
                      <path
                        d="M200 190 C200 190, 230 220, 250 220 C270 220, 300 190, 300 190 L290 285 C290 285, 270 310, 250 310 C230 310, 210 285, 210 285 Z"
                        fill="white"
                      />
                      <ellipse
                        cx="250"
                        cy="150"
                        rx="60"
                        ry="70"
                        fill="#ffe4c4"
                      />
                      <path
                        d="M190 150 C190 150, 180 220, 200 230 L200 190 Z"
                        fill="#ffe4c4"
                      />
                      <path
                        d="M310 150 C310 150, 320 220, 300 230 L300 190 Z"
                        fill="#ffe4c4"
                      />
                      <path
                        d="M250 230 L250 265"
                        stroke="#000"
                        strokeWidth="2"
                      />
                      <path
                        d="M220 250 L280 250"
                        stroke="#000"
                        strokeWidth="2"
                      />
                      <path
                        d="M190 160 C190 160, 210 80, 250 80 C290 80, 310 160, 310 160 Z"
                        fill="#964B00"
                      />
                      <circle cx="225" cy="140" r="5" fill="#000" />
                      <circle cx="275" cy="140" r="5" fill="#000" />
                      <path
                        d="M240 170 C240 170, 250 180, 260 170"
                        stroke="#000"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M210 125 C210 125, 225 115, 240 125"
                        stroke="#000"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M260 125 C260 125, 275 115, 290 125"
                        stroke="#000"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M220 190 C220 190, 240 200, 250 200 C260 200, 280 190, 280 190"
                        stroke="#fff"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        d="M210 285 L190 400"
                        stroke="#2563eb"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        d="M290 285 L310 400"
                        stroke="#2563eb"
                        strokeWidth="4"
                        fill="none"
                      />
                    </g>
                  </svg>
                ) : (
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 500 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Male doctor SVG */}
                    <g>
                      <path
                        d="M240 400 L260 400 L270 320 L230 320 Z"
                        fill="#f0f0f0"
                      />
                      <path
                        d="M180 285 C180 285, 220 310, 250 310 C280 310, 320 285, 320 285 L310 400 L190 400 Z"
                        fill="#2563eb"
                      />
                      <path
                        d="M200 190 C200 190, 230 220, 250 220 C270 220, 300 190, 300 190 L290 285 C290 285, 270 310, 250 310 C230 310, 210 285, 210 285 Z"
                        fill="white"
                      />
                      <ellipse
                        cx="250"
                        cy="150"
                        rx="60"
                        ry="70"
                        fill="#ffe4c4"
                      />
                      <path
                        d="M190 150 C190 150, 180 220, 200 230 L200 190 Z"
                        fill="#ffe4c4"
                      />
                      <path
                        d="M310 150 C310 150, 320 220, 300 230 L300 190 Z"
                        fill="#ffe4c4"
                      />
                      <path
                        d="M250 230 L250 265"
                        stroke="#000"
                        strokeWidth="2"
                      />
                      <path
                        d="M220 250 L280 250"
                        stroke="#000"
                        strokeWidth="2"
                      />
                      <path
                        d="M190 120 C190 120, 210 80, 250 80 C290 80, 310 120, 310 120 Z"
                        fill="#000"
                      />
                      <circle cx="225" cy="140" r="5" fill="#000" />
                      <circle cx="275" cy="140" r="5" fill="#000" />
                      <path
                        d="M240 170 C240 170, 250 180, 260 170"
                        stroke="#000"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M210 125 C210 125, 225 115, 240 125"
                        stroke="#000"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M260 125 C260 125, 275 115, 290 125"
                        stroke="#000"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M230 170 C230 170, 240 175, 250 175 C260 175, 270 170, 270 170"
                        stroke="#000"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M210 285 L190 400"
                        stroke="#2563eb"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        d="M290 285 L310 400"
                        stroke="#2563eb"
                        strokeWidth="4"
                        fill="none"
                      />
                    </g>
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave shape at bottom */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          fill="none"
        >
          <path
            fill="#f8fafc"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,122.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default PhysicianBanner; 