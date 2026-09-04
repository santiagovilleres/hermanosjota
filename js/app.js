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

function obtenerProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos), 2000);
  });
}

const contenedor = document.getElementById("contenedor-destacados");
if (contenedor) {
  const esCatalogo = window.location.pathname.includes("productos");

  function renderizarProductos(lista) {
    contenedor.innerHTML = lista
      .map(
        (producto) => `
        <article class="card">
          <img src="${encodeURI(producto.imagen)}" alt="${producto.nombre}" />
          <h3>${producto.nombre}</h3>
          <p>$${producto.precio.toLocaleString("es-AR")}</p>
          <button
            class="btn"
            data-id="${producto.id}"
            aria-label="Agregar ${producto.nombre} al carrito"
          >
            Agregar al carrito
          </button>
        </article>
      `
      )
      .join("");
  }

  contenedor.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button");
    if (!boton) return;

    const producto = productos.find((p) => p.id === Number(boton.dataset.id));
    if (producto) {
      alert(`Agregaste ${producto.nombre} al carrito`);
    }
  });

  (async function iniciar() {
    contenedor.innerHTML = "<p>Cargando catálogo...</p>";
    const lista = await obtenerProductos();
    const aMostrar = esCatalogo ? lista : lista.slice(0, 4);
    renderizarProductos(aMostrar);
  })();
}
