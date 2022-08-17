function togglePositions(el){
    const positionsList = el.nextElementSibling.classList

    Array.from(positionsList).some(e => e==='buttonForm-position-list-active') ? positionsList.remove('buttonForm-position-list-active') : positionsList.add('buttonForm-position-list-active')
    Array.from(el.classList).some(e => e==='cus-btn-opened') ? el.classList.remove('cus-btn-opened') : el.classList.add('cus-btn-opened')
}

function changeBg(el){
    const currentButton = el
    const mainBackGround = document.getElementById('background-gradient')
    const allButtons = Array.from(document.getElementsByClassName('cus-btn'))    
    
    allButtons.map(e => e.style.opacity === '0.5' ? e.style.opacity = '' : e.style.opacity ='0.5' )
    currentButton.style.opacity === '0.5' ? currentButton.style.opacity = '' : currentButton.style.opacity ='0.5'

    mainBackGround.style.opacity === '0.5' ? mainBackGround.style.opacity = '' : mainBackGround.style.opacity = '0.5'
     
}