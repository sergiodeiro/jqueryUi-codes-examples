/*$(function () {
    var icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };
    $("#accordion").accordion({
        icons: icons
    });
    $("#toggle").button().on("click", function () {
        if ($("#accordion").accordion("option", "icons")) {
            $("#accordion").accordion("option", "icons", null);
        } else {
            $("#accordion").accordion("option", "icons", icons);
        }
    });
});



$(function () {
    $("#date").datepicker({
        showOn: "button",
        buttonImage: "img/calendar.png",
        buttonImageOnly: true
    });

    $("#date").datepicker($.datepicker.regional["pt-BR"]);

});


$(function () {
    var buttons =
        $("#dialog").dialog({
            autoOpen: false,
            width: 400,
            buttons: [
                {
                    text: "Ok",
                    click: function () {
                        $(this).dialog();
                    }
                },
                {
                    text: "Cancel",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });

    // Link to open the dialog
    $("#dialog-link").click(function (event) {
        $("#dialog").dialog("open");
        event.preventDefault();
    });
});


$(function () {
    $("#drag").draggable();
    $("#drop").droppable({
        drop: function (event, ui) {
            $(this).addClass("ui-state-highlight")
                .find("p").html("colocado !!");
        }
    });
});


$(function () {

    $("#catalogo li").draggable({
        helper: "clone"
    });
    $("#carrinho ul").droppable({
        drop: function (event, ui) {
            $(this).append($("<li/>").text(ui.draggable.text()));
            $(this).find(".mensagem").remove();
        }
    });

});


$(function () {

    $("#progressbar").progressbar({
        value:32,
        classes: {
            "ui-progressbar-value": "highlight"
          }
    })

});


$(function(){

   $("#resizable").resizable();

});


$(function(){
    $("#slider").slider({
        min: 10,
        max: 100,
        value: 60,
        slide:function(event,ui){
              $("#valor").val(ui.value)
        }
    });
})



$(document).ready(function() { 
    // bind 'myForm' and provide a simple callback function 
    $('#myForm').ajaxForm(function() { 
        alert("Thank you for your comment!"); 
    }); 
}); 

*/

/*$(function(){
       $("#botao").click(function(){
           $.ajax({
                 type: "GET",
                 url: "ajax/arquivo.txt",
                 dataType: "text",
                 sucess: function(resultado){
                     alert(resultado);
                 }
           });

              return false;

       });
}); */

