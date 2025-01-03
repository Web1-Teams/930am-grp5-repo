import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<h1>Welcome to the Tutorial</h1>} />
            <Route path="/quizzes" element={<h1>Quizzes Page</h1>} />
            <Route path="/about-us" element={<h1>About Us Page</h1>} />
            <Route path="/references" element={<h1>References Page</h1>} />
            <Route path="/html-tutorial/level-1/html-headings" element={<h1>HTML Headings Page</h1>} />
            <Route path="/html-tutorial/level-1/html-paragraphs" element={<h1>HTML Paragraphs Page</h1>} />
            <Route path="/html-tutorial/level-1/html-formatting" element={<h1>HTML Formatting Page</h1>} />
            <Route path="/html-tutorial/level-2/html-comments" element={<h1>HTML Comments Page</h1>} />
            <Route path="/html-tutorial/level-1/html-links" element={<h1>HTML Links Page</h1>} />
            <Route path="/html-tutorial/level-1/html-lists" element={<h1>HTML lists Page</h1>} />
            <Route path="/html-tutorial/level-1/html-images" element={<h1>HTML Images Page</h1>} />
            <Route path="/html-tutorial/level-1/html-forms" element={<h1>HTML Forms Page</h1>} />
            <Route path="/html-tutorial/level-1/html-tables" element={<h1>HTML Tables Page</h1>} />
            <Route path="/html-tutorial/level-1/css-syntax" element={<h1>CSS Syntax Page</h1>} />
            <Route path="/html-tutorial/level-1/css-selectors" element={<h1>CSS Selectors Page</h1>} />
            <Route path="/html-tutorial/level-1/css-colors" element={<h1>CSS Colors Page</h1>} />
            <Route path="/html-tutorial/level-1/css-box-model" element={<h1>CSS Box Model Page</h1>} />
            <Route path="/html-tutorial/level-1/css-flexbox" element={<h1>CSS Flexbox Page</h1>} />
            <Route path="/html-tutorial/level-1/css-grid" element={<h1>CSS Grid Page</h1>} />
            <Route path="/html-tutorial/level-1/css-animations" element={<h1>CSS Animations Page</h1>} />
            <Route path="/html-tutorial/level-1/css-media-queries" element={<h1>CSS Media Queries Page</h1>} />
            <Route path="/html-tutorial/level-1/js-variables" element={<h1>JS Variables Page</h1>} />
            <Route path="/html-tutorial/level-1/js-functions" element={<h1>JS Functions Page</h1>} />
            <Route path="/html-tutorial/level-1/js-events" element={<h1>JS Events Page</h1>} />
            <Route path="/html-tutorial/level-1/js-dom" element={<h1>JS DOM Page</h1>} />
            <Route path="/html-tutorial/level-1/js-classes" element={<h1>JS Classes Page</h1>} />
            <Route path="/html-tutorial/level-1/js-json" element={<h1>JS JSON Page</h1>} />
            <Route path="/html-tutorial/level-1/js-modules" element={<h1>JS Modules Page</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
