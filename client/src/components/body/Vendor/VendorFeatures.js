import React, { Component } from 'react'
import axios from 'axios'

export class VendorFeature extends Component {
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
                <p style={{ textAlign: 'justify' }}>Support Services:<br /><br />{vendor.TransformX_Vendor_Support_Services}</p>
                <br />
                <p style={{ textAlign: 'justify' }}>Specialities:<br /><br />{vendor.LinkedIn_Vendor_Specialties}</p>
                <br />
                <p style={{ textAlign: 'justify' }}>Sell Point:<br /><br />{vendor.TransformX_Vendor_Unique_Sell_Point}</p>
                <br />
                <p>Company Size: {vendor.LinkedIn_Vendor_Company_Size}</p>
                <br />
                <p>Founders: {vendor.Crunchbase_Vendor_Founders}</p>
                <br />
                <p>Headquarters: {vendor.LinkedIn_Vendor_Headquarters}</p>
                <br />
                <p>Contact: {vendor.TransformX_Vendor_Phone_Number}</p>
                <br />
                <p>Email: {vendor.Crunchbase_Vendor_Contact_Email}</p>
            </div>
        ));
        return (

            <div>
                {vendors[0]}
            </div>
        )
    }
}

export default VendorFeature