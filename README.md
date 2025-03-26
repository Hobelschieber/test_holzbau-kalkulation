# Holzbau Kalkulator

Ein einfaches React-Tool zur Schätzung von Holzmenge, Planungszeit und Planungskosten basierend auf Projektparametern wie Grundfläche und Geschossanzahl.

## 🔧 Funktionen

- Eingabe von Bruttogrundfläche, Geschossanzahl und Dachform
- KI-ähnliche Schätzung von:
  - Holzmenge in m³
  - Planungszeit in Stunden
  - Planungskosten in Euro
- Sofortige Ausgabe nach Eingabe
- Lokal oder online (Vercel) einsetzbar

## 🚀 Lokale Nutzung

```bash
npm install
npm run dev
```

Dann im Browser öffnen: [http://localhost:5173](http://localhost:5173)

## 🌐 Online-Veröffentlichung

1. Forke das Repository auf GitHub
2. Verbinde es mit [https://vercel.com](https://vercel.com)
3. Deploy mit wenigen Klicks

## 📂 Struktur

- `src/HolzbauKalkulator.jsx` – Hauptkomponente mit Logik
- `src/main.jsx` – Einstiegspunkt
- `index.html` – HTML-Container