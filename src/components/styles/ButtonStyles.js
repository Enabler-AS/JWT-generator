import styled from 'styled-components';

const ButtonStyles = styled.button`
  color: white;
  background-color: #5899e0;
  border: 1px solid #5899e0;
  border-radius: 5px;
  font-size: 12px;
  margin: 0 0 10px;
  padding: 10px;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: #ffffff;
    color: #5899e0;
    cursor: pointer;
  }
`;

export default ButtonStyles;
