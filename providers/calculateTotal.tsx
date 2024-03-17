"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
// Define the type for the context value
interface TotalAmountContextValue {
  totalAmount: number;
  // discount: number;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context with the defined value type
export const TotalAmountContext = createContext<
  TotalAmountContextValue | undefined
>(undefined);

// Custom hook to consume the context
export const useTotalAmount = () => {
  const context = useContext(TotalAmountContext);
  if (!context) {
    throw new Error("useTotalAmount must be used within a TotalAmountProvider");
  }

  return context;
};

// Props interface for the TotalAmountProvider component
interface TotalAmountProviderProps {
  children: ReactNode;
}

// Context provider component
export const TotalAmountProvider = ({ children }: TotalAmountProviderProps) => {
  const [totalAmount, setTotalAmount] = useState<number>(0);

  // const discountValue = localStorage.getItem("discount");
  // const discount = discountValue ? parseFloat(discountValue) : 0;

  const value: TotalAmountContextValue = {
    totalAmount,
    setTotalAmount,
    // discount,
  };
  // console.log(value);

  return (
    <TotalAmountContext.Provider value={value}>
      {" "}
      {children}
    </TotalAmountContext.Provider>
  );
};
