import React from 'react';
import '../../index.css';
import './Footer.css';

function Footer({ nodesLanguage }) {
  return (
    <footer>{nodesLanguage.madeBy} Erick Riaño</footer>
  );
}

export { Footer };