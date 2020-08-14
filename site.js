
function Massalaskin() {
    window.location = "Massalaskuri.html";
};
function Pituuslaskin() {
    window.location = "Pituuslaskin.html";
};
function Osalista() {
    window.location = "Osalista.html";
};
function Suosikit() {
    window.location = "Suosikit.html";
};
function Alkuun() {
    window.location = "Index.html";
};

var osienLisaysKentta = "";
var osienMaaraKentta = 0;

//Osalistan Toiminnot

function PalautaJuoksuLista() {
    document.getElementById("osat").innerHTML = "";
    for (let index = 0; index < juoksuLista.length; index++) {
        var element = juoksuLista[index];
        if (element.nimi.length) {
            document.getElementById("osat").innerHTML += "<li>" + element.nimi + ": Oikea pituus: " +
                element.pituus.toPrecision(3) + "m, Massa: " + element.paino.toPrecision(3) + "kg" + "</li>";

        }
    }
};
function PalautaJokatLista() {
    document.getElementById("osat").innerHTML = "";
    for (let index = 0; index < jokatLista.length; index++) {
        var element = jokatLista[index];
        if (element.nimi.length) {
            document.getElementById("osat").innerHTML += "<li>" + element.nimi + ": Oikea pituus: " +
                element.pituus.toPrecision(3) + "m, Massa: " + element.paino.toPrecision(3) + "kg" + "</li>";

        }

    }
};


//Massalaskuri
var kokonaisMassa = 0;

function TyhjennaTaulu() {
    document.getElementById('massalista').innerHTML = '';
    document.getElementById('summapaikka').innerHTML = '0kg';
    osienLisaysKentta = "";
    osienMaaraKentta = 0;
    kokonaisMassa = 0;
};


function LisaaMassaa() {
    osienLisaysKentta = document.getElementById("massanlisäyssyöte").value;
    osienMaaraKentta = document.getElementById("massanmääräsyöte").value;
    var listaLista = [juoksuLista, jokatLista, tasotLista];
    var listapaikka = listaLista[0];
    var listaListanIndex = 0;  
    
    for (let i = 0; i < listaLista.length; i++) {     
        
        for (let index = 0; index < listapaikka.length; index++) {
            var element = listapaikka[index];
            if (element.haku.toUpperCase().trim() == osienLisaysKentta.toUpperCase().trim()) {
                kokonaisMassa += osienMaaraKentta * element.paino;
                document.getElementById("summapaikka").innerHTML = kokonaisMassa + "kg";
                document.getElementById("massalista").innerHTML += "<li>" + osienMaaraKentta + " kpl " +
                    element.nimi + "- Oikea pituus: " + element.pituus + ", Osan massa: " + element.paino;            
            }
        }
        listaListanIndex++;
        listapaikka=listaLista[listaListanIndex];
    }   

};

// Pituuslaskuri

var kokonaisPituus = 0;
var reikalevy = 0.124;
var pysty = 0.048;
var lopullinenMitta = kokonaisPituus + reikalevy;

function TyhjennaPituusTaulu() {
    document.getElementById('pituuslista').innerHTML = '';
    document.getElementById('kokonaispituus').innerHTML = '0cm';
    osienLisaysKentta = "";
    osienMaaraKentta = 0;
    kokonaisPituus = 0;
    lopullinenMitta = 0;     

};

function LisaaLohko() {
    osienLisaysKentta = document.getElementById("lohkonlisäyssyöte").value;
    osienMaaraKentta = document.getElementById("lohkojenmääräsyöte").value;
    var listaLista = [juoksuLista, jokatLista, tasotLista];
    var listapaikka = listaLista[0];
    var listaListanIndex = 0;  
    
    for (let i = 0; i < listaLista.length; i++) {     
        
        for (let index = 0; index < listapaikka.length; index++) {
            var element = listapaikka[index];
            if (element.haku.toUpperCase().trim() == osienLisaysKentta.toUpperCase().trim()) {
                kokonaisPituus += osienMaaraKentta * element.pituus;                
                document.getElementById("kokonaispituus").innerHTML = (kokonaisPituus + reikalevy).toPrecision(4) + "m";
                document.getElementById("pituuslista").innerHTML += "<li>" + osienMaaraKentta + " kpl " +
                element.nimi + "- Oikea pituus: " + (element.pituus + 0.0483).toPrecision(3) + ", Osan massa: " + element.paino;            
            }
        }
        listaListanIndex++;
        listapaikka=listaLista[listaListanIndex];
    }   
};

// Tästä alkaa osalistat


var juoksuLista = [
    { haku: "4m juoksu", nimi: "Juoksu 4,14 m, teräs LW", pituus: 4.14, paino: 13.4 },
    { haku: "3m juoksu", nimi: "Juoksu 3,07 m, teräs LW", pituus: 3.07, paino: 10.1 },
    { haku: "2,5m juoksu", nimi: "Juoksu 2,57 m, teräs LW", pituus: 2.57, paino: 8.5 },
    { haku: "2m juoksu", nimi: "Juoksu 2,07 m, teräs LW", pituus: 2.07, paino: 7.0 },
    { haku: "1,5m juoksu", nimi: "Juoksu 1,57 m, teräs LW", pituus: 1.57, paino: 5.5 },
    { haku: "1,4 juoksu", nimi: "Juoksu 1,40 m, teräs LW", pituus: 1.40, paino: 5.0 }
];
var jokatLista = [
    { haku: "3m juoksuvahvari", nimi: "U-kaksoisjuoksu 3,07 m, teräs LW", pituus: 3.07, paino: 19.0 },
    { haku: "2,5m juoksuvahvari", nimi: "U-kaksoisjuoksu 2,57 m, teräs LW", pituus: 2.57, paino: 15.7 },
    { haku: "2m juoksuvahvari", nimi: "U-kaksoisjuoksu 2,07 m, teräs LW", pituus: 2.07, paino: 12.7 },
    { haku: "1,5m juoksuvahvari", nimi: "U-kaksoisjuoksu 1,57 m, teräs LW", pituus: 1.57, paino: 7.4 },
    { haku: "1m jokka", nimi: "U-jokka, vahv. 1,09 m", pituus: 1.09, paino: 5.7 },
    { haku: "3m vahvari", nimi: "U-jokka vahv. 3,07 m LW T14", pituus: 1.40, paino: 19.0 },
    { haku: "0,45 jokka", nimi: "U-jokka 0,45 m LW T14", pituus: 0.40, paino: 2.1 },
    { haku: "0,73 jokka", nimi: "U-jokka 0,73 m LW T14", pituus: 0.68, paino: 3.1}
    
    /*U-jokka 1,09 m LW	4,4
    U-jokka 1,40 m, teräs LW T14	5,4
    U-jokka vahv. 1,40 m, teräs LW T14	8,9
    U-jokka vahv. 1,57 m LW T14	9,4
    U-jokka vahv. 2,07 m LW T14	12,7
    U-jokka vahv. 2,57 m LW T14	15,7
    U-jokka vahv. 3,07 m LW T14	19*/    
];
var tasotLista = [
    {haku: "3m taso", nimi: '3m terästaso', pituus: 3.07, paino: 15},
    {haku: "2,5m taso", nimi: '2,5m terästaso', pituus: 2.57, paino: 15}
];


