import { AxiosError } from 'axios';
import { stringify } from 'query-string';
import useSWR, { Key, SWRConfiguration, SWRResponse } from 'swr';

import api from 'lib/services/api';

export type Config<Data, Error = AxiosError> = SWRConfiguration<Data, Error> & {
  params?: unknown;
};
export type Response<Data, Error = AxiosError> = SWRResponse<Data, Error> & {
  loading: boolean;
};

export function useFetch<Data, Error = AxiosError>(
  url: Key,
  config?: Config<Data, Error> | undefined
): Response<Data, Error> {
  const { data, error, mutate, isValidating, revalidate } = useSWR<Data, Error>(
    url !== null && config?.params
      ? `${url}?${stringify(config.params as Record<string, string>)}`
      : url,
    {
      ...config,
      revalidateOnFocus: config?.revalidateOnFocus || false,
      shouldRetryOnError: false,
      fetcher:
        config?.fetcher ||
        (async () => {
          const { data } = await api.get(url as string, {
            params: config?.params,
          });

          return data;
        }),
    }
  );

  return {
    loading: (!error && !data) || isValidating,
    data: data,
    error,
    mutate,
    isValidating,
    revalidate,
  };
}
