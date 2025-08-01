import { NavbarContent, NavbarMenuToggle } from "@heroui/react";

interface MobileToggleProps {
  isMenuOpen: boolean;
}

export const MobileToggle: React.FC<MobileToggleProps> = ({ isMenuOpen }) => (
  <NavbarContent className="sm:hidden" justify="start">
    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
  </NavbarContent>
);
