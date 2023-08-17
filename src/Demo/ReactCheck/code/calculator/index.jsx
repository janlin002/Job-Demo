import { useState } from 'react';
import {
  StyledContainer,
  StyledHeader,
  StyledContent
} from './index.style';
import {
  Box,
  Button
} from '@mui/material'
import classNames from 'classnames';
import './style.css'

const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+' , '0', '-', '*', '=', '/']
const marks = ['+' , '-', '*', '/']

const Index = () => {
  // 螢幕顯示
  const [count, setCount] = useState('')
  // 顯示符號
  const [clickButton, setClickButton] = useState('')
  // 數字計算
  const [total, setTotal] = useState(0)

  const handleButtonClick = (value) =>{
    setCount(prev => prev += value)
    // if(marks.includes(value)){
    //   setClickButton(value)
    //   return;
    // }

    // if(count === '0'){
    //   setCount(value)
    // }else {
    //   setCount(prev => prev + value)
    // }
    
  }

  console.log(count, eval(count), 'count')
  return (
    <>
      <StyledContainer>
        <Box display="flex" justifyContent='center'>
          <StyledHeader className="number-Item">{count}</StyledHeader>
        </Box>
        <Box display="flex" width='300px' sx={{ flexWrap: 'wrap' }}>
          {
            number.map((item)=>(
              <StyledContent 
                key={item} 
                onClick={(e)=>handleButtonClick(item)}
                className={classNames('number-Item', {
                  'checked': clickButton === item
                })}
              >
                {item}
              </StyledContent>
            ))
          }
        </Box>
        <Box display="flex" justifyContent='center'>
          <Box 
            onClick={()=>{
              setCount('0')
              setClickButton('')
            }} 
            width="100px" 
            heigh="100px" 
            color='primary'
            className='clear-button'
            sx={{ cursor: 'pointer' }}
          >
            CLEAR
          </Box>
        </Box>
      </StyledContainer>
      
    </>
    
  );
};

export default Index;