function onScroll() {
    if(scrollY > 0) {
        document.getElementById('navigation').classList.add('scroll');
    }else{
        document.getElementById('navigation').classList.remove('scroll');
    }
}

function onClickOpen() {
    document.body.classList.add('menu-expanded');
}

function onClickClose() {
    document.body.classList.remove('menu-expanded');
}