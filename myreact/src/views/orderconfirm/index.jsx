import React, { Component } from 'react'
import './index.scss'
import Addresswrap from './address'
import Detailcard from './detailcard'
class OrderConfirm extends Component {
    constructor(props) {
      super(); //可以不给props
    }
    render() {
        return (
            <div className="orderconfirm-container">
                <Addresswrap></Addresswrap>
                <Detailcard></Detailcard>
                <div className="item-wrap">
                    <div className="item">
                        <div className="fl">配送运费</div>
                        <div className="fr">11元</div>
                    </div>
                    <div className="item bordertop">
                        <div className="total orgcolor"><span>￥</span>100</div>
                        <div className="goodsnum">小计：</div>
                        <div className="goodsnum">数量2件</div>
                    </div>
                </div>
                <div className="item-wrap">
                    <div className="item">
                        <div className="cheyoo-money">
                            <img className="cheyoo-icon" src={require('../../images/coin.png')} alt="" />
                            <div className="cheyoo-num">10</div>
                            <div className="cheyoo-txt">车友币抵扣</div>
                        </div>
                        <div className="switch-btn">
                            <img src={require('../../images/unselec.png')} alt="" />
                            {/* <img src={require('../../images/selec.png')} alt=""/> */}
                        </div>
                    </div>
                </div>
                <div className="item-wrap margintop0">
                    <div className="item bordertop">
                        <div className="fl">车友币抵扣金额</div>
                        <div className="orgcolor fr">20元</div>
                    </div>
                </div>
                <div className="item-wrap">
                    <div className="item">
                        <div className="cheyoo-money">
                            <img className="cheyoo-icon" src={require('../../images/coin1.png')} alt="" />
                            <div className="cheyoo-num">100</div>
                            <div className="cheyoo-txt">余额抵扣</div>
                        </div>
                        <div className="switch-btn">
                            <img src={require('../../images/unselec.png')} alt="" />
                            {/* <img src={require('../../images/selec.png')} alt=""/> */}
                        </div>
                    </div>
                </div>
                <div className="item-wrap margintop0">
                    <div className="item bordertop">
                        <div className="fl">余额抵扣金额</div>
                        <div className="orgcolor fr">100元</div>
                    </div>
                </div>
                <div className="bottom-blank"></div>
                <div className="bottom-wrap">
                    <div className="total-money-wrap">
                        <div className="total-money-txt">支付金额：</div>
                        <div className="total-money orgcolor"><span>￥</span>20</div>
                    </div>
                    <div className="sure-btn">确认</div>
                </div>
            </div>
        )
    }
}
export default OrderConfirm;
