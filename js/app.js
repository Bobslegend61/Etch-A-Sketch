$(document).ready(() => {
    
//    get area 
    let h = 16;
    let w = $("#container").width() / h;
    let docH = $("#container").height() / h;
    let total = w * docH;
    let i = 1 
    
    console.log(docH);
    
//    Display boxex
    for(i; i <= total; i++){
        $("#container").append("<div class='inner-grid'></div>");
    }
//    style the boxes
    $(".inner-grid").css({
        width: h+"px",
        height: h+"px",
        backgroundColor: "black"
    })

//    change color when hovered upon
    $(".inner-grid").hover(function(){
        $(this).css({
            backgroundColor: "white"
        })
    }, function() {
        
    })
    
//    *********Button Events********
//    clear
    $("#clear").click(function(){
        $("#container").html("");
    })
    
//    change size
    $("#grid").click(function() {
        h = prompt("Input your preferred size","Remember its a square, you only need one number") || 16;
        w = $("#container").width() / h;
        docH = $("#container").height() / h;
        total = w * docH;
        i = 1 
        console.log(h);
        $("#container").html("");
        for(i; i <= total; i++){
            if(i == 3930){
                break;
            }
            $("#container").append("<div class='inner-grid'></div>");
        }
        
        //    style the boxes
        $(".inner-grid").css({
            width: h+"px",
            height: h+"px",
            backgroundColor: "black"
        })
        
        //    change color when hovered upon
        $(".inner-grid").hover(function(){
            $(this).css({
                backgroundColor: "white",
                boxShadow: "0px 0px 3px #ccc"
            })
        }, function() {

        })
    })
    
})