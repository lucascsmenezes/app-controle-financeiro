import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Projeto from "./pages/Projetos";
import Sobre from "./pages/Sobre"
import GLobalStyle from "./styles/global";

const App = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/projeto" element={<Projeto />}/>
                <Route path="/Sobre" element={<Sobre />} />
            </Routes>
        </Router>
        <GLobalStyle />
        </>
    );
}

export default App;