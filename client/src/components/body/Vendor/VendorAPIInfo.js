import React, { Component } from 'react'
import axios from 'axios'

export class VendorAPIInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apis: [],
        };
    }

    componentDidMount() {
        axios.get('/api/apis')
            .then(res => {
                this.setState({
                    apis: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })

    }

    render() {
        const apis = this.state.apis.map(api => (
            <div key={api.TransformX_API_Id}>
                <h3> {api.Vendor_API_Name}</h3>
                <br />
                <p>Description: {api.Vendor_API_Description}</p>
                <p>Cateogry: {api.TransformX_API_Category1}</p>
                <p>Description:<br /> {api.TransformX_API_Feature_Description_1}</p>
                <p> {api.TransformX_API_Feature_Description_2}</p>
                <p> {api.TransformX_API_Feature_Description_3}</p>
            </div>
        ));
        return (
            <div>
                {apis[0]}
                <br />
                {apis[1]}
                <br />
                {apis[2]}
                <br />
                {apis[3]}
                <br />
                {apis[4]}
            </div>
        )
    }
}

export default VendorAPIInfo
