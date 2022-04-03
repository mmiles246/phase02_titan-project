import RiddleSearchBar from "./RiddleSearchBar"
import {useState} from 'react'
import SolvedButton from "./SolvedButton";

function Level2 () {
    const [submit2State, setSubmit2State]=useState("")

    function riddleStateHoist () {
        // use this function to grab riddleState from RiddleSearchBar and lift back to Level2.
    }

    return(
        <div className="level1">
            What is always on its way here, but never arrives?
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <RiddleSearchBar setSubmit2State={setSubmit2State} />
            <SolvedButton submit2State={submit2State} />
        </div>
    )
}


export default Level2;

