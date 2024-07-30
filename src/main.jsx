import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import './index.css'
import Layout from './Layout/layout.jsx'
import About from './Outlet_Components/About.jsx'
import Contact_Us from './Outlet_Components/Contact.jsx'
import Home from './Outlet_Components/Home.jsx'
import App from './App.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<App/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/ContactUs' element={<Contact_Us/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
