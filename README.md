# Miro Lacoste — Portfolio Website

Persönliche Portfolio-Website von Mir

## Inhalt

- **Über mich** — Kurze Vorstellung, Hobbys und Fakten
- **Games** — Paar spiele die ich spiele mit einer API ding für gw2
- **Bereiste Länder** — Interaktive Weltkarte mit markierten Ländern
- **Kontakt** — GitHub und weitere Links

## Technologien

- HTML5
- CSS3 (Custom Properties, Animationen, Grid)
- Vanilla JavaScript

## Länder hinzufügen

In der Datei `index.html` findest du folgendes Array:

```js
const visitedCountries = [
  { id: 'CH', name: 'Schweiz',     flag: '🇨🇭' },
  { id: 'DE', name: 'Deutschland', flag: '🇩🇪' },
  // weitere Länder hier einfügen...
];
```

Einfach eine neue Zeile mit dem ISO-Code des Landes hinzufügen.
ISO-Codes findest du hier: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

## Geplante Erweiterungen

- [ ] Guild Wars 2 API — Live-Account-Daten
- [ ] Overwatch Stats
- [ ] Kawasaki Rideology — Touren-Logs (manuell exportiert)
- [ ] Mehr Länder auf der Karte

## Design

Das Design und die Code-Struktur dieser Website wurden mit Unterstützung von
**Claude** (claude.ai), einem KI-Tool von Anthropic, erstellt und entwickelt.
Der Code wurde anschliessend manuell angepasst und erweitert.

## Autor

**Miro Lacoste** — Zürich, Schweiz  
GitHub: [Sepytox](https://github.com/Sepytox)