import React from 'react';
// import logo from './logo.svg';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';
import EventDetails from './pages/EventDetails';

import { GET_THEMES, SAVE_THEME } from './constants/apiEndPoints';
import makeRequest from './utils/makeRequest';

// import { ThemeContext } from './contexts/themeContext';


// import { BlogPostProvider } from './contexts/BlogPostContext';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// const { theme, setTheme } = React.useContext(ThemeContext);

function App() {
  // React.useEffect(() => {
  //   makeRequest(GET_THEMES).then((response) => {
  //     // console.log(response);
  //     //const [currTheme,setCurrTheme]=React.useState(theme['themes'][theme['preferredThemeId']].colorHexCode);
  //     console.log(response['themes'][response['preferredThemeId']].colorHexCode);
  //     //console.log({...response,"currTheme": response['themes'][response['preferredThemeId']].colorHexCode})
  //     setTheme({...response,'currTheme': response['themes'][response['preferredThemeId']].colorHexCode});
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }, []);

  return (
    <BrowserRouter>
      {/* logo font */}
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Inline+Display:wght@100;700&display=swap" rel="stylesheet"/>

      <div className="App">
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />}>  </Route> 
          <Route path="/event-details" element={<EventDetails />}>  </Route> 
        </Routes>
        <footer>
          <Footer />
        </footer> 
      </div>
    </BrowserRouter>
  );
}

export default App;