"use client";

import Image from "next/image";
import {
  itemType,
  useOrderDetails,
  useOrderDetailsStore,
} from "@/hooks/orderItems-hooks";
import { useLogoInfo } from "@/hooks/items-hooks";
import { Button } from "./button";
import { cn } from "@/lib/utilts";
import { useTheme } from "next-themes";

type ProductProps = {
  product: itemType;
  imageDisable: boolean;
  removeDisable: boolean;
  lastItem: boolean;
};

const Product = ({
  product,
  imageDisable,
  removeDisable,
  lastItem,
}: ProductProps) => {
  const brandInfo = useLogoInfo();
  const { removeProduct } = useOrderDetailsStore();
  const title = product.title.split(" ").slice(0, 2).join(" ");
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        "min-h-[113px] py-[24px]  flex flex-row justify-between",
        !lastItem && "border-b border-[#F4F4F5] dark:border-[#494949]"
      )}
    >
      <div className="flex flex-row items-center">
        {!imageDisable && (
          <Image
            src={product.image}
            alt="product-image"
            width={100}
            height={100}
            className="mr-4"
          />
        )}

        <div className="flex flex-col justify-between h-full gap-y-2 w-full">
          <h2
            // style={{color: theme === 'light' ? brandInfo?.theme["--background"] : brandInfo?.theme["--foreground"]}}
            className="text-[14px] font-semibold text-[#3F3F46]"
          >
            {title}
          </h2>
          <h4 className="text-[#71717A] text-[14px]">{product.title}</h4>
          <div className="flex flex-row  space-between ">
                    <div className=" font-semibold text-[12px] w-fit pr-[5vw]  rounded-[4px] overflow-hidden ">
                        Quantity: {product.quantity}
                    </div>
                    <p 
                    // style={{color: theme === 'light' ? brandInfo?.theme["--background"] : brandInfo?.theme["--foreground"]}} 
                    className="font-semibold text-[12px] overflow-x-auto text-[#3F3F46]">
                        &#8377;Price:-  {product.price}
                    </p>
        </div>

        </div>
      </div>
      {!removeDisable && (
        <div className=" ">
          <Button
            style={{ color: brandInfo?.theme["--primary"] }}
            className="uppercase font-semibold text-[12px] border-none text-center align-middle content-center pt-0 pb-0 pl-0 pr-0 text-[#3F3F46]  "
            variant={"link"}
            onClick={() => removeProduct(product.id)}
          >
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};
export default Product;
