console.log("Hallo Welt!");


function feeling() {
    let range = document.querySelector("input[type='range']").value;
    let output = document.querySelector(".output")
    output.innerHTML= `Ich fühle mich wie eine ${range}`
}

