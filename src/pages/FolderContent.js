import React, { useState } from 'react'; 
import './FolderContent.css'

const FolderContent = () => {
    const [contentList, setContent] = useState([])
    const url = "192.168.29.150:49317"
    let links = ["Screenshot%20from%202022-11-03%2017-22-46.png","Screenshot%20from%202022-11-03%2017-22-47.png","Screenshot%20from%202022-11-03%2017-22-48.png","Screenshot%20from%202022-11-03%2017-22-51.png"]
    return (
        <div className='content-container'>
          {links.map((link)=>(
            <img src={"http://"+url+"/"+link} />
          ))}
        </div>
    )
}

export default FolderContent