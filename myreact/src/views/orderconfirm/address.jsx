import React, { Component } from 'react'
import './address.scss'
class AddressWrap extends Component {
    constructor(props) {
      super(); //可以不给props
      this.state = {
        hasAddress: true
      }
    }
    render() {
        const {hasAddress} = this.state
        return (
            <div className="address-components">
                {
                    !hasAddress && (
                        <div className="add-address">
                            <img src={require('../../images/add.png')} alt="" />
                            <div>新增收货信息</div>
                        </div>
                    )
                }
                {
                    hasAddress && (
                        <div className="address">
                            <img className="ico local" src={require('../../images/address.png')} alt="" />
                            <div className="info-wrap">
                                <div className="userinfo">
                                    <div className="name fl">收货人：dez</div>
                                    <div className="tell fr">15342260408</div>
                                </div>
                                <div className="place">收货地址：湖北省武汉市</div>
                            </div>
                            <img className="ico enter" src={require('../../images/enter.png')} alt="" />
                        </div>
                    )
                }
            </div>
        )
    }
}
export default AddressWrap;
