const card1 = document.getElementById("box-1");
const card2 = document.getElementById("box-2");
const card3 = document.getElementById("box-3");
const card4 = document.getElementById("box-4");

const Palette = "#1a3462"

function removeAllColor(){
    card1.style.backgroundColor = "";
    card2.style.backgroundColor = "";
    card3.style.backgroundColor = "";
    card4.style.backgroundColor = "";
}

card1.addEventListener("click", function(){
    if(card1.style.backgroundColor == ""){
        removeAllColor()
        card1.style.backgroundColor = Palette
    }else{
        removeAllColor()
        div1.style.backgroundColor = ""
    }
});

card2.addEventListener("click", function(){
    if(card2.style.backgroundColor == ""){
        removeAllColor()
        card2.style.backgroundColor = Palette
    }else{
        removeAllColor()
        card2.style.backgroundColor = ""
    }
});

card3.addEventListener("click", function(){
    if(card3.style.backgroundColor == ""){
        removeAllColor()
        card3.style.backgroundColor = Palette
    }else{
        removeAllColor()
        card3.style.backgroundColor = ""
    }
});

card4.addEventListener("click", function(){
    if(card4.style.backgroundColor == ""){
        removeAllColor()
        card4.style.backgroundColor = Palette
    }else{
        removeAllColor()
        card4.style.backgroundColor = ""
    }
});