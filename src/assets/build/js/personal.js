//Personal Eleacid
//console.log("funcion lista para usarse");

//Mostrar Ocualtar Barra de Memu
$(document).ready(function () {
  $("#menu_activo").click(function () {
    console.log("Mostar Ocultar menu");
    $("body").toggleClass("nav-md nav-sm")
  });
});

(function () {
  $("#sidebar-menu").find('a').on('click' , function () {
    var $li = $(this).parent();
    if ($li.is('.active')) {
      $li.removeClass('active active-sm');

      //$li.find('ul').css("display","none");
      $('ul:first', $li).slideUp(function() {
          console.log('asd');
      });

      console.log($li.find('ul'));
      console.log('remover');
    }else {
      $li.addClass('active');

      $('ul:first', $li).slideDown(function() {
          console.log('asd');
      });
      //$li.find('ul').css("display","block");
      console.log($li);
      console.log('agregar');
    }
  });
})();
