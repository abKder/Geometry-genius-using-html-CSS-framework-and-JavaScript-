function calculateEllipse(){
    const inputEllipseA = document.getElementById("input_Ellipse_A");
    const inputEllipseAText = inputEllipseA.value;
    const A = parseFloat(inputEllipseAText)
    // console.log(A);
    const inputEllipseB = document.getElementById("input_Ellipse_B");
    const inputEllipseBText = inputEllipseB.value;
    const B = parseFloat(inputEllipseBText);
    // console.log(B);
    const ellipseArea = 3.1416 * A * B;
    // console.log(ellipseArea);
    const area_Show = document.getElementById("show_Ellipse_Area");
    area_Show.innerText = ellipseArea;
}Ellipse