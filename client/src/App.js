import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import Stats from './pages/Stats';
import Tables from './pages/Tables';


function App() {
    return (
        <div className="App">
            <Router>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Routes>
                        <Route path="/tables" element={<Tables />} />
                        <Route path="/stats" element={<Stats />} />
                        <Route path="/" element={<Index />} />
                    </Routes>
                </main>
            </Router>
        </div >
    );
}


export default App;
