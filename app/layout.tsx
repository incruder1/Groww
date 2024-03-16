import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LogoInfoContextProvider } from "@/providers/logoInfo-provider";
import { OrderDetailsProvider } from "@/providers/orderItemDetail-provider";
import { TotalAmountProvider } from "@/providers/calculateTotal";
// import ErrorPage from "@/app/error";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InstaPayment",
  description: "Groww InstaPayment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
 

        <TotalAmountProvider>
          <OrderDetailsProvider>
            <LogoInfoContextProvider>{children}</LogoInfoContextProvider>
          </OrderDetailsProvider>
          
        </TotalAmountProvider>
         
         
      </body>
    </html>
  );
}
