import * as md5 from 'md5';
import { environment } from '../environments/environment';

export const getAuthorization = () => {
  const ts = Date.now().toString();
  const hash = md5(ts + environment.secretKey + environment.publicKey);
  return [ts, hash, environment.publicKey];
};
