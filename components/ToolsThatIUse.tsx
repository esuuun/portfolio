import React from "react";
import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "supabase",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "notion",
  "python",
  "django",
  "vite",
  "tailwindcss",
];

export default function ToolsThatIUse() {
  return (
    <div className="w-screen flex flex-col justify-center mt-10">
      <p className="scroll-m-20 text-foreground text-center text-3xl font-bold tracking-tight lg:text-4xl">
        Tools That I Use 👨🏽‍💻
      </p>

      <div className="relative flex size-full w-screen items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}
