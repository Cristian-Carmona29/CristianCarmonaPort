let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[3].classList.add("wordpress");
        habilidades[2].classList.add("php");
        habilidades[4].classList.add("laravel");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

// Función para manejar el envío del formulario de contacto con AJAX
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('send_mail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const responseMessage = document.getElementById('responseMessage');
        if (data.success) {
            responseMessage.innerHTML = `
                <p>Mensaje enviado con éxito.</p>
                <p>Gracias por comunicarte conmigo :)</p>
                <p>Tendrás mi respuesta lo más pronto posible.</p>
            `;
        } else {
            responseMessage.innerHTML = '<p>Error al enviar el mensaje.</p>';
            console.error('Error:', data.error);
        }
    })
    .catch(error => {
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.innerHTML = '<p>Error al enviar el mensaje.</p>';
        console.error('Error:', error);
    });
});
