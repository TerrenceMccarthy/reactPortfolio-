import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import React from 'react';
import './App.css';

function App() {
    const appColor = {
        background: '#bde0fe'
    }
    
    return (
        <>
            {/* <Header /> */}

            <main style={appColor}>
                <Header />

                <Outlet />

                <Footer />
            </main>

            {/* <div className='content'><Footer /></div> */}

        </>
    );
}

export default App;


