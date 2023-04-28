import React, { Component } from 'react'
import './UserProfile.css'
import Swal from 'sweetalert2'

export default class UserProfile extends Component {
    state = {
        values: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            passWord: '',
            passWordCofirm: '',
        },
        errors: {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            passWord: '',
            passWordCofirm: '',
        },
    }

    handleChangeValue = (event) => {
        const { name, value, type } = event.target

        const newValue = { ...this.state.values, [name]: value }
        const newError = { ...this.state.errors }

        // Check rỗng
        if (value.trim() === '') {
            newError[name] = name + ' không được để trống'
        } else {
            newError[name] = ''
        }

        // Check email
        if (type === 'email') {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (regex.test(value)) {
                newError[name] = ''
            } else {
                newError[name] = name + ' không hợp lệ'
            }
        }

        if (name === 'passWordCofirm') {
            if (value === newValue['passWord']) {
                newError[name] = ''
            } else {
                newError[name] = name + ' phải trùng với passWord'
            }
        }

        this.setState({
            values: newValue,
            errors: newError,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { values, errors } = this.state

        let valid = true;
        let profileContent = ''
        let errorContent = ''

        for (let key in values) {
            if (values[key] === '') {
                valid = false
                errorContent += `<p class='text-left'><b class='text-danger'>${key}: </b> không hợp lệ</p>`

            }
            profileContent += `<p class='text-left'><b>${key}: </b>${values[key]}</p>`

        }

        for (let key in errors) {
            if (errors[key] !== '') {
                valid = false
            }

        }

        if (!valid) {
            // alert('dữ liệu chưa hợp lệ')
            Swal.fire({
                title: 'Your Profile!',
                html: errorContent,
                icon: 'error',
                confirmButtonText: 'OK'
            })
        } else {
            // alert('thành công')
            Swal.fire({
                title: 'Your Profile!',
                html: profileContent,
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }
    }

    render() {
        return (
            <div className='container-fluid' style={{ backgroundColor: '#eee', display: 'flex', justifyContent: 'center' }}>
                <form onSubmit={this.handleSubmit} style={{ fontSize: 'font-family: "Google Sans","Noto Sans Myanmar UI",arial,sans-serif', width: 600 }} className=' bg-white p-5 m-5'>
                    <h1 className='text-center mt-0 mb-5'>User Profile</h1>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.firstName} type="text" name='firstName' onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>firstName</label>
                                <span className='text text-danger'>{this.state.errors.firstName}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.lastName} type="text" name='lastName' onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>lastName</label>
                                <span className='text text-danger'>{this.state.errors.lastName}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input value={this.state.values.userName} type="text" name='userName' onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>userName</label>
                                <span className='text text-danger'>{this.state.errors.userName}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input value={this.state.values.email} type="email" name='email' onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>email</label>
                                <span className='text text-danger'>{this.state.errors.email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.passWord} type="text" name='passWord' onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>passWord</label>
                                <span className='text text-danger'>{this.state.errors.passWord}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input value={this.state.values.passWordCofirm} type="text" name='passWordCofirm' onChange={this.handleChangeValue} />
                                <span className="highlight" />
                                <span className="bar" />
                                <label>passWordCofirm</label>
                                <span className='text text-danger'>{this.state.errors.passWordCofirm}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn btn-dark col-12" style={{ fontSize: 25 }}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
