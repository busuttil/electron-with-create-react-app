import React from 'react';
import FilterTable from '../../component/filterTable/filterTable.connector';
import GeneratePdf from '../../component/generatePdf/generatePdf.connector';
import './menu.css';

const Menu = () => (
  <div className="menu">
    <FilterTable />
    <GeneratePdf />
  </div>
);

export default Menu;
