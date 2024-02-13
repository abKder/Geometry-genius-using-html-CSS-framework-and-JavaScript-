function calculateRectangle(){
    const inputRectangleWidth = document.getElementById("input_Rectangle_Width");
    const inputRectangleWidthText = inputRectangleWidth.value;
    const width = parseFloat(inputRectangleWidthText)
    // console.log(width);
    const inputRectangleLength = document.getElementById("input_Rectangle_Length");
    const inputRectangleLengthText = inputRectangleLength.value;
    const length = parseFloat(inputRectangleLengthText);
    // console.log(length);
    const rectangleArea = width*length;
    // console.log(triangleArea);
    const area_Show = document.getElementById("show_Rectangle_Area");
    area_Show.innerText = rectangleArea;
}