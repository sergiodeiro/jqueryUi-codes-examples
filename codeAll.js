/*$(document).ready(function(){
    
   $("span").click(function(){
             
            //alert($("img").attr("title")); // Adicionar um Atributo

            $("img").removeAttr("src"); // Remover um atributo
   });

}); */

/*$(document).ready(function () {

    $("span").click(function () {

        // $("p").html("<button> Maior Valor Dentro </button"); // Adicionar um Elemento dentro do html //

        //$("div").text("Valor Ti"); // Adicionar um texto dentro de uma div ou algo do genero //

        //$("div").text($("p").html());

        //alert($("textarea").value()); // Saber o valor que está sendo digitado dentro da mensagem/

        //$("div").html($("textarea").val()); // Pegar o valor digitado na mensagem e mostrar na div html //

        //$("div").replaceWith("<p>MUDANDO TUDO</p>"); // Sobrepor a mensagem que estava antes e adicionar uma nova mensagem //

        // $("textoarea").replaceWith($("div").html("TESXS"));// Pegar a mensagem digitada no textoarea e sobrepor na mensagem que está escrita na div

    });
});

$(document).ready(function () {

    $("span").click(function () {

        /*var img = $("<img/>",{ 
            src:"img/dog.png",
            title:"Dogs",
            click:function(){alert("FUNFO");}
        });

        //var button = $("<button> Name</button>");

        // $("body").append(button).append(img);

        //$("body").append($("<ul></ul>").append("<li> Append Criado no JQuery </li>"));

        //$("ul").append("<li> Append joga na ultima posicao </li>");

        //$("ul").prepend("<li> Prepend Primeira Posição Sempre </li>");

        //$("ul").before("<h1> Fora e antes do Elementro</h1>")

        //$("ul").after("<h1> Fora e Depois do Elemento").wrap("<p></p>"); // Wrap Envolve a camada selecionada 

        //$("ul").append($("li").clone()); //CLONA O ELEMENTO

        //$("span").remove(); // REMOVE O ELEMENTO 

        //$("span").empty(); // LIMPA O CONTEUDO QUE ESTÁ NO ELEMENTO

        //$("ul").unwrap(); // REMOVE O elemento que envolve a camada.

    });
});*/

/*$(document).ready(function () {

    $("span").click(function () {

        var img = $("<img/>",{ 
            src:"img/dog.png",
            title:"Dogs",
            click:function(){alert("FUNFO");}
        });

         $("body").append(img).css({
             background: "red",
             border: "1px solid"
         });

         //alert($("body").hasClass(img)); // VERIFICAR SE EXISTE  A CLASS POR TRUE E FALSE

         //$("span").removeClass("mod1"); // REMOVE A CLASSE ( VALE LEMBRAR QUANDO UTILIZAR O CLASS não precisa do ponto (".mod1"))

         //$("span").addClass("mod1"); // ADICIONA UMA CLASS 

         //alert($(img).height()); ALTURA E LARGURA
         //alert($(img).width());

         //alert($(img).position().top);
         //alert($(img).position().left);
         //alert($(img).offset().top);
         //alert($(img).offset().left);
    });
}); */


/*$(document).ready(function () {

    $("span").click(function(){
        $("div").text("CLICK").css("color","red");
    }).dblclick(function(){
        $("div").text("DOUBLE CLICK").css({ // EVENTO QUANDO É PRECISO DÁ DOIS CLICKS
            background: "black",
            color: "orange"
        });
    }).mouseover(function(){
        $("div").text("Mouse Over").css({ // EVENTO QUAND O MOUSE ESTA DENTRO DO ELEMENTO SELECIONADO
            background: "white",
            color: "yellow"
        });
    }).mouseout(function(){
        $("div").text("Mouse out").css({ // EVENTO QUANDO O MOUSE ESTÁ FORA DO ELEMENTO SELECIONADO
            background: "green",
            color: "gray"
        });
    }).mouseup(function(){
        $("div").text("Mouse Up").css({   // EVENTO QUAND O MOUSE ESTA PRESSIONADO PARA CIMA
            background: "dark blue",
            color: "dark yellow"
        });
    }).mousedown(function(){
        $("div").text("Mouse Down").css({        // EVENTO QUAND O MOUSE ESTA PRESSIONADO PARA BAIXO
            background: "dark blue",
            color: "dark yellow"
        });
    }).mousemove(function(){
        $("div").text("Mouse Move").css({   // EVENTO DE MOUSE NO QUAL QUANDO É MOVIMENTADO DENTRO DO ELEMENTO ELE INDICA (PODE INDICAR POSICAO TB)
            background: "dark blue",
            color: "dark yellow"
        });
    });
}); */

/*$(document).ready(function () {

    $(":text").keyup(function(){
        $("div").text($(this).val())   // Pega os valores digitados pelo teclado e joga de forma assicrona para uma div 
    }).focus(function(){
        $(this).css("background","yellow"); // Focus no cursor, onde ele mudar de cor quando clicado no elemento
        $("div").text("focus");
    }).blur(function(){
        $(this).css("background","white"); // Blue no cursor, onde ele mudar de cor quando o elemento não está sendo mais clicado
        $("div").text("Blur");
    });

    
    // VALIDAÇÃO DE FORMULARIOS
    /*$("form").submit(function(){
        if($(":text").val() == "oi"){
            return true;
        } else {
            return false;
        }
    })

    /*$("select").change(function(){
        var escolha = $("option:selected").text();
        $(":text").text("Escolhido foi:" + escolha);  // Quando feito um Select com options, demostra qual opção foi escolhida dentro do select //
    });

   /* $("textarea").select(function(){
        $("div").text("Selecionado");   // Quando um elemento é selecionado em determinado local, ele retorna mostrando que foi selecionado aquele elemento.
    }) 

    
    /*$(":text").keypress(function(){
        $("div").text($(this).val())   // Pega os valores digitados pelo teclado e só aparece na tela a ultima palavra digitada quando pressionado o enter
    });

    /*$(":text").keydown(function(){
        $("div").text($(this).val())   // Pega os valores digitados pelo teclado e só aparece na tela a ultima palavra digitada quando pressionado o enter
    });

}); */


//$(document).ready(function(){
/* $(":text").bind("keyup",function(e){
     $("div").text($(this).val()); // Bind tem a msm função que o KeyUp, mas em um formato de agrupamento
 })*/



/*  function div(e){
      $("div").text($(this).val());    
  } */

/*$(":text").bind("keyup focus blur",div); // Outro formato de utilizar o bind para chamar varias funções dentro do bind

$(":button").bind("click",function(){
    (":text").unbind("keyup",div);       // Desvincula os eventos os elementos no caso foi o keyup

    $(":text").val("VAI ENTRANDO");
    $(":text").trigger("focus");  // FORCA O DISPARADO SEM PRECISAR INTERAGIR COM O DOCUMENTO DIRETAMENTE , IRA COLOCAR O TEXTO DENTRO AUTOMATICAMENTE
}) */

/* $("fieldset").delegate(":text","keyup","focus",div); // SERVE PARA DA VALIDACAO AO TEXTO CRIADO PELO JS ATRAVES DO PREPEND E O undelegate ele remove essa ação

 $(":button").bind("click",function(){
     $("fieldset").prepend("Outro: <input type='text' name='outro'> />")    // PREPEND ELE CRIA UM ELEMENTO HTML  
 }); */

//});


/*$(document).ready(function () {

    $("#hide").click(function () {
        $("div").hide("slow");
    });
    
    $("#show").click(function () {
        $("div").show("slow");
    });

    $("#toggle").click(function(){
        $("div").toggle("slow");
    })
})*/


/*$(document).ready(function () {
      
   // $("#fadeOut").click(function(){
   //    $("div").fadeOut("slow"); // TRANSFORMAR O ELEMENTO EM OPOCA( nesse caso ele remove a div)        
   // });

  // $("#fadeIn").click(function(){
  //     $("div").fadeIn("1000");  // VOLTA PRO O ESTADO OPACO DE ORIGEM
   //});

   //$("#fadeTo").click(function(){
   //    $("div").fadeTo(1000, 0.3); // TORNA O ELEMENTO OPACO EM UM DETERMINADO TEMPO E DURACAO
   //});

   //$("#fadeToggle").click(function(){
   //    $("div").fadeToggle(1000);
   //});


   $("#slideUp").click(function(){
       $("div").slideUp(1000);   // FECHA O ELEMENTO DE BAIXO PARA CIMA (PEGADA UMA CORTINA ABRINDO DE BAIXO PARA CIMA)
   });

   $("#slideDown").click(function(){
      $("div").slideDown(1000);    // ABRE O ELEMENTO DE CIMA PARA BAIXO ( PEGADA UMA CORTINA FECHANDO DE CIMA PARA BAIXO)
   });

   $("#slideToggle").click(function(){
    $("div").slideToggle(1000);   // ALTERNA ENTRE ABRIR E FECHAR O ELEMENTO
 });



});*/