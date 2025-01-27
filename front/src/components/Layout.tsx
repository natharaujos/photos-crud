import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSideBar";
import { useState } from "react";
import { MenuItems } from "@/shared/Enums";

export default function Layout() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <SidebarProvider>
      <AppSidebar setOption={setSelectedOption} option={selectedOption} />
      <main>
        {selectedOption === MenuItems.HOME && <div>Hello Home!</div>}
        {selectedOption === MenuItems.USERS && <div>Hello Users!</div>}
      </main>
    </SidebarProvider>
  );
}
