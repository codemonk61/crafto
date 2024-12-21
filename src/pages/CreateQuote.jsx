


/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { useState, } from 'react'
import { css } from '@emotion/react';
import Text from '../components/Text';

import { createQuote, uploadImage } from '../services/quote';
import Input from '../components/Input';
import Button from '../components/Button';
import Loader from '../components/Loader';
import Popup from '../components/Popup';

const styles = {
  wrapper: css`
     padding: 24px;
     width: 300px;
     background-color: white;
     border: 1px solid #7e8dfa;
     border-radius: 4px;
    `
}

const CreateQuote = () => {

    const [text, setText] = useState('');
    const [file, setFile] = useState(null);
    const token = localStorage.getItem('token');
    const [isLoading, setIsLoading] = useState(false)
    const [successOrError, setSuccessOrError] = useState(null)

      const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      setIsLoading(true)
      try {
        const mediaData = await uploadImage(file);
        await createQuote(token, text, mediaData[0].url);
        setSuccessOrError('success')
        setIsLoading(false)
        navigate('/quoteList')
      } catch (error) {
        console.error('Failed to create quote:', error);
        setIsLoading(false)
        setSuccessOrError('error')
      }
    };
 
    const isDisable = !(file && text)
    
    if(isLoading) {
      return <Loader/>
    }
   
  return (
    <div css={styles.wrapper}>
      {successOrError === 'success' && <Popup type={'success'} message={'Created Successfully!'}/>}
      {successOrError === 'error' && <Popup type={'error'} message={'Something went wrong!'}/>}
      <Text
        text="Create Quote"
        fontSize="30px"
        fontWeight="bold"
        alignment="left"
        marginBottom={"12px"}
      />
      <Text
        text="Enter Username:"
        fontSize="14px"
        alignment="left"
        marginTop={"16px"}
        marginBottom={"8px"}
      />
      <Input
        type="text"
        placeholder="Enter username"
        value={text}
        height={"35px"}
        onChange={(e) => setText(e.target.value)}
      />
      <Text
        text="Upload Image:"
        fontSize="14px"
        alignment="left"
        marginTop={"16px"}
        marginBottom={"8px"}

      />
      <Input
        type="file"
        height={"35px"}
        onChange={(e) => setFile(e.target.files[0])}
      />
      <Button
        block={true}
        alignment="center"
        bgColor="#7e8dfa"
        innerText="Submit"
        onClick={handleSubmit}
        marginTop={"24px"}
        disabled={isDisable}
      />

    </div>
  )
}

export default CreateQuote
