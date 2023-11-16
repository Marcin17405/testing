import { useState } from "react";


const Item = (props) => {
  const[style , setstyle] = useState("shown");

  const remove = () => {
    setstyle((prev) => !prev)
  };
  return (
    <div onClick={remove}
    style={{textDecoration: style ? 'none' : 'line-through'}}>
      <h2>{props.title}</h2>
      <p>{props.amount}</p>
    </div>
  );
}

export default Item;