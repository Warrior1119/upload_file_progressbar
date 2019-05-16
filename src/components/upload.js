import React from "react";
import axios from 'axios';
import Header from './header';

export default class Upload extends React.Component {
    state = {
        selectedFile: null
    }
    fileSelectHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    }
    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('https://us-central1-fb-cloud-functions-demo.cloudfunctions.net/uploadFile', fd)
        .then(res => {
            console.log(res);
        });
    }
    render() {
        return(
            <div>
                <Header />
                <input type="file" onChange={this.fileSelectHandler}/>
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
        );
    }
}