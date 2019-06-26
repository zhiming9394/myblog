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
                <h2 className='timeline-title'>react小白入坑</h2>
                <h3 className='timeline-subtitle'>2019</h3>
                <div className='timeline-item'><Link to={'/detail/4/1'}><a href="##">初入react</a></Link></div>
            </div>
        </Layout>)
    }
}