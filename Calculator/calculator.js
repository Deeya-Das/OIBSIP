function appendToDisplay(value) {
document.getElementById('display').value += value;
}
function clearDisplay() {
document.getElementById('display').value = '';
}
function deleteLast() {
const current = document.getElementById('display').value;
document.getElementById('display').value = current.slice(0, -1);
}
function calculateResult() {
try {
const result = eval(document.getElementById('display').value);
document.getElementById('display').value = result;
} catch (error) {
document.getElementById('display').value = 'Error';
}
}