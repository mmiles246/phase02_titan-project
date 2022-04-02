import {Link} from 'react-router-dom'

function SolvedButton ({submit1State, submit2State}) {
        if (submit1State === "a secret") {
            return <Link to='/level2'> <button>Congrats Bats</button> </Link>
        }else if(submit2State === "e") {
            return <button>ohhhh nice one!</button>
        } else {
            return alert("Try again!")
        }

        // function solvedClickHandler (e) {
        //     setSubmitState("")
        // }
}



export default SolvedButton;