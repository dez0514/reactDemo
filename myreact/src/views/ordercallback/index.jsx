import React, { Component } from 'react'
import './index.scss'
class Ordercallback extends Component {
    constructor(props) {
      super(); //可以不给props
      this.state = {
        isSuc:true
      }
    }
    toHome(){
        console.log('回手掏')
        console.log(this.props)
        this.props.history.push('/')
    }
    toOrderDetail(){
        console.log(this.props)
        this.props.history.push('/orderdetail')
    }
    render() {
        const {isSuc} = this.state
        return (
            <div className="ordercallback-container">
                <div className="banner">
                    {
                        isSuc && (<img src={require('../../images/order-suc.png')} alt="" />)
                    }
                    {
                        !isSuc && (<img src={require('../../images/order-fail.png')} alt="" />) 
                    }
                    <p className={isSuc ? '' : 'failcolor'}>{isSuc ? '下单成功' : '下单失败'}</p>
                </div>
                <div className="con" v-if="isSuc">
                    <div className="con-item">
                        <div className="tit">商品：</div>
                        <div className="desc">哈哈哈哈哈</div>
                    </div>
                    <div className="con-item">
                        <div className="tit">规格：</div>
                        <div className="desc">黑色</div>
                    </div>
                    <div className="con-item">
                        <div className="tit">数量：</div>
                        <div className="desc">10件</div>
                    </div>
                    <div className="con-item total">
                        <div className="tit">合计：</div>
                        <div className="desc">99</div>
                    </div>
                </div>
                {
                    !isSuc && (
                        <div>
                            <div className="con">
                                <div className="con-item fail">支付失败原因：当前支付方式余额不足。</div>
                            </div>
                            <div className="refresh">请重试</div>
                        </div>
                    )
                }
                {
                    isSuc && (
                        <div className="btn-wrap" v-if="isSuc">
                            <div className="btn lookorder" onClick={()=>{this.toOrderDetail()}}>查看订单</div>
                            <div className="btn continue" onClick={()=>{this.toHome()}}>继续逛逛</div>
                        </div >
                    )
                }
            </div>
        )
    }
}
export default Ordercallback;