import React, { useState, useEffect }  from 'react'
import './More.css'
import axios from 'axios';



class More extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
      directory: 'no directory',
      response: null,
      listOfFolders: []
    }

    this.btnClicked = false;
    
    this.getFolderDirectory = this.getFolderDirectory.bind(this)
    // this.getAllFoldersFromServer = this.getAllFoldersFromServer.bind(this)
    this.fetchFolderData = this.fetchFolderData.bind(this);
  }

  componentDidMount() {
    fetch('/server/directory/').then(
      (res) => {
        return res.json();
      }
      ).then((json) => {
        console.log(json);
        this.state.listOfFolders = json;
      })
  }

  fetchFolderData(pk) {
    fetch(`/server/serveDirectory/${pk}`).then(
      (res) => {
        return res.json();
      }
      ).then((json) => {
        // console.log(json);
        this.state.response = json.serverip;
        // this.state.listOfFolders = json;
        console.log(this.state.response);
      }).catch((err) => {
        console.log(err);
      })
  }
 

  getFolderDirectory = (evt) => {
    evt.preventDefault()
      console.log(window);
      window.postMessage({
        type: 'select-dirs',
      })
  }

  renderHTML() {
    return (
      <div>{this.state.response}</div>
    )
  }

  render() {

    return (
    
      <div>
           <input type="file" onClick={this.getFolderDirectory} placeholder="ADD MEDIA" />
            <div>{
              this.state.listOfFolders && this.state.listOfFolders.length > 0 ? this.state.listOfFolders.map((el) => 
                  <div key={el.pk} onClick={()=> {
                    this.fetchFolderData(el.pk)
                    this.btnClicked = true;
                  }}>{el.dir_name}</div>
               ) : "nothing to display"
            }
             </div>
            <div>
              {
                this.btnClicked ? <div>{this.renderHTML()}</div>: 'nothing to display'
              }
            </div>
      </div>
    )
  }

}



export default More;
