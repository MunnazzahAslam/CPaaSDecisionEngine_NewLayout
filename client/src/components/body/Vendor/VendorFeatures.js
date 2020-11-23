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
                <h6 style={{ textAlign: 'justify' }}>Support Services:<br /><br />{vendor.TransformX_Vendor_Support_Services}</h6>
                <br />
                <h6 style={{ textAlign: 'justify' }}>Specialities:<br /><br />{vendor.LinkedIn_Vendor_Specialties}</h6>
                <br />
                <h6 style={{ textAlign: 'justify' }}>Sell Point:<br /><br />{vendor.TransformX_Vendor_Unique_Sell_Point}</h6>
                <br />
                <h6>Company Size: {vendor.LinkedIn_Vendor_Company_Size}</h6>
                <br />
                <h6>Founders: {vendor.Crunchbase_Vendor_Founders}</h6>
                <br />
                <h6>Headquarters: {vendor.LinkedIn_Vendor_Headquarters}</h6>
                <br />
                <h6>Contact: {vendor.TransformX_Vendor_Phone_Number}</h6>
                <br />
                <h6>Email: {vendor.Crunchbase_Vendor_Contact_Email}</h6>
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