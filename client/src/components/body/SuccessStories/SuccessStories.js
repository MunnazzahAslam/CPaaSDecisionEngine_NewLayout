import React, { Component } from 'react';
import axios from 'axios';
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import logo from '../Vendors/logo.png';

export class successstories extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.state = {
            successstories: [],
        };
    }

    componentDidMount() {
        this._isMounted = true;
        axios.get('/api/successstories')
            .then(res => {
                this.setState({
                    successstories: res.data
                });
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        const successstories = this.state.successstories.map(successstory => (
            <div style={{ padding: "8px", margin: "10px" }} key={successstory.TransformX_Success_Story_Id}>
                <div style={{ display: 'flex' }}>
                    <img style={{ width: "30px", height: "30px", borderRadius: "50%", margin: "5px", marginTop: "-2px" }} src={logo} alt="logo" />
                    <h1> {successstory.TransformX_Vendor_Name} - {successstory.Vendor_Success_Story_Client_Name}</h1>
                    <Button variant="contained" style={{ background: "#00b6c5", color: '#fff', borderRadius: '8px', margin: 'auto', marginRight: '0px' }}>
                        Top
                </Button>
                </div>
                <br />
                <p>{successstory.Vendor_Success_Story_Description}</p><br />
                <p>{successstory.Vendor_Success_Story_Challenge}</p><br />
                <a style={{ color: "#00b6c5" }} href="/vonage">Show More</a>
            </div>
        ));
        return (
            <div>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[0]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[1]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[2]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[3]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[4]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[5]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[6]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[7]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[8]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[9]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[10]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[11]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[12]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[13]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[14]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[15]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[16]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[17]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{successstories[18]}</Card>
            </div>
        )
    }
}

export default successstories
