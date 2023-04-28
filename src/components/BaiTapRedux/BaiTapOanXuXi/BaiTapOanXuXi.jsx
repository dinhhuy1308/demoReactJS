import React, { Component } from 'react'
import './BaiTapOanXuXi.css'
import Player from './Player'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import {connect} from 'react-redux'

class BaiTapOanXuXi extends Component {
    render() {
        return (
            <div className='gameOanXuXi'>
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <KetQuaTroChoi />
                        <button onClick={()=>{this.props.playGame()}} className='btn btn-success my-5 p-2 display-4'>Play Game</button>
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        playGame: ()=> {
            dispatch({
                type: 'RAN_DOM'
            })
            dispatch({
                type: 'END_GAME'
            })
        }
    }
}

export default connect (null,mapDispatchToProps)(BaiTapOanXuXi)
