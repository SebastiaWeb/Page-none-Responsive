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

            submenu.slideToggle('slow') // Mostramos primero el contenedor de los elementos

            submenuFramework.fadeToggle(800) // Mostrar despues los elementos de ese contenedor
        })

        menuLenguajes.click(() => {

            // Accedemos al DOM
            var submenu = $('.submenu-lenguajes')
            var submenuLenguaje = $('.submenu>li')

            submenu.slideToggle('slow') // Mostramos primero el contenedor de los elementos

            submenuLenguaje.fadeToggle(800) // Mostrar despues los elementos de ese contenedor

          
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