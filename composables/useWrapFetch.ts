import { type FetchOptions } from 'ohmyfetch';

import { type alertsTypes, useAlerts } from './useAlerts';
export async function useWrapFetch<response>(
  url: string,
  opts: FetchOptions = {},
  alertTypeWhenError: alertsTypes | null = 'error',
) {
  if (!opts.headers) {
    opts.headers = {};
  }
  // const authHeader = `Bearer ${useToken().token.value}`;
  opts.headers = Object.assign(opts.headers, {
    ...(useRequestHeaders(['cookie']) as HeadersInit),
    'Content-Type': 'application/json',
  });

  //
  const config = useRuntimeConfig();

  if (!opts.baseURL) {
    opts.baseURL = config.public.EXTERNAL_API_URL;
  }
  opts.credentials = 'include';

  const theResponse = await useFetch<response>(url, opts as any);

  if (alertTypeWhenError && theResponse.error.value?.message) {
    // if (theResponse.error.response.status === 401) {
    // TODO: uncomment this? it depends on the backend

    // }
    useAlerts().setAlert(theResponse.error.value?.message, alertTypeWhenError);
  }
  return theResponse;
}
