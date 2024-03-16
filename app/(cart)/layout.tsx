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
        </div>
    );
}
