import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header/header";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className="font-[Arial] text-lg m-0 p-0 leading-relaxed text-black bg-neutral-50 min-h-screen flex flex-col">
                <Header />
                {children}

            </body>
        </html>
    );
}
