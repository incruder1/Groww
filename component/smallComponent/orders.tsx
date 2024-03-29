"use client";

import { useOrderDetails } from "@/hooks/orderItems-hooks";
import Product from "./product";
import { useLogoInfo } from "@/hooks/items-hooks";
import { useTheme } from "next-themes";

interface OrdersProps {
    heading: string;
    page: "checkout" | "confirmation";
}

const Orders = ({ heading, page }: OrdersProps) => {
    const { data: orderDetails } = useOrderDetails();
    const brandInfo = useLogoInfo()
    const { theme } = useTheme()
    const imageDisable = page === "confirmation";
    const removeDisable = page === "confirmation";
    return (
        <div>          
        <div className="w-full border border-[slate-500]  p-[24px] rounded-[8px] h-fit">
            <h1 
             className="font-bold text-[16px] text-[#3F3F46] uppercase text-center  ">
                {heading}
            </h1>
            <div>
                {orderDetails?.products.map((product, idx) => {
                    const lastIndex = idx === orderDetails.products.length - 1
                    return (
                        <Product
                            key={product.id}
                            product={product}
                            imageDisable={imageDisable}
                            removeDisable={removeDisable}
                            lastItem={lastIndex}
                        />
                    );
                })}
            </div>
        </div>
        </div>
    );
};
export default Orders;
