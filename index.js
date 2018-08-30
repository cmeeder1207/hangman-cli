require("./word.js")

var gamelogic = function(){

    var choice=Math.floor(Math.random() * wordArray.length)
    console.log(wordArray[choice])    

}
gamelogic()