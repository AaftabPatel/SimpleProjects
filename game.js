var ch=-1;
let state=[];
let chance=9;
let game="on";

function change() {
   var element = document.body;
   element.classList.toggle("dark_light");
}
function reset(){
	for(i=0;i<9;i++){
		document.getElementById("c"+i).value=" ";
	}
	state=[];
	chance=9;
}

function check(){
	if(state.includes("a0") && state.includes("a1") && state.includes("a2")){
		document.getElementById("result").innerHTML="player 1 won";
		reset();}
	else if(state.includes("a3") && state.includes("a4") && state.includes("a5")){
		document.getElementById("result").innerHTML="player 1 won";
		reset();}
	else if(state.includes("a6") && state.includes("a7") && state.includes("a8")){
		document.getElementById("result").innerHTML="player 1 won";
		reset();}
	else if(state.includes("a0") && state.includes("a3") && state.includes("a6")){
		document.getElementById("result").innerHTML="player 1 won";
		reset();}
	else if(state.includes("a1") && state.includes("a4") && state.includes("a7")){
		document.getElementById("result").innerHTML="player 1 won";
		reset();}
	else if(state.includes("a2") && state.includes("a5") && state.includes("a8")){
		document.getElementById("result").innerHTML="player 1 won";
		reset();}
	else if(state.includes("a3") && state.includes("a4") && state.includes("a5")){
		document.getElementById("result").innerHTML="player 1 won";
		reset();}
	else if(state.includes("a0") && state.includes("a4") && state.includes("a8")){
		document.getElementById("result").innerHTML="player 1 won";
		reset();}
	else if(state.includes("a2") && state.includes("a4") && state.includes("a6")){
		document.getElementById("result").innerHTML="player 1 won";
		reset();}
		
	else if(state.includes("b0") && state.includes("b1") && state.includes("b2")){
		document.getElementById("result").innerHTML="player 2 won";
		reset();}
	else if(state.includes("b3") && state.includes("b4") && state.includes("b5")){
		document.getElementById("result").innerHTML="player 2 won";
		reset();}
	else if(state.includes("b6") && state.includes("b7") && state.includes("b8")){
		document.getElementById("result").innerHTML="player 2 won";
		reset();}
	else if(state.includes("b0") && state.includes("b3") && state.includes("b6")){
		document.getElementById("result").innerHTML="player 2 won";
		reset();}
	else if(state.includes("b1") && state.includes("b4") && state.includes("b7")){
		document.getElementById("result").innerHTML="player 2 won";
		reset();}
	else if(state.includes("b2") && state.includes("b5") && state.includes("b8")){
		document.getElementById("result").innerHTML="player 2 won";
		reset();}
	else if(state.includes("b3") && state.includes("b4") && state.includes("b5")){
		document.getElementById("result").innerHTML="player 2 won";
		reset();}
	else if(state.includes("b0") && state.includes("b4") && state.includes("b8")){
		document.getElementById("result").innerHTML="player 2 won";
		reset();}
	else if(state.includes("b2") && state.includes("b4") && state.includes("b6")){
		document.getElementById("result").innerHTML="player 2 won";
		reset();}
		
	else if(chance==0){
		document.getElementById("result").innerHTML="Draw";
		reset();}
}

function player(){
	if(ch==-1 || ch==1)
		p="a";
	else
		p="b";
	chance--;
	return p;
}

function insert(a){
	p=player()
	if(a=="c0")
		state.push(p+"0");
	else if(a=="c1")
		state.push(p+"1");
	else if(a=="c2")
		state.push(p+"2");
	else if(a=="c3")
		state.push(p+"3");
	else if(a=="c4")
		state.push(p+"4");
	else if(a=="c5")
		state.push(p+"5");
	else if(a=="c6")
		state.push(p+"6");
	else if(a=="7")
		state.push(p+"7");
	else
		state.push(p+"8");
}	
function clk(id){
	if(ch==-1){
		document.getElementById(id).value="O";
		insert(id);	
		document.getElementById("result").innerHTML="PLAYER 2";
		ch++;
	}
	else if(ch==0){
		document.getElementById(id).value="x";
		insert(id);
		document.getElementById("result").innerHTML="PLAYER 1";
		check();
		ch++;
	}
	else{
		document.getElementById(id).value="O";
		insert(id);
		document.getElementById("result").innerHTML="PLAYER 2";
		check();
		ch--;
	}
}

