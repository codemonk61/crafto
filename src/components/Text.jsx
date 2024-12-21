/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const Text = ({
  marginTop = '0',
  marginBottom = '0',
  marginLeft = '0',
  marginRight = '0',
  text,
  color = 'black',
  fontSize = '16px',
  fontWeight = 'normal',
  ellipsis = false,
  alignment = 'left',
  RenderAs = 'p',
}) => {
  // CSS styles using Emotion
  const textStyle = css`
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    color: ${color};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    text-align: ${alignment}; /* Set text alignment */
    white-space: ${ellipsis ? 'nowrap' : 'normal'};
    overflow: ${ellipsis ? 'hidden' : 'visible'};
    text-overflow: ${ellipsis ? 'ellipsis' : 'clip'};
  `;

  return <RenderAs css={textStyle}>{text}</RenderAs>;
};

// Prop Types Validation
Text.propTypes = {
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  ellipsis: PropTypes.bool,
  alignment: PropTypes.oneOf(['left', 'right', 'center', 'justify']), // Define alignment options
  RenderAs: PropTypes.elementType, // Prop type for dynamic component rendering
};

export default Text;
