import styled from 'styled-components';

const OutputStyles = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: [first] 50% [line2] 50%;
  justify-content: center;
  align-content: center;

  .textarea-wrapper {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .signature-wrapper {
    position: relative;
    grid-column: 2 / 3;
    grid-row: 1/ 2;
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
  @media (max-width: 719px) {
    grid-template-columns: [first] 100%;
    grid-template-rows: [row1-start] 50% [row1-end] 50% [last-line];
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

      width: 100%;
    }
  }
`;

export default OutputStyles;
