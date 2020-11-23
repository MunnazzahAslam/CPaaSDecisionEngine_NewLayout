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
              <h5> {successstory.Vendor_Success_Story_Client_Name}</h5>
              <br/>
              <h6>Client: {successstory.Vendor_Success_Story_Client_Description}</h6>
              <h6>Challenge: {successstory.TransformX_Success_Story_Challenge}</h6>
              <h6>Description: {successstory.TransformX_Success_Story_Description}</h6>
              <h6>Result: {successstory.TransformX_Success_Story_Result}</h6>
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
                  <br />
                  {successstories[4]}
            </div>
        )
    }
}

export default VendorSuccessStories