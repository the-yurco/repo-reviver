import { Chip } from "@heroui/react";
import Link from "next/link";

export const RepoReviverLogo = () => {
  return (
    <Link className="flex justify-center items-end gap-2 w-max" href={"/"}>
      <p className="text-inherit text-2xl font-medium">Repo Reviver</p>
      <Chip
        color="default"
        variant="flat"
        className="text-xs text-background bg-background/10 border border-background/20 dark:text-foreground dark:bg-foreground/10 dark:border-foreground/20"
      >
        1.0
      </Chip>
    </Link>
  );
};
