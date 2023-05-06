import {Config} from "../application-config";

export interface MenuData {
  caption: string,
  disable: false,
  url: string,
  icon: string,
  newService: boolean,
  tracks: string,
  items?: MenuItem[];
}

export interface MenuItem {
  caption: string,
  disable: false,
  url: string,
  newService: boolean,
}
export interface ApplicationConfig {
  menuData?: MenuData[];
  systemName?: string;
  version?: string;
  siteUrl?: string;
  baseUrl: string;
  tfhUrl: string;
  redirectUrl: string;
  authenticationEndpoint: string;
  verifyEndpoint: string,
  logoutUrl: string;
  responseType: string,
  clientId: string;
  restTimeout: number;
  codeChallengeMethod: string;
  getToken: string;
  grantType: string;
  getUserNameUrl: string;
  getUserImageUrl: string;
  mainRoute: String
}

export class ApplicationConfig {
  public static config: ApplicationConfig = Config ;
}
