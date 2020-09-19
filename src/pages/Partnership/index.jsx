import React, { useState, useEffect } from 'react';
import { getPartnershipImages } from '../../services/api';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import './styles.css';

const Partnership = () => {
    const [partnershipImages, setPartnershipImages] = useState([]);
    const [isCopied, handleCopy] = useCopyToClipboard(3000);

    useEffect(() => {
        getPartnershipImages().then(setPartnershipImages);
    }, [partnershipImages.length]);

    function handleCopyLinkClick(image) {
        handleCopy(`<a href="http://www.ow-scan.com/" title="Ow Scan" target="_blank"><img src=${image} alt="Ow Scan" border="0"/></a>`);
    }

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
                        <img title="Ow Scan" key={i} className="level-item partner-link" src={src} alt="Ow Scan" border="0" onClick={() => handleCopyLinkClick(src)}/>
                    ))}
                </div>
            </section>
            <section className="section">
                <div className="notification has-text-centered is-success copied" style={{ opacity: isCopied ? '1' : '0' }}>HTML copiado</div>
            </section>
        </>
    );
};

export default Partnership;