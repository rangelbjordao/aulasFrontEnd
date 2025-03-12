'use client'

import { useEffect, useState } from "react";

export default function Home() {
	const [count, setCount] = useState(0);

	const [usuarios, setUsuarios] = useState<string[]>([]);

	useEffect(() => {
		document.title = `Contador: ${count}`;
	}, [count])

	useEffect(() => {
		const listaUsuarios = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/users');
			const data = await response.json();
			setUsuarios(data.map((user: { name: string }) => user.name))

			document.body.style.backgroundColor = '#ffd'
		}

		listaUsuarios();

	})

	return (
		<>
			<h1>Exemplo 01 - Contador</h1>
			<p>Contador: {count}</p>
			<button onClick={() => { setCount(count + 1) }}>Clique aqui</button>

			<h1>Exemplo 02: Lista de Usuarios</h1>
			<ul>
				{usuarios.map((user, index) => (
					<li key={index}>{user}</li>
				))}
			</ul>
		</>
	);
}
