import React, { useState } from 'react';
import { ShareNetwork } from 'phosphor-react';
import './styles.scss';

function ShareButton() {
  const [copied, setCopied] = useState(false);

  function handleShareBtn() {
    navigator.clipboard.writeText(
      window.location.href.replace('/in-progress', ''),
    );
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }

  return (
    <button id="share-btn" type="button" onClick={handleShareBtn}>
      <ShareNetwork
        size={35}
        color="#7A7AC7"
        alt="share icon"
        weight={`${copied ? 'fill' : 'regular'}`}
      />
    </button>
  );
}

export default ShareButton;
