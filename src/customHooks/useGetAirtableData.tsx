import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface RequestConfig extends AxiosRequestConfig {
  params: {
    offset: string | null;
  };
}

interface AirtableData<T> {
    fields: T;
    id: string;
    createdTime: string;
}

function getConfig(offset: string | null, base: string, table: string) {
  const url = `https://api.airtable.com/v0/${base}/${table}`;
  return {
    url: url,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      "Content-Type": "application/json",
    },
    params: {
      offset: offset,
    },
  };
}

export function useGetAirtableData<T>(
  base: string,
  table: string
): [AirtableData<T>[], boolean] {
  const [data, setData] = useState<AirtableData<T>[]>([]);
  const [offset, setOffset] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const config: RequestConfig = getConfig(offset, base, table);
    const fetchData = async () => {
      const result = await axios(config);
      setData((data) => [...data, ...result.data.records]);
      if (result.data.offset) {
        setOffset(result.data.offset);
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [offset, base, table]);
  return [data, isLoading];
}
