var statements = ["One", "Two", "Three"];

function init() {
  var cycleDiv = document.getElementById("cycle");
  var statement = statements[Math.floor(Math.random()*statements.length)]
  cycleDiv.innerText = statement;
}
