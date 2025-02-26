import Link from "next/link";

const layoutTailwind = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <header className="bg-blue-500 text-white p-6">
                    <p className="text-4xl font-bold mb-2">Bem vindo ao TailWind CSS</p>
                    <p className="text-lg">Aprenda como criar layouts com facilidade e rapidez</p>
                </header>
                <main className="flex-1 container mx-auto p-6">
                    <div className="grid grid-cols-3 gap-10">
                        <div className="bg-slate-300 p-4 rounded">
                            <h2 className="text-2xl font-semibold mb-2">Coluna 1</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="bg-slate-300 p-4 rounded">
                            <h2 className="text-2xl font-semibold mb-2">Coluna 2</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="bg-slate-300 p-4 rounded">
                            <h2 className="text-2xl font-semibold mb-2">Coluna 3</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </main>
                <footer>
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="#">Sobre</Link>
                        <Link href="#">Contato</Link>
                    </nav>
                </footer>
            </div>
        </>
    )
}
export default layoutTailwind;