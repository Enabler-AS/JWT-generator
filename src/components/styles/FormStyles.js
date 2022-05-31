import styled from 'styled-components';

const FormStyles = styled.form`
  grid-area: 'form';
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  margin: 20px 40px 0;
  font-size: 12px;
  line-height: 34px;
  font-weight: 600;

  label {
    font-size: 12px;
    font-weight: 300;
  }

  input {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 12px;
    font-weight: 200;
    margin: 0 0 10px;
    color: rgba(0, 0, 0, 0.5);
    font-family: Arial, Helvetica, sans-serif;

    &:focus {
      border: 1px solid #5899e0;
      outline: 2px solid #5899e0;
    }
  }

  .role-input {
    display: flex;
    gap: 5px;
  }

  select {
    appearance: none;
    background-color: transparent;
    border: none;
    color: rgba(0, 0, 0, 0.6);
    cursor: inherit;
    font-family: Arial, Helvetica, sans-serif;
    font-size: inherit;
    font-weight: 200;
    margin: 0;
    outline: none;
    padding: 0 1em 0 0;
    width: 100%;
    line-height: 34px;
    &::-ms-expand {
      display: none;
    }
  }

  .select {
    align-items: center;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    cursor: pointer;
    display: inline-grid;
    font-family: system-ui;
    font-size: 12px;
    grid-template-areas: 'select';
    margin: 0 0 20px;
    outline: none;
    padding: 0 10px;
    width: 100%;

    &:after {
      content: '';
      width: 0.8em;
      height: 0.5em;
      background-color: black;
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
      justify-self: end;
    }
  }

  select,
  .select:after {
    grid-area: select;
  }

  .delete-button {
    font-size: 12px;
    margin-right: 10px;
  }

  .submit-button {
    display: block;
    margin: 20px auto;
  }

  #hidden-select {
    display: none;
  }

  .secret-wrapper {
    position: relative;
  }

  .icon {
    position: absolute;
    color: rgba(0, 0, 0, 0.3);
    top: 55%;
    right: 1.5%;
    width: 20px;
    transition: all 150ms ease-in-out;
    font-size: 16px;

    &:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export default FormStyles;
