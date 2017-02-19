var topBackground = 1;

window.onload = function() {

    var myTimer = setInterval(changeBackground, 6000);

    document.getElementById( "img-one" ).onclick = function() {
        topBackground = 1;
        $(this).attr("src", "resources/white-full.png");
        document.getElementById("img-two").src = "resources/white-empty.png";
        document.getElementById("img-three").src = "resources/white-empty.png";
        document.getElementById("uvod").style.backgroundImage = "url('resources/one.png')";

        clearInterval(myTimer);
        myTimer = setInterval(changeBackground, 6000);
    };

    document.getElementById( "img-two" ).onclick = function() {
        topBackground = 2;
        $(this).attr("src", "resources/white-full.png");
        document.getElementById("img-one").src = "resources/white-empty.png";
        document.getElementById("img-three").src = "resources/white-empty.png";
        document.getElementById("uvod").style.backgroundImage = "url('resources/two.jpg')";

        clearInterval(myTimer);
        myTimer = setInterval(changeBackground, 6000);
    };

    document.getElementById( "img-three" ).onclick = function() {
        topBackground = 0;
        $(this).attr("src", "resources/white-full.png");
        document.getElementById("img-two").src = "resources/white-empty.png";
        document.getElementById("img-one").src = "resources/white-empty.png";
        document.getElementById("uvod").style.backgroundImage = "url('resources/three.jpg')";

        clearInterval(myTimer);
        myTimer = setInterval(changeBackground, 6000);
    };

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
        return false;
    });


    $("#services-content-right-top").bind('mouseenter',function(){
        //console.log("enter");
        $(this).css("background-color", "white");
        $("#services-content-right-top-img").attr("src", "resources/s2.jpg");
        $("#services-content-right-top-img").css("border", "4px solid black");
        //$("#services-content-right-top-content").css("background-color", "whitesmoke");
    });
    $("#services-content-right-top").bind('mouseleave',function(){
        //console.log("leave");
        $(this).css("background-color", "inherit");
        $("#services-content-right-top-img").attr("src", "resources/s2_gray.jpg");
        $("#services-content-right-top-img").css("border", "0px solid black");
        //$("#services-content-right-top-content").css("background-color", "inherit");
    });

    $("#services-content-left-top").bind('mouseenter',function(){
        //console.log("enter");
        $(this).css("background-color", "white");
        $("#services-content-left-top-img").attr("src", "resources/s1.jpg");
        $("#services-content-left-top-img").css("border", "4px solid black");
        //$("#services-content-left-top-content").css("background-color", "whitesmoke");

    });
    $("#services-content-left-top").bind('mouseleave',function(){
        //console.log("leave");
        $(this).css("background-color", "inherit");
        $("#services-content-left-top-img").attr("src", "resources/s1_grey.jpg");
        $("#services-content-left-top-img").css("border", "0px solid black");
        //$("#services-content-left-top-content").css("background-color", "inherit");
    });

    $("#services-content-right-bottom").bind('mouseenter',function(){
        //console.log("enter");
        $(this).css("background-color", "white");
        $("#services-content-right-bottom-img").attr("src", "resources/s4.jpg");
        $("#services-content-right-bottom-img").css("border", "4px solid black");
        //$("#services-content-right-bottom-content").css("background-color", "whitesmoke");
    });
    $("#services-content-right-bottom").bind('mouseleave',function(){
        //console.log("leave");
        $(this).css("background-color", "inherit");
        $("#services-content-right-bottom-img").attr("src", "resources/s4_gray.jpg");
        $("#services-content-right-bottom-img").css("border", "0px solid black");
        //$("#services-content-right-bottom-content").css("background-color", "inherit");
    });

    $("#services-content-left-bottom").bind('mouseenter',function(){
        //console.log("enter");
        $(this).css("background-color", "white");
        $("#services-content-left-bottom-img").attr("src", "resources/s3.jpg");
        $("#services-content-left-bottom-img").css("border", "4px solid black");
        //$("#services-content-left-bottom-content").css("background-color", "whitesmoke");
    });
    $("#services-content-left-bottom").bind('mouseleave',function(){
        //console.log("leave");
        $(this).css("background-color", "inherit");
        $("#services-content-left-bottom-img").attr("src", "resources/s3_gray.jpg");
        $("#services-content-left-bottom-img").css("border", "0px solid black");
        //$("#services-content-left-bottom-content").css("background-color", "inherit");
    });

};


// ZMENA OBRAZKU NA POZADI STRANKY
function changeBackground(){
    if(topBackground == 0){
        document.getElementById("img-one").src = "resources/white-full.png";
        document.getElementById("img-two").src = "resources/white-empty.png";
        document.getElementById("img-three").src = "resources/white-empty.png";
        document.getElementById("uvod").style.backgroundImage = "url('resources/one.png')";
    }
    else if(topBackground == 1){
        document.getElementById("img-one").src = "resources/white-empty.png";
        document.getElementById("img-two").src = "resources/white-full.png";
        document.getElementById("img-three").src = "resources/white-empty.png";
        document.getElementById("uvod").style.backgroundImage = "url('resources/two.jpg')";
    }
    else if(topBackground == 2){
        document.getElementById("img-one").src = "resources/white-empty.png";
        document.getElementById("img-two").src = "resources/white-empty.png";
        document.getElementById("img-three").src = "resources/white-full.png";
        document.getElementById("uvod").style.backgroundImage = "url('resources/three.jpg')";
    }

    topBackground++;
    if(topBackground > 2){
        topBackground = 0;
    }
}