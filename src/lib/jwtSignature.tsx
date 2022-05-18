import { SignJWT } from 'jose';
import { Buffer } from 'buffer';

const alg = 'HS256';

const symmetricSecret = (key: string) => {
  let secret = Buffer.from(key);
  const len = Math.max(parseInt(alg.substr(-3), 10) >> 3, secret.byteLength);
  const padded = new Uint8Array(len);
  padded.set(secret);
  return Promise.resolve(padded);
};

const jwtSignature = (data: any, setToken: any, selectedExpiryDate: string) => {
  const fetchKey = async () => {
    const symetricSecret = await symmetricSecret(data.secret);
    const token = await new SignJWT({
      name: data.name,
      company: data.company,
      roles: data.roles,
      aud: data.aud,
    })
      .setProtectedHeader({ alg: alg, typ: 'JWT' })
      .setExpirationTime(selectedExpiryDate)
      .sign(symetricSecret);

    console.log(token);
    setToken(token);
  };

  return fetchKey();
};

export default jwtSignature;
