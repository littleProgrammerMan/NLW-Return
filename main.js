function onScroll() {
    if(scrollY > 0) {
        document.getElementById('navigation').classList.add('scroll');
    }else{
        document.getElementById('navigation').classList.remove('scroll');
    }
}

function onClick() {
    if(true) {
        document.getElementById('corpo').classList.add('menu-expanded');
    }
    else if(true) {
        document.getElementById('corpo').classList.remove('menu-expanded');
    }
}