import { useState, useEffect } from "react";

export const useHrInvite = () => {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));

                const requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow"
                };

                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}getHrRoundSeries`, requestOptions);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setSeries(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchLanguages();
    }, []);

    return { series, loading, error };
}
