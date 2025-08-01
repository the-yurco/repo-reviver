import { NavbarMenu, NavbarMenuItem, Link } from "@heroui/react";

export const MobileMenu = () => {
  const menuItems = ["Watched", "Archived", "Settings", "Log Out"];

  return (
    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            className="w-full"
            color={index === menuItems.length - 1 ? "danger" : "foreground"}
            href="#"
            size="lg"
          >
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};
