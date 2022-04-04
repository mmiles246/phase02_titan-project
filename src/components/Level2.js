import RiddleSearchBar from "./RiddleSearchBar"
import {useState} from 'react'
import SolvedButton from "./SolvedButton";
import Level2SolvedButton from "./Level2SolvedButton"
import Level2SearchBar from "./Level2SearchBar";

function Level2 () {
    const [level2Submit, setLevel2Submit]=useState('')


    return(
        <div className="level1">
            What is always on its way here, but never arrives?
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Level2SearchBar setLevel2Submit={setLevel2Submit}/>
            <Level2SolvedButton level2Submit={level2Submit}/>
        </div>
    )
}


export default Level2;

