import RiddleSearchBar from "./RiddleSearchBar"
import {useState} from 'react'
import SolvedButton from "./SolvedButton"

function YouDare () {
    const [submit1State, setSubmit1State]=useState("")


    return(
        <div className="level1">
            If you know me, you'll want to share me. If you share me, I'll be gone. What am I?
            <br></br>
            <br></br>
            <RiddleSearchBar setSubmit1State={setSubmit1State}  />
            <SolvedButton submit1State={submit1State} />
        </div>
    )
}


export default YouDare;