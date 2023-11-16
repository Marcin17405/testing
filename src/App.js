import { useState } from 'react';
import './App.css';
import Item from './Item';
import ItemList from './Itemlist';
import NewItem from './NewItem';
const App = () => {

  const [DUMMY_DATA, setDATA] = useState([
    { id: '1', title: 'toilet paper', amount: '7.45' },
    { id: '2', title: 'potatoes', amount: '8.99' },
    { id: '3', title: 'tomato', amount: '2.76' },
    { id: '4', title: 'apples', amount: '3.23' },
  ]);

  
  

  const SaveInnerDataHandler = (e) => {
    setDATA([...DUMMY_DATA,  e ]);
  }

  return (
    <div className="container">
      <h1>Lista zakupów</h1>
      <ItemList items={DUMMY_DATA}/> 
      <NewItem onSaveInnerData={SaveInnerDataHandler}></NewItem>
    </div>
  );
}

export default App;
