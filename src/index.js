module.exports = function solveEquation(equation) {
  
 equation = equation.split(" ")
  var a = Number(equation[0])
  var b = Number(equation[3] === "-" ? - equation[4] : equation[4])
  var c = Number(equation[7] === "-" ? -equation[8] : equation[8])

  var dicr = b * b - 4 * a * c;
  var x2 = ((b * (-1)) - Math.sqrt(dicr)) / (2 * a);
  var x1 = ((b * (-1)) + Math.sqrt(dicr)) / (2 * a);
  var arr = [];
  x1 = Math.round(x1);
  x2 = Math.round(x2);
  arr.push(x1);
  arr.push(x2);
  if (arr[0] > arr[1]) {
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  return arr;
}