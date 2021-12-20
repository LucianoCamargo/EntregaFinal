import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
      await  this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    render() {
        return (
            <div className="c-principal">
                <div className="c-segundo">
                    <div className="form-group">
                        <label>Usuario: </label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            name='username'
                            onChange={this.handleChange}
                        />
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            name='password'
                            onChange={this.handleChange}
                        />
                        <br />
                        <button className="boton-uno" >Iniciar Sesión</button>   
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
    