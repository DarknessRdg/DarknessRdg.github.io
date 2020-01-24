import $ from 'jquery'

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


function addListenners(el) {
    const activeClass = 'active'
    const links = el.querySelectorAll('a')

    links.forEach(link => {

        const target = link.getAttribute('data-target')
        
        if (target) {
            const targetEl = document.getElementById(target)
            window.addEventListener('scroll', () => {

                if (isScrolledIntoView(targetEl)) {
                    links.forEach(current => current.classList.remove(activeClass))
                    link.classList.add(activeClass)
                }
            })
        }
        
    })
    
}

export default () => {
    document.querySelectorAll('nav.scrollspsy-content').forEach(el => {
        addListenners(el)
    })
}