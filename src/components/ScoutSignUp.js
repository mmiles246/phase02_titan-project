import {useState} from 'react'
function ScoutSignUp () {
const [newScoutObj, setNewScourObj]=useState({})

const [name, setName]=useState('')
const [img, setImg]=useState('')
const[regiment, setRegiment]=useState('')
const [quotes, setQuotes]=useState('')
const [newScout, setNewScout]=useState({})

function onSubmitHandler (e) {
  e.preventDefault()
  fetch("http://localhost:5500/Eldians", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      name: name,
      img: img,
      regiment: regiment,
      quotes: quotes 
    })
  })
  .then(res=>res.json())
  .then(newScout=>setNewScout(newScout))

}

    return(
      <div className='scout-signup'>
        <div className='signup-box'>
        <form onSubmit={onSubmitHandler} className="sign-up-form">
          <label htmlFor='signUpName'>Name: </label>
          <input id="signUpName" onChange={e=>setName(e.target.value)}></input>
          <br></br>
          <br></br>
          <label htmlFor="signUpImage">Photo: </label>
          <input id="signUpImage" onChange={e=>setImg(e.target.value)}></input>
          <br></br>
          <br></br>
          <label htmlFor="signUpQuote">Quote: </label>
          <input id="signUpQuote" onChange={e=>setQuotes(e.target.value)}></input>
          <br></br>
          <br></br>
          <label htmlFor="signUpRegiment">Regiment: </label>
          <input id="signUpRegiment" onChange={e=>setRegiment(e.target.value)}></input>
          <br></br>
          <br></br>
          <button type='submit'>Sign Here</button>
          
        </form>
        </div>

      </div>
    )
}


export default ScoutSignUp;