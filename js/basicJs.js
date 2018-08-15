$(document).ready(function(){
    $("button").click(function(){
        $("img").fadeToggle(1500)
        
        if ($(this).html() == "Hide Image")
            $(this).html("Show Image")
        else
            $(this).html("Hide Image")
        
    })
})


//$(function(){
//    $("#outerHeading").click(function(){
//        $("img").toggle(1200)
//    })
//})
