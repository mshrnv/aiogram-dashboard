import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import AppRouter from "./components/AppRouter";


function App() {
    return (
        <div className="App bg-gray-800 text-white">
            <Router>
                <MyNavbar />
                <AppRouter/>
            </Router>
        </div >
    );
}


export default App;
