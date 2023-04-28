import React, { Component } from 'react'
import {connect} from 'react-redux'


class XucXac extends Component {
    
    renderXucXac = () => {
        const {mangXucXac} = this.props

        return mangXucXac.map((xucXac,index) => {
            return (<img key={index} className='ml-2' style={{width:50,height:50}} src={xucXac.hinhAnh} alt="" />)
        })
    }

    render() {
        return (
            <div>
                {this.renderXucXac()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangXucXac: state.BaiTapXucXacReducer.mangXucXac
        
    }
}

export default connect (mapStateToProps)(XucXac)
