// import '../../App.css';
import "./DisneyStyles.css";
import React, { useState } from 'react';
import princesses from './princessQuestions.json';
import HomeNav from '../navbar/HomeNav';

function Disney() {
  const [counter, setCounter] = useState(1);
  const [addPoint, setAddPoint] = useState(0);
  const [score, setScore] = useState(0);

  const correctAnswer = (e) => {
    const oc = document.getElementById("option-container");
    const answer = document.getElementById("answer");
    const option = e.target;
    const correct = document.getElementById("correct");
    if(option.innerText === correct.innerText){
      oc.style.display = "none";
      answer.style.display = "block";
      setAddPoint(addPoint + 1);
    } else {
      if(option.id !== "option-container"){
        option.style.backgroundColor = "#054553";
        option.style.color = "white";
        option.style.opacity = "0.7";
        option.classList.add("add-shake");
        setAddPoint(addPoint - 1);
      }
    }
  }

  const nextQuestion = () => {
    setCounter(counter + 1);
    if(addPoint > 0){
      setScore(score + 1);
    }
    setAddPoint(0);
  }

  const princessList = princesses.map((e) => {
    if(counter === e.id){
      return (
        <div className="disney-height" key={e.id}>
          <div className="question" id="question">{e.id}. {e.question}</div>
          <div className='option-container' id="option-container" onClick={correctAnswer}>
            <p className='option o1' id="o1">{e.o1}</p>
            <p className='option o2' id="o2">{e.o2}</p>
            <p className='option o3' id="o3">{e.o3}</p>
            <p className='option o4' id="o4">{e.o4}</p>
          </div>

        {/* Answer */}
          <div className='answer' id="answer">
            <h3>{e.name}</h3>
            <p style={{display: "none"}} id="correct">{e.answer}</p>
            {/* Working on creating a border layer to make the image an oval without having to alter the image. */}
            {/* <div className='border'></div> */}
            <img className="disney-img" src={e.img} alt={e.altText} />
            <p className='option btn-next' id="btnNext" onClick={nextQuestion}>Next</p>
          </div>
        </div>
      )
    } 
  });

  function endPage() {
    if (counter > princesses.length){
      return (
        <div>
          <h3>Congratulations!! You finished the quiz.</h3>
          <p>You got {score} out of {princesses.length} answers correct on the first try.</p>
          <p>Click the button below to start again.</p>
          <p className='option btn-next btn-again' id="btnAgain" onClick={startOver}>Start Over</p>
        </div>
      )
    }
  }

  const startOver = () => {
    setCounter(1);
    setAddPoint(0);
    setScore(0);
  }

//HTML Return Statement
  return (
    <div className="disney-app">
    <HomeNav />
      <header className="App-header">      
        <div>Disney Princess Quiz</div>
      </header>
        <div className='main-container'>
          {princessList}
          {endPage()}
        </div>
      <footer className="disney-footer">
        <small>Quiz created by Dustin Friesen. All images and characters are owned by Disney. This quiz is for demonstration purposes only.</small>
      </footer>
    </div>
  );
}

export default Disney;
