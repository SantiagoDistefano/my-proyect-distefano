import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getFireStore } from "../../Factory/Firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const db = getFireStore();
    const itemCollection = db.collection("items");
    const itemById = itemCollection.doc(id);

    itemById
      .get()
      .then((querySnapshot) => {
        if (Object.keys(querySnapshot).length === 0) {
          console.log("No results!");
        }
        setItem(querySnapshot.data());
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {});
  }, [id]);

  return (
    <div className="Detail">
      <ItemDetail items={item} />
    </div>
  );
};

export { ItemDetailContainer };
