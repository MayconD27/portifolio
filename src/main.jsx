import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Index} from './page/Index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "../src/assets/css/index.css";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Index/>}></Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
