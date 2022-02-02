window.onload = function () {
    onDocumentReady();
    $('#nameofID').popover();
    $("button").on("click", onButtonClicked);
}
var $ = window.$;
// Once the DOM is ready, we can manipulate it
function onDocumentReady() {}
// Add "click" event handler to ALL the buttons
// Add "click" event handler to the Element with id "killButton

document.getElementById("mybutton").addEventListener("click", Toggle);
//when "mybutton" is clicked, call the function "Togg" 
document.getElementById("Slideimg2").style.display = "none";
document.getElementById("Caption2").style.display = "none";
//set the second image to disapear from the get-go

function Toggle() {
    var x = document.getElementById("Slideimg1");
    var y = document.getElementById("Slideimg2");
    var x1 = document.getElementById("Caption1");
    var y1 = document.getElementById("Caption2");
    console.log(y);
    if (y.style.display === "none") {
        //if the second image is invisable, make it visable again
        y.style.display = "block";
        y.style.marginLeft = "125px";
        y1.style.display = "block";
        x.style.display = "none";
        x1.style.display = "none";
        //make the first image invisible 
    } else {
        //if the second image is visible, make it invisible again and set image 1 to visible
        y.style.display = "none";
        y1.style.display = "none";
        x.style.display = "block";
        x1.style.display = "block";
        x.style.marginLeft = "125px";
    }
}

function Function1() {
    console.log(16);
    document.getElementById('txt').innerHTML = "Colomns similar to the ones in ancient Roman architecture, although they are often paired in this style";

}

function Function2() {
    console.log(65);
    document.getElementById('txt').innerHTML = "A pediment decorated with relief sculptures, these tend to be more plain than the Baroque style";
}

function Function3() {
    console.log(64);
    document.getElementById('txt').innerHTML = "These two pavlions at each end of the building show the symmetry that is present in many Neoclassical buildings";
}

/*My code! */
window.onload = function () {
    onDocumentReady();
}
var $ = window.$;
// Once the DOM is ready, we can manipulate it
function onDocumentReady() {
    // Add "click" event handler to ALL the buttons
    $("button").on("click", onButtonClicked);
    // Add "click" event handler to the Element with id "killButton
    Hide();
    $('.rena').css('display', 'block');
}

// Event handler for when a button is clicked
function onButtonClicked(event) {
    // `this` in an event handler refers to the Element that fired the event (the Button that was clicked)
    var clickedButton = this;
    // Convert the button to a jQuery object (by wrapping if with `$()`)
    var button = $(clickedButton);
    // Use the jQuery `text()` function to get the text of the button
    var buttonText = button.text()
    console.log("User clicked the " + buttonText + " Button.")

    switch (buttonText) {
        case "Renaissance":
            Hide();
            $('.rena').css('display', 'block');
            //$(".rena").style.display = "block";
            break;
        case "Baroque":
            Hide();
            $('.baro').css('display', 'block');
            // $(".baro").style.display = "block";
            break;
        case "Neoclassical":
            Hide();
            $('.neo').css('display', 'block');
            // $(".baro").style.display = "block";
            break;
        case "Industrial":
            Hide();
            $('.indus').css('display', 'block');
            // $(".baro").style.display = "block";
            break;
        case "Art nouveau":
            Hide();
            $('.new').css('display', 'block');
            // $(".baro").style.display = "block";
            break;
        case "Baroque":
            Hide();
            $('.sky').css('display', 'block');
            // $(".baro").style.display = "block";
            break;
        case "Skycrapers":
            Hide();
            $('.sky').css('display', 'block');
            // $(".baro").style.display = "block";
            break;

    }
}



function Hide() {
    //$(".text").style.display = "none";
    $('.text').css('display', 'none');
    // $(".text").toggleClass("Hide");
}
