import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

function MenuBar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Users</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Photos</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}

export default MenuBar;
