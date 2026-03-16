import "bootstrap";
import "./style.css";

window.onload = function() {
    //These are my arrays with the parts of the excuse
    let who = ['Rocko ', 'My Mom ', 'The slenderman ', 'The witch of blair '];
    let action = ['ate ', 'spelled ', 'digged ', 'poked '];
    let what = ['my eye ', 'your butt ', 'her armpit ', 'the dough '];
    let when = ['when I was running', 'while i was excercising', 'when i was fighting the crime', 'in the church', 'while i was programing'];
    
    //This is how i will generate random indexes for every single array
    let randomWho = Math.floor(Math.random()* who.length);
    let randomAction = Math.floor(Math.random()* action.length);
    let randomWhat = Math.floor(Math.random()* what.length);
    let randomWhen = Math.floor(Math.random()* when.length);

    //Now will create the excuse concatenating the ramdom elements
    let excuse = who[randomWho] + ' ' + action[randomAction] + '' + what[randomWhat] + '' + when[randomWhen];

    document.getElementById('excuse').innerHTML = excuse;

};
