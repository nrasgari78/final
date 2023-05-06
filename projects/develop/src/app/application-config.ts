import {ApplicationConfig} from "./model/application-config-model";

export const Config: ApplicationConfig = {
  systemName : 'خدمات کارفرمایان',
  version: '1.3.1',
  siteUrl: 'http://localhost:8100/',
  baseUrl: 'https://eservices.tamin.ir/api/',
  tfhUrl: 'https://tfh.tamin.ir/api/v1.1/',
  redirectUrl: 'http://localhost:8100',
  authenticationEndpoint: 'https://account.tamin.ir/auth/server/authorize',
  verifyEndpoint: '',
  logoutUrl: 'https://account.tamin.ir/auth/signout',
  responseType: 'code',
  clientId: '2f613d5b2d911c8d7d78247037932a7d',
  restTimeout: 60000,
  codeChallengeMethod: 'S256',
  getToken: 'https://account.tamin.ir/auth/server/token',
  grantType: 'authorization_code',
  getUserNameUrl: 'https://eservices.tamin.ir/api/users/current-user',
  getUserImageUrl: 'https://eservices.tamin.ir/api/booklet-req/profile-image',
  mainRoute: 'folder'
}







