import { useState } from "react";
import { Outlet } from "react-router";
import {
  Search,
  Bell,
} from "lucide-react";
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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";

import { AdminSidebar } from "../../components/admin-sidebar/AdminSidebar";
import { NotificationPreview } from "../../components/Notification/Notification";

const AdminLayout = () => {


    const [notificationOpen, setNotificationOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleNotification = () => setNotificationOpen(!notificationOpen);

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

            <div className="flex items-center gap-2 md:w-1/3">
              <div className="relative w-full max-w-[300px] md:flex">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full pl-8 md:w-[300px] lg:w-[300px]"
                />
              </div>
            </div>

            <div className="ml-auto flex items-center gap-4">
              <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <div className="relative">
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-full border bg-background hover:bg-muted"
                  onClick={toggleNotification}
                >
                  <Bell className="h-4 w-4" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    3
                  </span>
                </button>

                {notificationOpen && (
                  <div className="absolute right-0 top-12 z-50">
                    <NotificationPreview />
                  </div>
                )}
              </div>

              <Separator orientation="vertical" className="h-8" />

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SS</AvatarFallback>
                  </Avatar>
                  <div className="hidden text-left md:block">
                    <p className="text-sm font-medium">Sarah Smith</p>
                    <p className="text-xs text-muted-foreground">Surgeon</p>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
