/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const Input = ({
  type = 'text',
  height = '30px',
  onChange = () => {},
  value = '',
  placeHolder = 'Enter text',
  bgColor = 'white',
}) => {
  // CSS styles for text input
  const inputStyle = css`
    height: ${height};
    width: 100%;
    padding: 8px;
    border: 1px solid #b0bafd;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: ${bgColor};
    font-size: 14px;

    &:focus {
      border-color: #7e8dfa;
      outline: none;
    }
  `;

  // CSS styles for file input
  const fileInputStyle = css`
    display: block; /* Hide the default file input */
  `;

  // const fileLabelStyle = css`
  //   height: ${height};
  //   line-height: ${height};
  //   padding: 8px;
  //   background-color: ${bgColor}; /* Custom background color */
  //   border: 2px dashed #7e8dfa;
  //   border-radius: 4px;
  //   cursor: pointer;
  //   text-align: center; /* Center text */
  //   display: block; /* Center in line with the file input */
  //   color: #7e8dfa; /* Text color */
  //   font-size: 30px;

  //   span {
  //     display: block;
  //     transform: rotate(270deg);
  //   }

  //   &:hover {
  //     opacity: 0.8; /* Change opacity on hover */
  //   }
  // `;

  return (
    <>
      {type === 'file' ? (
        <>
          <input
            type="file"
            css={fileInputStyle}
            onChange={onChange}
            id="file-upload" // Unique ID for the file input
          />
          {/* <label htmlFor="file-upload" css={fileLabelStyle}>
            <span>&#10162;</span>
          </label> */}
        </>
      ) : (
        <input
          type={type}
          css={inputStyle}
          onChange={onChange}
          value={value}
          placeholder={placeHolder}
        />
      )}
    </>
  );
};

// Prop Types Validation
Input.propTypes = {
  type: PropTypes.string,
  height: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeHolder: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Input;
