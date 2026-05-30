const text =
"Software Developer | Java Programmer | Tech Enthusiast ";

let index = 0;

function typingEffect(){

    if(index < text.length){

        document.getElementById("typing").innerHTML +=
        text.charAt(index);

        index++;

        setTimeout(typingEffect,80);
    }
}

typingEffect();

function showMessage(){

    alert("Thank You For Visiting My Portfolio!");
}
