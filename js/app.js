(() => {
  const modalImagen = document.querySelector('#modal-imagen');

  if (modalImagen) {
    modalImagen.addEventListener('show.bs.modal', function (event) {
      // console.log(event.relatedTarget);

      const enlace = event.relatedTarget;
      const rutaImagen = enlace.getAttribute('data-bs-imagen');

      // console.log(rutaImagen);

      //construir imagen
      const imagen = document.createElement('IMG');
      imagen.src = `img/${rutaImagen}.jpg`;

      // console.log(imagen.src);

      imagen.classList.add('img-fluid');
      imagen.alt = 'Imagen galeria';

      console.log(imagen);

      const contenidoModal = document.querySelector('.modal-body');
      contenidoModal.appendChild(imagen);
    });

    modalImagen.addEventListener('hidden.bs.modal', (event) => {
      console.log('ocultando modal');
      const contenidoModal = document.querySelector('.modal-body');
      contenidoModal.textContent = '';
    });
  }
})();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();
