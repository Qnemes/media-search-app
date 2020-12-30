import { useState, useEffect, useRef } from "react";
import axios from 'axios'

const useFetch = (initialUrl, initialData) => {
    const cache = useRef([]);
    const [response, setResponse] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let cancelRequest = false;     // cleanup after each component unmounting
        if (!url) return;              // ignoring initial render || empty query
        (async () => {
            setIsError(false);
            setIsLoading(true);
            if (cache.current[url]) {
                setIsLoading(true);
                const result = cache.current[url];
                setResponse(result.data);
                setIsLoading(false);
            } else {
                try {
                    const result = await axios.get(url, {
                        params: {
                            per_page: 40,
                            safesearch: true,
                            orientation: 'all',
                            image_type: 'all'
                        }
                    });
                    cache.current[url] = result;
                    if (!cancelRequest) {
                        setResponse(result.data);
                    }
                } catch (error) {
                    if (!cancelRequest) {
                        console.log(error)
                        setIsError(true);
                    }
                }
                setIsLoading(false);
            }
        })()
        return () => {
            cancelRequest = true;
        }
    }, [url]);
    console.log(cache);
    return [{ response, isError, isLoading }, setUrl];
}

export default useFetch;
