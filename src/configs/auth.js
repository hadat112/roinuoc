import ApiClient from '@/configs/ApiClient';

const AUTH_API = process.env.NEXT_PUBLIC_AUTH_URL;
const api = new ApiClient(AUTH_API).getInstance();

export const getTokenId = () => {
  const accessTokenObj = JSON.parse(localStorage.getItem('ghtk-token-storage') || '{}');
  const accessToken =
    Object.keys(accessTokenObj).length > 0 ? accessTokenObj?.accessToken?.accessToken : null;
  return accessToken;
};

export const login = (nextFn = () => {}) => {
  try {
    api.get('/login');
    nextFn();
  } catch (e) {
    // console.log(e);
    // Handle exception here
    // logout();
  }
};

export const callback = async (nextFn) => {
  try {
    // Login successfully
    nextFn();
  } catch (e) {
    // console.log(e);
    // Handle exception here
    // logout();
  }
};

export const logout = async () => {
  try {
    // const ghtkAuth = new GhtkAuth(config.oidc);
    // await ghtkAuth.signOut({
    //     revokeAccessToken: true,
    //     postLogoutRedirectUri: `${config.oidc.authnUrl}/sign-out?continue=${config.appUrl}`,
    // });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};
