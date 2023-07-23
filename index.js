

document.getElementById('PlayButton').onclick = function() {
    var randomnum1=Math.floor(Math.random()*6)+1;
var randomimg1="dice"+randomnum1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimg1)

var randomnum2=Math.floor(Math.random()*6)+1;
var randomimg2="dice"+randomnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimg2)

if(randomnum1 > randomnum2){
    document.querySelector("h1").innerHTML="Player One Wins  &#11088"
}
else if (randomnum2>randomnum1){
    document.querySelector("h1").innerHTML="Player Two Wins &#x1F6A9"
}
else{
    document.querySelector("h1").innerHTML="DRAW &#128680"
}   
}   