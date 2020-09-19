import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaTag } from 'react-icons/fa';
import './styles.css';

const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [isValidEmail, setValidEmail] = useState(true);
    const [isSubmitted, setSubmitted] = useState(false);

    function validateEmail(value) {
        if (!value || mailRegex.test(value)) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }

        setEmail(value);
    }

    function resetForm() {
        setName('');
        setEmail('');
        setValidEmail(true);
        setSubject('');
        setMessage('');
    }

    function submitForm() {
        setSubmitted(true);
        resetForm();
    }

    return (
        <section className="section">
            <h1 className="title">Contato</h1>
            <article className="message is-info">
                <div className="message-header">Servidor do Discord</div>
                <div className="message-body">
                    Você pode entrar no nosso servidor do Discord por <a href="https://discord.gg/Fs8rcbW" target="_blank" rel="noopener noreferrer">este link</a> ou pelo ícone no menu superior.
                    </div>
            </article>
            <div className="field">
                <label className="label">Nome</label>
                <div className="control has-icons-left">
                    <span className="icon is-small is-left">
                        <FaUser />
                    </span>
                    <input className="input" type="text" placeholder="Fulano de Tal" onChange={event => setName(event.target.value)} value={name} />
                </div>
            </div>
            <div className="field">
                <label className="label">E-Mail</label>
                <div className="control has-icons-left">
                    <span className="icon is-small is-left">
                        <FaEnvelope />
                    </span>
                    <input className={'input' + (isValidEmail ? '' : ' is-danger')} type="email" placeholder="fulano@exemplo.com" onChange={event => setEmail(event.target.value)} value={email} onBlur={event => validateEmail(event.target.value)} />
                </div>
                <p className="help is-danger" style={{ display: isValidEmail ? 'none' : 'block' }}>E-mail inválido</p>
            </div>
            <div className="field">
                <label className="label">Assunto</label>
                <div className="control has-icons-left">
                    <span className="icon is-small is-left">
                        <FaTag />
                    </span>
                    <input className="input" type="text" placeholder="Dúvida sobre o mangá tal" onChange={event => setSubject(event.target.value)} value={subject} />
                </div>
            </div>
            <div className="field">
                <label className="label">Mensagem</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Qual o sentido da vida?" onChange={event => setMessage(event.target.value)} value={message} />
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-primary" disabled={!(name && email && isValidEmail && subject && message)} onClick={submitForm}>Enviar</button>
                </div>
                <div className="control">
                    <button className="button is-danger" onClick={resetForm}>Cancelar</button>
                </div>
            </div>
            <div className="notification has-text-centered is-success form-submitted" style={{ opacity: isSubmitted ? '1' : '0' }}>Formulário Enviado!</div>
        </section>
    );
};

export default Contact;