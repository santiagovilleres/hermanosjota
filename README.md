# 🛋️ E-commerce Mueblería Hermanos Jota

Sitio web de e-commerce para una mueblería, desarrollado como proyecto grupal de la facultad. Simula una experiencia de compra completa utilizando únicamente tecnologías del lado del cliente.

## 📋 Descripción del proyecto

El sitio permite navegar un catálogo de muebles, ver el detalle de cada producto, agregarlos a un carrito de compras simulado y contactar a la tienda mediante un formulario. Todo funciona sin conexión a un backend: los productos se gestionan localmente con JavaScript, simulando una petición de datos asíncrona para cargar el catálogo.

## 👥 Integrantes

| Nombre | Rol / Parte del proyecto |
|---|---|
| Cristian Benjamin Cerioni Lanzilotta | Estructura básica del sitio |
| Martin Fradejas Soria | Tablas y limpieza de código |
| Gastón Guber | Catálogo de productos |
| Santiago Villeres | Mejoras generales y página de contacto |
| Fabrizio Minicucci | README y documentación |

## ✨ Funcionalidades

- **Página de inicio**: header con navegación, hero banner y productos destacados cargados dinámicamente.
- **Catálogo de productos**: grilla de tarjetas con datos desde un array de objetos en JS, y campo de búsqueda.
- **Detalle de producto**: imagen, descripción completa, precio y botón "Añadir al carrito".
- **Carrito de compras**: contador visible en el header, simulado con JavaScript.
- **Formulario de contacto**: validación del lado del cliente y mensaje de éxito mostrado por DOM.

## 🛠️ Tecnologías utilizadas

- **HTML5** semántico
- **CSS3** — Flexbox, diseño responsivo Mobile First
- **JavaScript** — manipulación del DOM, arrays de objetos, async/await, addEventListener

## 📁 Estructura del proyecto

- índice.html
- productos.html
- producto.html
- contacto.html
- css/style.css
- js/productos.js
- catálogo/ (imágenes de productos)

## 🌐 Ver el sitio en vivo

[Link al sitio desplegado]

## 💻 Cómo correrlo localmente

1. Cloná el repositorio: `git clone https://github.com/santiagovilleres/hermanosjota.git`
2. Abrí el archivo índice.html en tu navegador (no hace falta instalar nada).

## 🔀 Flujo de trabajo

El equipo trabaja con ramas propias a partir de `develop`, siguiendo el formato `nombre/TituloCambios`, y los cambios se integran mediante Pull Requests hacia `develop`.
