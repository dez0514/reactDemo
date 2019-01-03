import React, { Component } from 'react'
import './tabtop.scss'

class MyOrderTab extends Component {
    constructor(props) {
        super();
        this.state = {
            tablist: ['进行中', '已完成'],
            tabindex: 0, // 选中
        }
    }
    clickTab(index){
        this.setState({
            tabindex: index
        })
    }
    render() {
        const {tablist,tabindex} = this.state
        return (
            <div className="tabwrap">
            {
              tablist.map((item,index) => {
                return (
                    <div className="tab-item" key={index} onClick={()=>{this.clickTab(index)}}>
                        <span className={tabindex===index?'act':''}>{item}</span>
                    </div>
                )
              })  
            }     
            </div>
        )
    }
}
export default MyOrderTab;