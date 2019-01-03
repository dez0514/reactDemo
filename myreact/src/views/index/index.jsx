import React, { Component } from 'react'
// import { Button } from 'antd';
import Goodscard from './goodscard.jsx'
import { getToken,goodlist } from '../../api/home'
import './index.scss'
class Home extends Component {
    constructor(props) {
      super(); //可以不给props
      this.state = {
        goodslist:[{}]
      }
    }
    async gettoken(){
        const params = {
            client_id: 'wechat_mobile_app',
            client_secret: '26a8a646db0c94b41141ca563be87876',
            grant_type: 'client_credentials'
        }
        const { data } = await getToken(params)
        console.log(data)
    }
    async getlist(){
        const params = {
          page: 1,
          pageSize: 999
        }
        const { data } = await goodlist(params)
        console.log(data)
    }
    toDetail(id){
        console.log(this.props)
        this.props.history.push({pathname: `/goodsdetail/${id}`,state:{id :1}})
    }
    componentDidMount(){
        // this.gettoken()
        this.getlist()
    }
    render() {
        const {goodslist} = this.state
        return (
            <div className="home-container">
                <div className="top-tip">
                    <img className="icon-coin" src={require('../../images/coin.png')} alt="" />
                    <div className="cheyoo-coin">25</div>
                    <div className="tip">以下商品车友币抵100%</div>
                </div>
                <div className="goods-list">
                {
                    !!goodslist.length && goodslist.map((item,index) => {
                        return (
                            <div className="goods-wrap" key={index}  onClick={()=>{this.toDetail(1)}}>
                                <Goodscard detail={item}></Goodscard>
                            </div>
                        )
                    })
                }
                {  !goodslist.length && (<div className="nodata">暂无商品</div>) }
                </div>
            </div>
        )
    }
}
export default Home;
