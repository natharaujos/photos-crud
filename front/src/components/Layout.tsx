import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSideBar";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <SidebarProvider>
      <AppSidebar setOption={setSelectedOption} option={selectedOption} />
      <main className="flex items-start justify-center">{children}</main>
    </SidebarProvider>
  );
}
