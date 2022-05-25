<div id="top"></div>

<p align="center">
  <img width="100" height="100" src='./src/images/logo.jpeg' alt="Logo">
</p>

<div align="center">
  <h1 align="center"><b>JWT generator</b></h1>
  <p align="center">
    An open-source JSON Web Token (JWT) generator created by <a href="www.enabler.no" target="_blank"><strong>enabler</strong></a>
  <br />
  <a href="https://jwt.enabler.no/" target="_blank" >View Demo</a>
  ·    
  <a href="https://github.com/Enabler-AS/JWT-generator/issues">Report Bug</a>
  </p>
  <br />
  <p>
    JWT generator allows you to generate JWT in an easy way!
    <br />
    We created a form with inputs, so you can easly pass in the data and create a signature using HS256 algorithm.
  </p>
  
  <p align="center">
    <img src="src/images/main.png" alt="JWT generator" />
    <br />
    <br />
    <a href="https://www.linkedin.com/company/enabler-as/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white" />
    </a>
    <a href="https://www.facebook.com/EnablerAS">
    <img src="https://img.shields.io/badge/Facebook-1877F2?logo=facebook&logoColor=white" />
    </a>
    <a href="https://www.instagram.com/enabler.no/" target="_blank" >
    <img src="https://img.shields.io/badge/Instagram-E4405F?logo=instagram&logoColor=white" />
    </a>
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" />
  </p>
</div>
<br />

# What is JSON Web Token?

JSON Web Token is a token-based standard that allows us to securely transfer information between two parties as a JSON object. The tokens are signed using cryptographic algorithm, either using a private secret (HMAC algorithm) or a public/private key (RSA).

JWT consists of three parts seperated by dots ( . ), which are:

- <a href="#header">Header</a>
- <a href="#payload">Payload</a>
- <a href="#signature">Signature</a>

So a JWT typically looks like:

> xxxxx.yyyyy.zzzzz

### Header

<div id="header">
  The header usually consists of two parts:
  
  - algorithm used for signing, ex. HS256
  - type of the token, which is JWT.

  <br />
  <div align="center">      
    <img src='src/images/header.png' width="400px">
  </div>
  <br />
  <p>
    Then, this JSON is Base64Url encoded to form the first part of the JWT.
  </p>
</div>

<br />

### Payload

<div id="payload">
  <p>
    The payload contains the claims, which are statements about an entity (usually user) and additional data.
  </p>
  <br />
  <div align="center">
    <img src='src/images/payload.png' width="400px">
  </div>
  <br />
  <p>
    The payload is then Base64Url encoded to form the second part of the JWT.
  </p>
</div>

<br />

### Signature

<div id="signature" >
  <p>
    The signature is created by signing the encoded header that is providing the algorithm, encoded payload with all the data and the secret (symmetric or asymetetric dependent on which algorithm is used).
  </p>
  <br />
  <div align="center">
    <img src='src/images/signature.png' width="400px">
  </div>
  <br />
  <p>
    The signature is used to ensure that the message was’t changed in the way. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
  </p>
</div>

<br />

<div align="center">
  <img src='src/images/output.png' width="400px">
</div>
<br />
<p>
  The output is three Base64 strings separated by dots that can be easily passed in HTML and HTTP environments, while being more compact compared to XML-based standards such as SAML.
</p>
<br />

## When should we use JWT?

- Authentication
- Information Exchange

<br />

# Built With

Project was built with React.js and TypeScript

- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org)

<br />

# Contact

<div align="center">
  <p align="center">
    <img width="100" height="100" src='./src/images/logo.jpeg' alt="Logo" style="border-radius:10px">
  </p>

  <a href="www.enabler.no" target="_blank" >
    <strong>Enabler AS</strong>
  </a> is a newly started tech company based in Fredrikstad(Norway).
  <br />
  <p>
    <a href="www.enabler.no" target="_blank" ><strong>Enabler</strong></a> is established to create the workspace we have always wanted. It lies in creating unique and good products together with our skilled colleagues with a common set of values. Just as we are concerned with equal values, we are concerned with different perspectives, experiences and backgrounds. We believe that everyone has something to contribute.
    <br />
    Our name has been chosen because we want to "enable" the potential that lies in the optimal use of technology.
  </p>
</div>

<br />

### Contact us via:

- Enabler.no - [www.enabler.no](www.enabler.no)
- Email - [post@enabler.no](post@enabler.no)
- LinkedIn - [https://www.linkedin.com/company/enabler-as/](https://www.linkedin.com/company/enabler-as/)
- Instagram - [https://www.instagram.com/enabler.no/](https://www.instagram.com/enabler.no/)
- Facebook - [https://www.facebook.com/EnablerAS](https://www.facebook.com/EnablerAS)

<br />

<p align="right">(<a href="#top">back to top</a>)</p>
