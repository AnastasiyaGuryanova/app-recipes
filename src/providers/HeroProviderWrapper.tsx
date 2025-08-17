"use client";

import { HeroUIProvider } from "@heroui/react";

export default function HeroProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
