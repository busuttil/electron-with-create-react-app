import React from 'react';
import PropTypes from 'prop-types';
import './benefit.css';

const Sumary = ({ revenue, expenses, profit, brut, numberOfPatient }) => (
  <div>
    <h1 className="sidebar__content-title">Mon Compte</h1>
    <div className="sidebar__content-benefit">
      <div className="benefit-card">
        <span className="benefit-card__symbol">€</span>
        <span className="benefit-card__number">{brut}</span>
        <p className="benefit-card__info">Chiffre d'affaire</p>
      </div>
      <div className="benefit-card">
        <span className="benefit-card__symbol">€</span>
        <span className="benefit-card__number">{revenue}</span>
        <p className="benefit-card__info">Recette</p>
      </div>
      <div className="benefit-card">
        <span className="benefit-card__symbol">€</span>
        <span className="benefit-card__number">{expenses}</span>
        <p className="benefit-card__info">Charges du mois en cours</p>
      </div>
      <div className="benefit-card">
        <span className="benefit-card__symbol">€</span>
        <span className="benefit-card__number">{profit}</span>
        <p className="benefit-card__info">Bénéfice</p>
      </div>
      <div className="benefit-card">
        <span className="benefit-card__number">{numberOfPatient}</span>
        <p className="benefit-card__info">Nombre d'entretiens</p>
      </div>
    </div>
  </div>
);

Sumary.propTypes = {
  revenue: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  brut: PropTypes.number.isRequired,
  profit: PropTypes.number.isRequired,
  numberOfPatient: PropTypes.number.isRequired,
};

export default Sumary;
