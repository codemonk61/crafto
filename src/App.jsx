import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

import AuthProvider from "./authContext/AuthContext";
import CreateQuote from "./pages/CreateQuote";
import Login from "./pages/Login";
import QuoteList from "./pages/QuoteList";
import Header from './header/Header';

const globalStyles = css`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: #f0f2ff;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
    `

const wrapper = css`
     max-width: 1200px;
     margin:auto;
    margin-top: 50px;
  `;
const pageWrapper = css`
   display: flex;
   justify-content: center;
   margin-top: 50px;
  `

const App = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <AuthProvider>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<div css={pageWrapper}><Login /></div>} />
            <Route path="/createQuote" element={<div css={pageWrapper}><CreateQuote /></div>} />
            <Route path="/quoteList" element={<div css={wrapper}><QuoteList /></div>} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;