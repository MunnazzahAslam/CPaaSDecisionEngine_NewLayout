import React, { useState, useEffect } from 'react';
import { Pie} from 'react-chartjs-2';
import axios from 'axios';

const VendorRating = () => {
    const [chartData, SetChartData] = useState({});
    const chart = () => {
        let vendor=[];
        let vendor_rating_use = [];
        let vendor_rating_quality = [];
        let vendor_rating_setup = [];
        axios.get('/api/vendors')
            .then(res => {
                for (const dataObj of res.data) {
                    vendor.push(dataObj.TransformX_Vendor_Name)
                    vendor_rating_use.push(dataObj.G2_Vendor_User_Ratings_Ease_Of_Use)
                    vendor_rating_quality.push(dataObj.G2_Vendor_User_Ratings_Quality_Of_Support)
                    vendor_rating_setup.push(dataObj.G2_Vendor_User_Ratings_Ease_Of_Setup)
                }
                SetChartData({
                    datasets: [
                        {
                            label: vendor[0],
                            data: vendor_rating_use[0],
                            backgroundColor: [
                                '#f5365c','#11cef','#B453D3'
                            ],
                            fontColor: '#fff',
                            borderWidth: 1,
                            height: '900px'
                        }
                    ]
                })
            })
            .catch((error) => {
                console.log(error);
            })


    }

    useEffect(() => {
        chart();
    }, [])
    return (
        <div>
         <Pie data={chartData} options={{ responsive: true, }} />  
        </div> 
    )
}

export default VendorRating
