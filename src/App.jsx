import React from "react";
import Header from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Card } from "./components/card/Card";

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Card />
        </div>
    );
}

export default App;
