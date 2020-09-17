import React, { useState, useEffect } from 'react';
import { getRecommendations, getMostPopular } from '../../services/api';
import './styles.css';

const Home = () => {
    const [mostPopular, setMostPopular] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [recommendation, setRecommendation] = useState(0);

    useEffect(() => {
        getRecommendations().then(setRecommendations);
        getMostPopular().then(setMostPopular);
    }, []);

    useEffect(() => {
        const interval = setInterval(changeSponsor, 5000);
        return () => clearInterval(interval);

        function changeSponsor() {
            if (recommendation === recommendations.length - 1) return setRecommendation(0);
            setRecommendation(recommendation + 1);
        }
    }, [recommendations.length, recommendation]);


    return (
        <>
            <section className="hero is-primary recommended">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Recomendação</h1>
                        <h2 className="subtitle">{recommendations[recommendation]}</h2>
                    </div>
                </div>
            </section>
            <section className="section">
                <h1 className="title">Mais lidos</h1>
                <ol className="container">
                    {mostPopular.map(r => <li key={r}>{r}</li>)}
                </ol>
            </section>
        </>
    );
};

export default Home;