import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getFireStore } from "../../Factory/Firebase";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFireStore();
    const itemCollection = db.collection("items");
    
    let itemByCategory;
    if (category === undefined) {
      itemByCategory = itemCollection;
    } else {
      itemByCategory = itemCollection.where("category", "==", `${category}`);
    }
    
    itemByCategory
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results!");
        }
        setItems(
          querySnapshot.docs.map((doc) => ({
            data: doc.data(),
            id: doc.id,
          }))
        );
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally();
  }, [category]);

  return (
    <div className="Objetos">
      <ItemList items={items} />
    </div>
  );
};

export { ItemListContainer };
