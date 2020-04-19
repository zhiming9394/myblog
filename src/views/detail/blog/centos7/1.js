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
                    <span>2019-07-07</span>
                </div>
                <h1 className='passage-title'>
                    初入Linux
                </h1>
                <div className='passage-article'>
                    <h2><a href="#">前言</a></h2>
                    <p>操控服务而言，感觉最大的区别是操作命令行界面或者说是使用一些不熟悉的linux命令，所以我觉得想要玩好服务器就肯定要熟悉好linux的命令，那么就先奉上一些linux常用的命令</p>
                    <h3><a href="#">linux常用命令</a></h3>

                    <h4>ls</h4>
                    <p>全拼list，功能列出目录的内容以及其内容属性信息</p>
                    <p>ls -F 查看目录中的文件</p>
                    <p>ls -l 显示文件和目录的详细资料</p>
                    <p>ls -a 显示隐藏文件</p>

                    <h4>cd</h4>
                    <p>全拼change directory,功能是从当前目录切换到指定工作目录</p>
                    <p>cd /home 进入 '/ home' 目录'</p>
                    <p>cd .. 返回上一级目录</p>
                    <p>cd 进入个人的主目录</p>
                    <p>cd ~user1 进入个人的主目录</p>

                    <h4>mkdir</h4>
                    <p>全屏make directories,其功能就是创建目录</p>
                    <p>mkdir dir1 创建一个叫做 'dir1' 的目录</p>
                    <p>mkdir dir1 dir2 同时创建两个目录</p>
                    <p>mkdir -p /tmp/dir1/dir2 创建一个目录树</p>

                    <h4>rm</h4>
                    <p>全屏remove，其功能就是删除文件或目录</p>
                    <p>rm -f file1 删除一个叫做 'file1' 的文件'</p>
                    <p>rmdir dir1 删除一个叫做 'dir1' 的目录' </p>
                    <p>rm -rf dir1 删除一个叫做 'dir1' 的目录并同时删除其内容</p>
                    <p>全屏make directories,其功能就是创建目录</p>

                    <h4>touch</h4>
                    <p>创建新的空文件，改变已有文件的时间戳属性。</p>
                    <p>touch -t 0712250000 file1 修改一个文件或目录的时间戳 - (YYMMDDhhmm) </p>
                    
                    <h4>vi/vim</h4>
                    <p>命令行文本编辑器。按esc可进行一下操作</p>
                    <p>：wq！ 保存退出</p>
                    <p>：q！ 强制退出</p>
                </div>
            </div>
        </Layout>)
    }
}