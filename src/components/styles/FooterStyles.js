import styled from 'styled-components';

const FooterStyles = styled.footer`
  text-align: center;
  margin: 50px 0;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);

  a {
    color: #5899e0;
    text-decoration: none;

    &:hover {
      color: rgba(0, 0, 0, 0.5);
      text-decoration: underline;
    }
  }

  .contact-links {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  .contact-links a {
    color: rgba(0, 0, 0, 0.3);
    font-size: 16px;
    margin: 0 10px;

    &:hover {
      color: #5899e0;
    }
  }

  @media (max-width: 768px) {
    margin: 30px 0 20px;
    .contact-links a {
      font-size: 15px;
    }
  }
`;

export default FooterStyles;
