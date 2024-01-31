//On load event
window.onload = function(){
    document.getElementById('button-ok').style.display = 'inline';
}

//Initial Prompt
function button_ok(){
    document.getElementById('button-ok').style.display = 'none';
    document.getElementById('button-yes').style.display = 'inline';
    document.getElementById('button-no').style.display = 'inline';
    document.getElementById('please-no').style.display = 'block';

    document.getElementById('header-text').innerHTML = "Will you be my valentine <3"
}

//Valentine Rejection
let rejection_count = 0;
function button_no(){
    rejection_count++;

    let header_text = document.getElementById("header-text");
    let turtle_image = document.getElementById("turtle-image");
    switch(rejection_count){
        case 1:
            header_text.innerHTML = "Try again...";
            turtle_image.src = "images/Turtle_Stage_2.png";
            break;
        case 2:
            header_text.innerHTML = "Still not right...";
            turtle_image.src = "images/Turtle_Stage_3.png";
            break;
        case 3:
            header_text.innerHTML = "Please stop.";
            turtle_image.src = "images/Turtle_Stage_4.png";
            break;
        case 4:
            header_text.innerHTML = "Now look what you did.";
            document.getElementById("please-no").style.display = 'none';
            turtle_image.src = "images/Gravestone.png";
            break;
    }
}

function button_yes(){
    if (rejection_count < 4){
        let turtle_image = document.getElementById("turtle-image");
        turtle_image.src = "images/Turtle_Stage_1.png";

        document.body.style.backgroundImage = "url(images/Heart_Background.png)";
        document.body.style.backgroundSize = "100%"

        document.getElementById("header-text").innerHTML = "I LOVE YOUUU! (marriage now) (you're mine forever now pookie)";
        document.getElementById("please-no").style.display = 'none';
        document.getElementById("button-yes").style.display = 'none';
        document.getElementById("button-no").style.display = 'none';
    } else {
        document.getElementById("header-text").innerHTML = "It's too late for that now.";
        document.getElementById("please-no").style.display = 'none';
        document.getElementById("button-yes").style.display = 'none';
        document.getElementById("button-no").style.display = 'none';
    }
    
}