import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSideBar";
import { useState } from "react";
import { MenuItems } from "@/shared/Enums";
import UsersTable from "./UsersTable/UsersTable";

export default function Layout() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <SidebarProvider>
      <AppSidebar setOption={setSelectedOption} option={selectedOption} />
      <main className="flex items-start justify-center">
        {selectedOption === MenuItems.HOME && <div>Hello Home!</div>}
        {selectedOption === MenuItems.USERS && <UsersTable />}
      </main>
    </SidebarProvider>
  );
}
