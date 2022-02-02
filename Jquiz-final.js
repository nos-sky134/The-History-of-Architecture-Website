//clockstuff
var sec = 0;
var myVar = setInterval(startClock, 1000);
var seconds = 0;
var Minutes = 0;


function Blink() {
    var ele = document.getElementById('txt');
    ele.style.color = (ele.style.color == 'red' ? '' : 'red');
}

function startClock() {
    sec = sec + 1;
    //console.log(sec);
    Minutes = findMin(sec);
    seconds = remainingSec(sec);
    //document.getElementById('txt').innerHTML =  "Total Minutes: " + Minutes + " Total seconds: " + sec +" Remaining seconds: " + seconds;
    document.getElementById('txt').innerHTML = Minutes + " : " + seconds;
}

function findMin(sec) {
    Min = (sec / 60);
    Minutes = Math.floor(Min);
    console.log(Min);
    if (Minutes < 10) {
        Minutes = "0" + Minutes;
    }
    return Minutes;
}

function remainingSec(sec) {
    var Secs = sec % 60;
    //remember to initialize any testing variable 
    //console.log(Secs);
    if (Secs < 10) {
        Secs = "0" + Secs;
    }
    return Secs;
    //don't missspel Secs 
}


//an Array that holds the answers to the quiz, note that I started with counting with 1 instead of 0 
var Ans = ["Foo", "1b", "2d", "3a", "4d", "5c", "6a", "7c", "8d", "9b", "10a","11c","12c","13a" ];

function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];

    // loop through list of radio buttons
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}


document.getElementsByClassName("wayman")[0].onclick = function () {
    console.log(133)
}

// get value of selected 'ship' radio button in 'demoForm'
document.getElementById('Result').onclick = function () {
    //create an object that will hold the names and inputs of each question on the quiz
    var obj = {};
    //create names for each -- in the object
    var Q1 = "val1"
    var Q2 = "val2"
    var Q3 = "val3"
    var Q4 = "val4"
    var Q5 = "val5"
    var Q6 = "val6"
    var Q7 = "val7"
    var Q8 = "val8"
    var Q9 = "val9"
    var Q10 = "val10"
    var Q11 = "val11"
    var Q12 = "val12"
    var Q13 = "val13"
    
    //save the value of the radio button in the object
    obj.val1 = getRadioVal(document.getElementById('demoForm1'), 'ship1');
    obj.val2 = getRadioVal(document.getElementById('demoForm2'), 'ship2');
    obj.val3 = getRadioVal(document.getElementById('demoForm3'), 'ship3');
    obj.val4 = getRadioVal(document.getElementById('demoForm4'), 'ship4');
    obj.val5 = getRadioVal(document.getElementById('demoForm5'), 'ship5');
    obj.val6 = getRadioVal(document.getElementById('demoForm6'), 'ship6');
    obj.val7 = getRadioVal(document.getElementById('demoForm7'), 'ship7');
    obj.val8 = getRadioVal(document.getElementById('demoForm8'), 'ship8');
    obj.val9 = getRadioVal(document.getElementById('demoForm9'), 'ship9');
    obj.val10 = getRadioVal(document.getElementById('demoForm10'), 'ship10');
    obj.val11 =getRadioVal(document.getElementById('demoForm11'), 'ship11');
    obj.val12 =getRadioVal(document.getElementById('demoForm12'), 'ship12');
    obj.val13 =getRadioVal(document.getElementById('demoForm13'), 'ship13');

    //create variable for keeping score of the number of questions the user got right
    var Numright = 0;

    for (var i = 1; i < 14; i++) {
        //goes through the values in the array
        //console.log(Ans[i]);

        var index = "Checking" + i;
        var name = "val" + i;
        if (obj[name] == Ans[i]) {
            //if the input from the user in question i is the same as the string from the answer in Ans[i], print correct 
            console.log("Correct");
            //turn the text within the element green and then print it in the html 
            document.getElementById(index).style.color = 'limegreen';
            document.getElementById(index).innerHTML = "Correct";
            //make the right score bigger by one
            Numright = Numright + 1;
        } else {
            //Print out incorrect in the HTML
            console.log("Wrong");
            document.getElementById(index).innerHTML = "Incorrect";
            document.getElementById(index).style.color = 'red';
        }
    }
    clearInterval(myVar);
    document.getElementById('txt').style.color = 'red';
    var blink_speed = 500; // every 1000 == 1 second, adjust to suit
    var t = setInterval(Blink, blink_speed);
    //print out the score the user got right out of all the questions in total
    document.getElementById('RESULTBOX').innerHTML = Numright + ' out of ' + document.getElementsByClassName("Qbox").length;
}
