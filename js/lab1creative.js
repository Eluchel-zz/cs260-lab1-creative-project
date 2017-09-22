function switchBackground(event) {
  var body = document.getElementsTagName("BODY")[0];
  body.style.backgroundImage = "url('images/" + event.target.value + "_background1.jpg')";
}
