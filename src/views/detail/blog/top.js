import React,{Component}from 'react'
import Layout from '../../../components/layout'
import ReactSVG from 'react-svg'
import '../../../assets/common.sass'
import '../../../assets/passage.sass'


export default class Detail extends Component {
    render(){
        return (
        <Layout>
            <div className='passage'>
                <div className='passage-meta'>
                    <span>2019-06-09</span>
                </div>
                <h1 className='passage-title'>
                    [置顶]代码搬运工的编程之路
                </h1>
                <div className='passage-article'>
                    <ReactSVG src='../../../static/icon/icon_ding.svg'/>
                    <h2><a>创作原因</a></h2>
                </div>
            </div>
        </Layout>)
    }
}