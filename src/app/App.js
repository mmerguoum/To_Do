import React, { Fragment, useState } from 'react';
import './App.css'
import CardList from '../components/cardList/CardList';
import Filter from '../components/filter/Filter';
import Modal from '../components/modal/Modal';
import Button from '../components/layouts/Button';
import AddUser from '../components/addUser/AddUser';



function App() {
  const [showTogel, setShowTogel] = useState(true)
  const [ filter, setFilter ] = useState("")
  const [ showModal, setShowModal ] = useState(false)
  const [state, setState] = useState([
    { id:1, name: "Mourad", age: "33 ans", address: "Bettana/Salé", phone: "0653866554", type:"Boy"},
    { id:2, name: "Naima", age: "64 ans", address: "Sania Dermel/Tetouane", phone: "0653866556", type:"Girl"},
    { id:3, name: "Rayan", age: "10 ans", address: "Anakhil/Hay Riad", phone: "0653866557", type:"Boy"},
    { id:4, name: "Lina", age: "12 ans", address: "Agdal/Rabat", phone: "0653866555", type:"Girl"},
  ])
  
    const addNewUser = (data) => {
       setState((prevState) => ([...prevState ,{...data}]))
    }

    const deleteHandler = (e,selectId) => {
      setState((prevState)=>{
        return prevState.filter(el => el.id !== selectId)
        
      })
      console.log(state)
    } 

    const handleToggel = () => {
      setShowTogel(!showTogel)
    }

    const filterNames = (name) => {
      setFilter(name)
    }

    const handleNames = () => {
      if(filter.length !==0){
        return state.filter((el)=>el.name.includes(filter))
      }
      return state
    }

    

  return (
    <Fragment>
      <div className="mainContainer" >
        
        <h1 className='grandTitle'>LIST STUDENTS</h1>
        <div>
          <Button 
            onClick={()=>handleToggel()}
            style={{marginRight: '20px'}}>
            {!showTogel ? "Show List Students" : "Hide List Students"}
          </Button>
          <Button  
          onClick={()=>setShowModal(true)}>
              New Student
          </Button>
            
        </div>
        <div className={showTogel ? "show" : "hide"}>
            <Filter filterNames={filterNames}/>
          <CardList studentsList = {handleNames()} deleteHandler = {deleteHandler}/>
        </div>
      </div>

      <Modal show={showModal} closeModel={()=>setShowModal(false)}>
         <AddUser addNewUser={addNewUser}/>
      </Modal>
    </Fragment>
  );
}

export default App;
