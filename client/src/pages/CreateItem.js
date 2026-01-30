import { useState } from "react";
import API from "../services/api";

export default function CreateItem() {
  const [item, setItem] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    type: "lost", // or "found"
  });

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/items", item, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    alert("Item posted");
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Title" onChange={e => setItem({...item, title:e.target.value})}/>
      <input placeholder="Category" onChange={e => setItem({...item, category:e.target.value})}/>
      <input placeholder="Location" onChange={e => setItem({...item, location:e.target.value})}/>
      <textarea placeholder="Description" onChange={e => setItem({...item, description:e.target.value})}/>
      
      <select onChange={e => setItem({...item, type:e.target.value})}>
        <option value="lost">Lost</option>
        <option value="found">Found</option>
      </select>

      <button type="submit">Post Item</button>
    </form>
  );
}
