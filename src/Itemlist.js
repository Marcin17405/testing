import Item from "./Item";

const ItemList = (props) => {

    return (
      <div>
        {props.items.map((item, index) => (
            <Item
                key={index}
                title={item.title}
                amount={item.amount}
            />
        ))}
      </div>
    );
}
  export default ItemList;