'use client'

import Image from "next/image"
import { cn } from "@/lib/utilts"
import { useRouter } from "next/navigation"
import { useOrderDetailsStore } from "@/hooks/orderItems-hooks"
type ConfirmationProps = {
    className?: string
    imagePath: string,
    heading: string,
    subheading: string
    buttonText: string
}

const Confirmation = ({imagePath, heading, subheading, buttonText, className}: ConfirmationProps) => {
    const {fetchData}=useOrderDetailsStore();
    const router = useRouter() 
    const handleClick=()=>{
        fetchData();
        router.push("/");
    }

    return (
        <div className={cn("flex w-full items-center justify-center flex-col space-y-4", className)}>
            <Image unoptimized={true} src={imagePath} alt="Logo" width={60} height={60} />
            <div>
                <h2 className="text-[16px] text-[#3F3F46] text-center">{heading}</h2>
                <p className="text-[#71717A] text-[16px] text-center mt-1">{subheading}</p>
            </div>
            <button
            //  onClick={() => router.push("/")    }
            onClick={handleClick}
              className=" right-0 uppercase rounded-[6px] border-lg  text-Black bg-slate-200 font-semibold text-[14px]  p-[15px] mt-2">
                {buttonText}
            </button>
        </div>
        
    )
}
export default Confirmation