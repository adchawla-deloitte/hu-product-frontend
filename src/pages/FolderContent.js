import React, { useState, useEffect } from 'react'; 
import { parse } from 'node-html-parser';

import './FolderContent.css'
import { useParams } from 'react-router-dom';

import ImageCom from './ImageCom';
import VideoCom from './VideoCom';
import AudioCom from './AudioCom';

// fetch('http://192.168.29.150:49317/')
// .then((res)=> res.text())
// .then((html)=> {
//     const root = parse(html)
//     const allUrls = root.getElementsByTagName('a')
//     console.log(allUrls[0].attributes.href);
// })

const FolderContent = () => {
    const [contentList, setContent] = useState([])
    let dirType = 3
    const params = useParams()
    
    useEffect(async ()=>{
        const urlFetch = await fetch(`http://localhost:8000/server/serveDirectory/${params.id}`)
        const urlJson = await urlFetch.json()
        const url = urlJson.serverip
        console.log(url)
        const dirFetch = await fetch(`http://localhost:8000/server/directory/${params.id}`)
        const dirJson = await dirFetch.json()
        dirType = dirJson.dir_type
        const getAllUrls = async () => {
            const allUrls = await fetchUrls(url)
            allUrls.map((oneUrl)=>{
                setContent(contentList => [...contentList, "http://"+url+"/"+oneUrl.attributes.href])
            })
        }
        getAllUrls()
    },[])

    const fetchUrls = async (url) => {
        const res = await fetch("http://"+url)
        const html = await res.text()
        const root = parse(html)
        const allUrls = root.getElementsByTagName('a')
        console.log(allUrls);
        return allUrls
    }
    return (
        <div className='content-container'>
            {contentList.map((link)=>(
                <>
                    <p>{link.substr(link.length-3,link.length)==='png'?<ImageCom path={link}></ImageCom>:null}</p>
                    <p>{link.substr(link.length-3,link.length)==='mp4'?<VideoCom path={link}></VideoCom>:null}</p>
                    <p>{link.substr(link.length-3,link.length)==='mp3'?<AudioCom path={link}></AudioCom>:null}</p>
                </>
            //    <img key={link} src={link} /> 
            // <video controls key={link} src={link}></video>
            // <audio controls key={link} src={link}></audio>
        ))}
        </div>)
}

export default FolderContent