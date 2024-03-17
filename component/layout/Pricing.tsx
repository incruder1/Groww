"use client";

import React, { use, useContext, useEffect, useState } from "react";
import { useOrderDetails } from "@/hooks/orderItems-hooks";
import { useLogoInfo } from "@/hooks/items-hooks";
import { useTheme } from "next-themes";
import Loading from "../smallComponent/loading";
import { useRouter } from "next/navigation";
import { useTotalAmount } from "@/providers/calculateTotal";
interface PricingProps {
  page: any; // Define the page prop as type any
}
export const Pricing = ({ page }: PricingProps) => {
  const router = useRouter();
  const [coupon, setCoupon] = useState("");
  const [discountValue, setDiscountValue] = useState(0);
  const { theme } = useTheme();
  const { data: orderDetails } = useOrderDetails();
  const { totalAmount, setTotalAmount } = useTotalAmount();
  const [showWarning, setShowWarning] = useState("");
  const [warning, setWarning] = useState(false);
  const logoInfo = useLogoInfo();
  useEffect(() => {
    const discountValue = localStorage.getItem("discount");
    const discountAmount = discountValue ? parseFloat(discountValue) : 0;
    setDiscountValue(discountAmount);
  }, []);
  useEffect(() => {}, [discountValue]);
  const delivery = 40;
  if (!orderDetails || !logoInfo || orderDetails.products.length === 0) {
    return <Loading className="h-[207px]" />;
  }

  const prices: number[] = orderDetails.products.map(
    ({ price, quantity }: { price: number; quantity: number }) =>
      price * quantity
  );

  const total = prices.reduce((prev, curr) => prev + curr, 0);
  //   const delivery = 40;
  if (totalAmount == 0) {
    setTotalAmount(total + delivery);
  }

  const handleApplyDiscount = () => {
    if (coupon.toLowerCase() == "groww") {
      setCoupon("");
      localStorage.setItem("discount", (totalAmount * 0.1).toString());
      let discountedTotal = totalAmount * 0.9;
      setTotalAmount(discountedTotal);
      console.log(
        discountedTotal +
          "discountedTotal" +
          totalAmount +
          "totalAmount" +
          total +
          "total" +
          discountValue +
          "discountValue"
      );
      setShowWarning("");
    } else {
      setShowWarning("Invalid Coupon");
      setCoupon("");
      console.log(coupon + "coupon");
      setTotalAmount(total + delivery);
      localStorage.removeItem("discount");
      setDiscountValue(0);
    }
  };
  return (
    <div>
      <div className="w-full p-[24px] space-y-4 border border-[#EEE8EE]  h-fit rounded-[8px]">
        <h2 className="font-semibold text-[16px] text-[#3F3F46] uppercase">
          Cart Total
        </h2>
        <div className="text-[#00000] text-[14px] flex flex-row justify-between font-semibold">
          <p>Total Price</p>
          <p>&#8377; {total.toFixed(2)}</p>
        </div>
        <div className=" text-[#00000] text-[14px] flex flex-row justify-between font-semibold">
          <p>Delivery Fee</p>
          <p>&#8377; {delivery.toFixed(2)}</p>
        </div>
        {page == "cart" ? (
          <>
            {" "}
            <div className="">
              <input
                type="email"
                placeholder="Try 'Groww' and get 10% discount"
                onChange={(e) => {
                  setCoupon(e.target.value);
                }}
                value={coupon}
                className="text-[#71717A] bg-transparent ring-0 border-b-2 border-[#3F3F46] w-full p-2 text-[14px] font-semibold focus:outline-none focus:border-[#3F3F46]"
              />
              {showWarning ? (
                <p className="text-red-500 text-[12px]">{showWarning}</p>
              ) : null}
              <button
                onClick={handleApplyDiscount}
                className="relative right-0 uppercase rounded-[6px] border-lg  text-Black bg-slate-400 font-semibold text-[14px]  p-[15px] mt-2 "
                disabled={
                  totalAmount == 0 ? true : coupon.length === 0 ? true : false
                }
              >
                Apply
              </button>
            </div>
          </>
        ) : null}
        <div className="flex items-center justify-between mt-6  ">
          <span className="text-[#00000] font-semibold text-[14px]">
            Discount
          </span>
          <span>
            {" "}
            &#8377;{" "}
            {discountValue != 0
              ? discountValue.toFixed(2)
              : totalAmount - (total + delivery) == 0
              ? 0
              : ((totalAmount * 0.1) / 0.9).toFixed(2)}{" "}
            {/* {discountValue != 0 ? discountValue : 0} */}
          </span>
        </div>{" "}
        <div className="text-[#00000] text-[14px] flex flex-row font-semibold justify-between text-[14px]">
          <p>Total Amount</p>
          <p>&#8377; {totalAmount.toFixed(2)}</p>
        </div>
      </div>
      {page == "cart" ? (
        <button
          onClick={() => router.push("/payment")}
          className="relative right-0 uppercase rounded-[6px] border-lg  text-Black bg-emerald-400 font-semibold text-[14px]  p-[15px] mt-2"
        >
          Proceed
        </button>
      ) : null}
    </div>
  );
};
