import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getFireStore } from "../../Factory/Firebase/index";

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

        let aux = [];
        querySnapshot.docs.map((doc) =>
          aux.push({ id: doc.id, ...doc.data() })
        );
        setItems(aux);
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
