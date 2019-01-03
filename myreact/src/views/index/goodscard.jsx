import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import './goodscard.scss'
class Goodscard extends Component {
    constructor(props) {
      super(); //可以不给props
    }
    render() {
        return (
            <div className="goods">
                <div className="goods-pic">
                  <img src={require('../../images/demo.jpg')} alt="" />
                </div>
                <div className="goods-name">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
                <div className="goods-price"><span>￥</span>99</div>
                <div className="restnum">库存：0件</div>
            </div>
        )
    }
}
export default Goodscard;
