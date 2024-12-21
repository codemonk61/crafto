

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const styles = {
    tabWrapper: css`
      margin: 24px 0px;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 0px 12px;
    @media (max-width: 1232px){
        padding: 0px 12px;
     }

    @media (max-width: 960px){
         padding: 0px 12px;
     }

    @media (max-width: 680px){
         padding: 0px 12px;
     }
    `,
    tab: css`
     padding-bottom: 4px;
     border-bottom: 4px solid transparent;
     cursor: pointer;
    `,
    ativeTab: css`
     padding-bottom: 4px;
     border-bottom: 4px solid #7e8dfa;
     cursor: pointer;
     color: #7e8dfa;
    `
}

const Tabs = ({ data = [], value, onChange,  }) => {
    const handleClick = (key) => {
        onChange(key)
    }

    return (
        <div css={styles.tabWrapper}>
            {
                data.length && data.map((datum) => {
                    return <div key={datum.key} css={value === datum.key ? styles.ativeTab : styles.tab} onClick={() => handleClick(datum.key)}>{datum.label}</div>
                })
            }
        </div>
    )
}

export default Tabs