"use client"
import {useOrderDetails} from "@/hooks/orderItems-hooks"
export const AddressBox=()=>{
    const orderItem=useOrderDetails();
    console.log(orderItem);
    
    return (
<div>
</div>
  );
}