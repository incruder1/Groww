"use client";
import { useOrderDetails } from "@/hooks/orderItems-hooks";
import { useLogoInfo } from "@/hooks/items-hooks";
import { useTheme } from "next-themes";
export const Subheading=()=>{
    const { data:orderDetails } = useOrderDetails();
    const brandInfo = useLogoInfo();
    const { theme } = useTheme();
    
    return (
        <div className="col-md-12">
             <h1
              // style={{color: theme === 'light' ? brandInfo?.theme["--background"] : brandInfo?.theme["--foreground"]}}
              className="font-semibold text-[16px] p-5 text-gray-500  bg-[#DCF2F1] 
              uppercase text-center ">
             Hello User
          <p className="text-center">
            {`You Have ${orderDetails?.products.length } items in your cart! `}
          </p>
            </h1>
      </div>
    )
}