document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent the form from submitting

  const fields = [
    document.getElementById("nombre"),
    document.getElementById("apellido"),
    document.getElementById("mail"),
    document.getElementById("campo-texto"),
    document.getElementById("chekeo")
  ];
  const radios = document.getElementsByName("opciones");
  let allFieldsComplete = true;


  const mensajeFinal = document.getElementById("contenedor-enviado")

  // Helper function to show or hide error messages
  function validateField(field) {
    const errorMessage = field.nextElementSibling;
    if (field.type === 'checkbox') {
      if (!field.checked) {
        if (errorMessage) errorMessage.style.display = "block";
        allFieldsComplete = false;
      } else {
        if (errorMessage) errorMessage.style.display = "none";
      }
    } else if (field.type === 'radio') {
      let radioChecked = false;
      radios.forEach((radio) => {
        if (radio.checked) {
          radioChecked = true;
        }
      });

      const selectionContainer = field.closest('.seleccion');
      if (selectionContainer) {
        const selectionError = selectionContainer.querySelector('.error-message');
        if (!radioChecked) {
          if (selectionError) selectionError.style.display = "block";
          allFieldsComplete = false;
        } else {
          if (selectionError) selectionError.style.display = "none";
        }
      }
    } else {
      if (field.value.trim() === "") {
        if (errorMessage) errorMessage.style.display = "block";
        allFieldsComplete = false;
      } else {
        if (errorMessage) errorMessage.style.display = "none";
      }
    }
  }

  // Validate each field
  fields.forEach(field => {
    if (field) validateField(field);
  });

  // Validate radio buttons by checking the group
  if (radios.length > 0) validateField(radios[0]);

  if (allFieldsComplete) {
    
    
    mensajeFinal.classList.remove("oculto")  
  }
});



