import { Header } from "./components/header/header";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className="font-sans text-lg m-0 p-0">
                <Header />
                {children}
            </body>
        </html>
    );
}
