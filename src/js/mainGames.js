setTimeout(() => {
  const loading = document.getElementById("loading");
  loading.style.visibility = "hidden";
  loading.style.opacity = "0";
}, 5000);

function loadSound() {
  createjs.Sound.registerSound("../src/sound/sorry.wav", "Sorry");
  createjs.Sound.registerSound("../src/sound/arigatou.wav", "Thanks");
}

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

// TODO Game

let score = 0;

let randomAngkaPertama = ~~(Math.random() * 50);
let randomAngkaKedua = ~~(Math.random() * 100);
let hasilRandom = randomAngkaKedua - ~~(Math.random() * randomAngkaPertama);
setInterval(() => {
  $("#score").text(score);
  $("#angkaAwal").text(randomAngkaPertama);
  $("#angkaAkhir").text(randomAngkaKedua);
}, 100);
console.log(hasilRandom);
$(document).ready(function () {
  $("#submit").click(function () {
    if ($("#tebakInput").val() == "") {
      return toastr["error"]("Warning!. Mohon untuk mengisi bidang input!");
    } else {
      if (score < 0) {
        toastr["info"](
          "Maaf. Kamu kalah!, silahkan klik tombol restart untuk memulai ulang"
        );
        return;
      } else if (score >= 0) {
        // TODO Main Game
        if ($("#tebakInput").val() == hasilRandom) {
          score += 100;
          createjs.Sound.play("Thanks");
          alertify.alert(
            "Score Info : ",
            `Selamat! Kamu memilih angka ${hasilRandom}!.\nDan score kamu adalah ${score}. +100 Score `,
            () => {
              randomAngkaPertama = ~~(Math.random() * 50);
              randomAngkaKedua = ~~(Math.random() * 100);
              hasilRandom =
                randomAngkaKedua - ~~(Math.random() * randomAngkaPertama);
              console.log(hasilRandom);
            }
          );
          return;
        } else {
          if (score == 0) {
            toastr["info"](
              "Maaf, Nomor yang kamu input salah!, silahkan coba lagi"
            );
            createjs.Sound.play("Sorry");
            return;
          } else if (score > 0) {
            let PenguranganScore = ~~(Math.random() * hasilRandom - 1);
            score -= PenguranganScore;
            toastr["warning"](
              "Maaf, jawaban yang kamu input salah, silahkan coba lagi, perngurangan score = " +
                PenguranganScore +
                "!"
            );
            return;
          }
        }
      }
    }
  });
});
