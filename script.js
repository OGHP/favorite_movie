// Trying to get the buttons to glow when moused over

var itemOne = document.getElementById("love");
itemOne.addEventListener("mouseover", func, false);
itemOne.addEventListener("mouseout", func1, false);

function func() {
   itemOne.setAttribute("style", "background-color:pink;")
}

function func1() {
   itemOne.setAttribute("style", "background-color:green;")
}


var itemTwo = document.getElementById("hate");
itemTwo.addEventListener("mouseover", func, false);
itemTwo.addEventListener("mouseout", func1, false);

function func() {
   itemTwo.setAttribute("style", "background-color:blue;")
}

function func1() {
   itemTwo.setAttribute("style", "background-color:green;")
}


// Alert boxes for button clicks

function myFunctionLove() {
    var x;
    if (confirm("This movie IS the best!") == true) {
        x = "You rock! Everyone LOVES this movie";
    } else {
        x = "You rock! Everyone LOVES this movie";
    }
    document.getElementById("love").innerHTML = x;
}

function myFunctionHate() {
    var x;
    if (confirm("You have terrible taste in movies!") == true) {
        x = "You're a weirdo, everyone LOVES this movie";
    } else {
        x = "You're a weirdo, everyone LOVES this movie";
    }
    document.getElementById("hate").innerHTML = x;
}

