import React, { Component } from 'react'

export default class Demoif extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLogin: false,
            name: '',
        }
    }   

    login = () =>{
        this.setState ({
            isLogin: true,
            name: 'Huy đẹp trai',
        })
    }

    logout = () =>{
        this.setState ({
            isLogin: false,
            name: '',
        })
    }
    

    render() {
        return (
            <div>
                {this.state.isLogin === true ? <div>Hello {this.state.name}<button onClick={this.logout}>Logout</button></div> : <button onClick={this.login}>Login</button>}
            </div>    
        )
    }
}
