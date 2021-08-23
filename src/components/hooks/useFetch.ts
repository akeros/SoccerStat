import { useEffect, useState } from 'react';

interface IFetch<T> {
  isLoaded: boolean;
  error: Error | null;
  data: T;
  retry(): void;
}

const basicUrl = "https://api.football-data.org/v2/"
const requestOptions: RequestInit = {
  method: 'GET',
  headers: {
    "X-Auth-Token": "32491c9952d44cbcbd0ccf0b2e6a2d23",
  },
  mode: 'cors'
};

export default function useFetch<T>(url: string): IFetch<T> {
  const [isLoaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<any>(undefined);

  const getFetch = () => {
    setError(null);
    setLoaded(false);
    fetch(basicUrl + url, requestOptions)
      .then((response: Response) => {
        if (response.status === 200) {
          return response;
        }

        throw new Error(`${response.status}`);
      })
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => {
        setError(error);
      })
      .finally(() => setLoaded(true));
  }

  const retry = () => {
    getFetch();
  }

  useEffect(() => {
   getFetch();
  }, []);

  return {
    isLoaded,
    error,
    data,
    retry,
  };
};
