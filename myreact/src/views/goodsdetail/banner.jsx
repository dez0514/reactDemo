import React, { Component } from 'react'
import Swiper from 'swiper'
import WxImageViewer from 'react-wx-images-viewer';
import './banner.scss'

class Banner extends Component {
    constructor(props) {
      super(); //可以不给props
      this.banSwiper = null;
      this.state = {
          bannerList:[
            require('../../images/demo.jpg'),
            require('../../images/demo.jpg'),
            require('../../images/demo.jpg')
          ],
          reviewIndex: 0, // 当前预览图片索引
          isOpen: false // 打开预览图片
      }
    }
    componentDidMount() {
        this.initBanner()
    }
    initBanner(){
        var that = this
        const banSwiper = new Swiper('.ban-swiper', {
          loop: false,
          autoplay: false,
          pagination:  {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          on: {
            slideChangeTransitionEnd: function(){
                console.log('swiper:',this.activeIndex)
              that.setState({
                reviewIndex: this.activeIndex
              })
            },
            click: function(){
              that.openViewer(that.reviewIndex)
            }          
          }
        })
        this.banSwiper = banSwiper
    }
    onClose = ()=>{
        // console.log(this.refs.imgreviews)
        // console.log(this.refs.imgreviews.props.index)
        this.setState({
          isOpen:false
        })
    }
    openViewer(index) {
        this.setState({
          index,
          isOpen: true
        })
    }
    render() {
      const { bannerList,reviewIndex,isOpen } = this.state
      return (
        <div className="banner-wrap">
          <div className="swiper-container ban-swiper">
            <div className="swiper-wrapper">
            {
              bannerList.map((item, index) => {
                return (
                  <div className="swiper-slide" key={index}>
                    <img className="banner-pic" src={item} alt=""/>
                  </div>
                )
              })
            }
            </div>
            <div className="swiper-pagination"></div>
          </div>
          {
            isOpen ? <WxImageViewer ref="imgreviews" onClose={this.onClose} urls={bannerList} index={reviewIndex}/> : ""
          }
        </div>
      )
    }
}
export default Banner