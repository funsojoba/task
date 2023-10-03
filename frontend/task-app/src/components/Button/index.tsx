// import React from 'react';
import { StyledButton } from './style';


interface ButtonProps {
    btnText: string;
    handleClick?: ()=> void;
    primary?: boolean;
}


export const Button: React.FC<ButtonProps> = ({btnText, handleClick, primary}) => {
    return <StyledButton primary={primary} onClick={handleClick}>{btnText}</StyledButton>
}
