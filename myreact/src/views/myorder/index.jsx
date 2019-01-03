import React, { Component } from 'react'
import './index.scss'
import Ordertab from './tabtop'
import Ordercard from './ordercard'

class Myorder extends Component {
    constructor(props) {
        super();
        this.state = {
            orderlist:[{},{}]
        }
    }
    render() {
        const {orderlist} = this.state
        return (
            <div>
                <Ordertab></Ordertab>
                <div className="content">
                    <div className="list">
                        {
                            orderlist.map((item,index)=>{
                                return (
                                <div key={index}>
                                    <Ordercard></Ordercard> 
                                </div> 
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Myorder;