import React, { useState } from "react";
import "./style.css";
import styled from "styled-components";

const Tti = styled.h1`
  text-align: center;
`;

export default function App() {
  const [valueTomeg, setValueTomeg] = useState();
  let tomeg = parseInt(valueTomeg);

  const [valueMagassag, setValueMagassag] = useState();
  let magassag = parseInt(valueMagassag);
  let magassagM = magassag / 100;

  let tti = (tomeg / magassagM / magassagM).toFixed(2);

  function appear() {
    if (tti < 18.5) {
      return <h1 className="text-warning">Sovány</h1>;
    } else if (tti >= 18.5 && tti <= 25) {
      return <h1 className="text-success">Normál</h1>;
    } else return <h1 className="text-danger">Túlsúlyos</h1>;
  }

  return (
    <div>
      <h1>Testtömeg (kg) </h1>
      <div className="input-group flex-nowrap">
        <input
          type="text"
          value={valueTomeg}
          class="form-control"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={e => setValueTomeg(e.target.value)}
        />
      </div>
      <div>
        <h1>Magasság (cm) </h1>
        <div className="input-group flex-nowrap">
          <input
            type="text"
            value={valueMagassag}
            class="form-control"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            onChange={e => setValueMagassag(e.target.value)}
          />
        </div>
        <Tti onChange={appear}>{tti}</Tti>
        {appear}
      </div>
    </div>
  );
}
