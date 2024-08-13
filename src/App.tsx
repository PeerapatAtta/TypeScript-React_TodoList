import React, {useState} from 'react';
import TaskList from './components/TaskList';
import Item from './models/item';
import TaskForm from './components/TaskForm';


function App() {
  const [items,setItems]=useState<Item[]>([])
  function generateID() {
    return Math.floor(Math.random()*1000)
  }
  const addItem = (name:string)=>{
    setItems([...items,{id:generateID(),name}])
  }
  return (
    <div className="App">
      <TaskForm onAddItem={addItem}/>
      <TaskList items={items}></TaskList>
    </div>
  );
}

export default App;
