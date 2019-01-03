import React, { Component } from 'react'
import './detailcard.scss'
class Detailcard extends Component {
    constructor(props) {
      super(); //可以不给props
    }
    render() {
        return (
            <div className="detailcard-component">
               <div className="goods-wrap">
                <div className="pic-wrap">
                    <img src={'https://files.cheyuu.com/files/'} alt=""/>
                </div>
                <div className="goods-info">
                    <div className="name">hahahhah</div>
                    <div className="price-wrap">
                    <div className="price"><span>￥</span>99</div>
                    <div className="num">x2</div>
                    </div>
                    <div className="intro">已选择：黑色</div>
                </div>
                </div>
            </div>
        )
    }
}
export default Detailcard;
