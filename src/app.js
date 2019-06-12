import "@babel/polyfill"

import React from 'react'
import { Route , Switch ,BrowserRouter } from 'react-router-dom'
import routes from './routes'

console.log(routes)

export default () =>(
    <Switch>
        {
            routes.map( ({name ,path,exact =true,component}) => (
                <Route path={path} exact={exact} component={component} key={name} />
            ))
        }
    </Switch>
)