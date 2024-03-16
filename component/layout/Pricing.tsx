"use client";

import React, { useEffect, useState } from "react";
import { useOrderDetails } from "@/hooks/orderItems-hooks"
import { redirect } from "next/navigation";
import {useLogoInfo} from "@/hooks/items-hooks";
import { useTheme } from "next-themes";
import Loading from "../smallComponent/loading";
import { useRouter } from "next/navigation"
// import {calculateTotal} from "@/providers/calculateTotal";
export const Pricing = ( {page}) => {
    const router = useRouter();
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const {theme} = useTheme()
    const { data: orderDetails } = useOrderDetails();
   
    const logoInfo = useLogoInfo();
    if (!orderDetails || !logoInfo || orderDetails.products.length === 0) {
        return <Loading className="h-[207px]" />;
    }
    
    const handleApplyDiscount = (e: any) => {
        if (coupon.toLowerCase() === "groww") {
            setDiscount(0.2);
            setCoupon("");
            // setShowWarning(false);
        } else {
            setDiscount(0);
            // setShowWarning(true);
        }
    };
    // var total=calculateTotal(orderDetails.products);
    const prices: number[] = orderDetails.products.map(({ price, quantity,id }) => price*quantity);
    console.log(orderDetails.products); // Outputs the correct quantity
    const total = prices.reduce((prev, curr) => prev + curr, 0);
console.log('Total price:', total);
    const delivery = 40

    const totalAmount = total + delivery
  

 
    return (
        <div>
        <div className="w-full p-[24px] space-y-4 border border-[#EEE8EE]  h-fit rounded-[8px]">
        <h2 style={{color: theme === 'light' ? logoInfo?.theme["--background"] : logoInfo?.theme["--foreground"]}} className="font-semibold text-[16px] text-[#3F3F46] uppercase">
            Cart Total
        </h2>

        <div className="text-[#71717A] text-[12px] flex flex-row justify-between">
            <p>Total Price</p>
            <p>&#8377; {total.toFixed(2)}</p>
        </div>
        <div className="text-[#71717A] text-[12px] flex flex-row justify-between">
            <p>Delivery Fee</p>
            <p>&#8377; {delivery.toFixed(2)}</p>
        </div>
        {page=="cart"?<> <div className="">

        <input 
                            type="email"
                            placeholder="Try 'Groww' to get 20% discount"
                            onChange={(e) => {
                                setCoupon(e.target.value);
                                 
                            }}
                            className="text-[#71717A] bg-transparent ring-0 border-b-2 border-[#3F3F46] w-full p-2 text-[14px] font-bold focus:outline-none focus:border-[#3F3F46]"
                        />
                         <button
                            onClick={handleApplyDiscount}
                            className="bg-transparent"
                            disabled={
                                totalAmount == 0
                                    ? true
                                    : coupon.length === 0
                                    ? true
                                    : false
                            }
                        >
                            Apply
                        </button>
        </div>
        <div className="flex items-center justify-between mt-6">
                        <span>Discount</span>
                        <span>-${(totalAmount * discount).toFixed(2)}</span>
                    </div> </>:null}
        
        
        <div style={{color: theme === 'light' ? logoInfo?.theme["--background"] : logoInfo?.theme["--foreground"]}} className="text-[#3F3F46] text-[14px] flex flex-row font-bold justify-between">
            <p>Total Amount</p>
            <p>&#8377; {(totalAmount * (1 - discount)).toFixed(2)}</p>
        </div>
        </div>
       {page=="cart"? <button  onClick={() => router.push("/payment")}  className="h-[64px] uppercase rounded-[6px] w-full text-Black bg-primary font-bold text-[14px] flex justify-between group p-[24px]">Proceed</button>:null}
    </div>
    )
}