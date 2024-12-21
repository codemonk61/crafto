/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';


const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const loaderStyle = css`
  border: 8px solid #d9ddfd ; 
  border-top: 8px solid #7e8dfa; 
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite; /* Infinite spin animation */
  margin: auto; /* Center the loader */
`;


const wrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full page height */
`;

const Loader = () => (
  <div css={wrapperStyle}>
    <div css={loaderStyle}></div>
  </div>
);

export default Loader;
