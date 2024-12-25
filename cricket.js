let userruns="";
let comruns="";
let empirescall1="";
let empirescall2="";
let empirescall3="";
let score1runs=0;
let score2runs=0;
function toss(){
    window.location.href="index.html";
}
function restart(){
    window.location.href="cricket.html";
}

const data=localStorage.getItem('data');
if(data=="batting"){
    document.getElementById("position").innerHTML="your batting first";
}
else{

    document.getElementById("position").innerHTML="robot batting first";
}

function userscore(value){
    userruns=value;
    document.getElementById("yourchoose").innerHTML=userruns;
    comscore();
  if(data=="batting"){
    if(empirescall1!="YOU OUT!")
    {
    score1();
    
    }
    else if(empirescall2!="ROBOT OUT!"){
        score2();  
        if(score1runs<score2runs){
            document.getElementById("position").innerHTML="<h2><b>ROBOT WON...<b></h2>";
            empirescall2="ROBOT OUT!";
        }
        else{
       if(empirescall2=="ROBOT OUT!"){
        if(score1runs>score2runs){
            document.getElementById("position").innerHTML="<h2><b>YOU WON...</b></h2>";
        }
          else{
                  document.getElementById("position").innerHTML="<h2><b>DRAWN...</b></h2>";
              }
       }

      }

   }
  }
  else{
    if(empirescall2!="ROBOT OUT!")
        {
        score2();
        
        }
        else if(empirescall1!="YOU OUT!"){
            score1();  
            if(score2runs<score1runs){
                document.getElementById("position").innerHTML="<h2><b>YOU WON...<b></h2>";
                empirescall1="YOU OUT!";
            }
            else{
           if(empirescall1=="YOU OUT!"){
            if(score2runs>score1runs){
                document.getElementById("position").innerHTML="<h2><b>ROBOT WON...</b></h2>";
            }
              else{
                      document.getElementById("position").innerHTML="<h2><b>DRAWN...</b></h2>";
                  }
           }
    
          }
    
       }
  }

}
function comscore(){
    comruns=Math.floor(Math.random()*5)+1;

  
    
    if(comruns==5)
    {
        comruns+=1;
    document.getElementById("comchoose").innerHTML=comruns;
    }
    else{
        document.getElementById("comchoose").innerHTML=comruns; 
    }
    const button = document.getElementById("button"+comruns);
    button.classList.remove("highlight1", "highlight2");

    button.classList.add("highlight1");
    setTimeout(()=>{
        button.classList.add("highlight2");
    },200)

}
function score1(){
    
    
    if(userruns==comruns)
    {   empirescall1="YOU OUT!"
        document.getElementById("empire").innerHTML=empirescall1;
        document.getElementById("position").innerHTML="your bowlling";

    }
    else{
        document.getElementById("empire").innerHTML=userruns;
        score1runs+=parseInt(userruns);
    }
    document.getElementById("score1").innerHTML="yourscore:"+score1runs;
}
function score2(){
    
    
    if(userruns==comruns)
    {   empirescall2="ROBOT OUT!"
        document.getElementById("empire").innerHTML=empirescall2;
        document.getElementById("position").innerHTML="your batting";

    }
    else{
        document.getElementById("empire").innerHTML=comruns;
        score2runs+=parseInt(comruns);
        
    }
    document.getElementById("score2").innerHTML="robotscore:"+score2runs;
    
}


