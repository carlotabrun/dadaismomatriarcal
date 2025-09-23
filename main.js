$(document).ready(function(){
    // Inicializar Slick Carousel en la página de Obras
    // Este código busca el contenedor del carrusel y, si lo encuentra, lo activa.
    if ($('.obras-container').length) {
      $('.obras-container').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });
    }
  
    // Manejo del formulario de contacto
    // Este código intercepta el envío del formulario para mostrar un mensaje de confirmación
    // sin recargar la página.
    if ($('#contacto form').length) {
      $('#contacto form').on('submit', function(e) {
        e.preventDefault(); // Prevenir el envío real del formulario
  
        const form = $(this);
        const formSection = form.closest('.form-section');
        
        // Ocultar el formulario y mostrar un mensaje de éxito.
        // La validación la maneja el atributo 'required' en el HTML.
        form.hide();
        formSection.append('<p style="font-size: 1.1rem; text-align: center; margin-top: 2rem;">¡Gracias por tu mensaje! Nos pondremos en contacto pronto. ✶</p>');
      });
    }
});