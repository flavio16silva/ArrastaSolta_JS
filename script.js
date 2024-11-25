//Eventos
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
})

document.querySelectorAll('.area').forEach( area => {
    area.addEventListener('dragover', dragOver)
    area.addEventListener('dragleave', dragLeave)
    area.addEventListener('drop', drop)

})

//Funções do item
function dragStart(e){
    e.currentTarget.classList.add('dragging')
}
function dragEnd(e){
    e.currentTarget.classList.remove('dragging')
}

//Funções da area
function dragOver(e){
    if(e.currentTarget.querySelector('.item') === null){
        e.preventDefault()
        e.currentTarget.classList.add('hover')
    }
    //console.log('passou por cima!')
}

function dragLeave(e){
    e.currentTarget.classList.remove('hover')
    //console.log('saiu de uma area dropavel!')
}

function drop(e){
    e.currentTarget.classList.remove('hover')

    if(e.currentTarget.querySelector('.item') === null){
        let dragItem = document.querySelector('.item.dragging')
        e.currentTarget.appendChild(dragItem)
    }
    //console.log(e.currentTarget)
}