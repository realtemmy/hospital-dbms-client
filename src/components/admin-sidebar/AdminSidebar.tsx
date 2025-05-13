import * as React from "react";
import {
  GalleryVerticalEnd,
  LayoutDashboard,
  Users,
  HelpCircle,
  LogOut,
  CalendarDays,
  Settings,
  Hospital,
  TableOfContents,
  SquareLibrary,
  Handshake,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "../ui/sidebar";

// This is sample data.
// Dashboard appointment list, patients: view, edit patient record, Schedule, Chats, Reports, Help etc.

export const AdminSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const sidebarItems = [
    {
      icon: LayoutDashboard,
      text: "Dashboard",
      path: "/admin",
    },
    {
      icon: Users,
      text: "Doctors",
      path: "/admin/doctors",
    },
    {
      icon: UsersRound,
      text: "Patients",
      path: "/admin/patients",
    },
    {
      icon: CalendarDays,
      text: "Appointments",
      path: "/admin/appointments",
    },
    {
      icon: Hospital,
      text: "Rooms",
      path: "/admin/rooms",
    },
    {
      icon: TableOfContents,
      text: "Departments",
      path: "/admin/departments",
    },
    {
      icon: SquareLibrary,
      text: "Records",
      path: "/admin/records", //birth and death records
    },
    {
      icon: Handshake,
      text: "Staff",
      path: "/admin/staff",
    },
    {
      icon: Settings,
      text: "Settings",
      path: "/admin/settings",
    },
  ];
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12 border-2 border-primary/10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">Sarah Smith</p>
                    <div className="flex items-center">
                      <Badge
                        variant="outline"
                        className="text-xs px-2 py-0 bg-primary/5 text-primary"
                      >
                        Surgeon
                      </Badge>
                    </div>
                  </div>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarMenu className="px-2 space-y-1">
            {sidebarItems.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton
                  asChild
                  isActive={item.path === location.pathname}
                >
                  <Link
                    to={item.path}
                    className="flex items-center space-x-3 font-medium"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.text}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="mt-auto mb-4">
        <SidebarMenu className="px-2 space-y-1">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                to="/help"
                className="flex items-center space-x-3 font-medium"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Help & Support</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                to="/logout"
                className="flex items-center space-x-3 font-medium text-destructive"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
