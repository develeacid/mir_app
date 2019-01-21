//Personal Eleacid
//console.log("funcion lista para usarse");

//Mostrar Ocualtar Barra de Memu
$(document).ready(function () {
  $("#menu_activo").click(function () {
    console.log("Mostar Ocultar menu");
    $("body").toggleClass("nav-md nav-sm")
  });
});

$(document).ready(function () {
  $("#sidebar-menu").find('a').on('click' , function () {
    var $li = $(this).parent();
    if ($li.is('.active')) {
      $li.removeClass('active active-sm');

      $('ul:first', $li).slideUp(function() {
      });

      console.log($li.find('ul'));
      console.log('remover');
    }else {
      if (!$li.parent().is('.child_menu')) {
        $("#sidebar-menu").find('li').removeClass('active active-sm');
        $("#sidebar-menu").find('li ul').slideUp();
      }else {
        if ($("body").is( ".nav-sm" )) {
          $li.parent().find( "li" ).removeClass( "active active-sm" );
					$li.parent().find( "li ul" ).slideUp();
        }
      }

      $li.addClass('active');

      $('ul:first', $li).slideDown(function() {
      });
      console.log($li);
      console.log('agregar');
    }
  });
});
