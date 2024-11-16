const containerOne = document.querySelector('.container-1')
const containerTwo = document.querySelector('.container-2')
const containerThree = document.querySelector('.container-3')
const startQuizBtn = document.querySelector('.start-quiz-btn')
const questionsCompleted = document.querySelector('.completed-ques')
const timeTab = document.querySelector('.time-completed')
const main = document.querySelector('main')
const nextPage = document.querySelector('.next-page')
let question = document.querySelector('.question-bar h1')
let optOne = document.querySelector('.one')
let optTwo = document.querySelector('.two')
let optThree = document.querySelector('.three')
let optFour = document.querySelector('.four')
const options = document.querySelectorAll('.opt')
let correctAnswersSelected = 0
let showResult = document.querySelector('.show-res')
let resultBar = document.querySelector('.result-bar')
let correctBar = document.querySelector('.correct-bar')
let correctPercent = document.querySelector('.percent-corr')
let incorrectPercent = document.querySelector('.percent-incorr')
let compliment = document.querySelector('.compliment')
const retryBtn = document.querySelector('.retry')


const questionsSet = [`Inside which HTML element do we put the JavaScript?`,`How does the rem unit represent a font size?`, `Which HTML element represents either a scalar value within a known range a fractional value?`, 
  `What is Webpack primarily used for?`, `In the following code, the variable fruit has been assigned a value of apple. How would you change the value to plum? let fruit = "apple;"`, `Which statement is true when an HTML tag has been deprecated?`, 
  `What is the <label> element used for?`, `Which CSS property will not trigger layout recalculation?`, `What does the === comparison operator do?`, `Variables declared with the let keyword have what type of scope?`, `Which HTML element is not considered a landmark element?`, 
`Which choice is not a value of the type attribute of the <input> element?`,`When might an empty alt attribute be the correct value?`, `Which choice is not part of CSS box model`, 
`Which attribute must have a unique value each time it is used in an HTML document?`, `What is the correct way to initialize an array of galaxies in JavaScript?`, `Why would you surround a piece of text with <h1></h1> tags?`, 
`You have used display: none in your stylesheet. Which users will be able to see or hear this content?`, `Which description correctly describes the initial values of flex items if the only thing you have done is apply display: flex to their parent?`, 
`Which choice is a correct use of the parseInt() function in JavaScript that parses a string and return an integer?`, `Which part of the URL https://app.uniswap.org/pool specifies the domain name`, `The browser finds some CSS that it does not understand. What is likely happen?`, 
`The flex property is often applied to flex items with a value of 1. Using flex: 1 is a shorthand - what does it unpack to?`, `what does the CSS selector a[href$="org"] select?`, `Which choice is not a render blocking resource?`] 

localStorage.setItem('myQuestions', JSON.stringify(questionsSet))
const localQuestionsSet = (JSON.parse(localStorage.myQuestions))


const answersSet = [`JS`, `Scripting`, `Javascript`, `script`, `Font sizes are expressed relative to the font size of the containing div element`, `Font sizes are expressed relative to the font size of the parent elements`, 
  `Font sizes are relative to the base font size of the operating system.`, `Font sizes are relative to the root em unit used in the HTML element.`, 
  `<meter>`, `<range>`, `<datalist>`, `<optgroup>`, `sharing JavaScript code with other people`, `making JavaScript reliant sites accessible to users who do not have JavaScript turned on`, 
`bundling individual JavaScript files for use in your website`, `source control`, `let fruit = "plum"`, `var fruit = "plum"`, `const fruit = "plum"`, `fruit = "plum"`, 
`It employs code that can be viewed only on a desktop computer`, `It is obsolete and is not recommended for use in marking web content`, `It employs code that will require users to update their browsers`, 
`It employs incorrect syntax that will cause the browser to crash`, `to identify the difference parts of a figure`, `to explain what needs to be entered into a form field`, `as a caption for images`, `as a heading for tables`, 
`top`, `opacity`, `width`, `height`,`It sets one variable equal to another in both value and type`, `It tests for equality of type only`, `It tests for equality of value only`, `It tests for equality of value and type`, `function scope`, 
`block scope`, `inline scope`, `global scope`, `<form>`, `<ul>`, `<main>`, `<nav>`, `range`, `address`, `date`, `password`, `when you cannot think of useful alt text`, `when you don't think it would be interesting to someone who cannot see it`, 
`when the image has come from a CMS`, `when the image is purely decorative`, `margin`, `border`, `padding`, `paragraph`, `title`, `class`, `style`, `id`, `String[] galaxies = new Array("Milky Way", "Whirlpool", "Andromeda");`, 
`let galaxies = {Milky Way, Whirlpool, Andromeda};`, `galaxies = ["Milky Way", "Whirlpool", "Andromeda"];`, `var galaxies = {"Milky Way", "Whirlpool", "Andromeda"};`, `to indicate that this text is the main heading on the page`, 
`to make the text bold`, `to ensure that search engines treat the keywords as being important for this page`, `to demonstrate to screen readers that this text is important`, `all users`, 
`users who can see the content on screen`, `no users`, `screen reader users`, `Items display in a row, lined up at the start, and do not stretch to fill the container`, `Items display in a column, lined up at the start, and do not stretch to fill the container`, 
`Items stay in a column until you add some flex properties.`, `Items display in a row, lined up at the start, and stretch to fill the container`, `parseInt("six");`, `parse_int('6');`, `parseInt("6");`, `parseint("6");`, 
`https`, `org`, `uniswap.org`, `app.uniswap`, `The page will not display`, `An error message will be displayed`, `The browser will not load the stylesheet`, `The browser will ignore the unknown CSS`, 
`flex: 0 0 100;`, `flex: 1 0 0;`, `flex: 0 0 auto;`, `flex: 1 1 auto;`, `all <a> tags whose href attribute begins with "org"`, `all <a> tags whose href attribute equals "org"`, `all <a> tags whose href attribute ends with "org"`, 
`all <a> tags whose href attribute contains "org"`, `images`, `HTML`, `CSS`, `JavaScript`]
  

localStorage.setItem('myAnswers', JSON.stringify(answersSet))
const localAnswersSet = (JSON.parse(localStorage.myAnswers))

const allCorrectAnswers = [`script`, `Font sizes are relative to the root em unit used in the HTML element.`,`<meter>`, `bundling individual JavaScript files for use in your website`, 
  `fruit = "plum"`, `It is obsolete and is not recommended for use in marking web content`, `to explain what needs to be entered into a form field`, `opacity`, `It tests for equality of value and type`, `block scope`, `<ul>`, 
  `address`, `when the image is purely decorative`, `paragraph`, `id`, `galaxies = ["Milky Way", "Whirlpool", "Andromeda"];`, `to indicate that this text is the main heading on the page`, `no users`, 
  `Items display in a row, lined up at the start, and do not stretch to fill the container`, `parseInt("6");`, `uniswap.org`, `The browser will ignore the unknown CSS`, `flex: 1 0 0;`, 
  `all <a> tags whose href attribute ends with "org"`, `images`]


localStorage.setItem('myCorrectAnswers', JSON.stringify(allCorrectAnswers))
const localAllCorrectAnswers = (JSON.parse(localStorage.myCorrectAnswers))



let currentQuestion = 1
questionsCompleted.innerText = `${currentQuestion}/25`


let k = 0
let l = 0
let m = 0

startQuizBtn.addEventListener('click', startTheQuiz)


  function startTheQuiz() {

  questionsCompleted.innerText = `${currentQuestion}/25`
    
  containerOne.style.display = 'none'
  containerTwo.style.display = 'flex' 
  startTimer()

  question.innerText = localQuestionsSet[k]
  optOne.innerText = localAnswersSet[l]
  optTwo.innerText = localAnswersSet[l+1]
  optThree.innerText = localAnswersSet[l+2]
  optFour.innerText = localAnswersSet[l+3]

  nextPage.style.pointerEvents = 'none'


  optOne.addEventListener('click', () => {
      const result = allCorrectAnswers.filter((el) => {
        return el == allCorrectAnswers[m]
      })
    
      if(result != optOne.textContent) {
        optOne.style.borderColor = 'red'

        if(result == optTwo.textContent) {
          optTwo.style.borderColor = 'green'
          
        }
        else if(result == optThree.textContent) {
          optThree.style.borderColor = 'green'
          
        }
        else if(result == optFour.textContent){
          optFour.style.borderColor = 'green'
          
        }

      }

      else{
        optOne.style.borderColor = 'green'
        correctAnswersSelected++
      }
    
      nextPage.style.pointerEvents = 'auto'
      optOne.style.pointerEvents = 'none'
      optTwo.style.pointerEvents = 'none'
      optThree.style.pointerEvents = 'none'
      optFour.style.pointerEvents = 'none'
  })



  optTwo.addEventListener('click', () => {
    const result = allCorrectAnswers.filter((el) => {
      return el == allCorrectAnswers[m]
    })
    
    if(result != optTwo.textContent) {
      optTwo.style.borderColor = 'red'

      if(result == optOne.textContent) {
        optOne.style.borderColor = 'green'
        
      }
      else if(result == optThree.textContent) {
        optThree.style.borderColor = 'green'
        
      }
      else if(result == optFour.textContent){
        optFour.style.borderColor = 'green'
        
      }

    }

    else{
      optTwo.style.borderColor = 'green'      
      correctAnswersSelected++ 
    }

    nextPage.style.pointerEvents = 'auto'
    optOne.style.pointerEvents = 'none'
    optTwo.style.pointerEvents = 'none'
    optThree.style.pointerEvents = 'none'
    optFour.style.pointerEvents = 'none'
  })

  
  optThree.addEventListener('click', () => {
    const result = allCorrectAnswers.filter((el) => {
      return el == allCorrectAnswers[m]
    })
    
    if(result != optThree.textContent) {
      optThree.style.borderColor = 'red'

      if(result == optOne.textContent) {
        optOne.style.borderColor = 'green'
        
      }
      else if(result == optTwo.textContent) {
        optTwo.style.borderColor = 'green'
        
      }
      else if(result == optFour.textContent){
        optFour.style.borderColor = 'green'
        
      }
   
    }

    else{
      optThree.style.borderColor = 'green'      
      correctAnswersSelected++     
    }
  
    nextPage.style.pointerEvents = 'auto'
    optOne.style.pointerEvents = 'none'
    optTwo.style.pointerEvents = 'none'
    optThree.style.pointerEvents = 'none'
    optFour.style.pointerEvents = 'none'
  })

  optFour.addEventListener('click', () => {
    const result = allCorrectAnswers.filter((el) => {
      return el == allCorrectAnswers[m]
    })
    
    if(result != optFour.textContent) {
      optFour.style.borderColor = 'red'

      if(result == optOne.textContent) {
        optOne.style.borderColor = 'green'
        
      }
      else if(result == optTwo.textContent) {
        optTwo.style.borderColor = 'green'
        
      }
      else if(result == optThree.textContent){
        optThree.style.borderColor = 'green'
        
      }

    }

    else{
      optFour.style.borderColor = 'green'      
      correctAnswersSelected++       
    }

    nextPage.style.pointerEvents = 'auto'
    optOne.style.pointerEvents = 'none'
    optTwo.style.pointerEvents = 'none'
    optThree.style.pointerEvents = 'none'
    optFour.style.pointerEvents = 'none'
  })

}



function startTimer() {

  timeLeft = 30
  var timerId = setInterval(countdown, 1000)

function countdown() {

if (timeLeft == 0) {
  timeTab.innerHTML = `Time up`
  clearInterval(timerId)
  optOne.style.pointerEvents = 'none'
  optTwo.style.pointerEvents = 'none'
  optThree.style.pointerEvents = 'none'
  optFour.style.pointerEvents = 'none'
  nextPage.style.pointerEvents = 'auto'
  }

if(timeLeft <= 15) {
  containerTwo.classList.add('less-time')
  main.classList.add('less-time')
  timeTab.classList.add('less-time')
  nextPage.classList.add('less-time')
}

if(timeLeft <= 5) {
  containerTwo.classList.add('less-time2')
  main.classList.add('less-time2')
  timeTab.classList.add('less-time2')
  nextPage.classList.add('less-time2')
}

if(nextPage.style.pointerEvents == 'auto') {
  clearInterval(timerId)
}

if(currentQuestion > 25) {
  clearInterval(timerId)
  m = 0
}


if(timeLeft) {
  timeTab.innerHTML = `00:${timeLeft}`;
  timeLeft--;
}
}}



i = 1
j = 4

nextPage.addEventListener('click', () => {
  nextPage.style.pointerEvents = 'none'
  startTimer()
  containerTwo.classList.remove('less-time')
  main.classList.remove('less-time')
  timeTab.classList.remove('less-time')
  nextPage.classList.remove('less-time')
  containerTwo.classList.remove('less-time2')
  main.classList.remove('less-time2')
  timeTab.classList.remove('less-time2')
  nextPage.classList.remove('less-time2')

  optOne.style.borderColor = '#d9d9d9e6'
  optTwo.style.borderColor = '#d9d9d9e6'
  optThree.style.borderColor = '#d9d9d9e6'
  optFour.style.borderColor = '#d9d9d9e6'

  optOne.style.pointerEvents = 'auto'
  optTwo.style.pointerEvents = 'auto'
  optThree.style.pointerEvents = 'auto'
  optFour.style.pointerEvents = 'auto'

  currentQuestion = currentQuestion + 1
  questionsCompleted.innerText = `${currentQuestion}/25`

  if(currentQuestion > 25) {
    containerTwo.style.display = 'none'
    containerThree.style.display = 'flex'
    showResult.textContent = `${correctAnswersSelected}/25`
    correctBar.style.width = `${Number(correctAnswersSelected/25) * resultBar.offsetWidth}px`
    correctPercent.textContent = `${Math.floor(Number(correctAnswersSelected/25) * 100)}%`
    incorrectPercent.textContent = `${Math.floor(100 - (Number(correctAnswersSelected/25) * 100))}%`
  }

  if(correctAnswersSelected < 10) {
    compliment.textContent = `"Sorry!, You have failed. Please keep practicing!"`
  } 
  else if(correctAnswersSelected >= 10 && correctAnswersSelected <=20) {
    compliment.textContent = `"Keep learning! You have a good score!"`
  }
  else if(correctAnswersSelected > 20 && correctAnswersSelected <=24) {
    compliment.textContent = `Great score! You are almost there.`
  }else{
    compliment.textContent = `Congratulations!!!`
  }

  question.innerText = localQuestionsSet[i]
  optOne.innerText = localAnswersSet[j]
  optTwo.innerText = localAnswersSet[j+1]
  optThree.innerText = localAnswersSet[j+2]
  optFour.innerText = localAnswersSet[j+3]

  i++
  j = j + 4 
  m++
})

retryBtn.addEventListener('click', () => {
  currentQuestion = 1, correctAnswersSelected = 0, i = 1, j = 4, m = 0
  location.reload()
  startTheQuiz()
})
