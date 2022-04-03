import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import SolvedButton from "./SolvedButton";

function RiddleSearchBar ({setSubmit1State, setSubmit2State}) { 
    const [riddleState, setRiddleState]=useState("")

    function formSubmitHandler (e) {
            e.preventDefault()
            setSubmit1State(riddleState)
    }

    // useEffect(()=> {
    //     setSubmit2State(riddleState)
    // }, [formSubmitHandler])



    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <input className="search" onChange={e=>setRiddleState(e.target.value)} value={riddleState} type='text' placeholder="Answer"></input>
                <button type="submit">Push</button>
            </form>
        </div>
    )
}


export default RiddleSearchBar;