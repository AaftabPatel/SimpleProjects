let ch=0;
let v1="";
let v2="";
let id1=0;
let score=0;

function reset(id){
      document.getElementById(id).classList.toggle("flip");
      document.getElementById(id1).classList.toggle("flip");
      document.getElementById(id).value='';
      document.getElementById(id1).value='';
}

function same(id){
      document.getElementById(id1).style.display="none";
      document.getElementById(id).style.display="none";
      
}

function game_end() {
      if(score==2){
            document.getElementById("h").innerHTML="YOU WON";
            document.getElementById("h").style.fontSize="100px";
      }
}
function check(id) {
      if(ch==1)
            id1=id;
      else if(ch==2){
            ch=0;
            if(v1==v2){
                  same(id);
                  score++;
            }
            else
                  reset(id);
       }
}

function flip(id) {
      var element=document.getElementById(id);
      element.classList.toggle("flip");
      if(id=="1"){
            element.value='+';
            ch++;
            v1="+";
            check(id);
            }
      else if(id=="2"){
            element.value='+';
            ch++;
            v2="+";
            check(id);
            }
      else if(id=="3"){
            element.value='*';
            ch++;
            v1="*";
            check(id);
            } 
      else if(id=="4"){
            element.value='*';
            ch++;
            v2="*";
            check(id);
            }
      game_end();
    }