function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }


// var i;
// for (i = 0; i < Math.random() * (5 - 0) + 0; i++) {
// alert("YOU WON OUR 100000th VISITOR GIVEAWAY!!")
// }

alert("ok you didn't win anything")

alert("potato")

document.getElementById("button").onclick = function() {
alert("HELLO BACK")
document.getElementById("helloPeople").style.backgroundColor = getRandomColor()
}
