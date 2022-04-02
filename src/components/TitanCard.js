import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'

function TitanCard ({titan}) {
    const [abilityState, setAbilityState]=useState(true)
    const [titanCardState, setTitanCardState]=useState(true)



    function abilityChangeHandler (e) {
        setAbilityState(!abilityState)
    }

    function clickHandler (e) {
        setTitanCardState(!titanCardState)
    }


    return(
        <li className='cards__item'>
        {titanCardState 
        
        ?

        // <li className="cards__item">
        <div className="card">
            <img className="card__image"
                src={titan.img}
                alt={titan.name}
                
            />
            <div className="card__content">
                <div className="card__title">{titan.name}</div>
                    <p className="card__text">Allegiance: {titan.nation}</p>
                <div className="card__detail">
                    <br></br>
                        <button onClick={clickHandler}>More Info</button>

                </div>
            </div>
        </div>
    // </li>

    :

    // <li className="cards__item">
    <div className="card">
        <img onClick={clickHandler} className="card__image"
            src={titan.img}
            alt={titan.name}
            
        />
        <div className="card__content">
            <div className="card__title">{titan.name}</div>
                <p className="card__text">Allegiance: {titan.nation}</p>
            <div className="card__detail">
                <label htmlFor="abilitySelect">Abilities: </label>
                <select className='ability-selector' onChange={abilityChangeHandler} id="abilitySelect" >
                    <option value={titan.abilities.ability1.ability}>{titan.abilities.ability1.ability}</option>
                    <option value={titan.abilities.ability2.ability}>{titan.abilities.ability2.ability}</option>
                </select>
            </div>
            <div className='ability-description'>
                {abilityState ? <p>{titan.abilities.ability1.description}</p> : <p>{titan.abilities.ability2.description}</p>}
            </div>
        </div>
    </div>
// </li>
}
</li>
                

    )
}

export default TitanCard;


