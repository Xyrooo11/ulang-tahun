document.addEventListener("DOMContentLoaded", function () {
  const song = document.getElementById("audio");

  if (!song) return;

  song.volume = 0.5;
  song.currentTime = 1;

  // Coba play setelah interaksi pertama user
  function startMusic() {
    song.play()
      .then(() => console.log("🎵 Music started"))
      .catch(err => console.log("Autoplay blocked:", err));

    // Hapus listener agar tidak berulang
    document.removeEventListener("click", startMusic);
    document.removeEventListener("scroll", startMusic);
  }

  // Jika user klik atau scroll -> baru play
  document.addEventListener("click", startMusic);
  document.addEventListener("scroll", startMusic);

  // Kalau mau, tetap jalankan timeout pause otomatis (opsional)
  setTimeout(() => {
    if (!song.paused) {
      song.pause();
      song.currentTime = 1;
    }
  }, 150000);

  // Efek fade saat scroll
  $(window).on("load", function () {
    $(window).scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function () {
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        if (objectBottom < windowBottom) {
          if ($(this).css("opacity") == 0) $(this).fadeTo(500, 1);
        } else {
          if ($(this).css("opacity") == 1) $(this).fadeTo(500, 0);
        }
      });
    }).scroll();
  });

  // Tombol ke halaman berikut
  $("button").click(() => window.location.replace("final_page.html"));
});
