$(document).ready(function() {

    $( "#tabs").tabs();

    $.getJSON("json/myline.json").done(function(messages){
        printmessages(messages,0);
    });
    $.getJSON("json/timeline.json").done(function(messages){
        printmessages(messages,1);
    });
    $.getJSON("json/update.json").done(function(messages){
        printmessages(messages,2);
    });

    function printmessages(messages,x){

        var html = "";
        messages.forEach(function(message,i){
            html += "<h3>" +
                    "<img src='" + message.avatar + "'>" +
                    "<span class='autor'>" + message.autor + "</span>" +
                    "<span class='titulo'>--" + message.titulo + "--</span>" +
                    "</h3>";
            html += "<div>" +
                    ">>" + message.fecha + "<<" +
                    "<p><span class='contenido'>" + message.contenido + "</span></p>" +
                    "</div>";
        });
        if (x==0){ //myline.json

          $("#accordion-myline").append(html);
          $("#accordion-myline").accordion({ active: true },{ collapsible: true }, { heightStyle: "content" });

        }else if (x==1){  //timeline.json

          $("#accordion-timeline").append(html);
          $("#accordion-timeline").accordion({ active: true },{ collapsible: true }, { heightStyle: "content" });

        }else if (x==2){  //alertar que hay update.json
          if (messages!=""){

            $("#update").append("<button id='button'>Nuevos Mensajes</button>");
            $( "#button" ).button();
            $( "#button" ).click(function(){
              $.getJSON("json/update.json").done(function(messages){
                  printmessages(messages,3);
              });
            });
          }

        }else if (x==3){ //update.json

          $("#update").html("");   //esto quita el boton de actualizar
          $("#accordion-update").append(html);
          $("#accordion-update").accordion({ active: true },{ collapsible: true }, { heightStyle: "content" });
        }
    };
});
