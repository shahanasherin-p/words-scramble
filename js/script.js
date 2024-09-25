const worText=document.querySelector(".word"),
hintText=document.querySelector(".hint span"),
refreshBtn=document.querySelector(".refresh-word"),
checBtn=document.querySelector(".check-word"),
timeText=document.querySelector(".time b"),
inputField=document.querySelector("input");


let correctWord,timer;

const initTimer=maxTime=>{
    clearInterval(timer)
    timer=setInterval(()=>{
        if(maxTime>0){
            maxTime--
            return timeText.innerText=maxTime
        }
        clearInterval(timer)
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`)
        intGame()
    },1000)
}

const intGame=()=>{
    initTimer(30)
    let randomObj=words[Math.floor(Math.random()*words.length)]
    let wordArray= randomObj.word.split("")
    let j;
    for (let i =0; i <wordArray.length; i++) {
        j=Math.floor(Math.random()*(wordArray.length-i))+i;
       [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        
    }
    worText.innerText=wordArray.join("")
    hintText.innerText=randomObj.hint
    correctWord=randomObj.word.toLowerCase()
    inputField.value=""
    inputField.setAttribute("maxlength",correctWord.length)
    // console.log(randomObj);
    
   
}

intGame() ;

const checkWord=()=>{
    let userWord=inputField.value.toLowerCase()
    if(!userWord)return alert("Please Enter a word Check")
    if(userWord!==correctWord) return alert(`Oops! ${userWord} is not a correct word`)
    alert(`Congrats! ${userWord.toUpperCase()} is  a correct word`)
    intGame()
}

refreshBtn.addEventListener("click",intGame)
checBtn.addEventListener("click",checkWord)