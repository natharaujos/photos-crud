import { Home, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { MenuItems } from "@/shared/Enums";

// Menu items.
const items = [
  {
    title: MenuItems.HOME,
    url: "#",
    icon: Home,
  },
  {
    title: MenuItems.USERS,
    url: "#",
    icon: User,
  },
];

interface IAppSideBar {
  setOption: React.Dispatch<React.SetStateAction<string>>;
  option: string;
}

export function AppSidebar({ setOption, option }: IAppSideBar) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  onClick={() => setOption(item.title)}
                  className={`${option === item.title ? "bg-gray-100" : ""}`}
                >
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={`${option === item.title ? "text-black" : ""}`}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
