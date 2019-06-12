import React,{Component}from 'react'
import Layout from '../../components/layout'
import Content from './content.js'
import data from './data.js'



export default class Home extends Component {

    componentWillMount (){

    }

    render(){
        return (
            <Layout {...this.props}>
                {
                    data.map(({title,date,summary,index,path})=>(
                        <Content title={title} date={date} summary={summary} path={path} key={index}></Content>
                    ))
                }
            </Layout>)
    }
}