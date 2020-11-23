import React, { Component } from 'react'
import axios from 'axios'

export class VendorUseCaseInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usecases: [],
        };
    }

    componentDidMount() {
        axios.get('/api/usecases')
            .then(res => {
                this.setState({
                    usecases: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
        
    render() {
        const usecases = this.state.usecases.map(usecase => (
            <div key={usecase.TransformX_Usecase_Id}>
              <h5> {usecase.TransformX_Usecase_Name}</h5>
              <br/>
              <h6>Industry: {usecase.TransformX_Usecase_Industry}</h6>
              <h6>Cateogry: {usecase.TransformX_Usecase_Category}</h6>
              <h6>Description: {usecase.TransformX_Usecase_Description}</h6>
            </div>
          ));
        return (
            <div>
              {usecases[0]}
              <br/>
              {usecases[1]}
              <br/>
              {usecases[28]}
            </div>
        )
    }
}

export default VendorUseCaseInfo