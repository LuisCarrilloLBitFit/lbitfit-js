/******** Página Index ********/
/*
* Carga JSON con AJAX
*/
document.addEventListener("DOMContentLoaded", function () {
  const btnServicios = document.querySelector(".bloque-boton button");

  btnServicios.addEventListener("click", function () {
    // Aumentar la altura del contenedor al hacer clic
    const contenedor = document.querySelector(".noticias-json");
    contenedor.style.height = "auto"; 
    contenedor.style.maxHeight = "none"; 
    contenedor.style.overflow = "visible"; 

    cargarServicios();
  });

  function cargarServicios() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data/servicios.json", true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        const servicios = JSON.parse(xhr.responseText);
        mostrarServicios(servicios);
      } else {
        console.error("Error al cargar los servicios:", xhr.status);
      }
    };

    xhr.onerror = function () {
      console.error("Error en la solicitud AJAX");
    };

    xhr.send();
  }

  function mostrarServicios(servicios) {
    const contenedor = document.querySelector(".noticias-json");
    contenedor.innerHTML = "";

    servicios.forEach(servicio => {
      const div = document.createElement("div");
      div.classList.add("servicio");

      div.innerHTML = `
        <h4>${servicio.nombre}</h4>
        <p>${servicio.descripcion}</p>
        <p><strong>Precio:</strong> ${servicio.precio}</p>
        <hr>
      `;

      contenedor.appendChild(div);
    });
  }
});

/*
* Validación Formulario
*/
function validarIndex(){
  $(document).ready(function(){
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var txt_area = $("#area").val().trim();

    //validación nombre
    if(name === ""){
      $("#err-nom").css("color", "red");
      document.getElementById("err-nom").innerText = "El campo Nombre no puede estar vacío";
      return false;
    }else if(!isNaN(name)){
      $("#err-nom").css("color", "red");
      document.getElementById("err-nom").innerText = "El campo Nombre no puede contener números";
      return false;
    }else{
      $("#err-nom").css("color", "green");
      document.getElementById("err-nom").innerText = "✔";
    }

    //validación email
    if(email === ""){
      $("#err-ema").css("color", "red");
      document.getElementById("err-ema").innerText = "El campo Email no puede estar vacío";
      return false;
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      $("#err-ema").css("color", "red");
      document.getElementById("err-ema").innerText = "Debe ingresar un email válido";
      return false;
    }else if (email.length > 50) {
      $("#err-ema").css("color", "red");
      document.getElementById("err-ema").innerText = "El email no puede superar los 50 caracteres";
      return false;
    }else{
      $("#err-ema").css("color", "green");
      document.getElementById("err-ema").innerText = "✔";
    }

    // Validación TextArea
    if (txt_area === "") {
      $("#err-txtarea").css("color", "red").text("El campo Comentario no puede estar vacío");
      return false;
    }else{
      $("#err-txtarea").css("color", "green").text("✔");
    }

    window.open("https://lbitfititstore.es");
    return true;
  });
}

// Asegura que el DOM esté cargado antes de añadir el listener
window.addEventListener("DOMContentLoaded", function() {
  document.getElementById("btn-contact").addEventListener("click", validarIndex);
});

/******** Página Galería ********/

// Inicia aquí y ejecute showSlide() para darle a su caja de luz un estado predeterminado.
let slideIndex = 1;
showSlide(slideIndex);

// funcionalidad para contenido en el que se puede hacer clic.
function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block';
};

function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
};

// asignando nuevos valores a nuestro slidIndex.

function changeSlide(n) {
  showSlide(slideIndex += n);
};

function toSlide(n) {
  showSlide(slideIndex = n);
};

// la lógica para el cuadro de luz.

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');

 
  if (slides.length === 0) return;
  
  if (n > slides.length) {
    slideIndex = 1;    
  };

  if (n < 1) {
    slideIndex = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };

  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };


  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
}


/******** Página Presupuesto ********/
/**
 * Validación datos
 */
function validarDatos(){
    var name = $("#name-pre").val().trim();
    var lastname = $("#lastname-pre").val().trim();
    var phone = $("#phone-pre").val().trim();
    var email = $("#email-pre").val().trim();
    var generanum = /^(?:\+34\s?)?\d{9}$/;

    let valido = true;
    let aceptar = document.getElementById("aceptar").checked;

    //validación nombre
    if(name === ""){
      $("#text-name").css("color", "red");
      document.getElementById("text-name").innerText = "El campo Nombre no puede estar vacío";
      return false;
    }else if(!isNaN(name)){
      $("#text-name").css("color", "red");
      document.getElementById("text-name").innerText = "El campo Nombre no puede contener números";
      return false;
    }else if (name.length > 15) {
      $("#text-name").css("color", "red");
      document.getElementById("text-name").innerText = "El nombre no puede superar los 15 caracteres";
      return false;
    }else{
      $("#text-name").css("color", "green");
      document.getElementById("text-name").innerText = "✔";
    }

    //validación apellidos
    if(lastname === ""){
      $("#text-lastname").css("color", "red");
      document.getElementById("text-lastname").innerText = "El campo Apellidos no puede estar vacío";
      return false;
    }else if(!isNaN(lastname)){
      $("#text-lastname").css("color", "red");
      document.getElementById("text-lastname").innerText = "El campo Apellido no puede contener números";
      return false;
    }else if (lastname.length > 40) {
      $("#text-lastname").css("color", "red");
      document.getElementById("text-lastname").innerText = "El campo Apellidos no puede superar los 50 caracteres";
      return false;
    }else{
      $("#text-lastname").css("color", "green");
      document.getElementById("text-lastname").innerText = "✔";
    }

    //validación teléfono
    if(phone === ""){

      $("#text-phone").css("color", "red");
      document.getElementById("text-phone").innerText = "El campo Teléfono no puede estar vacío";
    }else if(generanum.test(phone)){
      $("text-phone").css("color", "green");
      document.getElementById("text-phone").innerText = "✔";
    }else{
      $("#text-phone").css("color", "red");
      document.getElementById("text-phone").innerText = "Número de teléfono inválido";
    }
    
    //validación email
    if(email === ""){
      $("#text-email").css("color", "red");
      document.getElementById("text-email").innerText = "El campo Email no puede estar vacío";
      return false;
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      $("#text-email").css("color", "red");
      document.getElementById("text-email").innerText = "Debe ingresar un email válido";
      return false;
    }else if (email.length > 50) {
      $("#text-email").css("color", "red");
      document.getElementById("text-email").innerText = "El email no puede superar los 50 caracteres";
      return false;
    }else{
      $("#text-email").css("color", "green");
      document.getElementById("text-email").innerText = "✔";
    }
    
    // ✅ Validación aceptación de políticas
    let spanPoliticas = document.getElementById("text-politicas");
    if (!aceptar) {
      if (!spanPoliticas) {
        const nuevoSpan = document.createElement("span");
        nuevoSpan.id = "text-politicas";
        nuevoSpan.style.color = "red";
        nuevoSpan.innerText = " Debe aceptar las políticas de privacidad y condiciones de uso.";
        document.getElementById("aceptar").parentNode.appendChild(nuevoSpan);
      } else {
        spanPoliticas.style.color = "red";
        spanPoliticas.innerText = " Debe aceptar las políticas de privacidad y condiciones de uso.";
      }
      valido = false;
    } else {
      if (spanPoliticas) {
        spanPoliticas.style.color = "green";
        spanPoliticas.innerText = " ✔";
      }
    }

    return valido;
}

/**
 * Validación presupuesto
 */

// Precios base de productos
const preciosProductos = {
  "Desarollo web": 1000,
  "Soporte IT": 700,
  "Servicio Cloud": 1200,
  "Hosting": 300
};

// Coste de extras
const precioExtras = {
  producto1: 200, // Auditoría
  producto2: 150, // SEO
  producto3: 250, // Migración
  producto4: 100  // Seguridad
};

// Calcular presupuesto
function calcularPresupuesto() {
  // Validar antes de continuar
  if (validarDatos() === false) return;

  const producto = document.getElementById("sel").value;
  const plazo = parseInt(document.getElementById("plazos").value);
  let total = 0;

  // Verificar que el producto sea válido
  if (!preciosProductos[producto]) {
    alert("Por favor, selecciona un producto válido.");
    return;
  }

  // Precio base del producto
  total += preciosProductos[producto];

  // Extras seleccionados
  for (let extra in precioExtras) {
    if (document.getElementById(extra).checked) {
      total += precioExtras[extra];
    }
  }

  // Descuento por plazo
  if (!isNaN(plazo)) {
    if (plazo <= 1) {
      total *= 1.2; // Urgente = recargo 20%
    } else if (plazo <= 3) {
      total *= 1; // Sin cambio
    } else if (plazo <= 6) {
      total *= 0.95; // 5% descuento
    } else {
      total *= 0.90; // 10% descuento
    }
  }

  alert("El presupuesto estimado es: " + total.toFixed(2) + " €");
}

// Agregar evento al botón de envío
window.addEventListener("DOMContentLoaded", function () {
  const btnPresupuesto = document.getElementById("submit-Btn");
  if (btnPresupuesto) {
    btnPresupuesto.addEventListener("click", function () {
      if (validarDatos() !== false) {
        calcularPresupuesto();
      }
    });
  }
});

/******** Página Contacto ********/
// Coordenadas de Plaza de la Azucena, Leganés
document.addEventListener("DOMContentLoaded", function () {

  console.log("JS cargado");
  
  const lat = 40.33122;
  const lng = -3.76613;


  // Crear el mapa centrado en la ubicación
  const map = L.map('map').setView([lat, lng], 16);

  // Añadir capa base de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);


  // Añadir un marcador con popup
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup('Plaza de la Azucena, Leganés')
    .openPopup();
});