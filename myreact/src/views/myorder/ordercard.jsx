import React, { Component } from 'react'
import './ordercard.scss'

class OrderCard extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="list-item">
                <div className="state-wrap">
                    <div className="state">等待商家发货</div>
                    <div className="state-tip">252555</div>
                </div>
                <div className="ordergoods-wrap">
                    <div className="pic-wrap">
                        <img src={'https://files.cheyuu.com/files/'} alt="" />
                    </div>
                    <div className="goods-info">
                        <div className="goodname">
                            <div className="goods">哈哈哈哈</div>
                            <div className="price">¥ 99</div>
                        </div>
                        <div className="goodtips">
                            <div className="tips">黑色</div>
                            <div className="num">x2</div>
                        </div>
                        <div className="goodtotal">
                            <div className="num">数量2件</div>
                            <div className="money">¥11</div>
                            <div className="total">合计：</div>
                        </div>
                        <div className='btn-invoice'>申请开票</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default OrderCard;