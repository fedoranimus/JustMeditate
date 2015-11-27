var statements = ["Want to live longer?", "Want to reduce stress?", "Want to change your genes?", "Want to sleep better?", "Want to lose weight?", "Want to stay healthy?"];

function init() {
  var cycleDiv = document.getElementById("cycle");
  var statement = statements[Math.floor(Math.random()*statements.length)]
  cycleDiv.innerText = statement;
}
