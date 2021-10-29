import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import { Record } from '../types/interfaces'

interface RequestConfig extends AxiosRequestConfig {
    params: {
        offset: string | null;
    }
}

function getConfig(offset: string | null, base: string, table: string) {

    const url = `https://api.airtable.com/v0/${base}/${table}`

    return ({
        url: url,

        headers: {
            "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`,
            "Content-Type": "application/json"
        },

        params: {
            offset: offset
        }
    })
}

function useGetAirtableData(base: string, table: string) {

    const [data, setData] = useState<Record[]>([])

    const [offset, setOffset] = useState<string | null>(null)

    useEffect(() => {
        
        const config: RequestConfig = getConfig(offset, base, table)

        const fetchData = async () => {
            const result = await axios(config);

            setData(data => [...data, ...result.data.records])

            if (result.data.offset) {
                setOffset(result.data.offset);
            };
        }

        fetchData();

    }, [offset, base, table]);

    return data
}

export default useGetAirtableData