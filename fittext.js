document.addEventListener("DOMContentLoaded", ()=>{
    ft_init();
    window.addEventListener("resize", ()=>{
        ft_init();
    });

});

function ft_init() {
    let elem_class = "fittext";
    let start_size = "12px";
    
    let elems = document.getElementsByClassName(elem_class);
    for (let i=0; i<elems.length; i++) {
        fittext(elems[i], start_size);
    }
}

function fittext(e, start, step = 1) {
    e.style.visibility = "hidden";
    
    let size = start;
    let val = parseFloat(size);
    let unit = size.match('/%|px|em/')[0];
    
    let is_overflowed = false;
    let safety = 0;
    do {
        val++;
        e.style.fontSize = val+unit;
        
        if (e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth) {
            is_overflowed = true;
        }
        safety++;
    } while (!is_overflowed && safety < 300);
    val--;
    e.style.fontSize = val+unit;
    
    e.style.visibility = "visible";
}