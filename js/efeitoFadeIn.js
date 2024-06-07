const fadein = document.querySelectorAll('.hidden');

const myObserver = new IntersectionObserver((response) => {
    console.log(response);
    response.forEach((elemento) => {
        if (elemento.isIntersecting) {
            elemento.target.classList.add('show')
        }else{
            elemento.target.classList.remove('show')
        }
    })

})
fadein.forEach((element) => {
    myObserver.observe(element)
})