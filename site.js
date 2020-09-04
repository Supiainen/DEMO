
var osienLisaysKentta = "";
var osienMaaraKentta = 0;
var reikalevy = 0.124;
var pysty = 0.048;
var kokonaisMassa = 0.0;
var kokonaisPituus = 0.0;


//slidertoiminnot
var slider = document.getElementById("slider");
var output = document.getElementById("kappaletta");
var maara = 50;
slider.oninput = function () {
    output.innerHTML = this.value;
    maara = this.value;
}

//Osalistan Toiminnot

function PalautaOsaLista(osalista) {

    document.getElementById("osat").innerHTML = "";
    for (let index = 0; index < osalista.length; index++) {
        var element = osalista[index];
        var newButton = document.createElement('input');
        newButton.type = 'button';
        newButton.value = element.nimi + ": Oikea pituus: " +
            (element.pituus - pysty).toPrecision(3) + "m, Massa: " +
            element.paino.toPrecision(3) + "kg";
        newButton.id = element.paino;
        newButton.className = "osanappulat";
        newButton.accessKey = element.pituus;
        let vara = document.getElementById("osat");
        vara.appendChild(newButton);
        var haku = osalista;
        var jokat = jokatLista;
        var juoksut = juoksuLista;
        var ristikot = ristikkoLista;
        var ulokkeet = ulokeLista;

        if (haku === jokat || haku === juoksut || haku === ristikot || haku === ulokkeet) {
            newButton.onclick = function () {
                var osanmassa = new Number(this.id);
                var osanPituus = new Number(this.accessKey);
                document.getElementById("valitut").innerHTML += "<li>" + this.value +
                    " - " + maara + " kpl";
                kokonaisMassa += (maara * osanmassa);
                document.getElementById("kokonaismassa").innerHTML = (Math.round(kokonaisMassa * 100) / 100).toFixed(2);
                kokonaisPituus += (maara * osanPituus);
                document.getElementById("kokonaispituus").innerHTML = (Math.round(kokonaisPituus * 100) / 100).toFixed(2);
            }
        } else {
            newButton.onclick = function () {
                var osanmassa = new Number(this.id);
                document.getElementById("valitut").innerHTML += "<li>" + this.value +
                    " - " + maara + " kpl";
                kokonaisMassa += (maara * osanmassa);
                document.getElementById("kokonaismassa").innerHTML = (Math.round(kokonaisMassa * 100) / 100).toFixed(2);
            }
        };
    }
}
//Listojen tyhjennys    
function TyhjennaLista() {
    kokonaisMassa = 0.0;
    document.getElementById('valitut').innerHTML = '';
    document.getElementById("kokonaismassa").innerHTML = kokonaisMassa;
    kokonaisPituus = 0.0;
    document.getElementById("kokonaispituus").innerHTML = kokonaisPituus;
    
};

// Tästä alkaa osalistat

var juoksuLista = [
    { haku: "4m juoksu", nimi: "Juoksu 4,14 m, teräs LW", pituus: 4.14, paino: 13.4 },
    { haku: "3m juoksu", nimi: "Juoksu 3,07 m, teräs LW", pituus: 3.07, paino: 10.1 },
    { haku: "2,5m juoksu", nimi: "Juoksu 2,57 m, teräs LW", pituus: 2.57, paino: 8.5 },
    { haku: "2m juoksu", nimi: "Juoksu 2,07 m, teräs LW", pituus: 2.07, paino: 7.0 },
    { haku: "1,5m juoksu", nimi: "Juoksu 1,57 m, teräs LW", pituus: 1.57, paino: 5.5 },
    { haku: "1,4m juoksu", nimi: "Juoksu 1,40 m, teräs LW", pituus: 1.40, paino: 5.0 },
];
var jokatLista = [
    { haku: "3m juoksuvahvari", nimi: "U-kaksoisjuoksu 3,07 m, teräs LW", pituus: 3.07, paino: 19.0 },
    { haku: "2,5m juoksuvahvari", nimi: "U-kaksoisjuoksu 2,57 m, teräs LW", pituus: 2.57, paino: 15.7 },
    { haku: "2m juoksuvahvari", nimi: "U-kaksoisjuoksu 2,07 m, teräs LW", pituus: 2.07, paino: 12.7 },
    { haku: "1,5m juoksuvahvari", nimi: "U-kaksoisjuoksu 1,57 m, teräs LW", pituus: 1.57, paino: 7.4 },
    { haku: "1m jokka", nimi: "U-jokka, vahv. 1,09 m", pituus: 1.09, paino: 5.7 },
    { haku: "3m vahvari", nimi: "U-jokka vahv. 3,07 m LW T14", pituus: 1.40, paino: 19.0 },
    { haku: "0,45m jokka", nimi: "U-jokka 0,45 m LW T14", pituus: 0.40, paino: 2.1 },
    { haku: "0,73m jokka", nimi: "U-jokka 0,73 m LW T14", pituus: 0.68, paino: 3.1 },
    { haku: "1,40 jokka", nimi: "U-jokka 1,40 m, teräs LW T14", pituus: 1.4, paino: 5.4 },
    { haku: "1,40 vahvistettu jokka", nimi: "U-jokka vahv. 1,40 m, teräs LW T14", pituus: 1.4, paino: 8.9 },
    { haku: "1,57 vahvari", nimi: "U-jokka vahv. 1,57 m LW T14", pituus: 1.57, paino: 9.4 },
    { haku: "2m vahvari", nimi: "U-jokka vahv. 2,07 m LW T14", pituus: 2.07, paino: 12.7 },
    { haku: "2,5m vahvari", nimi: "U-jokka vahv. 2,57 m LW T14", pituus: 2.57, paino: 15.7 },
    { haku: "3m vahvari", nimi: "U-jokka vahv. 3,07 m LW T14", pituus: 3.07, paino: 19.0 }

];
var tasotLista = [
    { haku: "3m taso", nimi: '3m terästaso', pituus: 3.07, paino: 15 },
    { haku: "2,5m taso", nimi: '2,5m terästaso', pituus: 2.57, paino: 15 }
];

var pystytLista = [
    { haku: "3m pysty", nimi: '3m teräspysty', pituus: 3.00, paino: 15 },
    { haku: "2,5m pysty", nimi: '2,5m teräspysty', pituus: 2.57, paino: 15 }
];

var ristikkoLista = [
    { haku: "3m pysty", nimi: '3m teräspysty', pituus: 3.00, paino: 15 },
    { haku: "2,5m pysty", nimi: '2,5m teräspysty', pituus: 2.57, paino: 15 }
];

var ulokeLista = [
    { haku: "3m pysty", nimi: '3m teräspysty', pituus: 3.00, paino: 15 },
    { haku: "2,5m pysty", nimi: '2,5m teräspysty', pituus: 2.57, paino: 15 }
];

var vinoLista = [
    { haku: "3m pysty", nimi: '3m teräspysty', pituus: 3.00, paino: 15 },
    { haku: "2,5m pysty", nimi: '2,5m teräspysty', pituus: 2.57, paino: 15 }
];

var liitinLista = [
    { haku: "3m pysty", nimi: '3m teräspysty', pituus: 3.00, paino: 15 },
    { haku: "2,5m pysty", nimi: '2,5m teräspysty', pituus: 2.57, paino: 15 }
];

var kulkuLista = [
    { haku: "3m pysty", nimi: '3m teräspysty', pituus: 3.00, paino: 15 },
    { haku: "2,5m pysty", nimi: '2,5m teräspysty', pituus: 2.57, paino: 15 }
];

var jalkaLista = [
    { haku: "3m pysty", nimi: '3m teräspysty', pituus: 3.00, paino: 15 },
    { haku: "2,5m pysty", nimi: '2,5m teräspysty', pituus: 2.57, paino: 15 }
];

var erikoisLista = [
    { haku: "3m pysty", nimi: '3m teräspysty', pituus: 3.00, paino: 15 },
    { haku: "2,5m pysty", nimi: '2,5m teräspysty', pituus: 2.57, paino: 15 }
];


