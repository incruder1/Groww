"use client";

import { useLogoInfo } from "@/hooks/items-hooks";
import Loading from "./smallComponent/loading";
import { useTheme } from "next-themes";

const address = {
    name: "Hitesh Wadhwani",
    address: "B-77 FIG Colony, Indore, Madhya Pradesh, 452011",
};

type AddressBoxProps = {
    page: "checkout" | "confirmation";
};

const AddressBox = ({ page }: AddressBoxProps) => {
    const brandInfo = useLogoInfo();
    const { theme } = useTheme();
    if (!brandInfo) {
        return <Loading />;
    }
    return (
        <div className="h-[124px] p-[24px] flex flex-row justify-between border border-[#F4F4F5] 
        
         rounded-[8px]">
            <div className="flex flex-col justify-between">
                <div>
                    <h1 className="uppercase text-[12px] text-[#3F3F46] font-semibold"
                    >
                        deliver to
                    </h1>
                </div>
                <div>
                    <p className="text-[12px] text-[#71717A]">{address.name}</p>
                    <p className="text-[12px] text-[#71717A]">
                        {address.address}
                    </p>
                </div>
            </div>
            {page === "checkout" && (
                <button
                    className="relative right-0 uppercase rounded-[6px] border-lg  text-Black bg-slate-400 font-semibold text-[14px]  p-[15px] mt-2"
                >
                    Change
                </button>
            )}
        </div>
    );
};

export default AddressBox;
