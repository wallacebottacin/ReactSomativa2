import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      email: "",
      senha: "",
      mensagemDeErro: null
    }

    //Método bind
    this.acessar = this.acessar.bind(this);

  }

  //Login
  async acessar(){

    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .then(() => {
      window.location.href = "./principal";
    })
    .catch((error) => {
        switch(error.code){
          case "auth/wrong-password":
            this.setState({ mensagemDeErro: "Senha incorreta. Tente novamente." });
            break;
          case "auth/user-not-found":
            this.setState({ mensagemDeErro: "Usuário não encontrado. Por favor, verifique o endereço de e-mail digitado." });
            break;
          case "auth/invalid-email":
            this.setState({ mensagemDeErro: "Endereço de e-mail inválido. Por favor, verifique o endereço digitado." });
            break;
          default:
            this.setState({ mensagemDeErro: "Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde." });
        }
    })

  }

  render(){
    return(
      <div>
        <h1>Página de login</h1>
        <input type='email' placeholder='E-mail' onChange={(e) => this.setState({email: e.target.value})} />
        <br />
        <input type='password' placeholder='Senha' onChange={(e) => this.setState({senha: e.target.value})} />
        <br />
        {this.state.mensagemDeErro && <p style={{ color: 'red' }}>{this.state.mensagemDeErro}</p>}
        <button onClick={this.acessar}>Acessar</button>
        <br />
        <br />
        <Link to="/">
            <button>Voltar</button>
        </Link>
      </div>
    )
  }
}

export default Login;