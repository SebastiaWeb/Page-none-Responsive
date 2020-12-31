$(document).ready(() => {

    /* Animaciones Del Menu */

    var widthDocument = $(document)

    if(widthDocument.width() <= 575){
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
})