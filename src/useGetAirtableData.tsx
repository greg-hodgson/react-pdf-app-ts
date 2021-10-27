import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface Record {
    id: string;
    fields: [];
    createdTime: string;
}

interface RequestConfig extends AxiosRequestConfig {
    params: {
        offset: string | null;
    }
}

function useGetAirtableData(base: string | undefined, table: string) {

    const url = `https://api.airtable.com/v0/${base}/${table}`

    const [data, setData] = useState<Record[]>([])

    const [offset, setOffset] = useState<string | null>(null)

    useEffect(() => {

        const config: RequestConfig =
        {
            url: url,

            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
                "Content-Type": "application/json"
            },

            params: {
                offset: offset
            }
        }

        const fetchData = async () => {
            const result = await axios(config);
            const rawData: Record[] = result.data.records;
            rawData.forEach(record => {
                setData((data) => [...data, record])
            })
            
            if (result.data.offset) {
                setOffset(result.data.offset);
            }

        }
        
        fetchData();

    }, [url, offset]);

    return data
}

export default useGetAirtableData