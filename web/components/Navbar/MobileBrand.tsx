import { NavbarContent, NavbarBrand } from "@heroui/react";
import { RepoReviverLogo } from "./RepoReviverLogo";

export const MobileBrand = () => (
  <NavbarContent className="sm:hidden pr-3" justify="center">
    <NavbarBrand>
      <RepoReviverLogo />
    </NavbarBrand>
  </NavbarContent>
);
