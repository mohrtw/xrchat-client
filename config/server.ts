export const apiServer: string = process.env.API_SERVER_URL
  ? process.env.API_SERVER_URL
  : 'http://localhost:3030'
export const siteTitle: string = 'XRChat'
export const siteDescription: string = 'Connected Worlds for Everyone'
export const featherStoreKey = 'XRChat-Auth-Store';
export const localStorageKey = 'xrchat-client-store-key-v1';