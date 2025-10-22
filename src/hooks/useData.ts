import apiClient from "@/services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";



interface FetchResponse<T> {
    results: T[];   // '/discover/movie' ka strukturen { "results": [...], "page": 1, ... } // => Fusha e filmave eshte 'results'
    genres: T[];    // '/genre/movie/list' ka strukturen { "genres": [...] } // => Fusha e kategorive eshte 'genres'
}

const useData =<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?:any[]) => {
  const [data, setData] = useState<T[]>([]);  
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
  
    useEffect( () => {
      const controller = new AbortController;
  
      setLoading(true);
      apiClient.get<FetchResponse<T>>(endpoint,  {signal: controller.signal, ...requestConfig }) 
      .then ((res) => {
        const receivedData = res.data.results || res.data.genres;

        if (receivedData) {
                setData(receivedData);
        } else {
            setData([]); 
        }
        setLoading(false);
      })
      .catch((err) => {
          if (err instanceof CanceledError ) return;
          setError(err.message);
          setLoading(false);
        })
  
      return() => controller.abort();
  
    }, deps? [...deps]: []);
  
    return {data, error, isLoading}; 
    console.log (data) 
};

export default useData;