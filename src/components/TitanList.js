import TitanCard from "./TitanCard";
import {useEffect, useState} from 'react'
import SearchBar from './SearchBar'
import {Outlet, useOutletContext} from 'react-router-dom'

function TitanList() {
    const [searchTerm, setSearchTerm]=useOutletContext();

    let [titanData, setTitanData]= useState([])
    



    


    useEffect(() => {
        fetch("http://localhost:3009/Titans")
        .then(response => response.json())
        .then(data => setTitanData(data))
    },[])

let titanResult = titanData.filter((eachTitan)=>{
        if(
            eachTitan.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        {return eachTitan}
    })
    titanData=titanResult

    console.log("searchTerm State:", searchTerm)

    return(
        <div className="titan-list">
            <SearchBar />
            <ul className="cards">
            

            {titanData.map((titan)=>{
                return(
                    <TitanCard key={titan.id} titan={titan} />
                )
            })}
            </ul>
           <Outlet context={[titanData, setTitanData]}/>
        </div>
    )
}


export default TitanList;