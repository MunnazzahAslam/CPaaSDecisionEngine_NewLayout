import React, { Component } from 'react'
import axios from 'axios'

export class VendorHeaderInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vendors: [],
        };
    }

    componentDidMount() {
        axios.get('/api/vendors')
            .then(res => {
                this.setState({
                    vendors: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })

    }

    render() {
        const vendors = this.state.vendors.map(vendor => (
            <div key={vendor.TransformX_Vendor_Id}>
                <h1> {vendor.TransformX_Vendor_Name}</h1>
                <br />
                <h5>Overview:<br /><br />{vendor.LinkedIn_Vendor_Overview}</h5>
                <br />
                <h5><a href={vendor.LinkedIn_Vendor_Website}>{vendor.LinkedIn_Vendor_Website}</a></h5>
            </div>
        ));
        return (

            <div>
                {vendors[0]}
            </div>
        )
    }
}

export default VendorHeaderInfo
