import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NotFound = ({ errorCode = 404, message = 'Parece que não há nada por aqui...' }) => (
    <>
        <section className="hero is-danger recommended">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Erro {errorCode}</h1>
                    <h2 className="subtitle">{message}</h2>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <Link to="/" className="button is-primary">Voltar à Home</Link>
            </div>
        </section>
    </>
);

export default NotFound;