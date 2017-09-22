$(function() {
    $("#generate").click(function(){
        var environment = $("#environmentSelect").find(":selected").text();
        environment = environment.toLowerCase();
        $("body").css("background-image", "url('images/" + environment + "_background1')");

        var randomNum = Math.floor(Math.random() * 10 + 3);
        $("#result").text(randomNum + " Orcs attacked");
    });
});