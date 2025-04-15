import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";



export const metadata: Metadata = {
  title: "Sabores do front"
};

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
        <Footer />
      </body>
    </html>
  );
}
