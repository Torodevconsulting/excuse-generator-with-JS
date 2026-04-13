import "bootstrap";
import "./style.css";

window.onload = function() {
    //These are my arrays with the parts of the excuse
    const who = ['Rocko ', 'My Mom ', 'The slenderman ', 'The witch of blair', 'The ghost of my dead grandma'];
    const action = ['ate ', 'spelled ', 'digged ', 'poked '];
    const what = ['my eye ', 'your butt ', 'her armpit ', 'the dough '];
    const when = ['when I was running', 'while i was excercising', 'when i was fighting the crime', 'in the church', 'while i was programing'];
    
    //This is how i will generate random indexes for every single array
    function generateExcuse() {
    let randomWho = Math.floor(Math.random()* who.length);
    let randomAction = Math.floor(Math.random()* action.length);
    let randomWhat = Math.floor(Math.random()* what.length);
    let randomWhen = Math.floor(Math.random()* when.length);
    let excuse = who[randomWho] + ' ' + action[randomAction] + '' + what[randomWhat] + '' + when[randomWhen];
    document.getElementById('excuse').innerHTML = excuse;
}
    generateExcuse();
    document.getElementById('excuseBtn').addEventListener('click', generateExcuse);   

};
