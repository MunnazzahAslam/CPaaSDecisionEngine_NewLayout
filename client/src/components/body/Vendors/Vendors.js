import React, { Component } from 'react';
import axios from 'axios';
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import logo from './logo.png';

export class Vendors extends Component {

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
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        const vendors = this.state.vendors.map(vendor => (
            <div style={{ padding: "8px", margin: "10px" }} key={vendor.TransformX_Vendor_Id}>
                <div style={{ display: 'flex' }}>
                        <img style={{width:"30px",height:"30px",borderRadius:"50%",margin:"5px",marginTop:"-2px"}} src={logo} alt="logo" /> 
                    <h1> {vendor.TransformX_Vendor_Name}</h1>
                    <Button variant="contained" style={{ background: "#021651", color: '#fff', borderRadius: '8px', marginLeft: 'auto', justifyContent: 'flex-end' }}>
                        Pure Player
                </Button>
                    <Button variant="contained" style={{ background: "#00b6c5", color: '#fff', borderRadius: '8px', margin: '0px 2px' }}>
                        Top Choice
                </Button>
                </div>
                <br />
                <p>{vendor.LinkedIn_Vendor_Overview}</p>
                <br />
                <p>Founders: <span style={{ color: "#00b6c5" }}>{vendor.Crunchbase_Vendor_Founders}</span></p>
                <br />
                <p>Founded in: <span style={{ color: "#00b6c5" }}>{vendor.LinkedIn_Vendor_Founded}</span></p>
                <br />
                <p>Industry: <span style={{ color: "#00b6c5" }}>{vendor.LinkedIn_Vendor_Industry}</span></p>
                <br />
                <p>Company Size: <span style={{ color: "#00b6c5" }}>{vendor.LinkedIn_Vendor_Company_Size}</span></p>
                <br />
                <p><a rel="noopener noreferrer" target="_blank" style={{ color: "#00b6c5" }} href={vendor.LinkedIn_Vendor_Website}>{vendor.LinkedIn_Vendor_Website}</a></p><br />
                <a style={{ color: "#00b6c5" }} href="/vonage">Show More</a>
            </div>
        ));
        return (
            <div>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[0]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[1]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[2]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[3]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[4]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[5]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[6]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[7]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[8]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[9]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[10]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[11]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[12]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[13]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[14]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[15]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[16]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[17]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{vendors[18]}</Card>
            </div>
        )
    }
}

export default Vendors
