console.log('hola');

// base de datos tareas
const datosBd = [

]

// Añadir tarea
const addTarea = document.querySelector('.addTarea')
addTarea.addEventListener('click', (e) => {
  console.log('Añadiendo tarea', e);
  // Capturamos valor del input
  const input = document.querySelector('input')
  const textoInput = input.value

  console.log(datosBd.length);

  // Anterior id (IMPORTANTE EL USO DEL ? PARA EVITAR EL ERROR)
  const anteriorId = datosBd[datosBd.length - 1]?.id

  // SI EL RESULTADO NO ES UN NUMERO O ES UNDEFINED USAMOS || PARA ASIGNAR VALOR ALTERNATIVO
  const nuevoId = anteriorId + 1 || 1
  console.log('nuevoId', nuevoId);
  // Creamos objeto con info de tarea
  const tareaObj = {
    id: nuevoId,
    texto: textoInput,
    completado: false,
    fecha: new Date()
  }

  datosBd.push(tareaObj)
  console.log('datosBd', datosBd);

  pintarTareas(datosBd)

})

function pintarTareas(bd) {

  let cards = ''
  bd.map((item) => {
    cards+= //html
    `
      <div data-tareaid=${item.id} class="tarea border shadow m-2 p-2 d-flex justify-content-between ">
        <div class="textoTarea d-flex align-items-center p-2">${item.texto}</div>
        <div>
          <button class="botonEditar m-1 p-1">✏</button>
          <button class="botonBorrar m-1 p-1">🗑</button>
          <button class="botonCompletar m-1 p-1">✔</button>
        </div>
      </div>
  `
  })
  
  document.querySelector('#tareasPendientes').innerHTML = cards

}

// Borrar tarea

document.querySelector('.botonBorrar').addEventListener('click', (e)=>{

  console.log('borrar tarea', e.target);

})