import * as React from "react";
import {
  GalleryVerticalEnd,
  LayoutDashboard,
  Calendar,
  Users,
  Clock,
  MessageSquare,
  FileText,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { Link } from "react-router";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarFooter,
} from "../ui/sidebar";

// This is sample data.
// Dashboard appointment list, patients: view, edit patient record, Schedule, Chats, Reports, Help etc.

export const AppSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar variant="floating" {...props} >
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Lighthouse Hospital</span>
                  <span className="text-xs text-muted-foreground">v1.0.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>


      <SidebarContent className="pt-4">
        <div className="px-4 mb-6">
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
        </div>

        <SidebarGroup>
          <SidebarMenu className="px-2 space-y-1">
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link
                  to="/doctor"
                  className="flex items-center space-x-3 font-medium"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  to="/doctor/appointments"
                  className="flex items-center space-x-3 font-medium"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Appointments</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  to="/doctor/patients"
                  className="flex items-center space-x-3 font-medium"
                >
                  <Users className="h-4 w-4" />
                  <span>Patients</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  to="/schedule"
                  className="flex items-center space-x-3 font-medium"
                >
                  <Clock className="h-4 w-4" />
                  <span>Schedule</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  to="/doctor/chat"
                  className="flex items-center space-x-3 font-medium"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Chats</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  to="/reports"
                  className="flex items-center space-x-3 font-medium"
                >
                  <FileText className="h-4 w-4" />
                  <span>Reports</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
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
