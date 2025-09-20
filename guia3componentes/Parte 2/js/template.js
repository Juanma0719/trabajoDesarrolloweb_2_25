const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    {
        imagen: "https://i.blogs.es/21d658/iphone-17/500_333.webp",
        titulo: "Iphone 17",
        descripcion: "Pantalla OLED e 6,3 pulgadas, resolucion de 2622 x 1206, 12 Gb de RAM, chip A19.",
        precio: "$6.999.000"
    },
    {
        imagen: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRtvPkEPboxXiAcsID655itHDsvffGgSRGXzgeskpG8DB42J4zx7B_tfBzywm45dwU5fZgbnMyN3z0Q8QMJ0egybhluJCmZQamQqjiMMDNT0lUKMHTEpziDBg",
        titulo: "mouse inalambrico logitech",
        descripcion: "Mouse inalámbrico, bluetooth.",
        precio: "$59.900"
    },
    {
        imagen: "https://upload.wikimedia.org/wikipedia/commons/0/02/Eastpak_Sugarbush_backpack_black.jpg",
        titulo: "Mochila Escolar",
        descripcion: "Producto fabricado mediante textil, diseñada para la facilidad de los niños a la hora de ir a la escuela.",
        precio: "$65.000"
    },
    {
        imagen: "https://musicbox.com.co/wp-content/uploads/2022/06/6001593-Guitarra-electrica-stratocaster-I60-LAST-32-Rojo-A.jpg.webp",
        titulo: "Guitarra electrica",
        descripcion: "Telecabina de 6 sillines con cuerdas a través del cuerpo y sillines de acero de bloque, 3 capas negro/blanco/negro, 9,5\" (241 mm).",
        precio: "$4.950.000"
    },
    {
        imagen: "https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2025/04/airpods-dos-pares-auriculares.jpg?x=500&y=295&quality=80",
        titulo: "Airpods pro",
        descripcion: "Auriculares inalámbricos con micrófono, cancelacion de ruido, carga USB-C.",
        precio: "$650.000"
    }
];

productos.forEach(producto => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".image").src = producto.imagen;
    clon.querySelector(".title").textContent = producto.titulo;
    clon.querySelector(".desc").textContent = producto.descripcion;
    clon.querySelector(".price").textContent = producto.precio;

    // Interactividad: mostrar alert con el nombre del producto al hacer clic en la tarjeta
    clon.querySelector('.app-card').addEventListener('click', () => {
        alert(`Producto: ${producto.titulo}`);
    });

    contenedor.appendChild(clon);
});
