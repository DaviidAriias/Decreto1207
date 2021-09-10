addEventListener('DOMContentLoaded', () =>{
    const btnInit = document.querySelector('#btnInit');

    //optener cantidad de pixeles
    const optener_pixelesScroll = () => document.documentElement.scrollTop || document.body.scrollTop

    const goTop = () =>{
        //debugger
        if(optener_pixelesScroll() > 0){
            requestAnimationFrame(goTop)
            scrollTo(0,optener_pixelesScroll() - (optener_pixelesScroll() / 10))
        }
    }

    const indicarScroll = () => {
        if(optener_pixelesScroll() > 8000){
            btnInit.classList.add('shortcut');
            btnInit.classList.remove('shortcut--hidden');

        } else{
            btnInit.classList.remove('shortcut');
            btnInit.classList.add('shortcut--hidden');
        }
    }

    btnInit.addEventListener('click', goTop)
    window.addEventListener('scroll', indicarScroll)
})

function rszIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}