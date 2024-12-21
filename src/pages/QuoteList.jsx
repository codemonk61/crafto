
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuotes } from '../services/quote';
import { dateConverter } from '../utils/helper';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Text from '../components/Text';
import Loader from '../components/Loader';

const styles = {
  wrapper: css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    @media (max-width: 1232px) {
      padding: 0px 12px;
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 960px) {
      padding: 0px 12px;
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 680px) {
      padding: 0px 12px;
      grid-template-columns: 1fr;
    }
  `,
  containerStyle: css`
    position: relative;
    height: 200px;
    overflow: hidden;
    border-radius: 10px;
  `,
  imageStyle: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  overlayStyle: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    pointer-events: none;
  `,
  containerHover: css`
    &:hover > div {
      opacity: 1;
    }
  `,
  floatBtn: css`
 position: fixed;
 bottom: 5%;
 right: 5%;
 display: inline-block;
 padding: 12px;
 border-radius: 20px;
 background: #7e8dfa;
 color: white;
 cursor: pointer;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  font-weight: bold;
 `
};

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const limit = 20;
  const token = localStorage.getItem('token');
  const loaderRef = useRef(null);

  const navigate = useNavigate()

  const fetchQuotes = async () => {
    setIsLoading(true);
    try {
      const data = await getQuotes(token, limit, offset);
      setQuotes((prev) => [...prev, ...data]);
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch quotes:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [offset]);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isLoading) {
        setOffset((prevOffset) => prevOffset + limit);
      }
    },
    [isLoading]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [handleObserver]);

  return (
    <>
      <div css={styles.wrapper}>
        {quotes.map((quote, index) => (
          <div key={index} css={styles.imageWrapper}>
            <div css={[styles.containerStyle, styles.containerHover]}>
              <img src={quote.mediaUrl} alt="Quote" css={styles.imageStyle} />
              <div css={styles.overlayStyle}>
                <Text
                  text={`Created At`}
                  fontSize="14px"
                  fontWeight="bold"
                  color="white"
                  marginLeft="12px"
                  marginTop="12px"
                />
                <Text
                  text={`${dateConverter(quote.createdAt)}`}
                  fontSize="14px"
                  fontWeight="bold"
                  color="white"
                  marginRight="12px"
                  marginTop="12px"
                />
              </div>
            </div>
            <Text
              text={`${quote.username}`}
              fontSize="14px"
              fontWeight="bold"
              marginBottom="8px"
              marginTop="12px"
            />
            <Text text={`${quote.text}`} fontSize="14px" marginBottom="12px" />
          </div>
        ))}
      </div>
      <div css={styles.floatBtn} onClick={()=>navigate('/createQuote')}>
       Action
      </div>
      {isLoading && <Loader />}
      <div ref={loaderRef} />
    </>
  );
};

export default QuoteList;
