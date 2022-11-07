// import {useRef} from 'react';
// import React, { Component }  from 'react';
// import './More.css'



// function More(){
    
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     // 👇️ open file input box on click of other element
//     inputRef.current.click();
//   };

//   const handleFileChange = event => {
//     const fileObj = event.target.files && event.target.files[0];
//     if (!fileObj) {
//       return;
//     }

//     console.log('fileObj is', fileObj);

//     // 👇️ reset file input
//     event.target.value = null;

//     // 👇️ is now empty
//     console.log(event.target.files);

//     // 👇️ can still access file object here
//     console.log(fileObj);
//     console.log(fileObj.name);
//   };

//   return (
//     <div className='more'>
//       <input
//         style={{display: 'none'}}
//         ref={inputRef}
//         type="file"
//         onChange={handleFileChange}
//       />
//            <button onClick={handleClick}>Open file upload box</button>
//     </div>
//   );
// };

//  export default More;







const React = require('react')
class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)

  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
      
    })
    console.log(event.target.files[0])
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange}/>
        <img src={this.state.file}/>
      </div>
    );
  }
}
module.exports = Upload
