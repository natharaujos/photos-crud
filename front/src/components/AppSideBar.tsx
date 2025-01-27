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
import { useNavigate } from "react-router-dom";

// Menu items.
const items = [
  {
    title: MenuItems.HOME,
    url: "/",
    icon: Home,
  },
  {
    title: MenuItems.USERS,
    url: "/user",
    icon: User,
  },
];

interface IAppSideBar {
  setOption: React.Dispatch<React.SetStateAction<string>>;
  option: string;
}

export function AppSidebar({ setOption, option }: IAppSideBar) {
  const navigate = useNavigate();

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
                      className={`${option === item.title ? "text-black" : ""}`}
                      onClick={() => navigate(item.url)}
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
