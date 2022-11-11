import { FetchOptions } from "ohmyfetch";
import { tryCatch } from "~~/helpers/tryCatch";
import { alertsTypes, useAlerts } from "./useAlerts";
export async function useWrapFetch<response>(
  url: string,
  opts: FetchOptions = {},
  alertTypeWhenError: alertsTypes | null = "error"
) {
  if (!opts["headers"]) opts["headers"] = {};
  // const authHeader = `Bearer ${useToken().token.value}`;
  opts.headers = Object.assign(opts.headers, {
    ...(useRequestHeaders(["cookie"]) as HeadersInit),
    "Content-Type": "application/json",
  });

  //
  const config = useRuntimeConfig();
  if (!opts.baseURL) {
    opts.baseURL = config.public.baseURL;
  }
  opts.credentials = "include";
  console.log(opts.credentials);
  const theResponse = await tryCatch<response>(async () => $fetch(url, opts));
  if (alertTypeWhenError && theResponse.error) {
    // if (theResponse.error.response.status == 401) {
    //TODO: uncomment this? it depends on the backend

    // }
    useAlerts().setAlert(theResponse.error, alertTypeWhenError);
  }
  return theResponse;
}
