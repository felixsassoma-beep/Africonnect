let points = 0;

function addWord(){
let word = document.getElementById("word").value;
let meaning = document.getElementById("meaning").value;

if(word === "" || meaning === ""){
alert("Preencha os campos!");
return;
}

let li = document.createElement("li");
li.innerHTML = word + " - " + meaning;
document.getElementById("list").appendChild(li);

points += 5;
document.getElementById("points").innerText = points;

document.getElementById("word").value="";
document.getElementById("meaning").value="";
}
