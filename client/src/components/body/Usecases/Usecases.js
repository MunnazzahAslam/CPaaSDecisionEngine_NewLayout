import React, { Component } from 'react';
import axios from 'axios';
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardMedia from '@material-ui/core/CardMedia';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import logo from '../Vendors/logo.png';

export class usecases extends Component {
    _isMounted = false;
    constructor(props) {
        super(props)
        this.state = {
            usecases: [],
        };
    }

    componentDidMount() {
        this._isMounted = true;
        axios.get('/api/usecases')
            .then(res => {
                this.setState({
                    usecases: res.data
                });
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        const usecases = this.state.usecases.map(usecase => (
            <div style={{ padding: "8px", margin: "10px" }} key={usecase.TransformX_Usecase_Id}>
                <div style={{ display: 'flex' }}>
                    <img style={{ width: "30px", height: "30px", borderRadius: "50%", margin: "5px", marginTop: "-2px" }} src={logo} alt="logo" />
                    <h1> {usecase.TransformX_Vendor_Name} - {usecase.TransformX_Usecase_Name}</h1>
                    <Button variant="contained" style={{ background: "#00b6c5", color: '#fff', borderRadius: '8px', margin: 'auto', marginRight: '0px' }}>
                        Top
                </Button>
                </div>
                <br />
                <p>{usecase.TransformX_Usecase_Category}</p><br />
                <p>{usecase.TransformX_Usecase_Description}</p><br />
                <p>{usecase.Vendor_Usecase_Value_Generated_1}</p><br/>
                <a style={{ color: "#00b6c5" }} href="/vonage">Show More</a>
            </div>
        ));
        return (
            <div>
                <Card style={{ margin: "18px", padding: "10px" }}>{usecases[0]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{usecases[1]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{usecases[4]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{usecases[6]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{usecases[7]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{usecases[8]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{usecases[9]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{usecases[10]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{usecases[11]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{usecases[12]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{usecases[13]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{usecases[14]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{usecases[15]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{usecases[16]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{usecases[17]}</Card>
                <Card style={{ margin: "18px", padding: "10px" }}>{usecases[18]}</Card>
            </div>
        )
    }
}

export default usecases
