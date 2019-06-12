import React, { Component } from 'react'
import '../../assets/home.sass'
import {Link} from 'react-router-dom'

export default class Content extends Component {

    componentWillMount (){
        
    }
    render() {
        let title = this.props.title
        let date = this.props.date
        let summary = this.props.summary
        let path = this.props.path
        return (
            <div className='home-article-wrapper'>
                <div className='home-article'>
                    <div className='home-article-inner'>
                        <div className='passage-meta'>
                            <span>{date}</span>
                        </div>
                        <Link to={path}>
                            <h1 className='home-article-title'><a href="#">{title}</a></h1>
                        </Link>
                        <div className='home-article-content passage-article'>
                            <p>{summary}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


