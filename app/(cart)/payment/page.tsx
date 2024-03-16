import {Pricing} from "@/component/layout/Pricing"
import PaymentGateway from "@/component/layout/payment"

const Payment = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%] mx-auto my-8 space-y-4 md:space-y-0 md:space-x-4">
            <PaymentGateway />
            <Pricing page="Payment" />
        </div>
    )
}

export default Payment