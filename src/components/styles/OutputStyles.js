import styled from 'styled-components';

const OutputStyles = styled.div`
  margin: 40px;
  display: grid;
  grid-template-columns: [first] 100%;
  justify-content: center;
  align-content: center;

  .textarea-wrapper {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .signature-wrapper {
    position: relative;
    grid-column: 1 / 2;
    grid-row: 2/ 3;
  }

  textarea {
    font-family: Arial, Helvetica, sans-serif;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 250px;
    width: 100%;
    text-align: left;
    padding: 20px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.3);
    resize: none;
    margin: 10px auto;

    &:focus {
      outline: none;
    }
  }

  .copy-button,
  .copied-button {
    position: absolute;
    bottom: 3%;
    right: 3%;
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
  @media (max-width: 768px) {
    padding: 0;
    .textarea-wrapper {
      width: 100%;
      margin: 10px auto;
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    .signature-wrapper {
      width: 100%;
      margin: 10px auto;
      grid-column: 1 / 2;
      grid-row: 1/ 2;
    }

    textarea {
      margin: 0 auto;
      font-size: 14px;
      height: 200px;
    }

    .copy-button,
    .copied-button {
      position: absolute;
      bottom: 1%;
      right: 3%;
    }
  }
`;

export default OutputStyles;
