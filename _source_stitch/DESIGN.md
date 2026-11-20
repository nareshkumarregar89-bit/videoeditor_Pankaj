---
name: Obsidian Reel
colors:
  surface: '#300012'
  surface-dim: '#300012'
  surface-bright: '#730836'
  surface-container-lowest: '#26000d'
  surface-container-low: '#3f0019'
  surface-container: '#46001d'
  surface-container-high: '#5a0027'
  surface-container-highest: '#6d0231'
  on-surface: '#ffd9e0'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#ffd9e0'
  inverse-on-surface: '#66002d'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c7c6c6'
  primary: '#cac9c9'
  on-primary: '#2f3131'
  primary-container: '#aeaeae'
  on-primary-container: '#414242'
  inverse-primary: '#5e5e5f'
  secondary: '#afc9ea'
  on-secondary: '#17324d'
  secondary-container: '#2f4864'
  on-secondary-container: '#9eb7d8'
  tertiary: '#c9c9c9'
  on-tertiary: '#2f3131'
  tertiary-container: '#adaeae'
  on-tertiary-container: '#404242'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e3e2e2'
  primary-fixed-dim: '#c7c6c6'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#464747'
  secondary-fixed: '#d1e4ff'
  secondary-fixed-dim: '#afc9ea'
  on-secondary-fixed: '#001d36'
  on-secondary-fixed-variant: '#2f4864'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#300012'
  on-background: '#ffd9e0'
  surface-variant: '#6d0231'
typography:
  display-hero:
    fontFamily: Epilogue
    fontSize: 80px
    fontWeight: '600'
    lineHeight: 88px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Epilogue
    fontSize: 44px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 54px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-code:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.12em
  meta-timecode:
    fontFamily: Space Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.14em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2rem
  space-xl: 4rem
---

## Brand & Style

This design system expresses the discipline, restraint, and obsessive craft of an elite film director and motion designer. The visual language merges museum-grade editorial minimalism with the tactile, high-precision instrumentation of post-production suites (ARRI look profiles, 35mm slate metadata, DaVinci Resolve color boards).

The aesthetic targets commercial agency heads, executive producers, and luxury brand commissioners. The emotional delivery is authoritative, quiet, and hyper-deliberate—letting visual assets hold full cinematic weight without decorative noise. 

Key attributes:
- **Style Archetype:** Modern Cinematic Noir & Editorial Brutalism. Absolute focus on negative space, deep optical blacks, and precision technical annotations.
- **Atmosphere:** Controlled screening room ambiance. Surfaces absorb light rather than bounce it, using fine-grain texture and high-density carbon layering.
- **Interaction Ethos:** Magnetic, inertia-damped physical feedback. Elements move with calibrated momentum (`cubic-bezier(0.16, 1, 0.3, 1)`), reminiscent of studio monitors and precision optical focus rings.

## Colors

The color hierarchy creates zero light bleed, prioritizing high dynamic range (HDR) display for video reels.

- **Deep Burgundy Neutral Canvas (`#6b0030`):** The foundational substrate. Deeper than standard UI dark tones to replicate true cinema grading conditions with a rich undertone.
- **Raw Carbon & Muted Graphite (`#121316`, `#1F2127`, `#3A3D46`):** Secondary and structural levels used strictly for viewport boundaries, timeline tracks, and metadata chassis.
- **Editorial Silver Primary (`#aeaeae`):** Ultra-high clarity text rendering and active structural framing, softening peak white glare to preserve readability alongside saturated video elements.
- **Slate Blue Secondary (`#718aa9`):** Reserved strictly for active states, playback heads, recording indicators (REC), and high-priority directional cues.
- **Pure White Tertiary (`#ffffff`):** Used exclusively for technical timecode tracking, film stock callouts, and secondary playback statistics.

## Typography

The typographic tension relies on two opposing aesthetics: sharp, structural editorial headlines and raw camera telemetry.

1. **Editorial Headlines (`Epilogue`):** Expressive, structural, and architecturally weighted. Set with tight tracking to simulate high-fashion titles and high-budget film title cards.
2. **Body & Interface (`Hanken Grotesk`):** Highly legible, neutral, and devoid of optical distractions. Works seamlessly on multi-column production treatments.
3. **Slate, Spec & Production Cues (`Space Mono`):** Monospaced technical telemetry used for timeline scrubbers, frame rates (`23.976 FPS`), aspect ratio annotations (`2.39:1`), and scene-shot designations. Must always be rendered uppercase or tabular numbers.

## Layout & Spacing

Layouts follow a hybrid 12-column variable fluid grid designed to mimic production monitors and dynamic aspect ratio viewports.

- **Desktop (>= 1280px):** 12 columns with wide, cinematic gutters (`1.5rem`) and structural border rails (`margin: 4rem`). Elements lock to film proportions: 16:9 widescreen, 2.39:1 anamorphic wide, or 1:1 lookbook squares.
- **Tablet (768px - 1279px):** 8 columns, `2rem` outer margin. Media spans standard 4- or 8-column blocks.
- **Mobile (< 768px):** 4 columns, outer boundary drops to `1.25rem`. Video panels take continuous full-bleed runs with overlaid HUD specs.
- **Vertical Spacing Rhythm:** Driven by deliberate spatial pauses (`space-xl` and above) to emphasize singular works, avoiding cluttered agency-style grids.

## Elevation & Depth

Visual hierarchy uses physical camera and console metaphors rather than synthetic dropshadows.

- **Tonal Substrates:** Stacking relies on luminance transitions. Base canvas (`#6b0030`) sits beneath container modules (`#121316`), which frame active media viewports (`#18191E`).
- **Low-Contrast Razor Edges:** Ghost hairline borders (`1px solid rgba(255, 255, 255, 0.08)`) frame technical cards, replacing blurry drop shadows with laser-cut industrial edges.
- **Atmospheric Grain:** A hardware-accelerated 3% opacity film grain texture overlays the full viewport with `pointer-events: none; mix-blend-mode: overlay`, establishing analog grit across pure digital black.
- **Projection Glow:** Ambient light is cast exclusively by active video reels using soft, low-opacity slate blue/white rim blooms (`0px 24px 64px -12px rgba(113, 138, 169, 0.12)`).

## Shapes

The design system enforces architectural sharpness (`roundedness: 0`). 

All viewports, buttons, chips, and overlays use pure 90-degree corners. This creates an optical precision alignment evocative of production slates, lens mounts, modular RED/ARRI camera rigs, and professional NLE software monitors. Subtle mechanical bevels (clip-path 45-degree chamfers of 4px) are permitted only on live status badges and floating transport HUDs.

## Components

### Buttons & Transport Controls
- **Primary Action (Play Reel / Direct Contact):** Razor-edged solid block in `#aeaeae` with `#6b0030` bold text. Includes an amber frame counter or technical index (`[01] DIRECT REEL`) in `Space Mono`. Hover initiates an instantaneous background flash to `#718aa9` with zero transition lag, followed by a smooth color fadeout.
- **Secondary (Case Study / Spec):** Transparent background, `1px solid rgba(255, 255, 255, 0.18)` outline, bone-white text. Hover fills surface with `rgba(255, 255, 255, 0.05)` and shifts the border to full white.

### Chips & Badges
- **Status Indicators (e.g., `● REC`, `PRORES 4444 XQ`, `DIR. CUT`):** Compact, zero-radius micro-chips. Dark carbon background (`#16171B`), `1px solid rgba(255, 255, 255, 0.1)` configuration. A pulsing `3px` slate blue or white dot signals live or featured status. Typographic style: `meta-timecode`.

### Video Cards & Showcase Modules
- **Frame Presentation:** Encased in structural matte borders with integrated metadata rails. The upper border displays the timecode (`TC 01:24:18:04`) and project client; the lower border displays software tooling, camera body, and role (`COLORIST / DIR`).
- **Hover Micro-interaction:** Custom cursor morphs from standard crosshair to a luminous playhead disc that displays frame offsets (`+00:12`) via magnetic spring tracking.

### Inputs & Editorial Forms
- **Fields:** Single-line borderless bottom rules (`1px solid rgba(255, 255, 255, 0.15)`). Focused state shifts bottom stroke to `#aeaeae` with an adjacent active timecode badge. Typography uses `body-lg`. No rounded input enclosures.

### Checkboxes & Toggle Switches
- **Form Selectors:** Square selection indicators (`14px × 14px`) with a high-contrast Silver solid center fill upon selection. Radio selections operate as crosshair markers (`+` toggles to `×`).

### Reel Scrubbers & Timecode Tracks
- Custom, ultra-thin interactive scrubbing rails running across project hero covers. Hover reveals millisecond ticks and split-second thumbnail previews framed in an ARRI-style optical safe zone.