import React, { Component } from 'react'
import './index.scss'
import { Toast } from 'antd-mobile';
class Address extends Component {
    constructor(props) {
      super(); //可以不给props
      this.state = {
        username: '',
        tel:'',
        detailAddress: ''
      }
      this.userChange = this.userChange.bind(this);
      this.telChange = this.telChange.bind(this);
      this.detailChange = this.detailChange.bind(this);
      this.oninput = this.oninput.bind(this)
    }
    userChange(e) {
      this.setState({username: e.target.value});
    }
    telChange(e) {
        // if(e.target.value)
      this.setState({tel: e.target.value}); 
    }
    detailChange(e) {
      this.setState({detailAddress: e.target.value});   
    }
    oninput(e){ // 手机号最大长度
      if(e.target.value.length>11){
        e.target.value=e.target.value.slice(0,11)
      }
    }
    confrimBtn(){
        console.log(this.state.username)
        console.log(this.state.tel)
        console.log(this.state.detailAddress)
        if(this.state.username === ''){
          Toast.fail('请输入收货人姓名');
          return false
        }
        if(this.state.tel === '' || (new RegExp(/^1[3,4,5,6,7,8,9]\d{9}$/)).test(this.state.tel) === false){
          Toast.fail('请输入正确格式的手机号');
          return false
        }
        if(this.state.detailAddress === ''){
          Toast.fail('请输入详细收货地址');
          return false
        }
             
    }
    render() {
      return (
          <div className="address-container">
              <div className="input-wrap">
                <input type="text" value={this.state.username} onChange={this.userChange} placeholder="收货人"/>
                <input type="number" value={this.state.tel}  onChange={this.telChange} placeholder="电话号码" onInput={this.oninput} />
                <textarea name="" id="" value={this.state.detailAddress}  onChange={this.detailChange} cols="30" rows="10" placeholder="详细地址"></textarea>
              </div>
              <div className="btn" onClick={() => {this.confrimBtn()}}>确定</div>
          </div>
      )
    }
}
export default Address