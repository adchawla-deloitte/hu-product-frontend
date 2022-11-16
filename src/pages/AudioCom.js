import React from 'react'

const AudioCom = (props) => {
  return (
    <audio controls key={props.path} src={props.path}></audio>
  )
}

export default AudioCom