

var letter = function(letter,guessed,change,guess){

    var letter=letter
    var guessed = guessed = false;
    var change=change=function(){
        if(guessed){
            
            return(letter)
            
        }
        else{
            
            return("-")
        }
    }
    change()

    var guess= guess= function(){
        if(process.argv[2]==letter){
            guessed=true
        }

    }
}

letter()

 module.exports=letter