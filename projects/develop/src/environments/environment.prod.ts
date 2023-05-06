export const environment = {
  production: true,
  version: '1.3.1',
  siteUrl: 'https://hamrah.tamin.ir/pwa/',
  baseUrl: 'https://eservices.tamin.ir/api/',
  tfhUrl: 'https://tfh.tamin.ir/api/v1.1/',
  redirectUrl: 'https://hamrah.tamin.ir/pwa',
  authenticationEndpoint: 'https://account.tamin.ir/auth/server/authorize',
  verifyEndpoint: '',
  logoutUrl: 'https://account.tamin.ir/auth/signout',
  responseType: 'code',
  clientId: '198520078b214a14817a0523560f1726',
  restTimeout: 60000,
  codeChallengeMethod: 'S256',
  getToken: 'https://account.tamin.ir/auth/server/token',
  grantType: 'authorization_code',
  getUserNameUrl: 'https://eservices.tamin.ir/api/users/current-user',
  getUserImageUrl: 'https://eservices.tamin.ir/api/booklet-req/profile-image'
};



/* export const environment = {
  production: true,
  version: '1.2.10',
  siteUrl: 'https://eservices-test.tamin.ir/pwa/',
  baseUrl: 'https://eservices-test.tamin.ir/api/',
  tfhUrl: 'https://tfh.tamin.ir/api/v1.1/',
  redirectUrl: 'https://eservices-test.tamin.ir/pwa',
  authenticationEndpoint: 'https://account.tamin.ir/auth/server/authorize',
  verifyEndpoint: '',
  logoutUrl: 'https://account.tamin.ir/auth/signout',
  responseType: 'code',
  clientId: '3149837c4686344e144a2b6103178a11',
  restTimeout: 60000,
  codeChallengeMethod: 'S256',
  getToken: 'https://account.tamin.ir/auth/server/token',
  grantType: 'authorization_code',
  getUserNameUrl: 'https://eservices-test.tamin.ir/api/users/current-user',
  getUserImageUrl: 'https://eservices-test.tamin.ir/api/booklet-req/profile-image'
}; */