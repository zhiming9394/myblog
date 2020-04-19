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
                    <p>本人一名普普通通的本科生，做人呢就没什么成功的事情，因为要毕业混饭吃就走上了编程的道路。
                        一开始觉得好难好痛苦，到现在可以在代码中找到乐趣，发现这样ok啊。于是就想追求代码的艺术，
                        每当有时间就抽空写下一点，记录一点。
                    </p>
                    <p className="passage-floatR">————   一名大自然的搬运工上</p>   
                </div>
            </div>
        </Layout>)
    }
}