"use client";

import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { useTheme } from "next-themes";

export function NameTitleShadow() {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  return (
    <h1 className="text-balance text-3xl font-semibold leading-none tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
      Yeray
      <LineShadowText className="italic" shadowColor={shadowColor}>
        Boix
      </LineShadowText>
    </h1>
  );
}
