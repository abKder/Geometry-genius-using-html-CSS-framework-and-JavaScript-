function calculateTriangle(){
    const inputTriangleBase = document.getElementById("input_Triangle_Base");
    const inputTriangleBaseText = inputTriangleBase.value;
    const base = parseFloat(inputTriangleBaseText)
    // console.log(base);
    const inputTriangleHeight = document.getElementById("input_Triangle_height");
    const inputTriangleHeightText = inputTriangleHeight.value;
    const height = parseFloat(inputTriangleHeightText);
    // console.log(height);
    const triangleArea = 0.5*base*height;
    // console.log(triangleArea);
    const area_Show = document.getElementById("show_Triangle_Area");
    area_Show.innerText = triangleArea;
}