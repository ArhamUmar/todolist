import React, { useState } from 'react';
import ToDoLists from './ToDoLists';
import './App.css';

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);


  const itemEvents = (event) =>{
      setInputList(event.target.value);
  };
  
  const ListOfItems =() =>{
       setItems((olditems) =>{
           return [...olditems,inputList];
       })
       setInputList("");
  };

  const deleteItems = (id) =>{
      setItems((olditems)=>{
          return olditems.filter((arrElem, index)=>{
              return index !==id;
          })
      })
}

  return (
          <>
          <div className="main_div">
            <div className="center_div">
              <br />
              <h1>My ToDo List</h1>
              <br />
              <input type="text" placeholder="Add Items"
               onChange={itemEvents}
               value={inputList}
                />
              <button onClick={ListOfItems}>
                +
              </button>
              <ol>
                    {
                        items.map((itemVal, index) => {
                            return( 
                            <ToDoLists
                            key={index}
                            id={index} 
                            text={itemVal}
                            onSelect={deleteItems}
                            />
                            );
                        })
                    }
                </ol>
            </div>
          </div>
          </>
  );
}

export default App;
