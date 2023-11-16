import { useState } from "react";
import Item from "./Item";
import ItemList from "./Itemlist";

const NewItem = (props) => {
    const [Item, NewItem] = useState({
      key:  '',
      title: '',
      amount: ''
    }
    )
    const first = (e) =>{
      NewItem((prevState) =>
      {return{...prevState, title: e.target.value}})
    }
    const second = (e) =>{
      NewItem((prevState) =>
      {return{...prevState, amount: e.target.value}})
    }
    const Clicked = () =>{
      props.onSaveInnerData(Item)

    }
    return (
      <div>
        <form >
            <input type='text' placeholder="Name" onChange={first} ></input>
            <input type='text' placeholder="Value" onChange={second} ></input>
            <input type="button" onClick={Clicked} value="dodaj"></input>
        </form>
      </div>
      
    );
}
  export default NewItem;