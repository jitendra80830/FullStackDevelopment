import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />;
      <Home />
      <Footer />
    </>
  );
}

export default App;
