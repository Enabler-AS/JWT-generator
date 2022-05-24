<div id="top"></div>

<p align="center">
   <img width="100" height="100" src='./src/images/logo.jpeg' alt="Logo" style="border-radius:10px">
  </p>

<div align="center">
<h1 align="center" ><b>JWT generator</b></h1>

  <p align="center">
    An open-source JSON Web Token (JWT) Generator created by <a href="www.enabler.no" target="_blank" >
    <strong>enabler</strong>
  </a>
    <br />
    <a href="https://jwt.enabler.no/" target="_blank" >View Demo</a>
    ·
    <a href="https://github.com/Enabler-AS/JWT-generator/issues">Report Bug</a>
  </p>
  <br />

JWT generator allows you to generate JWT in an easy way!
<br/>
We created a form with inputs, so you can easly pass in the data and create a signature using HS256 algorithm.

  <p align="center">
  <img src="src/images/main.png" alt="JWT generator" />
  <br />
  <br />
   <a href="https://www.linkedin.com/company/enabler-as/">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white" />
  </a>
  <a href="https://twitter.com/spacedriveapp">
    <img src="https://img.shields.io/badge/Facebook-1877F2?logo=facebook&logoColor=white" />
  </a>
  <a href="https://www.instagram.com/enabler.no/" target="_blank" >
    <img src="https://img.shields.io/badge/Instagram-E4405F?logo=instagram&logoColor=white" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" />
</p>
</div>
</br>
<!-- ABOUT THE PROJECT -->

# What is JSON Web Token?

JSON Web Token is a token-based standard that allows us to securely transfer information between parties as a JSON object. The tokens are signed either using a private secret (HMAC algorithm) or a public/private key (RSA).

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

  </br>
<div align="center">
<img src='src/images/header.png' width="300px">
</div>

Then, this JSON is Base64Url encoded to form the first part of the JWT.

</div>

</br>

### Payload

<div id="payload">
The payload contains the claims, which are statements about an entity (usually user) and additional data.

</br>

<div align="center">
<img src='src/images/payload.png' width="300px">
</div>
The payload is then Base64Url encoded to form the second part of the JWT.
</div>

</br>

### Signature

<div id="signature">
The signature is created by signing the encoded header that is providing the algorithm, encoded payload with all the data and the secret (symmetric or asymetetric dependent on which algorithm is used).

</br>

<div align="center">
<img src='src/images/signature.png' width="300px">
</div>

The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message was’t changed in the way.

</div>

</br>

## When should we use JWT?

- Authentication
- Information Exchange

</br>

# Built With

Project was built with React.js and TypeScript

- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org)

<!-- CONTACT -->
</br>

# Contact

Enabler.no - [www.enabler.no](www.enabler.no)
</br>

Email - [post@enabler.no](post@enabler.no)
</br>

LinkedIn - [https://www.linkedin.com/company/enabler-as/](https://www.linkedin.com/company/enabler-as/)
</br>

Instagram - [https://www.instagram.com/enabler.no/](https://www.instagram.com/enabler.no/)
</br>

Facebook - [https://www.facebook.com/EnablerAS](https://www.facebook.com/EnablerAS)
</br>

<p align="right">(<a href="#top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/Enabler-AS/JWT-generator/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/Enabler-AS/JWT-generator/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/Enabler-AS/JWT-generator/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/Enabler-AS/JWT-generator/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/Enabler-AS/JWT-generator/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/enabler-as/
