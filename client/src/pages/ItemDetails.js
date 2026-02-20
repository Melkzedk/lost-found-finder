import React from "react";
import { useEffect, useState } from "react";
import API from "../services/api";
import { useParams } from "react-router-dom";

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);