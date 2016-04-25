$(document).ready(function() {


    //$( "#accordion1").accordion();

    $( "#tabs").tabs();


    $.getJSON("json/myline.json").done(function(messages){
        printmessages(messages,0);
    });
    $.getJSON("json/timeline.json").done(function(messages){
        printmessages(messages,1);
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

        if (x==0){
          $("#accordion-myline").append(html);
          $("#accordion-myline").accordion({ active: true },{ collapsible: true }, { heightStyle: "content" });
        }else{
          $("#accordion-timeline").append(html);
          $("#accordion-timeline").accordion({ active: true },{ collapsible: true }, { heightStyle: "content" });      
        }





    };
});
