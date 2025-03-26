import Link from "next/link";
import "./globals.css";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/dashboard/config">Configuracoes</Link>
                        </li>
                        <li>
                            Perfil
                            <ul>
                                <li>
                                    <Link href="/dashboard/perfil/joao">Joao</Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/perfil/maria">Maria</Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/perfil/ana">Ana</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                {children}
            </body>
        </html>
    );
}
