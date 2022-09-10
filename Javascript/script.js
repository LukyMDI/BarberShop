var ver_mais = document.getElementById('ver-mais');
var ver_menos = document.getElementById('ver-menos');
var quad_oculto = document.getElementsByClassName('quad-oculto');
var bg_2 = document.getElementById('bg-2');

ver_mais.addEventListener('click', function(){
    quad_oculto[0].style.display = "flex";
    quad_oculto[1].style.display = "flex";
    quad_oculto[2].style.display = "flex";
    quad_oculto[3].style.display = "flex";
    ver_mais.style.display = "none";
    ver_menos.style.display = "block";
});

ver_menos.addEventListener('click', function(){
    quad_oculto[0].style.display = "none";
    quad_oculto[1].style.display = "none";
    quad_oculto[2].style.display = "none";
    quad_oculto[3].style.display = "none";
    ver_menos.style.display = "none";
    ver_mais.style.display = "block";
})

function menu(){
    var menu_hamburger = document.getElementById('menu-hamburguer');
    var menu = document.getElementById('bg-menu');

    menu_hamburger.addEventListener('click', function(){
        menu.style.display = "block";
    });
}

menu();