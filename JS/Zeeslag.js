var locatie = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];


function bootPlaatsen(x, y){
    locatie[x][y] = 1;
}

function bootPlaatsen1(){
    for(x = 0; x < 10; x++){
        for(y = 0; y < 10; y++){
            if(locatie[y][x] == 1){
                alert("hoi");
            }
        }
    }
    console.log(locatie);
}

// function functie(){
//     for(x = 0; x < 10; x++){
//         for(y = 0; y < 10; y++){
//             locatie[y][x] = rijen[y].childNodes[x];
//         }
//     }
// }





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
    alert(this.id);
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
        for(y = 1; y < 11; y++){
        var childnodestest = rijen[x].childNodes[y]; // maakt een array van cellen uit de rij die hieronder allemaal de class 'speelveldcellen' krijgen.
        childnodestest.classList.add("speelveldcellen");
        childnodestest.setAttribute("id", ((x-1)*10+y));
        console.log(childnodestest);
        }

    }
}