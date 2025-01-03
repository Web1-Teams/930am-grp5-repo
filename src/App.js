import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Card from './components/Card';


function Level1() {
  return (
    <div>
      <h2>Level 1: Basics</h2>
      <p>Learn CSS in the easiest way.</p>
    </div>
  );
}

function Level2() {
  return (
    <div>
      <h2>Level 2: Intermediate</h2>
      <p>You are in the middle point of learning CSS.</p>
    </div>
  );
}

function Level3() {
  return (
    <div>
      <h2>Level 3: Advanced</h2>
      <p>For complex tags and techniques.</p>
    </div>
  );
}

function Quizzes() {
  return (
    <div>
      <h2>CSS Quizzes</h2>
      <p>Test your knowledge of CSS.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="CSSS">
        <h1 className="CSS">Learn CSS</h1>
        <p className="CSSP">Master CSS with our HSJ</p>

        
        <div className="card-container">
          <Card 
            image="p.webp" 
            titel="Level 1: Basics" 
            paragraph="Learn CSS in the easiest way"
            Bo="Start Learning" 
            link="/level1" 
          />
          <Card 
            image="y.jpeg" 
            titel="Level 2: Intermediate" 
            paragraph="You are in the middle point,learning CSS"
            Bo="Continue" 
            link="/level2" 
          />
          <Card 
            image="r.webp" 
            titel="Level 3: Advanced"
            paragraph="For complex tags and techniques"
            Bo="The Last Level" 
            link="/level3" 
          />
          <Card 
            image="tyutyu.jpg" 
            titel="CSS Quizzes"
            paragraph="Test your CSS knowledge"
            Bo="Go To Test" 
            link="/quizzes" 
          />
        </div>
        <Routes>
          <Route path="/level1" element={Level1 } />
          <Route path="/level2" element={Level2 } />
          <Route path="/level3" element={Level3 } />
          <Route path="/quizzes" element={Quizzes } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
