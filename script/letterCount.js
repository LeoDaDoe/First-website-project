function countInstance() {
  var insCount = document.getElementById("countField").value;
  var res = insCount.match(/a/gi).length + insCount.match(/ą/gi).length;
  document.getElementById("countOutput").innerHTML = res;
}
