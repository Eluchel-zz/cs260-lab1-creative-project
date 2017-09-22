$(function() {
    console.log("test");
    $("#generate").click(function(){
        var environment = $("#environmentSelect").find(":selected").text();
        environment = environment.toLowerCase();
        $("body").css("background-image", "url('images/" + environment + "_background1')");
    });
});