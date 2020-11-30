import React, { Component } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';

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
                <div style={{display:"flex"}}>
                <h1> {vendor.TransformX_Vendor_Name}</h1>
                <Button variant="contained" style={{background:"#D271B6",color:'#fff', borderRadius:'8px',marginLeft: 'auto'}}>
                    Pure Player
                </Button>
                <Button variant="contained"  style={{background:"#B951CE",color:'#fff', borderRadius:'8px',margin:'0px 2px'}}>
                    Top Choice
                </Button>
                </div>
                <br />
                <p>{vendor.LinkedIn_Vendor_Overview}</p>
                <br />
                <p>Founders: <span style={{color:"#B951CE"}}>{vendor.Crunchbase_Vendor_Founders}</span></p>
                <br />
                <p>Founded in: <span style={{color:"#B951CE"}}>{vendor.LinkedIn_Vendor_Founded}</span></p>
                <br />
                <p>Industry: <span style={{color:"#B951CE"}}>{vendor.LinkedIn_Vendor_Industry}</span></p>
                <br />
                <p>Company Size: <span style={{color:"#B951CE"}}>{vendor.LinkedIn_Vendor_Company_Size}</span></p>
                <br />
                <p><a style={{color:"#B951CE"}} href={vendor.LinkedIn_Vendor_Website}>{vendor.LinkedIn_Vendor_Website}</a></p>
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
