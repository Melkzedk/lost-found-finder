import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    API.get("/items").then(res => setItems(res.data));
  }, []);

  return (
    <div>
      <h2>Lost & Found Items.</h2>
      {items.map(item => (
        <div key={item._id}>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}
