import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    // 1. Al montar, sincroniza el estado con lo que haya en localStorage
    useEffect(() => {
        const tema = localStorage.getItem("tema");
        if (tema === "oscuro") {
            setDark(true);
            document.documentElement.classList.add("dark");
        } else {
            setDark(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    // 2. Alterna estado, guarda en localStorage y actualiza la clase en <html>
    const toggleTheme = () => {
        const nuevo = !dark;
        setDark(nuevo);

        if (nuevo) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("tema", "oscuro");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("tema", "claro");
        }
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className="cursor-pointer rounded-full border border-borde p-2 text-letra-suave transition hover:border-primario hover:text-primario"
        >
            {/* Sol: visible en modo oscuro por CSS (cero parpadeo al recargar) */}
            <span className="hidden dark:block">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                    aria-hidden="true"
                >
                    <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
                </svg>
            </span>

            {/* Luna: visible en modo claro por CSS */}
            <span className="block dark:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
                        clipRule="evenodd"
                    />
                </svg>
            </span>
        </button>
    );
}
