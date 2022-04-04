import React from 'react'
import {Link} from 'react-router-dom'


function Level2SolvedButton({level2Submit}) {
  if (level2Submit === "tomorrow") {
    return <Link to='/RewardPage'> <button>You Got It!</button> </Link>
} 
  else {
    return alert("Try again!")
  }
}

export default Level2SolvedButton