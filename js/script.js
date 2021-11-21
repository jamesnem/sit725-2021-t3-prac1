//Create function that checks whether an integer input is odd or even
function oddEvenCheck(){
    var userInput = parseInt(document.getElementById("inputValue").value);
    var returnText;
    
    if (userInput % 2 == 0){
        returnText = userInput + " is an even number";
        console.log("even")
    } 
    else if(userInput == NaN){
        returnText = userInput + " not valid";
        console.log("not valid")
    }

    else{
        returnText = userInput + " is an odd number";
        console.log("odd")
    }
    document.getElementById("output").innerHTML = returnText;
}
    