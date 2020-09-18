import React, { useState, useEffect } from 'react';
import { getPartnershipImages } from '../../services/api'
import { Link } from 'react-router-dom';
import './styles.css';

const Partnership = () => {
    const [partnershipImages, setPartnershipImages] = useState([]);

    useEffect(() => {
        getPartnershipImages().then(setPartnershipImages);
    }, [partnershipImages.length]);

    return (
        <>
            <section className="section">
                <h1 className="title">Parceria</h1>
                <article className="message is-info">
                    <div className="message-header">Regras</div>
                    <div className="message-body">
                        <ul className="rules">
                            <li>Não aceitamos parceiros com conteúdo pornográfico</li>
                            <li>O conteúdo deve ser mantido atualizado</li>
                            <li>O conteúdo deve ser voltado para anime ou mangá</li>
                        </ul>
                        <br />
                        <b>Ressalvas</b>
                        <ul className="rules">
                            <li>Aceitamos Ecchi, Yuri e Yaoi</li>
                            <li>Não é necessário um número diário de visitantes</li>
                        </ul>
                    </div>
                </article>
            </section>
            <section className="section">
                <h1 className="subtitle">Escolha um dos elementos abaixo para incorporar ao seu site/blog e contate-nos com as suas informações:</h1>
                <div className="level img-links">
                        {partnershipImages.map((src, i) => (
                            <img key={i} className="level-item" src={src} alt="Ow Scan" border="0" />
                        ))}
                </div>
            </section>
        </>
    );
};

export default Partnership;