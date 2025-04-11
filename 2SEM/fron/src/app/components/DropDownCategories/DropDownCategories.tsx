"use client"

import Link from "next/link";
import { useState } from "react";

const DropDownCategories: React.FC = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna o valor de isOpen
  };

  return (
    <div className="relative">
      {/* Passo 3: Botão de Categories */}
      <button
        onClick={toggleMenu}
        className="px-4 py-2 bg-blue-500 text-white rounded flex items-center"
      >
        Categories
        {/* SVG do lado direito do texto */}
        <svg
          className="ml-2 w-4 h-4 text-white" // Adiciona o ícone ao lado do texto
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="absolute bg-white shadow-lg rounded mt-2 p-4 w-48">
            <ul>
              <li className="py-2">
                <Link className="font-bold text-black px-2 hover:underline" href="/categoria/bebidas">Bebidas</Link>
              </li>
              
              <li className="py-2">
                <Link className="font-bold text-black px-2 hover:underline" href="/categoria/salgados">Salgados</Link>
              </li>
              
              <li className="py-2">
                <Link className="font-bold text-black px-2 hover:underline" href="/categoria/sobremesas">Sobremesa
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default DropDownCategories;
