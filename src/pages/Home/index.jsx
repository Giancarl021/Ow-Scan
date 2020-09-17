import React, { useState, useEffect } from 'react';
import './styles.css';

import Header from '../../components/Header';

const recommendations = [
    'Boku no Hero Academia',
    'Naruto Shippuden',
    'Dragon Ball Z',
    'Toradora',
    'Plastic Memories'
];

const Home = () => {
    const [recommendation, setRecommendation] = useState(0);

    useEffect(() => {
        const interval = setInterval(changeSponsor, 5000);
        return () => clearInterval(interval);

        function changeSponsor() {
            if (recommendation === recommendations.length - 1) return setRecommendation(0);
            setRecommendation(recommendation + 1);
        }
    }, [recommendation]);


    return (
        <>
            <Header />
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
                    {recommendations.map(r => <li key={r}>{r}</li>)}
                </ol>
            </section>
        </>
    );
};

export default Home;