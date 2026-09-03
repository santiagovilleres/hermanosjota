// ============================================================
// Hermanos Jota — Catálogo dinámico
// Archivo: js/app.js
// Carga el catálogo, lo renderiza en #contenedor-destacados y
// agrega el evento de "agregar al carrito" a cada producto.
// ============================================================

// 1. Catálogo en un array de objetos
// Cada producto tiene id, nombre, precio e imagen.
// Las imágenes están en la carpeta "catalogo/" de la raíz.
const productos = [
  {
    id: 1,
    nombre: "Aparador Uspallata",
    precio: 245000,
    imagen: "catalogo/Aparador Uspallata.png",
  },
  {
    id: 2,
    nombre: "Biblioteca Recoleta",
    precio: 320000,
    imagen: "catalogo/Biblioteca Recoleta.png",
  },
  {
    id: 3,
    nombre: "Butaca Mendoza",
    precio: 188000,
    imagen: "catalogo/Butaca Mendoza.png",
  },
  {
    id: 4,
    nombre: "Mesa de Centro Araucaria",
    precio: 156000,
    imagen: "catalogo/Mesa de Centro Araucaria.png",
  },
  {
    id: 5,
    nombre: "Mesa de Noche Aconcagua",
    precio: 98000,
    imagen: "catalogo/Mesa de Noche Aconcagua.png",
  },
  {
    id: 6,
    nombre: "Escritorio Costa",
    precio: 289000,
    imagen: "catalogo/Escritorio Costa.png",
  },
  {
    id: 7,
    nombre: "Mesa Comedor Pampa",
    precio: 410000,
    imagen: "catalogo/Mesa Comedor Pampa.png",
  },
  {
    id: 8,
    nombre: "Silla de Trabajo Belgrano",
    precio: 132000,
    imagen: "catalogo/Silla de Trabajo Belgrano.png",
  },
  {
    id: 9,
    nombre: "Sillas Córdoba",
    precio: 260000,
    imagen: "catalogo/Sillas Córdoba.png",
  },
  {
    id: 10,
    nombre: "Sillón Copacabana",
    precio: 385000,
    imagen: "catalogo/Sillón Copacabana.png",
  },
  {
    id: 11,
    nombre: "Sofá Patagonia",
    precio: 520000,
    imagen: "catalogo/Sofá Patagonia.png",
  },
];

// 2. Función asíncrona que simula una petición a la API
// usando async/await y setTimeout (2 segundos).
function obtenerProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos), 2000);
  });
}

// Contenedor donde se inyectan las tarjetas.
// En index.html muestra solo los destacados; en productos.html el catálogo completo.
const contenedor = document.getElementById("contenedor-destacados");
if (contenedor) {
  const esCatalogo = window.location.pathname.includes("productos");

  // 3. Renderizado dinámico vía DOM
  function renderizarProductos(lista) {
    // Podemos usar innerHTML porque los datos son de la propia app (sin user input)
    contenedor.innerHTML = lista
      .map(
        (producto) => `
        <article class="card">
          <img src="${producto.imagen}" alt="${producto.nombre}" />
          <h3>${producto.nombre}</h3>
          <p>$${producto.precio.toLocaleString("es-AR")}</p>
          <button class="btn" data-id="${producto.id}">Agregar al carrito</button>
        </article>
      `
      )
      .join("");
  }

  // 4. Interactividad con addEventListener
  // Un único listener sobre el contenedor ("event delegation") para
  // cualquier botón que se renderice.
  contenedor.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button");
    if (!boton) return;

    const producto = productos.find((p) => p.id === Number(boton.dataset.id));
    if (producto) {
      alert(`Agregaste ${producto.nombre} al carrito`);
    }
  });

  // Carga inicial: muestra "Cargando catálogo..." y luego renderiza.
  // En la home solo se muestran los 4 primeros (destacados).
  (async function iniciar() {
    contenedor.innerHTML = "<p>Cargando catálogo...</p>";
    const lista = await obtenerProductos();
    const aMostrar = esCatalogo ? lista : lista.slice(0, 4);
    renderizarProductos(aMostrar);
  })();
}
