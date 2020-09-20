import React from 'react';
import './styles.css';

const RecruitmentOption = ({ name, state, title, description, onClick, color }) => {
    return (
        <div className={`hero is-${color} recruitment-option ${state === name ? ' recruitment-option-selected' : ''}`} onClick={onClick}>
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">{title}</h1>
                    <h2 className="subtitle">{description}</h2>
                </div>
            </div>
        </div>
    )
};

export default RecruitmentOption;