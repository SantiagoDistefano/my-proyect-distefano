import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  
  const onAdd = (amount) => {
      console.log( 'Has agregado al carrito los items' )
    
  }
  
  return (
    <div className="info">
      <ItemList/>
      <ItemCount initial={0} stock={10} onAdd={onAdd} />
    </div>
  );
};
export default ItemListContainer;
