import React, {Component}  from 'react'

export default (loadComponent,placeholder ='正在加载中') =>{
    return class AsyncComponent extends Component {
        umount = false

        constructor(){
            super()
            this.state = {
                Child:null
            }
        }

        componentWillUnmount () {
            this.unmount = true
        }

        async componentDidMount (){
            const { default : Child } = await loadComponent()

            if(this.umount) return

            this.setState({
                Child
            })
        }

        render () {
            const { Child } = this.state 

            console.log(this.state)

            return (
                Child?<Child {...this.props}/>:placeholder
            )
        }
    }
}