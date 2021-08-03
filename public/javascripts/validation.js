const forms = document.getElementsByClassName('needs-validation')
const validation = Array.prototype.filter.call(forms, (form) => {
  form.addEventListener('submit', function onFormSubmitted(event) {
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    form.classList.add('was-validated')
  })
})