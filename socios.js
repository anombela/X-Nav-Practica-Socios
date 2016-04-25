$(document).ready(function() {

   
    //$( "#accordion1").accordion();
  
    $( "#tabs").tabs();



    
    $.getJSON("json/myline.json").done(function(messages){
        printmyline(messages);
    });

    






    function printmyline(messages){

        $("#accordion-myline").html("");
        var html = "";
        messages.forEach(function(message,i){
        
            html += "<h3>" + message.autor + "</h3>";
            html += "<div>" + message.autor + "</div>";

        });

        console.log(html)
        $("#accordion-myline").append(html);

            
        $("#accordion1").accordion({ active: true },{ collapsible: true }, { heightStyle: "content" });
        $("#accordion-myline").accordion({ active: true },{ collapsible: true }, { heightStyle: "content" });
        
        
        
    };
});
