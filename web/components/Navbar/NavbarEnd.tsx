import React, { useState } from "react";
import { NavbarContent, Input, Button, Badge } from "@heroui/react";
import { UserButton } from "@clerk/nextjs";
import { NotificationIcon, SearchIcon, SettingsIcon } from "../Icons";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const NavbarEnd = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <NavbarContent justify="end" className="flex items-center gap-2">
      <div className="hidden sm:flex">
        <Input
          isClearable
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-black/60 dark:placeholder:text-white/40",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "bg-transparent",
              "dark:bg-transparent",
              "backdrop-blur-lg",
              "hover:bg-transparent",
              "hover:border-default/50",
              "dark:hover:bg-default/30",
              "dark:hover:border-default/50",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "cursor-text",
              "border border-default/70",
              "!hover:bg-transparent",
            ],
          }}
          className="w-[15rem]"
          placeholder="Type to search..."
          radius="full"
          startContent={
            <SearchIcon
              className="text-black/40 mb-0.5 dark:text-white/40 pointer-events-none shrink-0"
              width={undefined}
              height={undefined}
              size={24}
            />
          }
        />
      </div>
      <div className="sm:hidden">
        <Button
          isIconOnly
          aria-label="Search"
          color="default"
          variant="ghost"
          radius="full"
          className="border border-default/70 hover:bg-transparent dark:hover:bg-transparent"
          onPress={() => setShowSearch(!showSearch)}
        >
          <SearchIcon
            className="text-black/40 dark:text-white/90 pointer-events-none shrink-0"
            width={undefined}
            height={undefined}
          />
        </Button>
        {showSearch && (
          <div className="absolute top-full left-0 w-full p-2 bg-background z-50">
            <Input
              isClearable
              classNames={{
                label: "text-black/50 dark:text-white/90",
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-black/60 dark:placeholder:text-black/70",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "bg-transparent",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "hover:bg-transparent",
                  "hover:border-default/50",
                  "dark:hover:bg-default/70",
                  "dark:hover:border-default/50",
                  "group-data-[focus=true]:bg-default-200/50",
                  "dark:group-data-[focus=true]:bg-default/60",
                  "cursor-text",
                  "border border-default/70",
                  "!hover:bg-transparent",
                ],
              }}
              placeholder="Type to search..."
              radius="full"
              startContent={
                <SearchIcon
                  className="text-black/40 mb-0.5 dark:text-white/90 pointer-events-none shrink-0"
                  width={undefined}
                  height={undefined}
                  size={15}
                />
              }
            />
          </div>
        )}
      </div>
      <Badge content="99+" color="danger" size="sm" className="mr-1">
        <Button
          isIconOnly
          aria-label="Notifications"
          color="default"
          variant="ghost"
          radius="full"
          className="flex justify-center items-center border border-default/70 hover:bg-transparent dark:hover:bg-transparent"
        >
          <NotificationIcon
            className="text-black/40 mb-0.5 dark:text-white/90 pointer-events-none shrink-0"
            width={undefined}
            height={undefined}
            size={24}
          />
        </Button>
      </Badge>
      <Button
        isIconOnly
        aria-label="Settings"
        color="default"
        variant="ghost"
        radius="full"
        className="flex justify-center items-center border border-default/70 hover:bg-transparent dark:hover:bg-transparent"
      >
        <SettingsIcon
          className="text-black/40 mb-0.5 dark:text-white/90 pointer-events-none shrink-0 mt-0.5"
          size={24}
          height={undefined}
          width={undefined}
        />
      </Button>
      <ThemeSwitcher />
      <UserButton />
    </NavbarContent>
  );
};
