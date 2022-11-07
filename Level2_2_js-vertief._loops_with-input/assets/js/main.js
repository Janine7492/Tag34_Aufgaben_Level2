

// let loopArray = [];

function loopMe() {
    const eingabe = Number(document.getElementById("eingabe").value);
    console.log("input: " + eingabe);
    loopArray = [];
    document.getElementById("output").innerHTML = "";

    for (let i = 1; i <= eingabe; i++) {
        loopArray.push("o");
    }

    document.getElementById("output").innerHTML = `L${loopArray.join("")}p`;
}