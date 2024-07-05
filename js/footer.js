const WHAP = `https://wa.me/5493444578126`
const YEAR = new Date().getFullYear()
const pieDePag = document.getElementById(`footerId`)
pieDePag.innerHTML = `
<h3 class= 'whap' >Comunicate con nosotros al <a href="${WHAP}">WHATSAPP</a></h3>
<h5 class= 'year' >${YEAR}</h5>
<h3 class= 'thanks' >Gracias por su vista</h3>
`
