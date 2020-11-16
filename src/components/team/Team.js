import React from "react";
import score from "../../assets/score.mp3"
import shot from "../../assets/shot.mp3"

/*
Team component
props.name : name of team
props.logo : url of team logo image
*/
export default function Team(props){
    const [shots, setShots] = React.useState(0); //state for shots
    const [score, setScore] = React.useState(0); //state for score
    let handleShoot = () => { // When click shoot, handleShoot() is called
      setShots(shots + 1);
      let scored = Math.random() > 0.5; //if random(0~1) is over 0.5(50%) score = true
      let audioElement = null;
      if(scored) { //if scored?
        setScore(score + 1); //add score state
        audioElement = new Audio(score); //play score sound
      } else {      
        audioElement = new Audio(shot); //else play shot sound
      }
      audioElement.play();
    }
    let percentage = null;
    // if has shot (shoots>0) display shot percentage
    if(shots>0) percentage = (
      <span>
        Shot percentage: {(score/shots*100).toFixed(0)}%
      </span>
    )
    
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
        <h2>{props.name}</h2>
        <img alt="timer" src={props.logo} />
        <span>Shots taken: {shots}</span>
        <span>Score: {score}</span>      
        {percentage}
        <button onClick={() => handleShoot()}>Shoot</button>
      </div>
    )
  }