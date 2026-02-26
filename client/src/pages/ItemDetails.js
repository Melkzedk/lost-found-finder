import React from "react";
import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams } from "react-router-dom";

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

    useEffect(() => {   
    API.get(`/items/${id}`).then(res => setItem(res.data));
  }, [id]);

  if (!item) {
    return <div>Loading....</div>;
  } 

    return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.location}</p>
        <p>{item.number}</p>    
        <p>{item.description}</p>
        <p>{item.EstimatedPrice}</p>
        <p>{item.contact}</p> 
    </div>
  );
}