// import Product from "./ui/product";
"use client";

import { useOrderDetails } from "@/hooks/orderItems-hooks"
import { redirect } from "next/navigation";
import Orders from "./smallComponent/orders";

const OrderList = () => {
    const { data } = useOrderDetails();
    if (data?.products.length === 0) {
        redirect("/empty-cart");
    }

    return (
        <Orders heading="Items selected" page="checkout" />
    );
};
export default OrderList;
