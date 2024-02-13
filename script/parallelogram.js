function calculateParallelogram(){
    const inputParallelogramBase = document.getElementById("input_Parallelogram_Base");
    const inputParallelogramBaseText = inputParallelogramBase.value;
    const base = parseFloat(inputParallelogramBaseText)
    // console.log(base);
    const inputParallelogramHeight = document.getElementById("input_Parallelogram_height");
    const inputParallelogramHeightText = inputParallelogramHeight.value;
    const height = parseFloat(inputParallelogramHeightText);
    // console.log(height);
    const parallelogramArea = base*height;
    // console.log(triangleArea);
    const area_Show = document.getElementById("show_Parallelogram_Area");
    area_Show.innerText = parallelogramArea;
}