import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../Header/header"
import Footer from "../Footer/footer"

const Layout=()=>{
    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Layout