import React, { Component } from 'react'
import './pop.scss'

class Pop extends Component {
    constructor(props) {
      super(); //可以不给props 
      this.state = {
      }
      this.hidePop = () => {
        this.setState({
            popAnimte: true // true给离开的动画,默认为 进入时动画
        })
        props.closeTank() 
      }
    }
    render(){
        return (
            <div className="goods-pop-wrap">
              <div className={!this.state.popAnimte ? 'goodspop upin-enter-active':'goodspop upin-leave-active'}>
                <div className="pop-top">
                    <div className="pop-pic-wrap">
                        <img src={'//files.cheyuu.com/files/'} alt="" />
                    </div>
                    <div className="pop-goods">
                        <div className="close-pop" onClick={this.hidePop}>
                            <img src={require('../../images/close.png')} alt=""/>
                        </div>
                        <div className="pop-goodname">dasda</div>
                        <div className="pop-restnum">库存：30件</div>
                        <div className="pop-sec-color">已选择：</div>
                        <div className="pop-sec-color">请选择规格</div>
                    </div>
                </div>
                <div className="pop-price"><span>￥</span>66</div>
                <div className="size-wrap">
                    <div>规格</div>
                    <div className="sizelist">
                        <div className="sizeitem"></div>
                    </div>
                </div>
                <div className="pop-num-wrap">
                    <div className="num-txt">购买数量</div>
                    <div className="changenum">
                        <div className="reduce">-</div>
                        <input type="number" name="" v-model="num" id=""/>
                        <div className="add">+</div>
                    </div>
                </div>
                <div className="exchange">去兑换</div>
              </div>
            </div>
        )
    }
}

export default Pop
