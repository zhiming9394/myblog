import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import '../assets/common.sass'
import '../assets/header.sass'
import '../assets/home.sass'

const getMenuContent = ({ path, name }) => (
    <a href={path ? path : "/"}>{name}</a>
)

export default class LayoutDefault extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            tip: "稍等"
        }
    }

    render() {
        const { children } = this.props
        const { loading, tip } = this.state
        const navRoutes = [{
            name: '首页',
            icon: 'home',
            path: '/',
        },
        {
            name: 'IT博客',
            path: '/detail/1',
        },
        {
            name: '乱七八糟',
            path: '/detail/2',
        }]
        return (
            <div className="flex-colum" style={{ width: '100%', height: '100%' }}>
                <div className="site-header">
                    <div className='site-header-brand'>
                        <span className="site-header-brand-title">
                            <a>志明</a>
                        </span>
                    </div>
                    <div className='site-header-right'>
                        <div className='site-header-navigation'>
                            {
                                navRoutes.map((e, i) => (
                                    <Route key={i}>
                                        {getMenuContent({ ...e })}
                                    </Route>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div id='site-process'></div>
                <div className='main'>
                    {children}
                </div>
            </div>
        )
    }
}