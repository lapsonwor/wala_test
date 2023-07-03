import { GetServerSidePropsContext } from 'next';
// import { parseCookies } from 'nookies';
import { STORAGE_KEY } from './constants';
import { parseJson } from './utils';
import { useLogin } from "hooks/useLogin";

/* eslint-disable react-hooks/rules-of-hooks */
export function isAuthenticated(ctx: GetServerSidePropsContext) {
  // const cookies = parseCookies(ctx);
  const { token } = useLogin();
  if (!token) {
    return false;
  }
  return true;
}
