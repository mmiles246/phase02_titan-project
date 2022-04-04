import React from 'react'
import {useState} from 'react'
import Level2SolvedButton from './Level2SolvedButton'
function Level2SearchBar({setLevel2Submit}) {
    const [level2RiddleState, setLevel2RiddleState]=useState('')
    function handleOnSubmit(e){
        e.preventDefault()
        setLevel2Submit(level2RiddleState)
    }


  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <input className="search" type="text" placeholder="answer" onChange={e=>setLevel2RiddleState(e.target.value)} value={level2RiddleState}>
            </input>
            <button type="submit">Push</button>
        </form>
    </div>
  )
}

export default Level2SearchBar