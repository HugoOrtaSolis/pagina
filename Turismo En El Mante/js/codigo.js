$(document).ready(function(){
    $('#menuInicio').click(function(){
        $('#inicio').animatescroll()
    });

    $('#menuUbicacion').click(function(){
        $('#ubicacion').animatescroll({padding:100})
    });

    $('#menuInformacion').click(function(){
        $('#informacion').animatescroll({padding:20})
    });

    $('#menuGaleria').click(function(){
        $('#galeria').animatescroll({padding:100})
    });
    

    $('#menuContacto').click(function(){
        $('#contacto').animatescroll({padding:97})
    });
    
    //Para que el menu desplegable se oculte automáticamente luego de hacer click (en móviles)
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
        
    
    //codigo para circle_social
    $( ".socialCircle-center" ).socialCircle({
        rotate: 0,
        radius:200,
        circleSize: 2,
        speed:500
    });  
      //codigo para backtoTOP
      var $button = $.backToTop({
        // background color
        backgroundColor: 'rgb(53, 205, 252)',
        // text color
        color: '#FFFFFF',
        // container element - adonde aparece el boton, es decir en el body
        container: this._body, 
        // efecto all aparecer/desaparece 'nonn', 'spin', 'fade', 'zoom', or 'spin-inverse'
        effect: 'spin',
        // enable the back to top button
        enabled: true, 
        // alto y ancho del boton 
        height: 70,  
        width: 70,
        // icon (desde fontawesome)
        icon: 'fas fa-chevron-up',
        // margins 
        marginX: 20,
        marginY: 20,  
        // posicion del boton dentro de la pagina bottom/top left/right
        position: 'bottom right',           
        // trigger position
        pxToTrigger: 600,
        // or 'fawesome'
        theme: 'default',
        // z-index
        zIndex: 999     
  
 
    });
    
});    
