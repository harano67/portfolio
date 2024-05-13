import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainContents from "./components/MainContents";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="border-t border-gray-200 dark:border-gray-700"></div>
      <MainContents />
      <Footer />
    </div>
  );
}

export default App;
