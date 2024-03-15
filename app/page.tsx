'use client'

// import DarkmodeToggle from "@/components/ui/darkmode-toggle";
import { useLogoInfo } from "@/hooks/items-hooks"

export default function Home() {
  const data = useLogoInfo()
  return (
    <div style={{background: data?.theme["--primary-foreground"]}}>
      {data?.merchantName}
      
      {/* <DarkmodeToggle /> */}
    </div>
  );
}
