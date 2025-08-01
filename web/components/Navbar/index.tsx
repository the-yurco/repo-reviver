"use client";

import React, { useState } from "react";
import { Navbar } from "@heroui/react";
import { MobileToggle } from "./MobileToggle";
import { MobileBrand } from "./MobileBrand";
import { DesktopNav } from "./DesktopsNav";
import { NavbarEnd } from "./NavbarEnd";
import { MobileMenu } from "./MobileMenu";

export default function SignedInNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="w-full bg-foreground dark:bg-background text-background dark:text-foreground"
      maxWidth="2xl"
    >
      <MobileToggle isMenuOpen={isMenuOpen} />
      <MobileBrand />
      <DesktopNav />
      <NavbarEnd />
      <MobileMenu />
    </Navbar>
  );
}
