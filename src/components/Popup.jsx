/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

// Styles for the popup container
const popupContainer = css`
  position: fixed;
  top: 20px;
  right: 20px;
  max-width: 300px;
  padding: 16px;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

// Popup colors for success and error
const successStyle = css`
  border-left: 6px solid #4caf50; /* Green */
`;

const errorStyle = css`
  border-left: 6px solid #f44336; /* Red */
`;

// Icon style
const iconStyle = css`
  font-size: 24px;
  margin-right: 12px;
`;

// Close button style
const closeButton = css`
  margin-left: auto;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #333;
  }
`;

const hiddenStyle = css`
  transform: translateY(-20px);
  opacity: 0;
`;

// Popup Component
const Popup = ({ type, message, }) => {

  const [isVisible, setIsVisible] = useState(true);

  const iconStyle = css`
  font-size: 24px;
  margin-right: 12px;
  color: ${type === "success" ? 'green' : 'red'}
`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  // Determine the icon and styles based on type
  const isSuccess = type === 'success';
  const icon = isSuccess ? <span css={iconStyle}>&#10004;</span> : <span css={iconStyle}>&#10005;</span>;

  return (
    <div
      css={[
        popupContainer,
        isSuccess ? successStyle : errorStyle,
        !isVisible && hiddenStyle,
      ]}
    >
      {icon}
      <p>{message}</p>
      <button css={closeButton} onClick={() => setIsVisible(false)}>
         &#10005;
      </button>
    </div>
  );
};

export default Popup;
