import OrderList from "@/component/order-list";
import { Pricing } from "@/component/layout/Pricing";
import { Suspense } from "react";
import { Subheading } from "@/component/smallComponent/subHeading-Component";

const Loading = () => {
  return <div>Loading </div>;
};

const CheckoutPage = () => {
  return (
    <div>
      <Subheading />
      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%] mx-auto my-8 space-y-4 md:space-y-0 md:space-x-4">
        <Suspense fallback={<Loading />}>
          <OrderList />
        </Suspense>
        <div className="space-y-3">
          <Pricing page="cart" />
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
