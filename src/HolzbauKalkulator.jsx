import { useState } from "react";

export default function HolzbauKalkulator() {
  const [input, setInput] = useState({
    flaeche: "",
    geschosse: "",
    dachform: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const grundflaeche = parseFloat(input.flaeche) || 0;
    const geschosse = parseInt(input.geschosse) || 1;

    const holzmenge = (grundflaeche * geschosse * 0.065).toFixed(2);
    const planungszeit = Math.round(grundflaeche * 0.9 + geschosse * 15);
    const kosten = Math.round(planungszeit * 85);

    setResult({ holzmenge, planungszeit, kosten });
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h2>Testtool: Holzbau-Kalkulation</h2>
      <div>
        <input name="flaeche" type="number" placeholder="Bruttogrundfläche in m²" value={input.flaeche} onChange={handleChange} />
        <input name="geschosse" type="number" placeholder="Anzahl Geschosse" value={input.geschosse} onChange={handleChange} />
        <input name="dachform" type="text" placeholder="Dachform (z. B. Satteldach)" value={input.dachform} onChange={handleChange} />
        <button onClick={handleSubmit}>Berechnen</button>
      </div>
      {result && (
        <div>
          <p>Geschätzte Holzmenge: <strong>{result.holzmenge} m³</strong></p>
          <p>Planungszeit: <strong>{result.planungszeit} Stunden</strong></p>
          <p>Planungskosten: <strong>{result.kosten} €</strong></p>
        </div>
      )}
    </div>
  );
}