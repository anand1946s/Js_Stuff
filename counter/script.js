 let count=0;

        const countable=document.getElementById("countable");
        const increasebtn=document.getElementById("increase");
        const decreasebtn=document.getElementById("decrease");

        increasebtn.onclick=function(){
            count++;
            countable.textContent= count;

        }

        decreasebtn.onclick=function(){
            count--;
            countable.textContent= count;
            
        }