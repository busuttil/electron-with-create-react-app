import React from 'react';

import { cfe, impot, social } from '../../utils/config';
import './fixed-charges.css';

const FixedCharges = () => (
  <div className="fixed-charges">
    <h3 className="fixed-charges__title">Charges fixes</h3>
    <ul className="fixed-charges__list">
      <li className="fixed-charges__list-item">
        <span>CFP</span>: {cfe}%
      </li>
      <li className="fixed-charges__list-item">
        <span>Impôts</span>: {impot}%
      </li>
      <li className="fixed-charges__list-item">
        <span>Cotisations sociales</span>: {social}%
      </li>
    </ul>
  </div>
);

export default FixedCharges;
