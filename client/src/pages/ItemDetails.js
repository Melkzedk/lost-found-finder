import React from "react";
import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams } from "react-router-dom";


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
        <p>{item.category}</p>
        <p>{item.status}</p>    
        <p>{item.date}</p>
        <p>{item.Image}</p>
        <p>{item.userId}</p>    
    </div>
  );
}