import React, {useState, useEffect} from 'react';

function App () {
  //first useState that will update through button onClicks
const[state, setState] = useState('Users') 

useEffect(() => {
  // fetching out to API url. We would use the state to determine what is console logged. The second argument in our useEffect is to tell our side effect when to happen. In this case, we have it set to take effect whenever something is done to our "state"
   
  //Running npm start will run our code and console log the JSON data depending on the {State}
  fetch(`https://jsonplaceholder.typicode.com/${state}`)
    .then(res => res.json())
    .then(json => console.log(json))
}, [state])




return(
  <>
  <div>
    <button onClick = {() => setState('Posts')}>Posts</button>
    <button onClick = {() => setState('Users')}>Users</button>
    <button onClick = {() => setState('Comments')}>Comments</button>
    <h1>The current state of the project is {state}</h1>
  </div>
  </>
)}

export default App;