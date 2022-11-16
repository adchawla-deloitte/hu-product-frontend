import React, { useState, useEffect } from 'react'; 
import { parse } from 'node-html-parser';

import './FolderContent.css'
import { useParams } from 'react-router-dom';

// fetch('http://192.168.29.150:49317/')
// .then((res)=> res.text())
// .then((html)=> {
//     const root = parse(html)
//     const allUrls = root.getElementsByTagName('a')
//     console.log(allUrls[0].attributes.href);
// })

const FolderContent = () => {
    const [contentList, setContent] = useState([])
    const params = useParams()
    
    // useEffect(()=>{
    //     const url = "10.29.142.109:40937"
    //     const getAllUrls = async () => {
    //         const allUrls = await fetchUrls(url)
    //         allUrls.map((oneUrl)=>{
    //             setContent(contentList => [...contentList, "http://"+url+"/"+oneUrl.attributes.href])
    //         })
    //     }
    //     getAllUrls()
    // },[])

    // const fetchUrls = async (url) => {
    //     const res = await fetch("http://"+url)
    //     const html = await res.text()
    //     const root = parse(html)
    //     const allUrls = root.getElementsByTagName('a')
    //     console.log(allUrls);
    //     return allUrls
    // }

    return (
        <div className='content-container'>
            {params.id}
        </div>
    )
}

export default FolderContent