

let loopArray = [];

function loopMe() {
    // User-Eingabe abfragen
    const eingabe = Number(document.getElementById("eingabe").value);
    console.log("input: " + eingabe);
    // Reset Array vor neuer Ausführung
    loopArray = [];
    document.getElementById("output").innerHTML = "";

    // O-Loop und push in das Array
    for (let i = 1; i <= eingabe; i++) {
        loopArray.push("o");
    }

    // Ausgabe des Textes mit geloopten Os
    document.getElementById("output").innerHTML = `L${loopArray.join("")}p`;
}