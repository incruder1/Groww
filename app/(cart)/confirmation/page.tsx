import {Pricing} from "@/component/layout/Pricing";
import Confirmation from "@/component/confirmation";
import AddressBox from "@/component/deliver-box";
import Orders from "@/component/smallComponent/orders";

const data = {
    success: {
        imagePath: "/gif/success.gif",
        heading: "Your order has been placed successfully!",
        subheading: "Thank you for shopping with us.",
        buttonText: "Back",
        className: "h-[40vh]",
    },
    fail: {
        imagePath: "/gif/fail.gif",
        heading: "Payment failed!",
        subheading: "Money will get refunded in case amount is deducted  ",
        buttonText: "Back",
        className: "h-[60vh]",
    },
};

const ConfirmationPage = ({
    searchParams,
}: {
    searchParams: {
        status: "success" | "fail";
    };
}) => {
    const status = searchParams.status;
    const confirmationProps = data[status];

    return (
        <>
            <Confirmation {...confirmationProps} />
            {status === "success" && (
                <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%] mx-auto my-8 space-y-4 md:space-y-0 md:space-x-4">
                    <Orders heading="Order summary" page="confirmation" />
                    <div className="flex flex-col space-y-3">
                        <Pricing page="confirmation" />
                    </div>
                </div>
            )}
        </>
    );
};
export default ConfirmationPage;
