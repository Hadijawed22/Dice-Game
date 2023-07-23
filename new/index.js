var randomnumber1= Math.floor(Math.random() *6)+1;
var randomimageource1="images/dice"+randomnumber1+".png";
document.querySelectorAll("img") [0].setAttribute("src",randomimageource1);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimageource2="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimageource2);

if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="Player One Wins &#11088"
}
else if (randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player Two Wins &#x1F6A9"
}
else{
    document.querySelector("h1").innerHTML=" DRAW  &#128680"
}