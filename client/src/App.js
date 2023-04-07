import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import IndexPage from './pages/IndexPage';
import UsersPage from './pages/UsersPage';
import MessagesPage from './pages/MessagesPage';


function App() {
    return (
        <div className="App">
            <Router>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Routes>
                        <Route path="/tables" element={<MessagesPage />} />
                        <Route path="/stats" element={<UsersPage />} />
                        <Route path="/" element={<IndexPage />} />
                    </Routes>
                </main>
            </Router>
        </div >
    );
}


export default App;
