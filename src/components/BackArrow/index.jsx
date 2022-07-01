import React, { useState } from 'react';
import { ArrowLeft } from 'phosphor-react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

function BackArrow() {
  const navigate = useNavigate();

  return (
    <button id="back-btn" type="button" onClick={() => navigate(-1)}>
      <ArrowLeft size={38} color="white" weight="bold" />
    </button>
  );
}

export default BackArrow;
