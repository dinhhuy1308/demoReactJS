import React, { Component } from 'react'
import './BaiTapXucXac.css'
import XucXac from './XucXac'
import ThongTinTroChoi from './ThongTinTroChoi'
import {connect} from 'react-redux'

class BaiTapXucXac extends Component {
    render() {
        return (
            <div className='game'>
                <div className='title-game text-center mt-5 display-4'>
                    Bài Tập Game Xúc Xắc
                </div>
                
                <div className='row text-center mt-5'>
                    <div className="col-5">
                        <button onClick={()=> {
                            this.props.datCuoc(true)
                        }} className="btnGame">TÀI</button>
                    </div>
                    <div className="col-2">
                        <XucXac />
                    </div>
                    <div className="col-5">
                        <button onClick={()=> {
                            this.props.datCuoc(false)
                        }} className="btnGame">XỈU</button>
                    </div>
                </div>
                <div className='text-center'>
                    <ThongTinTroChoi />
                    <button onClick={()=>{
                        this.props.playGame()
                    }} className="btn-success btn mt-5">PLAY GAME</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (taiXiu) => {
            const action = {
                type: 'DAT_CUOC',
                taiXiu
            }
            dispatch(action)
        },
        playGame: () => {
            const action = {
                type: 'PLAY_GAME',
            }
            dispatch(action)
        }
    }
}

export default connect (null,mapDispatchToProps)(BaiTapXucXac)
