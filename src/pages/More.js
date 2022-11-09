// import { BrowserWindow, dialog, ipcMain } from 'electron'
// import isElectron from 'is-electron';
import React  from 'react'
import './More.css'
import axios from 'axios';
// import './../renderer'

// let window;
// const { ipcRenderer, BrowserWindow, dialog, Menu, ipcMain } = window.require('electron');
// const electron = window.require('electron');
// const remote = electron.remote
// const {BrowserWindow,dialog,Menu} = remote

class More extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
      directory: 'no directory'
    }
    this.handleChange = this.handleChange.bind(this)
    // this.getFolderDirectory = this.getFolderDirectory.bind(this)
  }

  // state = {
  //   file: null
  // }

  componentDidMount() {
    // if (isElectron()) {
		// 	console.log(isElectron());
		// 	window.ipcRenderer.on('pong', (event, arg) => {
		// 		this.setState({ipc: true})
		// 	})
		// 	window.ipcRenderer.send('ping');
    //   console.log('hello');
		// }
  }

  getFolderDirectory = () => {
    // let mainWindow = new BrowserWindow({/*Your electron window boilerplate*/})
    // ipcMain.handle('dialog:openDirectory', async () => {
    //   const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
    //     properties: ['openDirectory']
    //   })
    //   if (canceled) {
    //     return
    //   } else {
    //     return filePaths[0]
    //   }
    // })
      
    // ipcRenderer.on('select-dirs', async (event, arg) => {
    //     const result = await dialog.showOpenDialog(mainWindow, {
    //       properties: ['openDirectory']
    //     })
    //     console.log(result.filePaths);
    //   })
    }
  


  async handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
    // console.log(event.target.files[0].path)
    let path = await event.target.files[0].path;
    if(path) {
      const response = await axios.post('/server/directory/', {
        dir_name: path
      })
      this.setState({directory: response.data.dir_name})
      console.log("file://" + this.state.directory.dir_name);
    }
  }
  render() {

    // file:///home/adchawla/Documents/react-electron/package.json 
    return (
      // <div>
      //   <input type="file" onChange={this.handleChange}/>
      //   <img src={this.state.file}/>
      // </div>
      <div>
           <input type="file" onChange={
            this.handleChange
            } />
            {
              this.state.directory.dir_name ?
              <div>
              {this.state.directory.dir_name}</div>: 'no directory'
            }
        
      </div>
    )
  }
}



export default More;
