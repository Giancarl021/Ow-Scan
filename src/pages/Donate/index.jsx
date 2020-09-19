import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Donate = () => {

    return (
        <>
            <section className="section">
                <h1 className="title">Doar</h1>
                <h1 className="subtitle">
                    Muito obrigado pelo interesse em nosso trabalho!
                    <br />
                    Se possuir interesse em doar qualquer valor, você poderá usar a segurança do <a href="https://pagseguro.uol.com.br/" target="_blank" rel="noopener noreferrer">PagSeguro</a> para cuidar das transações.
                    <br />
                    Se desejar utilizar outro meio de pagamento, você pode usar a guia <Link to="/contato">contato</Link> para conversarmos.
                </h1>
                <article className="message is-info">
                    <div className="message-header">O que fazemos com o seu dinheiro</div>
                    <div className="message-body">
                        Tudo o que for doado a nós será convertido em infraestrutura, armazenagem e backups, para mantermos o melhor para vocês sempre!
                    </div>
                </article>
            </section>
            <section className="section container">
                <button className="button btn-stretch is-primary">Doar com PagSeguro</button>
            </section>
        </>
    );
};

export default Donate;