import React, { ReactElement } from 'react';
import {Input} from '../components/Input';
import logo from '../assets/img/poticon-logo-casa-do-codigo.png'
import './login.scss'

export const Login = (): ReactElement => {

    
return (
 <div className="loginContent">

        <img src={logo} className="logo" alt="Casa do código"/>

    <div className="loginFormContent">        
     <form>
        <div className="form-group">
            <Input label="Login" placeholder="Insira aqui seu e-mail" type="email" id="e-mail-input"></Input>
            <Input label="Senha" placeholder="Insira sua senha" type="password" id="password-input"></Input>

        <div className="actionsContent">
            <button className="btn btn-large btn-primary signInButton"> Entrar</button>

            <button className="btn btn-large btn-success"> Esqueci minha senha</button>

        </div>  

        </div>
     </form>
    </div>
  </div> 
    )

}