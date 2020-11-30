import React, {Component} from 'react'

export default class VendorCardRow extends Component{

    constructor(props) {
        super(props);
    }
    render() {
    return (
        <div>
                <p>{this.props.obj.vendor_name}</p>
                <p>{this.props.obj.vendor_type}</p>
                <p>{this.props.obj.vendor_founded}</p>
                <p>{this.props.obj.vendor_operational_regions}</p>
                <p>{this.props.obj.vendor_localsupport_countries}</p>
                <p>{this.props.obj.vendor_cloud_hosting_platforms}</p>
                <p>{this.props.obj.pricing_models}</p>
        </div>
    )
  }
}

