import { Outlet } from "react-router";
import { 
  User, 
  CalendarDays, 
  LayoutDashboard,
  FileText,
  Heart,
  MessageSquare,
  LogOut
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";

const PatientLayout = () => {
  const sidebarItems = [
    {
      icon: LayoutDashboard,
      text: "Dashboard",
      path: "/patient",
    },
    {
      icon: CalendarDays,
      text: "My Appointments",
      path: "/patient/appointments",
    },
    {
      icon: FileText,
      text: "Medical Records",
      path: "/patient/medical-records",
    },
    {
      icon: User,
      text: "My Profile",
      path: "/patient/profile",
    },
    {
      icon: Heart,
      text: "Health Tracking",
      path: "/patient/health-tracking",
    },
    {
      icon: MessageSquare,
      text: "Messages",
      path: "/patient/messages",
    }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50">
        <div className="flex flex-col flex-grow bg-white border-r shadow-sm">
          <div className="h-16 flex items-center px-4 border-b">
            <h1 className="font-bold text-xl text-blue-600">Patient Portal</h1>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="px-2 py-4 space-y-1">
              {sidebarItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="flex items-center px-4 py-3 text-sm font-medium rounded-md hover:bg-blue-50 hover:text-blue-700"
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.text}
                </a>
              ))}
            </nav>
          </div>
          <div className="p-4 border-t">
            <a
              href="/"
              className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-red-600 hover:bg-red-50"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:pl-64 flex flex-col flex-1">
        {/* Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <h2 className="text-lg font-medium">Patient Dashboard</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-blue-600"></span>
              <button className="text-gray-500 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>PT</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <div className="text-sm font-medium">Ahmed Ali</div>
                <div className="text-xs text-gray-500">ahmed@example.com</div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PatientLayout; 