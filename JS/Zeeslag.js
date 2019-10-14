var locatie = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

function bootPlaatsen(){
    for(x = 0; x < 10; x++){
        for(y = 0; y < 10; y++){
            if(locatie[y][x] == 3){
                alert("hoi");
            }
        }
    }
    console.log(locatie);
}




function maaktabel(){
    var width = 11;
    var height = 11;
    var tabel = document.getElementById("zeeslagtabel");
    

    for(x = 0; x < width; x++){
        var newRow = tabel.insertRow(); // maken van 11 rijen in tabel
        newRow.classList.add("row");

        for(i = 0; i < height; i++){
            var newCell = newRow.insertCell(); // voor elke rij worden er 11 cellen achter elkaar geplaats (dit vormt de hele rij)
            newCell.classList.add("cell"); // toevoegen van de class 'cell' aan alle cellen in de tabel
        }
    }
    addCoordinateLabels();
    addClassesSpeelveldCellen();

    var testen = document.getElementsByClassName("speelveldcellen");
    for(var i = 0;i < testen.length; i++){
        testen[i].onclick = bomGooien; // functie koppelen aan het klikken op het speelveld door middel van function pointer onclick
    }
}

class Boot {
    grootte;
    naam;
    levend = true;
    constructor(grootte, naam){
        this.grootte = grootte;
        this.naam = naam;
    }
}

// aanmaken van alle boten
var vliegdekschip = new Boot(6, "vliegdekschip");
var vlagschip1 = new Boot(4, "vlagschip");
var vlagschip2 = new Boot(4, "vlagschip");
var onderzeeër1 = new Boot(3, "onderzeeër");
var onderzeeër2 = new Boot(3, "onderzeeër");
var onderzeeër3 = new Boot(3, "onderzeeër");
var patrouilleschip1 = new Boot(2, "patrouilleschip");
var patrouilleschip2 = new Boot(2, "patrouilleschip");
var patrouilleschip3 = new Boot(2, "patrouilleschip");
var patrouilleschip4 = new Boot(2, "patrouilleschip");


function bomGooien(){
    alert(vliegdekschip.naam);
}



function addCoordinateLabels(){
    var firstRow = document.getElementsByClassName("row")[0].childNodes; // selecteert de eerste rij en maakt een hier een array van met elke cel als een waarde
    var eersteRij = document.getElementsByClassName("row")[0];
    eersteRij.setAttribute("id", "coordinateLabels"); // toevoegen van een class aan de eerste rij om deze in css te bewerken (rij bewerken lukt ngo niet??)

    var columnCoordinates = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    for(x = 0; x < firstRow.length; x++){
        firstRow[x].innerHTML = columnCoordinates[x - 1];
    }

    var allRows = document.getElementsByClassName("row");
    for(x = 0; x<firstRow.length; x++){ // 0 vervangen door '1' en dan regel onder deze forloop verwidjeren om cel linksboven leeg te houden
        allRows[x].childNodes[0].innerHTML = x;
        allRows[x].childNodes[0].setAttribute("id", "coordinateLabels"); // toevoegen van een class aan de eerste kolom om deze in css te bewerken
    }
    allRows[0].childNodes[0].innerHTML = "";
}



function addClassesSpeelveldCellen(){
    var rijen = document.getElementsByClassName("row"); // maakt een array van de rijen "row"
    for(x = 1;x<rijen.length;x++){
        var childnodestest = rijen[x].childNodes; // maakt een array van cellen uit de rij die hieronder allemaal de class 'speelveldcellen' krijgen.
        // for(x=1;x<11;x++){
        childnodestest[1].classList.add("speelveldcellen"); // lukt niet om in for te zetten???????????????????????????????
        childnodestest[1].setAttribute("id", (x));
        childnodestest[2].classList.add("speelveldcellen");
        childnodestest[2].setAttribute("id", (10+x));
        childnodestest[3].classList.add("speelveldcellen");
        childnodestest[3].setAttribute("id", (20+x));
        childnodestest[4].classList.add("speelveldcellen");
        childnodestest[4].setAttribute("id", (30+x));
        childnodestest[5].classList.add("speelveldcellen");
        childnodestest[5].setAttribute("id", (40+x));
        childnodestest[6].classList.add("speelveldcellen");
        childnodestest[6].setAttribute("id", (50+x));
        childnodestest[7].classList.add("speelveldcellen");
        childnodestest[7].setAttribute("id", (60+x));
        childnodestest[8].classList.add("speelveldcellen");
        childnodestest[8].setAttribute("id", (70+x));
        childnodestest[9].classList.add("speelveldcellen");
        childnodestest[9].setAttribute("id", (80+x));
        childnodestest[10].classList.add("speelveldcellen");
        childnodestest[10].setAttribute("id", (90+x));
    }
}
