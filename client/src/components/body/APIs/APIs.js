import React, { Component } from 'react';
import axios from 'axios';
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import logo from '../Vendors/logo.png'

export class apis extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.state = {
            apis: [],
        };
    }

    componentDidMount() {
        this._isMounted = true;
        axios.get('/api/apis')
            .then(res => {
                this.setState({
                    apis: res.data
                });
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        const apis = this.state.apis.map(api => (
            <div style={{ padding: "8px", margin: "10px" }} key={api.TransformX_API_Id}>
                <div style={{ display: 'flex' }}>
                        <img style={{width:"30px",height:"30px",borderRadius:"50%",margin:"5px",marginTop:"-2px"}} src={logo} alt="logo" /> 
                    <h1> {api.TransformX_Vendor_Name} - {api.TransformX_API_Name}</h1>
                    <Button variant="contained" style={{ background: "#00b6c5", color: '#fff', borderRadius: '8px', margin: 'auto',marginRight:"0px" }}>
                        Top Rated
                </Button>
                </div>
                <br />
                <p>{api.TransformX_API_Description}</p>
                <br />
                <p>{api.Vendor_API_Feature_1}</p>
                <br />
                <p>{api.Vendor_API_Feature_Description_1}</p>
                <br />
                <p>{api.Vendor_API_Feature_2}</p>
                <br />
                <p>{api.Vendor_API_Feature_Description_2}</p>
                <br />
                <p>{api.Vendor_API_Feature_3}</p>
                <br />
                <p>{api.Vendor_API_Feature_Description_3}</p>
                <br />
               <a style={{ color: "#00b6c5" }} href="/vonage">Show More</a>
            </div>
        ));
        return (
            <div>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[0]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[1]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[2]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[3]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[4]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[5]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[6]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[7]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[8]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[9]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[10]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[11]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[12]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[13]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[14]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[15]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[16]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[17]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{apis[18]}</Card>
            </div>
        )
    }
}

export default apis
