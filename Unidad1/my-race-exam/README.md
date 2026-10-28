# My Race

Web para descubrir carreras populares organizadas por categorías (10K, media maratón, maratón, trail, ultra trail y cross), hecha con React Router y Tailwind CSS.

```bash
npm install
npm run dev
```

La aplicación se abre en `http://localhost:5173`.

> Las fechas, precios y valoraciones de las carreras son orientativos: están pensados para practicar, no para inscribirse.

## Páginas

| Ruta | Página | Qué hace |
| --- | --- | --- |
| `/` | Categorías | Lista de categorías con buscador por nombre |
| `/categorias/:categoryId` | Carreras de una categoría | Filtros por comunidad, superficie y dificultad, y orden por fecha, valoración o precio |
| `/consejos` | Consejos | Carga `public/consejos.json` con `fetch` |
| `*` | 404 | Cualquier otra dirección |

## Guía de estilos: tokens del tema

Los valores están en `app/theme.css`. Acento: **naranja**. No se usa ninguna fuente ni imagen de internet: las fotos están en `public/fotos/` y las fuentes son las del sistema.

| Token | Para qué se usa | Claro | Oscuro |
| --- | --- | --- | --- |
| `primario` | Logo, enlace activo del menú, botones, enlaces, bordes de color de las tarjetas, fecha de la carrera | `orange-600` | `orange-500` |
| `primario-texto` | Texto encima del color primario (botones) | `white` | `slate-950` |
| `fondo` | Fondo de toda la página | `slate-100` | `slate-950` |
| `superficie` | Cabecera, tarjetas, buscador y desplegables | `white` | `slate-900` |
| `letra` | Texto principal | `slate-900` | `slate-100` |
| `letra-suave` | Texto secundario, menú y etiquetas de los filtros | `slate-500` | `slate-400` |
| `borde` | Borde de la cabecera, etiquetas y desplegables | `slate-200` | `slate-800` |
| `etiqueta` | Fondo de los recuadros de distancia y desnivel | `slate-100` | `slate-800` |
| `destacada` | Texto del aviso "Destacada" | `white` | Igual |
| `destacada-fondo` | Fondo del aviso "Destacada" | `sky-600` | Igual |
| `nota-alta` / `nota-media` / `nota-baja` | Fondo de la valoración de una carrera | `green-600`, `amber-600`, `red-600` | Igual |

| Token | Para qué se usa | Valor |
| --- | --- | --- |
| `titulos` | `h1`, `h2` y `h3` (siempre en mayúsculas y muy gruesos: `font-black uppercase`) y el logo | Fuente del sistema |
| `cuerpo` | Resto del texto | Fuente del sistema |
| `tarjeta` | Esquinas de tarjetas, botones, buscador y desplegables | `0.5rem` |

## Diferencias de estilo con My Padel

- Esquinas poco redondeadas (`0.5rem`) en lugar de botones y desplegables en forma de píldora (la cabecera se mantiene como en My Padel).
- Etiquetas rectangulares con borde y texto en mayúsculas.
- Tarjetas sin borde, con sombra y una franja de color (arriba en categorías, a la izquierda en carreras).
- Valoración en un recuadro relleno de color en lugar de un círculo con borde.
- Foto de la categoría como banner con el título encima (capa negra semitransparente).
- Botones rellenos de color primario.
