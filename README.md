# Pankaj Regar — Director & Film Editor Portfolio (React.js + Vite)

A modern, high-precision cinematic video editor & director portfolio web application built with **React 18**, **Vite**, **Tailwind CSS**, and the **Obsidian Reel** design system.

---

## 🎬 Tech Stack Overview

* **Framework**: React 18 (SPA with functional components & custom hooks)
* **Build Tool / Bundler**: Vite 6 (Lightning-fast HMR and optimized production rollup)
* **Routing**: React Router DOM (`react-router-dom` v6)
* **Styling**: Tailwind CSS v3 with extended Obsidian Reel palette (`#300012` deep burgundy, `#26000d` carbon container, `#afc9ea` slate blue, `#cac9c9` silver)
* **Typography**: Epilogue, Hanken Grotesk, Space Mono (Google Fonts)
* **Icons**: Google Material Symbols Outlined & Lucide React
* **Audio-Visuals**: HTML5 Canvas procedural waveform engine

---

## 📂 Project Architecture

```
d:\coding from antigravity\bhai portfolio\
├── public/
│   └── assets/
│       └── images/             # High-res local cinema stills & studio monitors
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Glassmorphic header, live timecode, mobile drawer
│   │   ├── Footer.jsx          # Studio info, rep coordinates, timecode sync
│   │   ├── VideoPlayerModal.jsx# Interactive video player, scrubber, aspect ratio
│   │   ├── StudioCmsModal.jsx  # Client review / dailies portal passcode dialog
│   │   ├── PulseCanvas.jsx     # Procedural dynamic audio pulse canvas (About page)
│   │   └── ScrollToTop.jsx     # Automatically scrolls to top on route change
│   ├── context/
│   │   ├── FilmModalContext.jsx# Global state for interactive screening room modal
│   │   └── StudioCmsContext.jsx# Global state for client review portal
│   ├── hooks/
│   │   └── useSmpteTimecode.js # 24.000 FPS SMPTE Timecode generator hook
│   ├── pages/
│   │   ├── SelectedWorks.jsx   # Home / Catalog with category filter & master reel
│   │   ├── AboutPipeline.jsx   # Director statement, metrics, 4-step workflow, console
│   │   ├── ServicesRates.jsx   # 5 Disciplines, standardized tariff, FAQ accordion
│   │   └── ContactBooking.jsx  # Directorial dispatch form with auto-ref generator
│   ├── data/
│   │   └── films.js            # Filmography database, specs, categories, durations
│   ├── App.jsx                 # Routing layout, global modals & providers
│   ├── main.jsx                # React root entry
│   └── index.css               # Tailwind directives, film grain overlay, scanlines
├── _vanilla_site/              # Original standalone HTML version backup
├── _source_stitch/             # Original Stitch design export archive
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Running the Project

### Development Server:
```powershell
npm run dev
```
Runs at `http://localhost:3000` with instant Hot Module Replacement (HMR).

### Production Build:
```powershell
npm run build
```
Creates an optimized, tree-shaken static bundle in `dist/`.

### Preview Production Build:
```powershell
npm run preview
```

---

## ✨ Features & Interactivity

1. **Stateful Cinema Video Player Modal**
   * Accessible anywhere in the application.
   * Play / Pause controls with `Spacebar` keyboard shortcut.
   * Timecode scrubber rail with live position synchronization.
   * Dynamic Letterbox Aspect Ratio toggler: **2.39:1 Anamorphic**, **16:9 DCI**, and **4:3 Academy**.
   * Audio mute/unmute, replay, and fullscreen mode.
2. **24 FPS SMPTE Timecode Generator (`useSmpteTimecode`)**
   * Accurate camera timecode running at 24 frames/sec (`TC HH:MM:SS:FF`) displayed in header, telemetry HUDs, and modal.
3. **Dynamic Category Filtering**
   * Instant filtering between *All Projects*, *Commercial / Luxury*, *Narrative & Short*, *Music Videos*, *Documentary*, and *Color Grade Reel*.
4. **Directorial Dispatch Form**
   * Multi-field booking form with interactive classification pills, budget tiers, and auto-generated tracking reference (`LOG REFERENCE // DISPATCH-REF #PR-XXXX`).
5. **Interactive FAQ Accordion**
   * Animated expand/collapse for technical questions regarding remote review, turnarounds, and broadcast LUFS standards.
6. **Encrypted Studio CMS Modal**
   * Client review & dailies passkey dialog.
