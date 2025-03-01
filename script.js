function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function calculateSum() {
    let input = document.getElementById("arrayInput").value;
    let numbers = input.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    let result = sumArray(numbers);
    document.getElementById("result").textContent = "Sum: " + result;
}
