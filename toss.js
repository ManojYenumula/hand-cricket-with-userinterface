 let choose="";
 let wonchoose="";
 let losschoose="";
 
 
 function heads() {
    choose="H"
  }
  
  function tail() {
    choose="T"

  }
    function flipcoin() {
    if (choose === "") {
        document.getElementById("res").innerHTML = "Choose the toss!";
    } else {
        const coin = document.getElementById('coin');

        // Simulate the coin flip (Heads or Tails)
        const isHeads = Math.random() < 0.5;
        const result = isHeads ? "H" : "T"; // Store the result of the coin flip

        // Animate the coin flip with multiple rotations
        coin.textContent = '';
        coin.style.transition = 'transform 1.5s';
        coin.style.transform = 'rotateY(1080deg)'; // Rotate multiple times

        setTimeout(() => {
            coin.style.transition = 'none'; // Disable smooth transition for final state
            coin.style.transform = result === "H" ? 'rotateY(0deg)' : 'rotateY(180deg)';
            coin.textContent = result;
            if(choose==result){
              document.getElementById("res").innerHTML = "you won toss!";
            }
            else{
              document.getElementById("res").innerHTML = "you loss toss!";
            }
        }, 1500);

        setTimeout(() => { 
         if(choose==result){
          tosswon();
          
          
         }
         else{
          tossloss();
          
         }
      },3000)
    }
 
  }
  
  

  
  function tosswon() {
      const blockdiv=document.getElementById("block");
      const tosswondiv=document.getElementById("tosswon");
      blockdiv.classList.remove("visible");
      blockdiv.classList.add("hidden");
      tosswondiv.classList.remove("hidden");
      tosswondiv.classList.add("visible");
      

      
  }
  function tossloss() {
    const blockdiv=document.getElementById("block");
    const tosswondiv=document.getElementById("tosswon");
    blockdiv.classList.remove("visible");
    blockdiv.classList.add("hidden");
    losschoose=Math.random()<0.5 ? "batting" : "bowling";
    document.getElementById("result").innerHTML="computer choosed "+losschoose;
    if(losschoose=="batting"){
      wonchoose="bowling";
      localStorage.setItem('data',wonchoose);
    }
    else{
      wonchoose="batting";
      localStorage.setItem('data',wonchoose);

    }
    
    pagechange();

 }

 function batting() {
    wonchoose="batting";
    document.getElementById("result").innerHTML="you choosed "+wonchoose;
    localStorage.setItem('data',wonchoose);
    pagechange();
  }
  function bowling() {
    wonchoose="bowling";
    document.getElementById("result").innerHTML="you choosed "+wonchoose;
    localStorage.setItem('data',wonchoose);
    pagechange();
  }
  function pagechange() {
    setTimeout(() => {
        window.location.href="cricket.html";
    }, 3000);
  } 