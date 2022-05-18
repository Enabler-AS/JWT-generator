import styled from 'styled-components';

const OutputStyles = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;

  .signature-wrapper {
    position: relative;
  }

  textarea {
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 300px;
    width: 300px;
    text-align: left;
    padding: 20px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.3);
    resize: none;

    &:focus {
      outline: none;
    }
  }

  .copy-button,
  .copied-button {
    position: absolute;
    bottom: 1%;
    right: 5%;
  }

  .copied-button {
    background-color: green;
    border: 1px solid green;

    &:hover {
      background-color: #ffffff;
      color: green;
      cursor: pointer;
    }
  }
`;

export default OutputStyles;
