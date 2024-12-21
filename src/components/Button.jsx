/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Button = ({
  block = false,
  alignment = 'center',
  bgColor = '#7e8dfa',
  innerText,
  onClick = () => Promise.resolve(), // Use async function for real use cases
  marginTop = '0',
  marginBottom = '0',
  marginLeft = '0',
  marginRight = '0',
  disabled = false,
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onClick(); // Execute the click handler, e.g., an API call
    } finally {
      setLoading(false); // Stop loading when done
    }
  };

  // CSS Animations for loader
  const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;

  const loaderStyle = css`
    border: 4px solid white;
    border-top: 4px solid  #7e8dfa;
    display: inline-block;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    animation: ${spin} 1s linear infinite;
  `;

  const buttonWrapper = css`
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
  `;

  const buttonStyle = css`
    display: ${block ? 'block' : 'inline-block'};
    width: ${block ? '100%' : 'auto'};
    text-align: ${alignment};
    background-color: ${disabled ? 'lightgray' : bgColor};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: ${loading || disabled ? 'not-allowed' : 'pointer'};
    margin: 5px 0;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: ${loading || disabled ? 1 : 0.8};
    }
  `;

  return (
    <div css={buttonWrapper}>
      <button
        disabled={loading || disabled}
        css={buttonStyle}
        onClick={handleClick}
      >
        {loading ? <span css={loaderStyle}></span> : innerText}
      </button>
    </div>
  );
};

Button.propTypes = {
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  block: PropTypes.bool,
  alignment: PropTypes.oneOf(['left', 'center', 'right', 'middle']),
  bgColor: PropTypes.string,
  innerText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
