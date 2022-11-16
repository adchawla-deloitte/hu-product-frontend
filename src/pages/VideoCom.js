import React from 'react'

const VideoCom = (props) => {
  return (
    <video controls key={props.path} src={props.path}></video>
  )
}

export default VideoCom