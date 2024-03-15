"use client";

import { useOrderDetailsStore,OrderDetails } from "@/hooks/orderItems-hooks";
import React, { createContext, useContext, useEffect } from "react";


export const OrderDetailsContext = createContext<OrderDetails | null>(null);

export interface Props {
    [propName: string]: any;
}

export const OrderDetailsProvider = (props: Props) => {
    const { data, fetchData } = useOrderDetailsStore();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const value = {
        data,
        fetchData
    }

    return <OrderDetailsContext.Provider value={data} {...props} />;
};
