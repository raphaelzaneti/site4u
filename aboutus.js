function toggleNavMenu(){
    const navBarContent = document.getElementById('navbar-content')
    Array.from(navBarContent.classList).some(e => e === 'd-none') ? navBarContent.classList.remove('d-none') : navBarContent.classList.add('d-none')
    console.log(navBarContent.classList)
}

function toggleAnswer(el){
    const answer = el.nextElementSibling.classList

    Array.from(answer).some(e => e==='d-none') ? answer.remove('d-none') : answer.add('d-none')
}

