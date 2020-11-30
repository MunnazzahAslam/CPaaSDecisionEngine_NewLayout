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
              <h3> {usecase.TransformX_Usecase_Name}</h3>
              <br/>
              <p>Industry: {usecase.TransformX_Usecase_Industry}</p>
              <p>Cateogry: {usecase.TransformX_Usecase_Category}</p>
              <p>Description: {usecase.TransformX_Usecase_Description}</p>
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