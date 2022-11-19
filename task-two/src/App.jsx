import React from 'react';
import Header from "./components/Header/header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";


const App = () => {
    return (
        <div className='app'>
            <div className="purple-light"></div>
            <div className="purple-ball"></div>
            <div className="red-ball"></div>
            <div className="red-light"></div>
            <div className="yellow-light"></div>
            <div className="small-red-ball"></div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default App;