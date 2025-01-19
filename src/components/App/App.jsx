import React from "react";
import "./App.css";

// Import Components
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Navigation />
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
