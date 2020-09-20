import React, { useState, useEffect, useCallback } from 'react';
import { FaUser, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import useIsValidEmail from '../../hooks/useIsValidEmail';
import './styles.css';
import { getRecruitmentOptions } from '../../services/api';

import RecruitmentOption from '../../components/RecruitmentOption';

const Recruitment = () => {
    const [options, setOptions] = useState([]);
    const [option, setOption] = useState(null);
    const [variation, setVariation] = useState(null);
    const [variationOption, setVariationOption] = useState('')
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [isValidEmail, setValidEmail] = useIsValidEmail();

    function handleEmailValidation(value) {
        setValidEmail(value);
        setEmail(value);
    }

    useEffect(() => {
        getRecruitmentOptions().then(setOptions);
    }, []);

    const handleVariationOption = useCallback(value => {
        setVariationOption(value);
        setVariation(option && option.variations.values.find(v => typeof v === 'string' ? v === value : v.title === value));
    }, [option]);

    return (
        <>
            <section className="section">
                <h1 className="title">Recrutamento</h1>
                <h2 className="subtitle">
                    Junte-se a nós!
                    <br />
                    Escolha uma das opções abaixo e preencha o formulário:
                </h2>
            </section>
            {options.map((opt, i) => (
                <RecruitmentOption
                    key={i}
                    name={opt}
                    state={option}
                    title={opt.title}
                    description={opt.description}
                    color={opt.color}
                    onClick={() => { setOption(opt); setVariation('') }}
                />
            ))}
            {
                option &&
                (
                    <section className="section">
                        {
                            option.variations &&
                            (
                                <div className="field">
                                    <label className="label">{option.variations.title}</label>
                                    <div className="select">
                                        <select onChange={event => handleVariationOption(event.target.value)} value={variationOption}>
                                            <option value="" hidden>Selecione uma opção</option>
                                            {option.variations && option.variations.values.map((v, i) => {
                                                const val = typeof v === 'string' ? v : v.title;
                                                return (<option key={i} value={val}>{val}</option>);
                                            })}
                                        </select>
                                    </div>
                                    {typeof variation === 'object' && (<p className="help is-info">{variation.description}</p>)}
                                </div>
                            )
                        }
                        <div className="field">
                            <label className="label">Apelido</label>
                            <div className="control has-icons-left">
                                <span className="icon is-small is-left">
                                    <FaUser />
                                </span>
                                <input className="input" type="text" placeholder="Ninja_destruidor19" onChange={event => setNickname(event.target.value)} value={nickname} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">E-Mail</label>
                            <div className="control has-icons-left">
                                <span className="icon is-small is-left">
                                    <FaEnvelope />
                                </span>
                                <input className={'input' + (isValidEmail ? '' : ' is-danger')} type="email" placeholder="fulano@exemplo.com" onChange={event => setEmail(event.target.value)} value={email} onBlur={event => handleEmailValidation(event.target.value)} />
                            </div>
                            {isValidEmail || <p className="help is-danger">E-mail inválido</p>}
                        </div>
                        <div className="field">
                            <label className="label">WhatsApp</label>
                            <div className="control has-icons-left">
                                <span className="icon is-small is-left">
                                    <FaWhatsapp />
                                </span>
                                <input className="input" type="tel" placeholder="+55 (51) 9 4002-8922" onChange={event => setNickname(event.target.value)} value={nickname} />
                            </div>
                        </div>
                    </section>
                )
            }
        </>
    );
};

export default Recruitment;