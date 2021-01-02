$(document).ready(() => {

    /* Animaciones Del Menu */

    var widthDocument = $(document).width()

    if(widthDocument <= 768){
        //Variables que guardaran un elemento del DOM HTML
        var menuFramework = $('.framework')
        var menuLenguajes = $('.lenguajes')

        //Cuando se le click a los elementos especificos del DOM mostramos el submenu
        menuFramework.click(() => {

            // Accedemos al DOM
            var submenu = $('.submenu-framework')
            var submenuFramework = $('.submenu>li')

            submenuFramework.css('display', 'block')

            submenu.slideToggle('slow') // Mostramos primero el contenedor de los elemento
            
        })

        menuLenguajes.click(() => {

            // Accedemos al DOM
            var submenu = $('.submenu-lenguajes')
            var submenuLenguaje = $('.submenu>li')

            submenuLenguaje.css('display', 'block')

            submenu.slideToggle('slow') // Mostramos primero el contenedor de los elementos
          
        })

        var key = true

        // Desplegar menu
        var iconMenu = $('.menu-movil_icon')

        iconMenu.click(() => {

            if (key) {
                iconMenu.html('n')
                key = false
            } else {
                iconMenu.html('o')
                key = true
            }

            $('.main-menu-movil').slideToggle('slow')

            
        })
    }
    /* Fin Animaciones Del Menu */

    if(widthDocument > 575 && widthDocument <= 768){
        var widthAside = $('.main-aside').width()
        var heightHeader = $('.main-encabezado').height()
        var heightMenu = $('.main-menu-movil').height()
        var heightAside = $('.main-aside').height()
        
        var heightFrases = heightHeader + heightMenu + heightAside

        console.log(heightFrases)

        $('.main-frase-del-dia').css('top', (heightFrases-100)+'px')
    }
})