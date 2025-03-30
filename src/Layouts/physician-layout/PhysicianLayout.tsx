import { Fragment } from "react/jsx-runtime";
import { Outlet } from "react-router";

import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import AppSidebar from "../../components/app-sidebar/AppSidebar";

const PhysicianLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
      <Outlet />
    </Fragment>
  );
};

export default PhysicianLayout;
