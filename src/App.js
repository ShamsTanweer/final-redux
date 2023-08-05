import React from "react";
import Post from "./components/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
