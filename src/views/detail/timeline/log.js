import React,{Component}from 'react'
import Layout from '../../../components/layout'
import '../../../assets/common.sass'
import '../../../assets/timeline.css'
import {Link} from 'react-router-dom'


export default class Detail extends Component {
    render(){
        return (
        <Layout>
            <div className='timeline'>
                <h2 className='timeline-title'>年历(日本)</h2>
                <h3 className='timeline-subtitle'>1973</h3>
                <div className='timeline-item'>国际石油危机</div>
                <h3 className='timeline-subtitle'>1985</h3>
                <div className='timeline-item'>广场协议</div>
                <h3 className='timeline-subtitle'>1989</h3>
                <div className='timeline-item'>38915</div>
            </div>
            <div className='timeline'>
                <h2 className='timeline-title'>年历</h2>
                <h3 className='timeline-subtitle'>1973</h3>
                <div className='timeline-item'></div>
                <div className='timeline-item'></div>
            </div>
            <div className='timeline'>
                <h2 className='timeline-title'>年历</h2>
                <h3 className='timeline-subtitle'>1973</h3>
                <div className='timeline-item'></div>
                <div className='timeline-item'></div>
            </div>
        </Layout>)
    }
}