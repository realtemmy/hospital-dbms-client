import { useState } from "react";
import { Outlet } from "react-router";
import { Search, Bell, ChevronDown } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";

import { AdminSidebar } from "../../components/admin-sidebar/AdminSidebar";


const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock data - Replace with actual data from your backend
  const adminInfo = {
    name: "Dr. Sarah Johnson",
    role: "Hospital Administrator",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };

    const recentActivities = [
      {
        id: 1,
        type: "admission",
        message: "New patient admitted to Ward 3",
        time: "5 mins ago",
      },
      {
        id: 2,
        type: "report",
        message: "Lab report uploaded for Patient #1234",
        time: "15 mins ago",
      },
      {
        id: 3,
        type: "emergency",
        message: "Emergency case received in ER",
        time: "20 mins ago",
      },
      {
        id: 4,
        type: "alert",
        message: "Low stock alert: Paracetamol",
        time: "1 hour ago",
      },
    ];

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
      open={sidebarOpen}
      onOpenChange={setSidebarOpen}
    >
      <AdminSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex w-full items-center px-4">
            <SidebarTrigger className="mr-2" />

            <div className="flex justify-between items-center w-full">
              {/* Logo and Hospital Name */}
              <div className="flex items-center">
                <img
                  src="https://thumbs.dreamstime.com/b/hospital-logo-icon-hospital-logo-icon-135146804.jpg"
                  alt="Hospital Logo"
                  className="h-10 w-auto"
                />
                <div className="ml-3 hidden sm:block">
                  <h1 className="text-xl font-bold text-gray-900 whitespace-nowrap">
                    City General Hospital
                  </h1>
                  <p className="text-sm text-gray-500 whitespace-nowrap">
                    Healthcare Management System
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Notifications */}
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none relative">
                      <Bell className="h-5 w-5" />
                      <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-0" align="end">
                    <div className="px-4 py-2 border-b">
                      <h3 className="text-sm font-semibold text-gray-900">
                        Notifications
                      </h3>
                    </div>
                    <div className="max-h-[60vh] overflow-y-auto">
                      {recentActivities.map((activity) => (
                        <div
                          key={activity.id}
                          className="px-4 py-3 hover:bg-gray-50 border-b last:border-0"
                        >
                          <p className="text-sm text-gray-900">
                            {activity.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {activity.time}
                          </p>
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>

                {/* Admin Profile */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center space-x-2 focus:outline-none">
                      <img
                        src={adminInfo.photo}
                        alt={adminInfo.name}
                        className="h-8 w-8 rounded-full"
                      />
                      <div className="hidden lg:block text-left">
                        <p className="text-sm font-medium text-gray-900 whitespace-nowrap">
                          {adminInfo.name}
                        </p>
                        <p className="text-xs text-gray-500 whitespace-nowrap">{adminInfo.role}</p>
                      </div>
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                    <DropdownMenuItem>Account Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        <main
          className={
            sidebarOpen ? "w-full md:w-[calc(100vw-20rem)]" : undefined
          }
        >
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
