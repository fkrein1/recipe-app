import React, { useState } from 'react';
import { Export } from 'phosphor-react';
import './styles.scss';

function ShareButton() {

  function handleShareBtn() {
    navigator.clipboard.writeText(
      window.location.href.replace('/in-progress', ''),
    );
  }

  return (
    <button
      id="share-btn"
      type="button"
      onClick={ handleShareBtn }
    >
      <Export size={ 40 } color="#7A7AC7" alt="share icon" />
    </button>
  );
}

export default ShareButton;
