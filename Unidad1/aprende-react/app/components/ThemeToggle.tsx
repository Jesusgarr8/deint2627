import React from 'react'

export default function ThemeToggle() {
 
    const cambiarTema = () => {
    const html = document.documentElement; // la etiqueta <html>
    const esOscuro = html.classList.toggle("dark"); // pone o quita la clase
    localStorage.setItem("tema", esOscuro ? "oscuro" : "claro"); // la recordamos
  }

  return (
     <button
            type="button"
            onClick={cambiarTema}
            aria-label="Cambiar entre modo claro y oscuro"
            className="cursor-pointer p-4"
        >
            🌓
        </button>
  );
}
