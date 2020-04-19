import React,{Component}from 'react'
import Layout from '../../../../components/layout'
import image521 from '../../../../static/image/5.2.1.png'
import '../../../../assets/common.sass'
import '../../../../assets/passage.sass'




export default class Detail extends Component {
    render(){
        return (
        <Layout>
            <div className='passage'>
            <div className='passage-meta'>
                    <span>2019-07-07</span>
                </div>
                <h1 className='passage-title'>
                    阿里云静态网站上线
                </h1>
                <div className='passage-article'>
                    <h2><a href="#">前言</a></h2>
                    <p>因为之前没有玩过linux，对服务器的了解一知半解，所以导致我这个博客上线时间用了很久半个与吧。对于上线的这段时间来说，我了解很多东西防火墙，端口号，nginx，pm2，webpack等等</p>
                    <h4><a href="#">阿里云的配置</a></h4>
                    <p>首先确定服务器的端口号打开没有，去阿里云的控制中心找到配置安全规则，然后如图配置（我配置的是80）然后添加。</p>
                    <p><img src={image521} style={{width:'380px'}}></img></p>
                    <h4><a href="#">防火墙的配置</a></h4>
                    <p>这里要注意，centos7默认使用的是firewalld服务，而之前的centos系列一般使用iptables服务，先清楚自己的服务然后去查阅相关添加端口号的方法</p>
                    <h4><a href="#">nginx的使用</a></h4>
                    <p>这里为了达到上线的效果，我只做了最简单的配置。</p>
                    <div className="language-html">
                    <pre className="language-html">
                        <code>
                            <span>
                                11111111
                            </span>
                        </code>
                    </pre>
                    </div>
                </div>
            </div>
        </Layout>)
    }
}