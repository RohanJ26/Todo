import React from "react"
import { NavLink } from "react-router-dom"

const Header= ()=>{
    return(
        <div className="bg-black flex justify-between items-center p-2 md:px-10 text-white">
            <div className="text-4xl font-semibold">
                <h1>TODOS BY ROHAN</h1>
            </div>
            <div>
                <ul className="md:flex space-x-4 font-semibold text-lg hidden">
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ContactUs">   
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="text-4xl md:hidden">&#8801;</div>
        </div>
    )
}

export default Header