function calculateRhombus(){
    const inputRhombusD1 = document.getElementById("input_Rhombus_D1");
    const inputRhombusD1Text = inputRhombusD1.value;
    const D1 = parseFloat(inputRhombusD1Text)
    // console.log(D1);
    const inputRhombusD2 = document.getElementById("input_Rhombus_D2");
    const inputRhombusD2Text = inputRhombusD2.value;
    const D2 = parseFloat(inputRhombusD2Text);
    // console.log(D2);
    const rhombusArea = 0.5* D1*D2;
    // console.log(rhombusArea);
    const area_Show = document.getElementById("show_Rhombus_Area");
    area_Show.innerText = rhombusArea;
}