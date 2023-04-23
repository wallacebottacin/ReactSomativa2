import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class Principal extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome: "",
            sobrenome: "",
            dataNascimento: ""
        }
    }

    async componentDidMount(){

        await firebase.auth().onAuthStateChanged( async (usuario) => {
            if(usuario){
                //Pega o uid do usuário logado
                console.log(usuario);
                var uid = usuario.uid;

                //Chamar o firestore (DB)
                await firebase.firestore().collection("usuario").doc(uid).get()
                .then((retorno) => {
                    this.setState({
                        nome: retorno.data().nome,
                        sobrenome: retorno.data().sobrenome,
                        dataNascimento: retorno.data().dataNascimento
                    })
                });
            } else {
                window.location.href = "./login";
            }
        })

    }

    render(){
        return(
            <div>
                <h1>Página do usuário logado</h1> <br />
                Nome: { this.state.nome } <br />
                Sobrenome: { this.state.sobrenome } <br />
                Data de nascimento: { this.state.dataNascimento } <br />
            </div>
        )
    }

}

export default Principal;