import React from 'react';
// import logo from './logo.svg';
import HomePage from './pages/HomePage';
// import Footer from './components/Footer';
import Header from './components/Header';

// import { BlogPostProvider } from './contexts/BlogPostContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <HomePage />
      
      {/* <footer>
        <Footer />
      </footer>  */}
    </div>
  );
}

export default App;