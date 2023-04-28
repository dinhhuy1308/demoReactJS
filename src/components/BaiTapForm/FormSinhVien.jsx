import React, { Component } from 'react'
import {connect} from 'react-redux'

class FormSinhVien extends Component {
    state = {
        values: {
            maSV:'',
            hoTen:'',
            soDienThoai:'',
            email:'',
        },
        errors: {
            maSV:'',
            hoTen:'',
            soDienThoai:'',
            email:'',
        },
        valid: false
    }

    handleChange = (e) => {
        // let tagInput = e.target;
        let {name,value,type} = e.target;

        let errorMessage = ''

        //Check rỗng
        if(value.trim() === '') {
            errorMessage = name + ' không được để trống'
        }

        // Check email
        if (type === 'email') {
            const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
            if(!regexEmail.test(value)) {
                errorMessage = name + ' không đúng định dạng'
            }
        }

        // Check phone
        if (name === 'soDienThoai' ) {
            const regexNumber = /[0-9]+$/
            if(!regexNumber.test(value)) {
                errorMessage = name + ' không đúng định dạng'
            }
        }

        let values = {...this.state.values,[name]:value}
        let errors = {...this.state.errors,[name]:errorMessage}
        this.setState ({
            ...this.state,
            values: values,
            errors: errors,
        },()=>{
            this.checkValid()
        })

        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.themSinhVien(this.state);
    }

    checkValid = () => {
        let valid = true
        for (let key in this.state.errors) {
            if(this.state.errors[key] !== '' || this.state.values[key] === '') {
                valid = false        
            }
        }
        this.setState({
            ...this.state,
            valid: valid
        })

        
    }


    render() {
        return (
            <div className='container'>
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        <h3>Thong tin Sinh Vien</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Ma SV</span>
                                    <input className="form-control" name='maSV' value={this.state.values.maSV} onChange={this.handleChange}/>
                                    <span className='text-danger'>{this.state.errors.maSV}</span>
                                </div>
                                <div className="form-group col-6">
                                    <span>Ho Ten</span>
                                    <input className="form-control" name='hoTen' value={this.state.values.hoTen} onChange={this.handleChange}/>
                                    <span className='text-danger'>{this.state.errors.hoTen}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>SDT</span>
                                    <input className="form-control" name='soDienThoai' value={this.state.values.soDienThoai} onChange={this.handleChange}/>
                                    <span className='text-danger'>{this.state.errors.soDienThoai}</span>
                                </div>
                                <div className="form-group col-6">
                                    <span>Email</span>
                                    <input type='email' className="form-control" name='email' value={this.state.values.email} onChange={this.handleChange}/>
                                    <span className='text-danger'>{this.state.errors.email}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    {this.state.valid ? <button className="btn btn-success ">Thêm Nhân Viên</button> : <button className="btn btn-success " disabled>Thêm Nhân Viên</button>}
                                    {/* <button className="btn btn-success ">Thêm Nhân Viên</button> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        themSinhVien: (sinhVien) => {
            const action = {
                type: 'THEM_SINH_VIEN',
                sinhVien
            }
            dispatch(action)
        }
    }
}
export default connect (null,mapDispatchToProps)(FormSinhVien)
