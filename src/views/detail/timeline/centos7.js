import React,{Component}from 'react'
import Layout from '../../../components/layout'
import '../../../assets/common.sass'
import '../../../assets/timeline.sass'
import {Link} from 'react-router-dom'


export default class Detail extends Component {
    render(){
        return (
        <Layout>
            <div className='timeline'>
                <h2 className='timeline-title'>阿里云服务器之旅</h2>
                <h3 className='timeline-subtitle'>2019</h3>
                <div className='timeline-item'><Link to={'/detail/5/1'}><a href="##">初入linux</a></Link></div>
                <div className='timeline-item'><Link to={'/detail/5/2'}><a href="##">阿里云静态网站上线</a></Link></div>
            </div>
        </Layout>)
    }
}