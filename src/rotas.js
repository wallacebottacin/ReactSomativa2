import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './paginas/Home';
import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import Principal from './paginas/Principal';

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/principal" element={<Principal />} />
            </Routes>
        </Router>
    )
}

export default Rotas;