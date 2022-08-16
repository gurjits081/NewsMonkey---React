import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import News from "./components/News";

const App = () => {
  let apiKey = process.env.REACT_APP_NEWS_API

    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<News apiKey={apiKey} key="general" pageSize={5} country="in" category="general" />} />
            <Route path="/business" element={<News apiKey={apiKey} key="business" pageSize={5} country="in" category="business" />} />
            <Route path="/entertainment" element={<News apiKey={apiKey} key="entertainment" pageSize={5} country="in" category="entertainment" />} />
            <Route path="/health" element={<News apiKey={apiKey} key="health" pageSize={5} country="in" category="health" />} />
            <Route path="/science" element={<News apiKey={apiKey} key="science" pageSize={5} country="in" category="science" />} />
            <Route path="/sports" element={<News apiKey={apiKey} key="sports" pageSize={5} country="in" category="sports" />} />
            <Route path="/technology" element={<News apiKey={apiKey} key="technology" pageSize={5} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  
}

export default App;
