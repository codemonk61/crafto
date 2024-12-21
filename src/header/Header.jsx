import React from 'react'
/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

const headerWrapper = css`
  background: #7e8dfa;
  padding: 20px;
  color: white;
  font-weight: bolder;
  font-size: 18px;
`

const Header = () => {
  return (
    <div css={headerWrapper}>
      Quote
    </div>
  )
}

export default Header