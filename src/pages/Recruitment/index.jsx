import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaWhatsapp, FaCalendar } from 'react-icons/fa';
import './styles.css';

import useIsValidEmail from '../../hooks/useIsValidEmail';
import { getRecruitmentOptions } from '../../services/api';

import RecruitmentOption from '../../components/RecruitmentOption';
import Mask from 'react-input-mask';

const Recruitment = () => {
    const [options, setOptions] = useState([]);
    const [option, setOption] = useState(null);
    const [variation, setVariation] = useState(null);

    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phrase, setPhrase] = useState('');
    const [alreadyParticipatedOnSCAN, setAlreadyParticipatedOnSCAN] = useState('');

    const [isValidEmail, setValidEmail] = useIsValidEmail();

    function handleEmailValidation(value) {
        setValidEmail(value);
        setEmail(value);
    }

    function resetForm() {
        setNickname('');
        setEmail('');
        setValidEmail('');
    }

    function submitForm() {
        // setSubmitted(true);
        resetForm();
    }

    useEffect(() => {
        getRecruitmentOptions().then(setOptions);
    }, []);

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
                    onClick={() => { setOption(opt); setVariation(null) }}
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
                                        <select onChange={event => setVariation(option.variations.values.find(v => v.title === event.target.value))} value={variation ? variation.title : ''}>
                                            <option value="" hidden>Selecione uma opção</option>
                                            {option.variations && option.variations.values.map((v, i) => (<option key={i} value={v.title}>{v.title}</option>))}
                                        </select>
                                    </div>
                                    {variation && variation.description && (<p className="help is-info">{variation.description}</p>)}
                                </div>
                            )
                        }
                        <div className="field">
                            <label className="label">Apelido<sup className="required-field">*</sup></label>
                            <div className="control has-icons-left">
                                <span className="icon is-small is-left">
                                    <FaUser />
                                </span>
                                <input className="input" type="text" placeholder="Ninja_destruidor19" onChange={event => setNickname(event.target.value)} value={nickname} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">E-Mail<sup className="required-field">*</sup></label>
                            <div className="control has-icons-left">
                                <span className="icon is-small is-left">
                                    <FaEnvelope />
                                </span>
                                <input className={'input' + (isValidEmail ? '' : ' is-danger')} type="email" placeholder="fulano@exemplo.com" onChange={event => setEmail(event.target.value)} value={email} onBlur={event => handleEmailValidation(event.target.value)} />
                            </div>
                            {isValidEmail || <p className="help is-danger">E-mail inválido</p>}
                        </div>
                        <div className="field">
                            <label className="label">WhatsApp<sup className="required-field">*</sup></label>
                            <div className="control has-icons-left">
                                <span className="icon is-small is-left">
                                    <FaWhatsapp />
                                </span>
                                <Mask mask="+99 (99) 9 9999-9999" maskPlaceholder={null} className="input" type="tel" placeholder="+55 (51) 9 4002-8922" onChange={event => setWhatsapp(event.target.value)} value={whatsapp} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Data de Nascimento</label>
                            <div className="control has-icons-left">
                                <span className="icon is-small is-left">
                                    <FaCalendar />
                                </span>
                                <input className="input" type="date" onChange={event => setBirthDate(event.target.value)} value={birthDate} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Frase</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Steins;Gate melhor anime!" onChange={event => setPhrase(event.target.value)} value={phrase} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Já participei de uma SCAN<sup className="required-field">*</sup></label>
                            <div className="control">
                                <label className="radio">
                                    <input type="radio" name="scan" onChange={() => setAlreadyParticipatedOnSCAN('true')} value={alreadyParticipatedOnSCAN} /> Sim
                                </label>
                                <label className="radio">
                                    <input type="radio" name="scan" onChange={() => setAlreadyParticipatedOnSCAN('false')} value={alreadyParticipatedOnSCAN} /> Não
                                </label>
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-primary" disabled={!(nickname && email && isValidEmail && whatsapp.replace(/\D/g, '').length === 13 && alreadyParticipatedOnSCAN !== '')} onClick={submitForm}>Enviar</button>
                            </div>
                            <div className="control">
                                <button className="button is-danger" onClick={resetForm}>Cancelar</button>
                            </div>
                        </div>
                    </section>
                )
            }
        </>
    );
};

export default Recruitment;