import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Projeto from "./pages/Projetos";

const App = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/projeto" element={<Projeto />}/>
            </Routes>
        </Router>
        </>
    );
}

export default App;