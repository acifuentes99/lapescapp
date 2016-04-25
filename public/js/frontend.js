
$(document).ready(function(){

/*
* Pantalla de Inicio
* Seleccion de Recetas
* */
function reset_ () {
      $(".screen2").css( "display", "none" );
      $(".screen_recetas").css( "display", "none" );
      $(".screen_recetas2").css( "display", "none" );
      $(".screen3").css( "display", "none" );
      $(".screen4").css( "display", "none" );
      $(".screen5").css( "display", "none" );
      $(".screen6").css( "display", "none" );
      $(".screen7").css( "display", "none" );
      $(".screen7v2").css( "display", "none" );
        $("#r_title").html('');
        $("#ingredientes").html('');
        $("#preparacion").html('');
        $("#r_title2").html('');
        $("#ingredientes2").html('');
        $("#preparacion2").html('');
}


    $(".i_b1").on( "click", function() {
        reset_();
      $(".screen2").css( "display", "block" );
    });
    $(".i_b3").on( "click", function() {
        reset_();
      $(".screen3").css( "display", "block" )    });
    $("#i_r1").on( "click", function() {
        $(".screen2").css( "display", "none" );
        $(".screen_recetas").css( "display", "block" );
        $("#r_title").html(recipes[2].title);
        $.each(recipes[2].ing.split(';'), function(index, value) {
            $("#ingredientes").append('<li>'+value+'</li>');
        });
        $.each(recipes[2].pasos.split(';'), function(index, value) {
            $("#preparacion").append('<li>'+value+'</li>');
        });
    });
    $("#i_r2").on( "click", function() {
        $(".screen2").css( "display", "none" );
        $(".screen_recetas").css( "display", "block" );
        $("#r_title").html(recipes[0].title);
        $.each(recipes[0].ing.split(';'), function(index, value) {
            $("#ingredientes").append('<li>'+value+'</li>');
        });
        $.each(recipes[0].pasos.split(';'), function(index, value) {
            $("#preparacion").append('<li>'+value+'</li>');
        });
    });
    $("#i_r3").on( "click", function() {
        $(".screen2").css( "display", "none" );
        $(".screen_recetas").css( "display", "block" );
        $("#r_title").html(recipes[1].title);
        $.each(recipes[1].ing.split(';'), function(index, value) {
            $("#ingredientes").append('<li>'+value+'</li>');
        });
        $.each(recipes[1].pasos.split(';'), function(index, value) {
            $("#preparacion").append('<li>'+value+'</li>');
        });
    });
    /*
    $("#r_b3").on( "click", function() {
    nw
        $("#r_title").html('');
        $("#ingredientes").html('');
        $("#preparacion").html('');
      $(".screen_recetas").css( "display", "none" );
      $(".screen2").css( "display", "block" );
    });*/


/*
*   Pantalla de Seleccion de Pescados
* */

    $(".pez6").on("click", function() {
      $("#popup").css( "display", "block" );
    });

    $(document).mouseup(function (e)
    {
        var container = $("#popup");
        if (!container.is(e.target) && container.has(e.target).length === 0) container
        {
            container.hide();
        }
    });
    $(".pez1").on("click", function() {
      $("#nodisp").css( "display", "block" );
      $("#nodisp").css( "left", "40px" );
      $("#nodisp").css( "top", "260px" );
    });
    $(".pez2").on("click", function() {
      $("#nodisp").css( "display", "block" );
      $("#nodisp").css( "left", "40px" );
      $("#nodisp").css( "top", "250" );
    });
    $(".pez3").on("click", function() {
      $("#nodisp").css( "display", "block" );
      $("#nodisp").css( "left", "8" );
      $("#nodisp").css( "top", "200px" );
    });
    $(".pez4").on("click", function() {
      $("#nodisp").css( "display", "block" );
      $("#nodisp").css( "left", "40px" );
      $("#nodisp").css( "top", "230px" );
    });
    $(".pez5").on("click", function() {
      $("#nodisp").css( "display", "block" );
      $("#nodisp").css( "top", "180px" );
      $("#nodisp").css( "left", "40px" );
    });
    $(document).mouseup(function (e)
    {
        var container = $("#nodisp");
        if (!container.is(e.target) && container.has(e.target).length === 0) container
        {
            container.hide();
        }
    });

/*
*   INTERFAZ DEL CONGRIO
* */
    $(".ic1").on("click", function() {
        reset_();
      $(".screen4").css( "display", "block" );
    });
    $(".ic2").on("click", function() {
        reset_();
      $(".screen5").css( "display", "block" );
    });
    $(".ic3").on("click", function() {
        reset_();
      $(".screen6").css( "display", "block" );
    });
    $(".ic4").on("click", function() {
        reset_();
      $(".screen7").css( "display", "block" );
    });
    $(".b410").on("click", function() {
        reset_();
      $(".screen7v2").css( "display", "block" );
    });
    $(".b411").on("click", function() {
        reset_();
      $(".screen7").css( "display", "block" );
    });

    $(".receta3").on( "click", function() {
        reset_();
        $(".screen_recetas2").css( "display", "block" );
        $("#r_title2").html(recipes[3].title);
        $.each(recipes[3].ing.split(';'), function(index, value) {
            $("#ingredientes2").append('<li>'+value+'</li>');
        });
        $.each(recipes[3].pasos.split(';'), function(index, value) {
            $("#preparacion2").append('<li>'+value+'</li>');
        });
    });
    $(".receta4").on( "click", function() {
        reset_();
        $(".screen_recetas2").css( "display", "block" );
        $("#r_title2").html(recipes[4].title);
        $.each(recipes[4].ing.split(';'), function(index, value) {
            $("#ingredientes2").append('<li>'+value+'</li>');
        });
        $.each(recipes[4].pasos.split(';'), function(index, value) {
            $("#preparacion2").append('<li>'+value+'</li>');
        });
    });

    $("#flecha1").on("click", function() {
        reset_();
      $(".screen2").css( "display", "block" );
    });
    $("#flecha2").on("click", function() {
        reset_();
      $(".screen7v2").css( "display", "block" );
    });

});

// VARIABLES

var lista = 'Caldillo de congrio;Congrio en salsa verde;Congrio con almejas;Congrio con camarones;Estofado de congrio;Congrio frito a lo pobre;Rissoto de congrio;Congrio relleno con champiñones;Congrio en salsa marina';
var recipes = [
        {
            'title': 'Estofado de pejeperro',
            'ing': '1 botella (750 ml) de vino blanco;450 g de pescado;1 cebolla mediana picada;1 cucharada de aceite de oliva;3 cucharadas de perejil fresco picado;400 g de tomates picados;sal y pimienta al gusto',
            'pasos': 'Coloca el pescado en un sartén grande (y hondo). Vacía la botella de vino sobre los filetes, enciende la estufa y deja que hierva.;Voltea los filetes por lo menos 1 vez a los filetes. Cuando el pescado se empiece a desbaratar fácilmente (alrededor de 4 minutos), retira del sartén con una espátula perforada y reserva.;En otro sartén, cuece las cebollas a cocer en un poco de aceite de oliva a fuego medio hasta que se ablanden. Agrega los tomates, el perejil y las cebollas al sartén con el vino.;Hierve por lo menos durante 10 minutos hasta que se evapore todo el alcohol. Agrega los trozos de pescado y deja que se calienten.;Sirve con un a barra de pan Francés y una copa de vino'  
        },{
            'title': 'Pejeperro frito',
            'ing': '4 filetes de pescado;1 tazaharina;1/2 cucharadita azúcar;1 huevo batido;3/4 tazaagua fría;2 cucharadasaceite de oliva;aceite para freir;SAL',
            'pasos': 'Condimenta con sal los filetes. Mezcla en un recipiente bajo, la harina con el azúcar y 1/2 cucharadita de sal.;En un tazón pequeño, mezcla el huevo con el agua y el aceite e incorpora esta mezcla a la harina. Bate suavemente.;En una sartén calentar el aceite, sumerge los filetes en esta preparación y fríelos durante 5 minutos en aceite caliente, hasta que estén dorados y crujientes.;Servir en en plato ovalado, acompañado de ensaladas, papas fritas o arroz.'
        },{
            'title': 'Caldillo  de pejeperro',
            'ing': '1 kg. Filetes de pescado;1 cebolla grande cortada en círculos;2 zanahorias;1 diente de ajo;½ morrón;6 papas medianas cortadas en círculos;1 tomate maduro pelado;3 cucharadas de crema líquida;2 cucharadas de salsa de tomates;orégano;sal;pimienta;ají de color;perejil',
            'pasos': 'Descongele los filetes y trócelos en porciones.;En una olla grande coloque un poco de aceite y sofría la cebolla, el ajo y el morrón cortado en tiritas, agregue las zanahorias, las papas y el tomate maduro.;Condimente con los aliños y vierta 1,5 lts. de agua hirviendo, añadiendo si lo prefiere, un cubito de concentrado de pescado.;Deje hervir a fuego suave por 15 minutos.;Agregue las presas de pescado y continúe la cocción sólo por 5 minutos más.;Apague el fuego y deje reposar por 10 minutos, incorpore la crema, revolviendo con cuidado.;Sirva caliente y decore con perejil'
        },{
           'title': 'Congrio con almejas',
           'ing': '800 g de congrio;25 ml de aceite de oliva;250 g de almejas;30 g de harina;80 g de cebolla;1 diente de ajo;Perejil;Una pizca de sal;Pimienta blanca',
           'pasos': 'Reservamos las almejas limpias en un recipiente con agua fría y sal;En una cazuela de barro se pone el aceite a calentar con la cebolla a pochar;Picamos finito el diente de ajo y las ramitas de perejil;Cuando la cebolla se va poniendo transparente (unos 5 min. más o menos), se añade el ajo, y se colocan las rodajas de congrio ligeramente saladas y holgadas de sitio.;Añadimos la harina, se dan unas vueltas y se agrega poco a poco el agua fría, hasta que cubra.;La salsa debe cubrir justo al congrio.;Abrimos al vapor las almejas en una cazuela aparte.;Damos movimientos circulares al cazuela durante 10 minutos.;Añadimos las almejas abiertas y su jugo colado.;Añadimos en el último momento el perejil, porque sinó pierde su aroma y color verde, y que de un ligero hervor.;Se pican los huevos duros y se espolvorean por encima del pescado (esto es opcional).;Se sirve enseguida en su misma cacerola de barro.'
        },{
           'title': 'Congrio relleno con Champiñiones',
           'ing': '2 kilo(s) de congrio fileteado a lo largo;5 rebanada(s) de tocino;1 zanahoria(s) en julianas largas;150 gramo(s) de queso mantecoso rallado;hoja(s) de laurel;2 cucharada(s) de mantequilla(s);1 pimentón cortado en julianas largas;1 diente(s) de ajo (opcional);2 taza(s) de vino blanco;1 cucharada(s) de alcaparra;1 taza(s) de champiñon(es);sal y pimienta;aceite' ,
           'pasos': 'Poner los filetes en pares (una base y una cubierta), poner las bases en una fuente para horno previamente aceitada.;Calentar un sartén, derretir una cucharada de mantequilla y saltear por unos minutos los champiñones, retirar y reservar.;Sobre cada filete de congrio poner una rebanada de tocino, julianas de zanahoria, pimentón, laurel, champiñones salteados y parte del queso.;Tapar con otro filete de congrio y con la ayuda de los mondadientes fijar o cerrar los costados de ambos filetes de congrio (como un sándwich);Mientras en otro recipiente colocar el ajo machacado, con las alcaparras y el vino, sazonar con sal y pimienta.;Llevar el congrio relleno a un horno medio de 160ºC y agregar la mitad de la salsa preparada con vino, durante la cocción se agrega el resto para que no se reseque el pescado.;Continuar la cocción durante 5 a 10 minutos o hasta que el pescado esté de un color blanco.;Servir caliente.'
        }
];
