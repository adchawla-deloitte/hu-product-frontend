import React, { useEffect, useState } from 'react';
import { FaHome,FaBars,}from "react-icons/fa";
import {BiMovie,BiMusic,BiHelpCircle, BiSearch, BiImage} from "react-icons/bi";
import {AiFillCompass,} from "react-icons/ai";
import {MdArrowForwardIos} from "react-icons/md";
import {ImImages} from "react-icons/im"
import {BsCameraVideo} from "react-icons/bs"
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

    const FolderIcons = [<BiMovie/>,<BiMusic/>,<BiImage/>]

    const [folderList, setFolder] = useState([])

    useEffect(()=>{
        const getFolders = async ()=>{
            const allFolders = await fetchFolders()
            setFolder(allFolders)
        }
        getFolders()
    },[])

    const fetchFolders = async () => {
        const res = await fetch('http://localhost:8000/server/directory/')
        const data = await res.json()
        return data
    }

    const folderName = (path)=>{
        let last = path.lastIndexOf("/")
        return path.slice(last+1)
    }

    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "90px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo"></h1> */}
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {/* {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               } */}
               {
                    folderList.map((item)=>(
                        <NavLink to={`/folder/${item.pk}`} key={item.pk} className="link" activeclassName="active">
                            <div className='icon'>{FolderIcons[item.dir_type-1]}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{folderName(item.dir_name)}</div>
                        </NavLink>  
                    ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;