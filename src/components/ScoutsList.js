import {Outlet, Link} from "react-router-dom"
import ScoutCard from "./ScoutCard";
import Body from "./Body";
import {useEffect, useState} from 'react'
import SearchBar from "./SearchBar";
import {useOutletContext} from 'react-router-dom'
import ScoutSignUp from "./ScoutSignUp";



function ScoutsList() {
    const [searchTerm, setSearchTerm]=useOutletContext();

    let [eldianData, setEldianData] =useState([])
    // const [eldianSearch, setEldianSearch]=useState('')

    useEffect(() => {
        fetch("http://localhost:5500/Eldians")
        .then(response => response.json()) 
        .then(data => setEldianData(data))
    },[])

    let eldianResult = eldianData.filter((eachEldian)=>{
        if(
            eachEldian.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        {return eachEldian}
    })
    eldianData=eldianResult

console.log(searchTerm)

    return(
        <div>
        <label htmlFor="signUpButton">Join the Scouts today!</label>
        <Link to="/home/sign-up">
        <button>Sign Up Here!</button>
        </Link>
        <SearchBar />
        <ul className="cards">
            {eldianData.map((eldian)=>{
                return(
                    <ScoutCard key={eldian.id} eldian={eldian} />
                )
            })}
        </ul>
        </div>
    )
}


export default ScoutsList;