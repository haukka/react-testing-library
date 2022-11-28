import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface AxiosLink {
    url: string
}

const useAxios = (url: string, setData: any) => {
    useEffect(
        () => {
            let mounted = true;

            const loadData = async () => {
                const result = await axios.get(url);
                if (mounted) {
                    setData(result.data);
                }
            };
            loadData();

            return () => {
                mounted = false;
            };
        },
        [url]
    );
};

const Fetch = ({ url }: AxiosLink) => {
    const [data, setData] = useState({ greeting: '' });

    useAxios(url, setData);

    if (!data) {
        return <span data-testid="loading">Loading data...</span>;
    }

    return <span data-testid="resolved">{data.greeting}</span>;
};

export default Fetch;