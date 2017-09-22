function switchBackground() {
  /*var body = document.getElementsTagName("BODY")[0];
  body.style.backgroundImage = "url('images/" + event.target.value + "_background1.jpg')";*/

  var environment = $("#environmentSelect").find(":selected").text();
  environment = environment.toLowerCase();
  $("body").css("background-image", "url('images/" + environment + "_background1')");
}
