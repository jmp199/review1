function myFunction() {
  var x = document.getElementById("myName").value;

  if (x.length < 2) {
  } else {
    document.getElementById("demo3").innerHTML += "<p>" + x + "</p>";
  }
  var y = document.getElementById("myNumber").value;

  if ((y < 0, y > 100)) {
  } else {
    document.getElementById("demo3").innerHTML += "<p>" + y + "</p>";
  }
}