import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import CalculatorVersion1 from "./Components/Calculator/CalculatorVersion1";

class App extends Component {
    render() {
        return (
            <div className="App">

                <Header/>

                <Content/>

                {/*<Calculator/>*/}

                <br/>
                <CalculatorVersion1/>

                <Footer/>

            </div>
        );
    }
}


export default App;
