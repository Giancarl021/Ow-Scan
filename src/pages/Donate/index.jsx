import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import { getSponsors, getPagSeguroLink } from '../../services/api'

const Donate = () => {
    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        getSponsors().then(setSponsors);
    }, []);

    async function handlePagSeguroRedirectUri() {
        const uri = await getPagSeguroLink();
        window.open(uri, '_blank');
    }

    return (
        <>
            <section className="section">
                <h1 className="title">Doar</h1>
                <h2 className="subtitle">
                    Muito obrigado pelo interesse em nosso trabalho!
                    <br />
                    Se possuir interesse em doar qualquer valor, você poderá usar a segurança do <a href="https://pagseguro.uol.com.br/" target="_blank" rel="noopener noreferrer">PagSeguro</a> para cuidar das transações.
                    <br />
                    Se desejar utilizar outro meio de pagamento, você pode usar a guia <Link to="/contato">contato</Link> para conversarmos.
                </h2>
                <article className="message is-info">
                    <div className="message-header">O que fazemos com o seu dinheiro</div>
                    <div className="message-body">
                        Tudo o que for doado a nós será convertido em infraestrutura, armazenagem e backups, para mantermos o melhor para vocês sempre!
                    </div>
                </article>
            </section>
            <section className="section container">
                <button className="button btn-stretch is-primary" onClick={handlePagSeguroRedirectUri}>Doar com PagSeguro</button>
            </section>
            <section className="section">
                <h2 className="subtitle"><b>Últimos 5 doadores:</b></h2>
                <div className="container">
                    <ol>
                        {sponsors.slice(0, 5).map((s, i) => (<li key={i}>{s}</li>))}
                    </ol>
                </div>
            </section>
        </>
    );
};

export default Donate;