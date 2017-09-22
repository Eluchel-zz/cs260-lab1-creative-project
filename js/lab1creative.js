$( document ).ready(function() {
    function switchBackground() { var environment = $("#environmentSelect").find(":selected").text();
        environment = environment.toLowerCase();
        $("body").css("background-image", "url('images/" + environment + "_background1')");
    }
});