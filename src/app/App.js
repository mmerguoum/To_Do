import React,{ useState } from 'react';
import './App.css';
import CardList from '../components/cardList/CardList'
import Filter from '../components/filter/Filter';
import Modal from '../components/modal/Modal';


function App() {
  const [showToggel, setShowToggel] = useState(false)
  const [ filter, setFilter ] = useState("")
  const [ showModal, setShowModal ] = useState(false)
  const [state, setState] = useState([
    { id: 1, name: "Mourad", age: "33 ans", adress: "Bettana/Salé", phone: "0653866554", type: "Men"},
    { id: 2, name: "Naima", age: "64 ans", adress: "Sania Dermel/Tetouan", phone: "0653866555", type: "Girl"},
    { id: 3, name: "Rayan", age: "10 ans", adress: "Hay Riad/Rabat", phone: "0653866556", type: "Men"},
    { id: 4, name: "Lina", age: "12 ans", adress: "Agdal/Rabat", phone: "0653866557", type: "Girl"}
  ])

  const handleToggel = () => {
    setShowToggel(!showToggel)
  }

  const handleDeleteStudent = (e, selectId) => {
      setState((prevState) => {
        return prevState.filter(el => el.id !== selectId)  
      }
      )
      
      console.log(state)
  }

  const filtreHandle = (name) => {
    setFilter(name)
  }


  const handleName = () => {
    if(filter.length !==0){
      return state.filter((el)=>el.name.includes(filter))
    }
    return state
  }

  return (
    <div className="App">
      <Modal show ={showModal} closeModal={()=>setShowModal(false)}/>
      <h1 className='grandTitle'>List Students</h1>
      <div>
        <button 
            className='button'
            style={{marginBottom: "20px"}}
            onClick={handleToggel}
            >{showToggel ? "Show List Students" : "Hide List Students"}
        </button>
        <button 
            className='button'
            style={{marginLeft: "20px"}}
            onClick={()=>setShowModal(true)}
            >
              New Student
        </button>
      </div>
      
      <div className={!showToggel ? "show" : "hide"}>
          <Filter filtreHandle={filtreHandle} />
          <CardList students={handleName()} handleDeleteStudent={handleDeleteStudent}/>
      </div>
    </div>
  );
}

export default App;
