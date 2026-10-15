# Shubham & Tanya — Wedding Invitation 💍

A React (Vite) wedding invitation website.

## Run locally

```bash
npm install
npm run dev
```

## Customize

All wedding details (date, events, venue, contacts, RSVP email, story) live in [`src/config.js`](src/config.js).

## Project structure

```
src/
  containers/   stateful: read config, run hooks, pass props down
  components/   presentational: props in, markup out (no state, no config)
  hooks/        app logic — countdown, RSVP form, music, video pop-up, file checks
  animations/   animation logic — in-view triggers, page flips, particles, scratch card
  lib/          plain helpers — dates, calendar links
  styles/
    components/ layout and look, one file per component
    animations/ keyframes, transitions and entrance states
```

## Build

```bash
npm run build   # outputs to dist/
```
