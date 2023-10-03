import styled from 'styled-components';


interface ButtonProps {
    primary?: boolean;
  }


export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.primary ? '#060640' : '#fff')};
  color: ${(props) => (props.primary ? "#fff" : "#060640")};
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 5px;

  &:hover {
    transform: scale(1.05);
  }
`;
