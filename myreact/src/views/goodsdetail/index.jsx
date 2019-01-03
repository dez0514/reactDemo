import React, { Component } from 'react'
import Banner from './banner'
import Pop from './pop'
import './index.scss'

class Goodsdetail extends Component {
    constructor(props) {
      super(); //可以不给props
      this.state = {
        popShow: false
      }
    }
    // 点击去兑换
    clickExChange(){
        this.setState({
            popShow: true
        })
    }
    // 关闭
    closePop(){ // 延时是为了执行完离开时的动画再消失
      setTimeout(()=>{
        this.setState({
          popShow: false 
        }) 
      },450)
    }
    toMyorder(){
      this.props.history.push('/myorder')
    }
    render() {
      const { popShow } = this.state
      return (
          <div className="goods-details-container">
              {/* {<div>id : {this.props.match.params.id}</div>} */}
              <Banner></Banner>
              <div className="price-wrap">
                <div className="price"><span>￥</span>99</div>
                <div className="price-tip">车友币抵100%</div>
              </div>
              <div className="goods-name"></div>
              <div className="num-wrap">
                <span>库存：30件</span><span className="money">运费：11元</span>
              </div>
              <div className="speaker">
                <img src={require('../../images/speak.png')} alt=""/>
                <div>本商品暂不支持7天无理由，需要退换请联系客服</div>
              </div>
              <div className="intro-wrap"></div>
              <div className="bot-btn">
                <div className="btn order" onClick={()=>{this.toMyorder()}}>我的订单</div>
                <div className="btn exchange" onClick={()=>{this.clickExChange()}}>去兑换</div>
              </div>
              <div className="bot-blank"></div>
              {
                popShow ? <div className="mask"></div> : ""
              }
              {
                popShow ? <Pop closeTank={() => {this.closePop()}}></Pop> : ""
              }
          </div>
      )
    }
}
export default Goodsdetail