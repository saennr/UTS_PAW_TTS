const btn = document.querySelectorAll("body button");

btn.forEach(function (pil) {
    pil.addEventListener('click', function () {
        let namebtn = pil.getAttribute('name');
        geserCek(namebtn);
    });
});

function geserCek(nbtn) {
    const table = document.querySelectorAll('.' + nbtn);
    if (table[0].disabled == true) {
        autoNext(0, nbtn);
    } else {
        table[0].select();
    }


    for (let i = 0; i < table.length; i++) {
        table[i].addEventListener('input', function () {
            if (i == table.length - 1) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);


            } else if (i == table.length - 2 && table[table.length - 1].disabled == true) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);

            } else {
                autoNext(i, nbtn);
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);
            }

        });

    }
}

function autoNext(i, cn) {
    let d = document.querySelectorAll('.' + cn);
    if (d[i + 1].disabled == true) {
        d[i + 2].select();

    } else {
        d[i + 1].select();
    }

}

function submitString(concat, tipe, tabel) {
    if (concat.toUpperCase() == "YGENTERTAINMENT" && tipe == "d1") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "RUKA" && tipe == "m1") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "BLACKPINK" && tipe == "d2") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "RORA" && tipe == "d3") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "RAMI" && tipe == "m2") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "PHARITA" && tipe == "m3") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "ASA" && tipe == "d4") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "AHYEON" && tipe == "m4") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "DREAM" && tipe == "m5") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "CHIQUITA" && tipe == "d5") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "DRIP" && tipe == "d6") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "MONSTIEZ" && tipe == "d7") {
        pengulanganTabel(tabel);
    }
}

function pengulanganTabel(table) {
    for (let j = 0; j < table.length; j++) {
        table[j].disabled = true;
    }
}

const correctAnswers = {
  d1: "YGENTERTAINMENT", // Mendatar 1
  m1: "RUKA",       // Menurun 1 
  d2: "BLACKPINK", // Mendatar 2
  d3: "RORA",     // Mendatar 3
  m2: "RAMI",     // Menurun 2 
  m3: "PHARITA",  // Menurun 3 
  d4: "ASA",   // Mendatar 4
  m4: "AHYEON", // Menurun 4 
  m5: "DREAM",   // Menurun 5 
  d5: "CHIQUITA", // Mendatar 5      
  d6: "DRIP",      // Mendatar 6
  d7: "MONSTIEZ"    // Mendatar 7
};

document.getElementById('cekJawabanBtn').addEventListener('click', function () {
  let score = 0;
  const totalSoal = 12;
  const scorePerSoal = 100 / totalSoal;

  for (const [key, value] of Object.entries(correctAnswers)) {
    const inputString = catString(key).toUpperCase();
    if (inputString === value) {
      score += scorePerSoal; // Menambahkan skor per soal untuk setiap jawaban benar
    }
  }

  document.getElementById('score').innerText = `Score Akhir Anda: ${Math.round(score)} dari 100`;
});

function catString(cn) {
  var concat = "";
  let d = document.querySelectorAll('.' + cn);
  for (let i = 0; i < d.length; i++) {
      concat += d[i].value;
  }
  return concat;
}

