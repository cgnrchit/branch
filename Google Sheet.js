


const scriptURL = 'https://script.google.com/macros/s/AKfycbwhgZCH_8UgMKeOUgq7V0tq7oBCijfnkW5bsglv6qSNrbj9OciG-_PK21nDH0mN0uYP/exec'


                    const form = document.forms['collectionForm']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
