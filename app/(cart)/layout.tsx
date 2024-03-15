import Header from "@/component/layout/header";
// import DarkmodeToggle from "@/components/ui/darkmode-toggle";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            {children}
            {/* <DarkmodeToggle className="sticky bottom-5 left-5 z-10 border border-slate-400 bg-white dark:bg-black md:hidden dark:border-[#494949]" /> */}
        </div>
    );
}
