import { Buffer } from 'buffer';

const atob = (encodedSecret: string) => {
  const secret = Buffer.from(encodedSecret, 'base64').toString('binary');
  return secret;
};

export default atob;
