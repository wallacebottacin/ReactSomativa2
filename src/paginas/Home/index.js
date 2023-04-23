import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>App Somativa 2</h1>
            <h2>Página inicial</h2>
            <p>Escolha o que deseja fazer:</p>
            <Link to='/login'>
                <button>Fazer login</button>
            </Link>
            <Link to='/cadastro'>
                <button>Fazer cadastro</button>
            </Link>
        </div>
    )
}

export default Home;