import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Navigation} from "./components/Navbar";

const padding = {
  padding: 5
}

const MyRouter = () => (
    <div>
      <BrowserRouter>
          <Navigation />
      </BrowserRouter>
    </div>
)


function App() {
  return (
      <MyRouter />
  );
}

export default App;
