import React,{ useState } from 'react';
import './App.css';
import Cards from '../card/Cards';


function App() {
  const [ showToggel, setShowToggel ] = useState(false)
  const [ state, setState ] = useState([
    { name: "Mourad", age: "33 ans", adress: "Bettana", phone: "0653866554"},
    { name: "Mouhcine", age: "40 ans", adress: "Hay salam", phone: "0653866555"},
    { name: "Rayan", age: "10 ans", adress: "Medina", phone: "0653866556"}
  ])

  const handleDelete = (e, idx) => {
    setState((prevState) => {
     return prevState.filter((el,index) => index !== idx)
  })
  console.log(state)
}

  const handleToggel = () => {
  setShowToggel(!showToggel)
}

  return (
    <div className="App">
      <h1 className='grandTitle'>List Students</h1>
      <button
        style={{marginBottom: "20px"}}
        onClick={() => handleToggel()}>
        {!showToggel ? "Show List Students" : "Hide List Students"}
      </button>
      <div className={showToggel ? "show" : "hide"}>
          <Cards students={state} deleteStudent={handleDelete}/>
      </div>
    </div>
  );
}

export default App;
