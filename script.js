function calculate() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let bmi = weight / ((height/100) * (height/100));

    let status = "";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 25) status = "Normal";
    else if (bmi < 30) status = "Overweight";
    else status = "Obese";

    document.getElementById("result").innerHTML =
        "BMI: " + bmi.toFixed(2) + " (" + status + ")";
}
