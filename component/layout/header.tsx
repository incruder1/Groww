"use client";

import Logo from "@/component/smallComponent/logo"; 
import { useLogoInfo } from "@/hooks/items-hooks";
import { useTheme } from "next-themes";

const Header = () => {
    const brandInfo = useLogoInfo()
    const {theme} = useTheme()
    return (
        <div className="w-full p-5  min-h-[3vh] justify-center md:justify-between gap-y-3  flex flex-col md:flex-row items-center border-b  border-[#F4F4F5] sticky top-0 bg-white ">
            <Logo />
            
             
        </div>
    );
};
export default Header;
