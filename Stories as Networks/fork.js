var mission = document.getElementById('mission');
var escape = document.getElementById('escape');
var visit = document.getElementById('visit');
var a0 = document.getElementsByTagName('a')[0];
var a1 = document.getElementsByTagName('a')[1];
var a2 = document.getElementsByTagName('a')[2];
var a3 = document.getElementsByTagName('a')[3];
var a4 = document.getElementsByTagName('a')[4];
var a5 = document.getElementsByTagName('a')[5];
var text0 = document.getElementsByClassName("text")[0];
var text1 = document.getElementsByClassName("text")[1];
var text2 = document.getElementsByClassName("text")[2];
var text3 = document.getElementsByClassName("text")[3];
var text4 = document.getElementsByClassName("text")[4];
var text5 = document.getElementsByClassName("text")[5];

mission.addEventListener('click', missionReveal);
escape.addEventListener('click', escapeReveal);
visit.addEventListener('click', visitReveal);

function missionReveal(){
    console.log("click", missionReveal);
    mission.style.textDecoration = "none";
    mission.style.color = "#606C38";
    escape.style.color = "#969695";
    escape.style.textDecoration = "line-through";
    visit.style.color = "#969695";
    visit.style.textDecoration = "line-through";
    a1.style.textDecoration = "none";
    a1.style.color = "#606C38";
    a3.style.textDecoration = "none";
    a3.style.color = "#606C38";
    a0.style.textDecoration = "line-through";
    a0.style.color = "#969695";
    a2.style.textDecoration = "line-through";
    a2.style.color = "#969695";
    a4.style.textDecoration = "line-through";
    a4.style.color = "#969695";
    a5.style.textDecoration = "line-through";
    a5.style.color = "#969695";
    text0.style.textDecoration = "line-through";
    text1.style.textDecoration = "line-through";
    text2.style.textDecoration = "line-through";
    text3.style.textDecoration = "line-through";
    text4.style.textDecoration = "line-through";
    text5.style.textDecoration = "line-through";
}

function escapeReveal(){
    console.log("click", escapeReveal);
    escape.style.textDecoration = "none";
    escape.style.color = "#D04F04";
    mission.style.color = "#969695";
    mission.style.textDecoration = "line-through";
    visit.style.color = "#969695";
    visit.style.textDecoration = "line-through";
    a4.style.textDecoration = "none";
    a4.style.color = "#D04F04";
    a5.style.textDecoration = "none";
    a5.style.color = "#D04F04";
    a0.style.textDecoration = "line-through";
    a0.style.color = "#969695";
    a2.style.textDecoration = "line-through";
    a2.style.color = "#969695";
    a1.style.textDecoration = "line-through";
    a1.style.color = "#969695";
    a3.style.textDecoration = "line-through";
    a3.style.color = "#969695";
    text0.style.textDecoration = "line-through";
    text1.style.textDecoration = "line-through";
    text2.style.textDecoration = "line-through";
    text3.style.textDecoration = "line-through";
    text4.style.textDecoration = "line-through";
    text5.style.textDecoration = "line-through";
}

function visitReveal(){
    console.log("click", visitReveal);
    visit.style.textDecoration = "none";
    visit.style.color = "#6B0504";
    mission.style.color = "#969695";
    mission.style.textDecoration = "line-through";
    escape.style.color = "#969695";
    escape.style.textDecoration = "line-through";
    a0.style.textDecoration = "none";
    a0.style.color = "#6B0504";
    a2.style.textDecoration = "none";
    a2.style.color = "#6B0504";
    a4.style.textDecoration = "line-through";
    a4.style.color = "#969695";
    a5.style.textDecoration = "line-through";
    a5.style.color = "#969695";
    a1.style.textDecoration = "line-through";
    a1.style.color = "#969695";
    a3.style.textDecoration = "line-through";
    a3.style.color = "#969695";
    text0.style.textDecoration = "line-through";
    text1.style.textDecoration = "line-through";
    text2.style.textDecoration = "line-through";
    text3.style.textDecoration = "line-through";
    text4.style.textDecoration = "line-through";
    text5.style.textDecoration = "line-through";
}
    
    
