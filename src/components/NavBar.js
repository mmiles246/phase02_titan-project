import { Link, NavLink } from "react-router-dom";



function NavBar () {
    return (
    <div className="navBar">
        <div className="table">
            <ul id='horizontal-list'>
                <li>
                    <Link to="/home/scouts">Scouts</Link>
                </li>
                
                <li>
                    <Link to="./titans">Titans</Link>
                </li>
                <li>
                    <Link to="./about">About</Link>
                </li>
                <li>
                    <a href="http://localhost:3000/level1">If you Dare</a>
                </li>
                <li>
                    <a href="http://localhost:3000/RewardPage"> temp</a>
                </li>
            </ul>
        </div>
    </div>
    )
}


export default NavBar;