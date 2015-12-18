$("document").ready(function(){

   var session = 25;
   var break_time = 5;

   document.getElementById("session").innerHTML = session; 
   document.getElementById("break").innerHTML = break_time;

   $("#increaseSession").click(function(){
         session++
         document.getElementById("session").innerHTML = session; 
   });

   $("#decreaseSession").click(function(){
      if(session === 1) {
         session = 1
      } else {
         session--
      }

      document.getElementById("session").innerHTML = session; 
   });

   $("#increaseBreak").click(function(){
         break_time++
         document.getElementById("break").innerHTML = break_time; 
   });

   $("#decreaseBreak").click(function(){
      if(break_time === 1) {
         break_time = 1;
      } else {
         break_time--;
      }

      document.getElementById("break").innerHTML = break_time; 
   });



   


})



// - Create function increaser and decreaser - JS
function increaseSession(){
   session += 1;
}

function decreaseSession(){
   if (session === 1) {
      session === 1;
   } else {
      session -= 1;
   }
}

function increaseBreak(){
   break_time += 1;
}

function decreaseBreak(){
   if (break_time === 1) {
      break_time === 1;
   } else {
      break_time -= 1;
   }

}

