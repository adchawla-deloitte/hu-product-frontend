import React, { useState } from 'react';
import { FaHome,FaBars,}from "react-icons/fa";
import {BiMovie,BiMusic,BiHelpCircle, BiSearch} from "react-icons/bi";
import {AiFillCompass} from "react-icons/ai";
import {MdArrowForwardIos} from "react-icons/md";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/search",
            name:"Search",
            icon:<BiSearch/>
        },
        {
            path:"/movies",
            name:"Movies",
            icon:<BiMovie/>
        },
        {
            path:"/music",
            name:"Music",
            icon:<BiMusic/>
        },
        {
            path:"/discover",
            name:"Discover",
            icon:<AiFillCompass/>
        },
        {
            path:"/more",
            name:"More",
            icon:<MdArrowForwardIos/>
        },
        {
            path:"/support",
            name:"Support",
            icon:<BiHelpCircle/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "90px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo"></h1> */}
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;