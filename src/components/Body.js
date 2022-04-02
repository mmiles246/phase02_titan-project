import TitanList from "./TitanList";
import ScoutsList from "./ScoutsList";
import {Outlet} from "react-router-dom"

function Body ({titanData, eldianData}) {
    return(
        <div className="body">
            <h2>Welcome to the Titan/Eldian info searcher</h2>
            <h2>We are dedicated to providing info on all things AOT</h2>
            <h2>You will never need to go to another AOT website ever again!</h2>
        </div>
    )
}


export default Body;