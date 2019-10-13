import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Calculator from "./Components/Calculator/Calculator";

class App extends Component {
    render() {
        return (
            <div className="App">

                <Header/>

                <Content/>

                <Calculator/>

                <Footer/>

            </div>
        );
    }
}


export default App;
