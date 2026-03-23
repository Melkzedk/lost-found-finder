import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateItem from "./pages/CreateItem";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateItem />} />
        <Route path="/item/:id" element={<ItemDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
