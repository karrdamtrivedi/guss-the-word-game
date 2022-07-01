player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn-"+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lowercase="+word);

    charat1=word.charAt(1);
    console.log(charat1);

    len_divide_2=Math.floor(word.length/2);
    charAt2=word.charAt(len_divide_2);
    console.log(charAt2);

    len_minus_1 =word.length-1;
    charAt3=word.charAt(len_minus_1);
    console.log(charAt3);

    remove_1=word.replace(charat1,"_");
    remove_2=remove_1.replace(charAt2,"_");
remove_3=remove_2.replace(charAt3,"_");

console.log(remove_3);

q_word="<h4 id='word_display'> Q."+remove_3+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>"; check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=q_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}

q_turn="player1";
a_turn="player2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lowercase ="+answer);

    if(answer==word){
if(a_turn=="player1"){
    player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=player1_score;
}
else{
    player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;   
}
    }
    if(q_turn=="player1"){
        q_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn-"+player2_name;
    }
    else{
        q_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn-"+player1_name;   
    }
    if(a_turn=="player1"){
        a_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;
    }
    else{
        a_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn-"+player1_name;   
    }
    document.getElementById("output").innerHTML="";
}