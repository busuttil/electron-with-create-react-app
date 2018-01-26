import React from 'react';
import FilterTable from '../../component/filterTable/filterTable.connector';
import GeneratePdf from '../../component/generatePdf/generatePdf.connector';
import './menu.css';

const Menu = () => (
  <div className="menu">
    <FilterTable />
    <div className="menu__export-pdf">
      <GeneratePdf />
    </div>
  </div>
);

export default Menu;
