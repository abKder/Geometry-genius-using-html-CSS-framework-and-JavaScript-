function calculatePentagon(){
    const inputPentagonP = document.getElementById("input_Pentagon_P");
    const inputPentagonPText = inputPentagonP.value;
    const P = parseFloat(inputPentagonPText)
    // console.log(P);
    const inputPentagonB = document.getElementById("input_Pentagon_B");
    const inputPentagonBText = inputPentagonB.value;
    const B = parseFloat(inputPentagonBText);
    // console.log(B);
    const pentagonArea = 0.5* P*B;
    // console.log(rhombusArea);
    const area_Show = document.getElementById("show_Pentagon_Area");
    area_Show.innerText = pentagonArea;
}