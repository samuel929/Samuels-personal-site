import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "expo",
  "react",
  "react-native",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
];

export function Globe() {
  return (
    <div className='relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden  bg-background px-20 pb-20 pt-8 '>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
