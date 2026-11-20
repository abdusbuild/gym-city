"use client";

import { useState, type FormEvent } from "react";

type Result = { bmi: number; label: string; color: string; pct: number };

function classify(bmi: number): Result {
  // Map BMI 12–40 onto the meter so the pin lands in the matching coloured band
  if (bmi < 18.5) return { bmi, label: "Underweight: our weight-gain program can help.", color: "#60a5fa", pct: ((bmi - 12) / 6.5) * 22 };
  if (bmi < 25) return { bmi, label: "Healthy range: let's build strength and keep it that way.", color: "#22c55e", pct: 22 + ((bmi - 18.5) / 6.5) * 28 };
  if (bmi < 30) return { bmi, label: "Overweight: a weight-loss plan will get you back on track.", color: "#fbbf24", pct: 50 + ((bmi - 25) / 5) * 22 };
  return { bmi, label: "Obese range: talk to a trainer about a safe fat-loss plan.", color: "#f97316", pct: 72 + ((bmi - 30) / 10) * 28 };
}

export default function Bmi() {
  const [h, setH] = useState("");
  const [w, setW] = useState("");
  const [err, setErr] = useState({ h: false, w: false });
  const [res, setRes] = useState<Result | null>(null);
  const [msg, setMsg] = useState("Enter your height and weight");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const hv = parseFloat(h);
    const wv = parseFloat(w);
    const bad = { h: !(hv >= 100 && hv <= 250), w: !(wv >= 25 && wv <= 300) };
    setErr(bad);
    if (bad.h || bad.w) {
      setMsg("Enter a height between 100 and 250 cm and a weight between 25 and 300 kg.");
      return;
    }
    const r = classify(wv / Math.pow(hv / 100, 2));
    setRes(r);
    setMsg(r.label);
  };

  return (
    <form className="bmi__card pop" onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor="h">Height (cm)</label>
        <input id="h" type="number" inputMode="decimal" placeholder="e.g. 172" value={h} onChange={(e) => setH(e.target.value)} className={err.h ? "err" : undefined} />
      </div>
      <div className="field">
        <label htmlFor="w">Weight (kg)</label>
        <input id="w" type="number" inputMode="decimal" placeholder="e.g. 70" value={w} onChange={(e) => setW(e.target.value)} className={err.w ? "err" : undefined} />
      </div>
      <button className="btn btn--gold btn--block" type="submit">Calculate BMI</button>
      <div className="bmi__result" aria-live="polite">
        <div className="bmi__val" style={res ? { color: res.color } : undefined}>{res ? res.bmi.toFixed(1) : "--.-"}</div>
        <div className="bmi__msg">{msg}</div>
        <div className="bmi__meter">
          <span className={res ? "show" : undefined} style={{ left: `${res ? Math.max(2, Math.min(98, res.pct)) : 0}%` }} />
        </div>
      </div>
    </form>
  );
}
