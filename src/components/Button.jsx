import React from 'react'
import styled from 'styled-components'

const Button = ({
  appearance = 'primary', // primary | secondary, 
  size = 'md', // md | sm , 
  ...props
}) => {
  return (
    <StyledButton {...props}>
      <button className={`btn ${appearance} ${size}`}>
        {props?.children}
      </button>
    </StyledButton>
  )
}

export default Button

export const StyledButton = styled.div`
  .btn.primary {
    font-family: NotoSansJP;
    background: linear-gradient(33deg, #FFCC21 8.75%, #FF963C 86.64%);
    color: #fff;

    width: 296px;
    height: 56px;
    border-radius: 4px;
  }
`