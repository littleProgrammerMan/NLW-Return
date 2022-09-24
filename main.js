function onScroll() {
    if(scrollY > 0) {
        document.getElementById('navigation').classList.add('scroll');
    }else{
        document.getElementById('navigation').classList.remove('scroll');
    }
}

function onClickOpen() {
    document.getElementById('corpo').classList.add('menu-expanded');
}

function onClickClose() {
    document.getElementById('corpo').classList.remove('menu-expanded');
}