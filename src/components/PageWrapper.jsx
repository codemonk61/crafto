/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const PageWrapper = ({ children }) => {
    const wrapper = css`
        max-width: 1200px;
        margin: 0 auto;
    `;

    return (
        <div css={wrapper}>
            {children}
        </div>
    );
};

export default PageWrapper;