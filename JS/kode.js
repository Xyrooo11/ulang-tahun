// shows hint when hover
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



// checks if the password is correct
document.querySelector("button").addEventListener("click", function() {
  var password = document.querySelector('input').value;
  if (password === "22072025") {
    window.location.replace("loading.html");
  } else {
    var rndNamber = Math.floor(Math.random() * 3) + 1;
    switch (rndNamber) {
      case 1:
        alert("Clue nya Hari Spesial");
        break;
      case 2:
        alert("Tanggal Pertama kali main ke lekker");
        break;
      case 3:
        alert("TANGGAL JADIAN KITA");
        break;
    }

  }
});
