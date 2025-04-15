import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { ThemeProvider } from "../components/ui/theme-provider";
import { ModeToggle } from "../components/ui/darkMode";


export const metadata: Metadata = {
    title: "Sabores do front"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <body className="font-[Arial] text-lg m-0 p-0 leading-relaxed min-h-screen flex flex-col">
                <Header />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <ModeToggle />
                    {children}
                </ThemeProvider>
                <Footer />
            </body>
        </html>
    );
}
