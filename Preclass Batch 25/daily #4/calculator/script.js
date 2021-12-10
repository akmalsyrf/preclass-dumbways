const result = document.form.result;

function insert(num) {
  result.value = result.value + num;
}
function equal() {
  const i = result.value;
  result.value = eval(i);
}
function clean() {
  result.value = "";
}
function back() {
  const i = result.value;
  result.value = i.substring(0, i.length - 1);
}
function power() {
  const i = result.value;
  result.value = i * i;
}
function root() {
  const i = result.value;
  result.value = Math.sqrt(i);
}
