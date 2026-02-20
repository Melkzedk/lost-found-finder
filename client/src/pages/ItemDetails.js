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
    return <div>Loading...</div>;
  } 