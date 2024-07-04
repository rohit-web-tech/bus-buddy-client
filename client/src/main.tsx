import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import NavBar from './components/navbar/NavBar.tsx'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import HeroBanner from './components/HeroBanner.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <HeroBanner/>
    </BrowserRouter>
  </React.StrictMode>,
)
