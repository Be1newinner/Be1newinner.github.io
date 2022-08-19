document.addEventListener("DOMContentLoaded", function(){
//Javascript that loads after the Dom Loaded
const card1 = document.getElementsByClassName("card1")[0];
const card2 = document.getElementsByClassName("card2")[0];
const card3 = document.getElementsByClassName("card3")[0];
const card4 = document.getElementsByClassName("card4")[0];
const card5 = document.getElementsByClassName("card5")[0];

const cardState1 = true;
const cardState2 = false;
const cardState3 = false;
const cardState4 = false;
const cardState5 = false;

card1.style.width = "63vw";
document.getElementById("cardP1").style.display = "block";        
document.getElementById("cardP2").style.display = "none";        
document.getElementById("cardP3").style.display = "none";        
document.getElementById("cardP4").style.display = "none";        
document.getElementById("cardP5").style.display = "none";    

card1.addEventListener("click",function() {
    card1.style.width = "63vw";
    card2.style.width = "5vw";
    card3.style.width = "5vw";
    card4.style.width = "5vw";
    card5.style.width = "5vw";
    document.getElementById("cardP1").style.display = "block";        
    document.getElementById("cardP2").style.display = "none";        
    document.getElementById("cardP3").style.display = "none";        
    document.getElementById("cardP4").style.display = "none";        
    document.getElementById("cardP5").style.display = "none";        
    cardState1 ? cardState1 = false:cardState1 = true;
}
);

card2.addEventListener("click",function() {
    card1.style.width = "5vw";
    card2.style.width = "63vw";
    card3.style.width = "5vw";
    card4.style.width = "5vw";
    card5.style.width = "5vw";
    document.getElementById("cardP1").style.display = "none";        
    document.getElementById("cardP2").style.display = "block";        
    document.getElementById("cardP3").style.display = "none";        
    document.getElementById("cardP4").style.display = "none";        
    document.getElementById("cardP5").style.display = "none";  
    cardState2 ? cardState2 = false:cardState2 = true;
  }
);

card3.addEventListener("click",function() {
    card1.style.width = "5vw";
    card2.style.width = "5vw";
    card3.style.width = "63vw";
    card4.style.width = "5vw";
    card5.style.width = "5vw";
    document.getElementById("cardP1").style.display = "none";        
    document.getElementById("cardP2").style.display = "none";        
    document.getElementById("cardP3").style.display = "block";        
    document.getElementById("cardP4").style.display = "none";        
    document.getElementById("cardP5").style.display = "none";  
    cardState3 ? cardState3 = false:cardState3 = true;
  }
);

card4.addEventListener("click",function() {
    card1.style.width = "5vw";
    card2.style.width = "5vw";
    card3.style.width = "5vw";
    card4.style.width = "63vw";
    card5.style.width = "5vw";
    document.getElementById("cardP1").style.display = "none";        
    document.getElementById("cardP2").style.display = "none";        
    document.getElementById("cardP3").style.display = "none";        
    document.getElementById("cardP4").style.display = "block";        
    document.getElementById("cardP5").style.display = "none";  
    cardState4 ? cardState4 = false:cardState4 = true;
  }
);

card5.addEventListener("click",function() {
    card1.style.width = "5vw";
    card2.style.width = "5vw";
    card3.style.width = "5vw";
    card4.style.width = "5vw";
    card5.style.width = "63vw";
    document.getElementById("cardP1").style.display = "none";        
    document.getElementById("cardP2").style.display = "none";        
    document.getElementById("cardP3").style.display = "none";        
    document.getElementById("cardP4").style.display = "none";        
    document.getElementById("cardP5").style.display = "block";  
    cardState5 ? cardState5 = false:cardState5 = true;    
  }
);

});