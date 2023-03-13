import React, { useState } from "react";
import './App.css';
import Home from './Home';
import Users from "./Users";
import About from "./About";
import FormTarget from "./FormTarget";
import Forms from "./Forms";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default function App() {

  const[color, setColor] = useState("green");
  const[data, setData] = useState( { name: '', email: '' } );

  return (
    <div className="App">
      <header className="select-header">
        <BrowserRouter>
          <nav className="nav">
            <div>
              <Link to="/" >Home</Link>
            </div>
            <div>
              <Link to="forms" >Forms</Link>
            </div>
            <div>
              <Link to="users" >Users</Link>
            </div>
            <div>
              <Link to="about" >About</Link>
            </div>
          </nav>

          <Routes>
            <Route index element={ <Home /> } />
            <Route path="forms" element={ <Forms data={data} setData={setData} /> } />
            <Route path="users" element={ <Users /> } />
            <Route path="about" element={ <About color={color} changecolor={setColor} /> } />
            <Route path="forms/formtarget" element={ <FormTarget data={data} /> } />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
};
