
// Write a JavaScript program to calculate the volume of a sphere.
function calVolume(){
    let radius = document.querySelector('#radius').value;
    if(radius<0){
        alert ('Radius must be a positive value')
    }
    else{
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);
    document.querySelector('#volume').value = volume;
    return false;
    }
} 
document.getElementById('MyForm').onsubmit = calVolume;