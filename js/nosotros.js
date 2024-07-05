const tituloParrafo=[{
    titulo:`Nuestra Historia`, 
    parrafo:`Somos una familia compuesta por padre, madre e hijo, apasionados por la moda sostenible y el cuidado del medio ambiente. Desde siempre, hemos creído en el poder de la reutilización y en la importancia de reducir nuestro impacto ecológico. De esta convicción nace nuestra empresa, un proyecto familiar que busca transformar ropa usada en nuevas prendas únicas y de alta calidad.`
},
{
    titulo:`Nuestra Misión`, 
    parrafo:`Nuestro objetivo es darle una segunda vida a la ropa que ya no se utiliza, evitando que termine en vertederos y contribuyendo a un consumo más responsable. Creemos que cada prenda tiene una historia que contar y queremos ser parte de esa narrativa, creando piezas que no solo son estéticamente atractivas, sino también respetuosas con el medio ambiente.`
},
{
    titulo:`Nuestro Proceso`, 
    parrafo:`Recogemos ropa usada, la clasificamos y seleccionamos las piezas que tienen el potencial de convertirse en algo nuevo. Luego, a través de técnicas de patchwork y diseño creativo, damos vida a nuevas prendas. Cada pieza es única y está hecha con cuidado y atención al detalle, asegurando que nuestros productos sean de la más alta calidad.`
},
{
    titulo:`Nuestro Compromiso`, 
    parrafo:`Estamos comprometidos con la sostenibilidad y la moda ética. Trabajamos para minimizar nuestro impacto ambiental en cada etapa del proceso de producción y nos esforzamos por crear conciencia sobre la importancia de la reutilización y el reciclaje en la industria de la moda. Invitamos a nuestros clientes a unirse a nosotros en esta misión y a disfrutar de prendas que no solo lucen bien, sino que también hacen el bien.`
}]

const nosotros = document.getElementById(`history`)
nosotros.innerHTML = `
<h1>Esta es la historia de Pangea</h1>
<div id="nuestro"></div>
`
const nuestro = document.getElementById(`nuestro`)
tituloParrafo.forEach(element => {
    const divNosotros = document.createElement(`div`)
    divNosotros.innerHTML = `<h2>${element.titulo}
    </h2>
    <p>${element.parrafo}</p>`
    nuestro.appendChild(divNosotros)
});

