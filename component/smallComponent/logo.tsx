"use client";

import { useLogoInfo } from "@/hooks/items-hooks";
import Image from "next/image";
import Loading2 from "./loading2";

const Logo = () => {
    const data = useLogoInfo();
    if (!data) {
        return  <Loading2 />;
    }
    return (
        <div className="h-[40px] gap-x-3 flex flex-row min-w-[108px] items-center ">
            <div className="relative h-full w-full left">
                <Image
                    src={data.merchantLogo}
                    alt="merchant logo"
                    objectFit="contain"
                    layout="fill"
                     
                />
            </div>
            <h2 className="font-semibold text-[14px] text-#44475B">
                {data.merchantName}
            </h2>
        </div>
    );
};
export default Logo;
