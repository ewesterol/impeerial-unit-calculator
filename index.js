const convert = document.getElementById("convert-btn");
const length = document.getElementById("length");
const inputBtn = document.getElementById("input-btn");
const volume= document.getElementById("volume")
const meterToFeet = 3.281;
const kiloToPounds = 2.204;
const literToGallon = 0.264;
convert.addEventListener("click", () => {
    if (inputBtn.value === "" || isNaN(inputBtn.value) || inputBtn.value <= 0) {
       document.getElementById("input-error").innerHTML= "invalid entry. Please enter a valid number"
    } else {
        document.getElementById("input-error").innerHTML = "";
        lengthCalc();
        volumeCalc();
        massCalc();
        inputBtn.value = ""; 
   }
    
})
function lengthCalc() {
    const baseLength= inputBtn.value
     length.innerHTML = `${baseLength} meters = ${(baseLength * meterToFeet).toFixed(2)} feet | ${baseLength} feet = ${(baseLength/meterToFeet).toFixed(2)} meters`
}
function volumeCalc() {
    const baseVolume = inputBtn.value;
    volume.innerHTML = `${baseVolume} liters = ${
      baseVolume * literToGallon
    } gallons | ${baseVolume} gallons = ${(baseVolume / literToGallon).toFixed(2)}`;
}
function massCalc() {
  const baseMass = inputBtn.value;
  document.getElementById("mass").innerHTML = `${baseMass} kilos = ${(baseMass * kiloToPounds).toFixed(
    2
  )} pounds | ${baseMass} pounds = ${(baseMass / kiloToPounds).toFixed(
    2
  )} kilos`;
}
