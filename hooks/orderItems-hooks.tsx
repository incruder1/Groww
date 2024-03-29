"use client";

import { OrderDetailsContext } from "@/providers/orderItemDetail-provider";
import { useContext } from "react";

import { create } from "zustand";
export type itemType = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export type OrderDetails = {
  products: itemType[];
  paymentMethods: string[];
};

export type OrderDetailsStore = {
  data: OrderDetails | null;
  // fetchData: () => void;
  fetchData: (body: { flag: boolean }) => Promise<void>;
  removeProduct: (id: number) => void;
};

export const useOrderDetailsStore = create<OrderDetailsStore>((set) => ({
  // let refresh:any= {};
  // body: refresh={cache:"force-cache"}:refresh={},
  // data: null,
  // fetchData: async () => {
  //     const response = await fetch("https://groww-intern-assignment.vercel.app/v1/api/order-details", { cache: "force-cache" }
  //     );
  //     const data: OrderDetails = await response.json();
  //     set({ data: data });
  // },
  // removeProduct: (id: number) => {
  //     set((state) => {
  //         if (!state.data) return state;
  //         const updatedProducts = state.data.products.filter(
  //             (product) => product.id !== id
  //         );
  //         return {
  //             ...state,
  //             data: {
  //                 paymentMethods: state.data.paymentMethods,
  //                 products: updatedProducts,
  //             },
  //         };
  //     });
  // },

  data: null,
  fetchData: async (body) => {
    const data: any = body.flag == false ? { cache: "force-cache" } : null;
    const response = await fetch(
      "https://groww-intern-assignment.vercel.app/v1/api/order-details",
      data
    );
    const responseData: OrderDetails = await response.json();
    set({ data: responseData });
  },
  removeProduct: (id: number) => {
    set((state) => {
      if (!state.data) return state;
      const updatedProducts = state.data.products.filter(
        (product) => product.id !== id
      );
      return {
        ...state,
        data: {
          paymentMethods: state.data.paymentMethods,
          products: updatedProducts,
        },
      };
    });
  },
}));

export const useOrderDetails = () => {
  const data = useContext(OrderDetailsContext);
  return { data };
};
