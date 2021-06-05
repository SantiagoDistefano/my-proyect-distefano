import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  
  const onAdd = (amount) => {
      console.log( 'Has agregado al carrito los items' )
    
  }
  
  return (
    <div className="info">
      <h3 className="texto">Este texto se reemplazara por el catalogo</h3>
      <ItemCount initial={0} stock={10} onAdd={onAdd} />

    </div>
  );
};
export default ItemListContainer;
