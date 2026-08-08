/* ==========================================
   1. BASE DE DATOS LOCAL (Array de Objetos)
========================================== */
/* Creamos una constante (const) llamada 'inventario'. Es un array (lista) simbolizada por los corchetes [].
   Dentro, cada producto es un objeto simbolizado por las llaves {}. 
   Puedes copiar un bloque de estos y pegarlo más abajo para añadir productos reales a Megabyte Pi.
*/
const inventario = [
    {
        id: 1, // Identificador único, crucial para saber qué tarjeta clickeó el usuario
        nombre: "Audífonos Basic 3.5mm",
        precio: "$5.00",
        descripcion: "Audífonos intrauditivos alámbricos diseñados para uso general. Cuentan con un conector analógico estándar de 3.5 mm, asegurando compatibilidad directa con smartphones tradicionales, computadoras y controles de consola.",
        // El primer elemento del array de imágenes será la foto principal
        imagenes: [
            "img2/3.5_1.png", 
            "img2/3.5_2.png"
        ]
    },
    {
        id: 2,
        nombre: "Audifonos IEM QKZ AK3",
        precio: "$14.00",
        descripcion: "Monitores in-ear (IEM) orientados a la alta fidelidad y el rendimiento en gaming. Equipados con un controlador dinámico de 10 mm, sensibilidad de 109 dB e impedancia de 17 Ω, garantizando una reproducción precisa de frecuencias entre 20Hz y 20,000Hz con certificación Hi-Res Audio. Su estructura translúcida incluye un diseño ergonómico de gancho sobre la oreja y un cable con conector de 3.5 mm, optimizando la estabilidad y la durabilidad estructural.",
        imagenes: [
            "img2/AK3_!.png",
            "img2/AK3_2.png",
            "img2/AK3_3.png"
        ]
    },
    {
        id: 3,
        nombre: "Audifonos IEM QKZ AK6",
        precio: "$12.00",
        descripcion: "Monitores in-ear (IEM) orientados a la alta fidelidad de audio. Están equipados con controladores dinámicos optimizados para la reproducción precisa de frecuencias bajo la certificación Hi-Res Audio. Su estructura translúcida de policarbonato incorpora un diseño ergonómico de gancho sobre la oreja, garantizando estabilidad durante el movimiento. Integran un cable reforzado con conector analógico estándar de 3.5 mm, asegurando durabilidad y compatibilidad universal con dispositivos equipados con jack de audio.",
        imagenes: [
            "img2/AK6_1.png",
            "img2/AK6_2.png",
            "img2/AK6_3.png",
            "img2/AK6_4.png"
        ]
    },
    {
        id: 4,
        nombre: "Audifonos de Casco Tune650",
        precio: "$21.00",
        descripcion: "Auriculares inalámbricos de diadema modelo TUNE 650NC. Integran conectividad Bluetooth y un sistema de iluminación LED perimetral en las cúpulas. Su formato over-ear (circumaural) cuenta con almohadillas sintéticas que proporcionan aislamiento pasivo. Se alimentan mediante una batería recargable vía puerto USB (cable de carga incluido)",
        imagenes: [
            "img2/CAS_1.png",
            "img2/CAS_2.png",
            "img2/CAS_3.png"
        ]
    },
    {
        id: 5,
        nombre: "Ventilador de Cuello Recargable",
        precio: "$8.00",
        descripcion: "Dispositivo de refrigeración personal, diseñado para mantener un flujo de aire constante. Su estructura ergonómica en forma de U distribuye el peso sobre los hombros, expulsando el aire a través de las ranuras de ventilación direccionales situadas a lo largo de la banda. Opera mediante una batería interna recargable a través de conexión USB (cable suministrado). Fabricado en plástico rígido, ofrece una solución de enfriamiento manos libres ideal para exteriores, trabajo físico o áreas sin circulación de aire.",
        imagenes: [
            "img2/CU_1.png",
            "img2/CU_2.png",
            "img2/CU_3.png"
        ]
    },
    {
        id: 6,
        nombre: "Reloj Digital Clasico",
        precio: "$8.00",
        descripcion: "Reloj digital de pulsera con diseño tactico y carcasa robusta de resina, orientada a la absorción de impactos diarios. Su módulo central cuenta con una pantalla de alto contraste que integra visualización de hora digital, cronómetro, entre otros. Se ajusta mediante una correa flexible con hebilla y ofrece resistencia básica al agua para salpicaduras superficiales. Se suministra en un estuche cilíndrico de acrílico transparente para su exhibición y protección.",
        imagenes: [
            "img2/DIG_1.png",
            "img2/DIG_2.png"
        ]
    },
    {
        id: 7,
        nombre: "Ventilador Portatil Recargable",
        precio: "$13.00",
        descripcion: "Ventilador de escritorio compacto con base estabilizadora integrada y chasis circular de plástico ligero. Opera mediante un motor de tres velocidades ajustables para regular el flujo de aire y se alimenta a través de una conexión USB (cable suministrado). Cuenta con una batería interna recargable de larga duración y un sistema de iluminación LED. Una solución de refrigeración direccional optimizada para estaciones de trabajo o mesas de noche.",
        imagenes: [
            "img2/FAN_1.png",
            "img2/FAN_2.png",
            "img2/FAN_3.png"
        ]
    },
    {
        id: 8,
        nombre: "Audifonos Inalambricos A9 PRO",
        precio: "$23.00",
        descripcion: "Audífonos inalámbricos intrauditivos con estuche de carga interactivo. El estuche integra una pantalla táctil a color que permite al usuario gestionar directamente los niveles de batería de cada auricular, el control de reproducción multimedia y los perfiles de ecualización. Equipados con tecnología de Cancelación Activa de Ruido (ANC) y Cancelación de Ruido Ambiental (ENC) para el aislamiento acústico durante la reproducción y llamadas. El chasis incluye un puerto para la correa de transporte suministrada.",
        imagenes: [
            "img2/IN_1.png",
            "img2/IN_2.png"
        ]
    },
    {
        id: 9,
        nombre: "Reloj Deportivo Laxas Fit",
        precio: "$23.00",
        descripcion: "Smartwatch LAXASFIT modelo H7 equipado con un panel táctil, garantizando alto contraste, colores vibrantes y bajo consumo energético. Su chasis cuadrado de bordes redondeados en acabado oscuro incluye una corona lateral giratoria para la navegación por la interfaz. El dispositivo soporta múltiples carátulas digitales intercambiables, monitorización de actividad física y conectividad inalámbrica. Incluye una base de carga magnética con terminal USB.",
        imagenes: [
            "img2/LXF_1.png",
            "img2/LXF_2.png"
        ]
    },
    {
        id: 10,
        nombre: "Masajeador Recargable",
        precio: "$22.00",
        descripcion: "Dispositivo de terapia de percusión para fascia muscular (Smart Fascia Massager). Chasis en formato de escuadra con acabado negro mate y operación simplificada mediante un único botón para el control de intensidades. El paquete incluye cuatro cabezales de masaje intercambiables (esférico, en U, cilíndrico y plano), diseñados para aplicar presión específica en distintos grupos musculares. Alimentación mediante batería interna recargable a través de puerto USB.",
        imagenes: [
            "img2/MASJ_1.jpg",
            "img2/MASJ_2.jpg"
        ]
    },
    {
        id: 11,
        nombre: "Mouse Mixie Inalambrico de Oficina",
        precio: "$12.00",
        descripcion: "Periférico de entrada inalámbrico con diseño simétrico y minimalista, apto para usuarios ambidiestros. Opera a través de una conexión de radiofrecuencia de 2.4 GHz mediante un nanorreceptor USB tipo A (incluido). Su circuitería interna integra un sistema inteligente de ahorro de energía para maximizar la autonomía de la batería durante periodos de inactividad. Presenta un perfil ligero en plástico negro mate, optimizado para la portabilidad y configuraciones de escritorio sin cables.",
        imagenes: [
            "img2/MOUSE_1.png",
            "img2/MOUSE_2.png"
        ]
    },
    {
        id: 12,
        nombre: "Audifonos Basic USB-C",
        precio: "$7.00",
        descripcion: "Audífonos de diseño ergonómico orientados a dispositivos de nueva generación sin puerto analógico. Utilizan una conexión digital USB-C que transmite el audio sin pérdida hacia smartphones modernos, tablets y laptops.",
        imagenes: [
            "img2/C_1.png",
            "img2/C_2.png"
        ]
    }
];

/* ==========================================
   2. SELECCIÓN DE ELEMENTOS DEL DOM
========================================== */
/* Usamos document.getElementById para "atrapar" los elementos de nuestro HTML y poder modificarlos con JS */
const gridProductos = document.getElementById('grid-productos'); // El contenedor vacío de las tarjetas
const modal = document.getElementById('modal-producto'); // La ventana oculta
const btnCerrarModal = document.getElementById('btn-cerrar-modal'); // El botón X

/* Elementos internos de la modal que rellenaremos dinámicamente */
const modalTitulo = document.getElementById('modal-titulo');
const modalPrecio = document.getElementById('modal-precio');
const modalDescripcion = document.getElementById('modal-descripcion');
const modalImgPrincipal = document.getElementById('modal-img-principal');
const modalMiniaturas = document.getElementById('modal-miniaturas');

/* ==========================================
   3. FUNCIÓN PARA RENDERIZAR (DIBUJAR) PRODUCTOS
========================================== */
function dibujarTarjetas() {
    // Primero, nos aseguramos que el grid esté vacío
    gridProductos.innerHTML = '';

    /* Recorremos nuestro array 'inventario' elemento por elemento.
       El método forEach ejecuta la función por cada 'producto' que encuentre.
    */
    inventario.forEach(producto => {
        // Creamos un nuevo elemento <div> en la memoria
        const tarjeta = document.createElement('div');
        // Le añadimos la clase CSS 'tarjeta' que creamos en styles.css
        tarjeta.classList.add('tarjeta');
        
        // Asignamos un evento: Si el usuario hace click en esta tarjeta, se ejecuta abrirModal
        // Pasamos el producto.id para que la función sepa qué producto abrir
        tarjeta.onclick = () => abrirModal(producto.id);

        /* Usamos "Template Literals" (las comillas invertidas ` `) para poder inyectar 
           variables de JS directo en el HTML usando ${variable}.
        */
        tarjeta.innerHTML = `
            <img src="${producto.imagenes[0]}" alt="${producto.nombre}">
            <div class="tarjeta-info">
                <h3>${producto.nombre}</h3>
                <p class="precio">${producto.precio}</p>
            </div>
        `;

        // Finalmente, metemos esta nueva tarjeta que estaba en memoria dentro del grid visible del HTML
        gridProductos.appendChild(tarjeta);
    });
}

/* ==========================================
   4. LÓGICA DE LA VENTANA MODAL
========================================== */

// Función que se ejecuta al clickear una tarjeta
function abrirModal(idBuscado) {
    /* El método .find() busca dentro del array. Le decimos: "Traeme el producto
       cuyo id sea exactamente igual (===) al idBuscado que recibí del click".
    */
    const producto = inventario.find(p => p.id === idBuscado);

    // Rellenamos los textos de la modal con la información del producto encontrado
    modalTitulo.innerText = producto.nombre;
    modalPrecio.innerText = producto.precio;
    modalDescripcion.innerText = producto.descripcion;
    
    // Ponemos la primera imagen del array como la imagen principal
    modalImgPrincipal.src = producto.imagenes[0];

    // Limpiamos las miniaturas previas por si abriste otro producto antes
    modalMiniaturas.innerHTML = '';

    // Si el producto tiene más de 1 imagen, creamos las miniaturas
    if (producto.imagenes.length > 1) {
        producto.imagenes.forEach(rutaImagen => {
            const miniatura = document.createElement('img');
            miniatura.src = rutaImagen;
            
            // Si le doy click a una miniatura, la imagen principal cambia a la ruta de esa miniatura
            miniatura.onclick = () => {
                modalImgPrincipal.src = rutaImagen;
            };
            
            modalMiniaturas.appendChild(miniatura);
        });
    }

    // Le quitamos la clase 'oculto' a la modal. Esto dispara la transición CSS y la hace visible.
    modal.classList.remove('oculto');
}

// Función para cerrar la modal
function cerrarModal() {
    // Simplemente le volvemos a poner la clase 'oculto' para que desaparezca
    modal.classList.add('oculto');
}

// Evento: Al hacer click en el botón de la "X", se ejecuta cerrarModal
btnCerrarModal.onclick = cerrarModal;

// Evento: Si el usuario hace click afuera del cuadro blanco (directamente en el fondo negro), también se cierra
modal.onclick = (evento) => {
    // Verificamos que el click haya sido exactamente en el div oscuro 'modal-producto', no en su contenido
    if (evento.target === modal) {
        cerrarModal();
    }
};

/* ==========================================
   5. INICIALIZACIÓN
========================================== */
/* Esta línea es la que enciende el motor. Llama a la función de dibujo 
   justo cuando el archivo JavaScript termina de cargar.
*/
dibujarTarjetas();