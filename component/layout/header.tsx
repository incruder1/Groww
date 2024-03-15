"use client";

import Logo from "@/component/smallComponent/logo";
import DarkmodeToggle from "@/component/smallComponent/darkmode-toggle";
import { useLogoInfo } from "@/hooks/items-hooks";
import { useTheme } from "next-themes";

const Header = () => {
    const brandInfo = useLogoInfo()
    const {theme} = useTheme()
    return (
        <div className="w-full p-6 min-h-[100px] justify-center md:justify-between gap-y-3  flex flex-col md:flex-row items-center border-b dark:border-[#494949] border-[#F4F4F5] sticky top-0 bg-grey dark:bg-black z-10">
            <Logo />
            
            <div className="hidden md:block min-w-[108px]">
                <DarkmodeToggle />
            </div>
        </div>
    );
};
export default Header;
