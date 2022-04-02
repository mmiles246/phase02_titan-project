import RiddleSearchBar from "./RiddleSearchBar"
import {useState} from 'react'
import SolvedButton from "./SolvedButton";

function Level2 () {
    const [submit2State, setSubmit2State]=useState("")
    console.log(submit2State)

    return(
        <div className="level1">
            What is the beginning of eternity, the end of time and space, the beginning of every end and the end of every race?
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

