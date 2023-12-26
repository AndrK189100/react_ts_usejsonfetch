import { useEffect, useState } from "react";

export default function useJsonFetch(url: string) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string|number|null>(null);

    useEffect(() => {
        (async() => {
            
            setLoading(true);
            
            const response = await fetch(url);            
            if(response.ok) {
                if((response.status - 200) >= 0 && (response.status - 200 < 100)) {
                    try {
                        const d = await response.json()
                        setData(d);
                    }
                    catch {
                            setError('unknown format');
                        }
                }
                else {
                    setError(response.status);
                }
            }
            else {
                setError(`${response.statusText}: ${response.status}`);
            }

            setLoading(false);
            
        } )();
    },[])

    return {data, loading, error}





}