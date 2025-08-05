import { NavbarContent, NavbarItem, Link, Divider } from "@heroui/react";
import { RepoReviverLogo } from "./RepoReviverLogo";
import { ArchiveIcon, EyeIcon } from "../Icons";

export const DesktopNav = () => {
  return (
    <NavbarContent className="hidden sm:flex gap-6" justify="start">
      <RepoReviverLogo />
      <Divider orientation="vertical" className="h-6 mx-2" />
      <NavbarItem className="flex items-center gap-1 hover:text-primary dark:hover:text-primary text-black/40 dark:text-white/40 ">
        <EyeIcon
          width={undefined}
          height={undefined}
          className=" pointer-events-none shrink-0"
          size={24}
        />
        <Link
          href="/watched"
          className="text-background/90 dark:text-foreground hover:text-primary dark:hover:text-primary transition-colors"
          underline="active"
        >
          Watched
        </Link>
      </NavbarItem>
      <NavbarItem className="flex items-center gap-1 hover:text-primary dark:hover:text-primary text-black/40 dark:text-white/40 ">
        <ArchiveIcon
          width={undefined}
          height={undefined}
          className=" pointer-events-none shrink-0"
          size={24}
        />
        <Link
          href="/archived"
          className="text-background/90 dark:text-foreground hover:text-primary dark:hover:text-primary transition-colors"
          underline="active"
        >
          Archived
        </Link>
      </NavbarItem>
    </NavbarContent>
  );
};
