const titleEle = document.querySelector('header h1');
const explainEle = document.querySelector('#explain-cont p');
const exampleEle = document.querySelector('#example-con p') 
let solutionEle = document.getElementById('solution')
const solutionImgEle = document.querySelector('#solution img')
let solutionImgSrc = ['../images/cupsSulo.png', '../images/pentagonSolu.png', '../images/occoSulo.png']
const session = sessionStorage.getItem('challengeId');  
const id = parseInt(JSON.parse(session));

let data;
let solutionTxt;
let selectImg;
async function getChallengeData(){
    let data = await fetch('../data/challenges-data.json')
                    .then(res => res.json())
                    
    titleEle.innerText = data[id].title;
    explainEle.innerText = data[id].explaination;
    exampleEle.innerText = data[id].example;
    solutionTxt = data[id].solution;
    selectImg = solutionImgSrc[id];
}

solutionEle.style.visibility = 'hidden';
function insertSolution(){
    window.location.href = "#solution" 
    solutionEle.style.visibility = 'visible';
    solutionImgEle.src = selectImg;
    solutionEle.classList.add('showSol');
}
