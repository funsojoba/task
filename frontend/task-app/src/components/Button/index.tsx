// import React from 'react';
import { StyledButton } from './style';


interface ButtonProps {
    btnText: string;
    handleClick?: ()=> void
}


export const Button: React.FC<ButtonProps> = ({btnText, handleClick}) => {
    return <StyledButton onClick={handleClick}>{btnText}</StyledButton>
}
