console.log('hola');

// base de datos tareas
let datosBd = [

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
  // borro el imput
  input.value = ''
  input.focus()
})

// Editar tarea
const editarTarea= document.querySelector('.actualizarTarea').addEventListener('click', (e)=>{
  const texto = document.querySelector('input').value;
  const id = document.querySelector('input').dataset.tareaid
  const index = datosBd.findIndex((item)=>item.id == id)
  datosBd[index].texto = texto
  pintarTareas(datosBd)

});

function pintarTareas(bd) {

  let cards = ''
  bd.map((item) => {
    cards += //html
      `
      <div data-tareaid=${item.id} class="tarea border shadow m-2 p-2 d-flex justify-content-between ">
        <div class="textoTarea d-flex align-items-center p-2">${item.texto}</div>
        <div>
          <button class="botonEditar m-1 p-1">✏</button>
          <button data-tareaid=${item.id} class="botonBorrar m-1 p-1">🗑</button>
          <button class="botonCompletar m-1 p-1">✔</button>
        </div>
      </div>
  `
  })

  document.querySelector('#tareasPendientes').innerHTML = cards

}

// Borrar tarea

document.querySelector('body').addEventListener('click', (e) => {

  // borrar tarea
  if (e.target.classList.contains('botonBorrar')) {
    console.log('borrar tarea', e.target.classList);
    const divTarea = e.target.closest('.tarea')
    console.log('divTarea', divTarea);

    // capturamos el id de la tarea en la que hemos hecho click
    const tareaId = divTarea.dataset.tareaid
    console.log('tareaId', tareaId);

    const bdElementoBorrado = datosBd.filter((item) => item.id != tareaId)
    pintarTareas(bdElementoBorrado)
    datosBd = bdElementoBorrado

  }

  // editar tarea
  if (e.target.classList.contains('botonEditar')) {
    console.log('editar tarea', e.target.classList);

    document.querySelector('input').value = e.target.closest('.tarea').querySelector('.textoTarea').innerHTML
    document.querySelector('.actualizarTarea').classList.remove('d-none');
    document.querySelector('.addTarea').classList.add('d-none');
    document.querySelector('input').dataset.tareaid = e.target.closest('.tarea').dataset.tareaid
  }


})