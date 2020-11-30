import React, { Component } from 'react'
import axios from 'axios'

export class VendorSuccessStories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            successstories: [],
        };
    }

    componentDidMount() {
        axios.get('/api/successstories')
            .then(res => {
                this.setState({
                    successstories: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })

    }
        
    render() {
        const successstories = this.state.successstories.map(successstory => (
            <div key={successstory.TransformX_Success_Story_Id}>
              <h3> {successstory.Vendor_Success_Story_Client_Name}</h3>
              <br/>
              <p>Client: {successstory.Vendor_Success_Story_Client_Description}</p>
              <p>Challenge: {successstory.TransformX_Success_Story_Challenge}</p>
              <p>Description: {successstory.TransformX_Success_Story_Description}</p>
              <p>Result: {successstory.TransformX_Success_Story_Result}</p>
            </div>
          ));
        return (
            <div>
                  {successstories[0]}
                  <br />
                  {successstories[1]}
                  <br />
                  {successstories[2]}
                  <br />
                  {successstories[3]}
             
            </div>
        )
    }
}

export default VendorSuccessStories