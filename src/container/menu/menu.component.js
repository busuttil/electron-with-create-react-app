import React from 'react';
import FilterTable from '../../component/filterTable/filterTable.connector';
import GeneratePdf from '../../component/generatePdf/generatePdf.connector';
import Firebase from '../../component/firebase/firebase.connector';

import './menu.css';

const Menu = () => (
  <div className="menu">
    <FilterTable />
    <div className="menu__export-pdf">
      <GeneratePdf />
    </div>
    <div className="menu__save">
      <Firebase />
    </div>
  </div>
);

export default Menu;
