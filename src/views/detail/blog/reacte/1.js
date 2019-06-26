import React,{Component}from 'react'
import Layout from '../../../../components/layout'
import '../../../../assets/common.sass'
import '../../../../assets/passage.sass'


export default class Detail extends Component {
    render(){
        return (
        <Layout>
            <div className='passage'>
            <div className='passage-meta'>
                    <span>2019-06-14</span>
                </div>
                <h1 className='passage-title'>
                    初识react
                </h1>
                <div className='passage-article'>
                    <h2><a href="#">前言</a></h2>
                    <p>在没有学习之前以为reacte和vue框架是差不多的，但经过一轮学习之后才发现是有很大差异的</p>
                </div>
            </div>
        </Layout>)
    }
}