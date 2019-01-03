import React, { Component } from 'react'
import './index.scss'
class OrderDetail extends Component {
    constructor(props) {
      super(); //可以不给props
    }
    render() {
        return (
            <div className="orderconfirm-container">
                <div className="ban">
                    <div className="ban-left">
                        <div className="state">等待商家发货</div>
                        {/* <div className="orde-code" v-show="(orderDetail && orderDetail.DeliveryStatus != 0)">{{orderDetail && (orderDetail.ExpressCompany + orderDetail.ExpressCode)}}</div> */}
                    </div>
                    <img src={require('../../images/pic-fahuo.png')} alt="" />
                    {/* <img v-if="(orderDetail && orderDetail.DeliveryStatus == 0)" src="./images/pic-order.png" alt=""> */}
                </div>
                <div className="address-wrap">
                    <img src={require('../../images/ico-local.png')} alt="" />
                    <div className="userdesc">
                        <div className="name">收货人：dez</div>
                        <div className="phone">15342260408</div>
                    </div>
                    <div className="address">收货地址：hubei武汉</div>
                </div>
                <div className="goods-wrap">
                    <div className="pic-wrap">
                        <img src={'https://files.cheyuu.com/files/'} alt="" />
                    </div>
                    <div className="goods-info">
                        <div className="goodname">
                            <div className="goods">hahahah</div>
                            <div className="price">¥ 99</div>
                        </div>
                        <div className="goodtips">
                            <div className="tips">黑色</div>
                            <div className="num">x2</div>
                        </div>
                    </div>
                </div>
                <div className="price-desc">
                    <div className="price-item">
                        <div className="tit">商品总价</div>
                        <div className="price-num">¥109</div>
                    </div>
                    <div className="price-item">
                        <div className="tit">运费</div>
                        <div className="price-num">¥9</div>
                    </div>
                    <div className="price-item font14 blackcolor borderbot">
                        <div className="tit">订单总价</div>
                        <div className="price-num">¥100</div>
                    </div>
                    <div className="price-item">
                        <div className="tit">车友币抵扣</div>
                        <div className="price-num">¥10</div>
                    </div>
                    <div className="price-item">
                        <div className="tit">余额抵扣</div>
                        <div className="price-num">¥20</div>
                    </div>
                    <div className="price-item font14">
                        <div className="tit blackcolor">实际支付金额</div>
                        <div className="price-num orgcolor">¥79</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default OrderDetail;
