"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { MoonIcon, SunIcon } from "../Icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      isIconOnly
      aria-label="Toggle theme"
      color="default"
      variant="ghost"
      radius="full"
      className="flex justify-center items-center border border-default/70 hover:bg-transparent dark:hover:bg-transparent"
      onPress={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <MoonIcon
          size={24}
          className="text-black/40 dark:text-white/90 pointer-events-none shrink-0 mb-0.5 mt-0.5"
        />
      ) : (
        <SunIcon
          size={24}
          className="text-black/40 dark:text-white/90 pointer-events-none shrink-0 mb-0.5 mt-0.5"
        />
      )}
    </Button>
  );
}
