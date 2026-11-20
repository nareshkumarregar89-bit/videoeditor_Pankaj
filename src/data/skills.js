export const SKILLS = [
  {
    category: 'Post-Production & NLE',
    items: [
      { name: 'DaVinci Resolve Studio', level: 'Master', desc: 'Editorial, Fairlight audio & advanced Fusion' },
      { name: 'Adobe Premiere Pro', level: 'Expert', desc: 'Commercial cuts, multi-cam & fast turnaround' },
      { name: 'Adobe After Effects', level: 'Advanced', desc: 'Motion graphics, title design & cleanups' },
      { name: 'Final Cut Pro', level: 'Proficient', desc: 'Rapid assembly & Apple ProRes workflows' },
      { name: 'Avid Media Composer', level: 'Proficient', desc: 'Broadcast television & long-form assembly' },
    ]
  },
  {
    category: 'Color Grading & Finishing',
    items: [
      { name: 'ACES Color Management', level: 'Master', desc: 'Cross-camera color consistency (ACEScc / ACEScct)' },
      { name: 'Film Emulation & Halation', level: 'Expert', desc: 'Kodak 5219/2383 photochemical emulation' },
      { name: 'HDR & SDR Cinema Mastering', level: 'Expert', desc: 'DCI-P3, Rec.709 & Rec.2020 workflows' },
      { name: 'Color Match & Scene Continuity', level: 'Master', desc: 'Skin tone tracking & shot-to-shot balancing' },
    ]
  },
  {
    category: 'Post-Production Pipeline & Storycraft',
    items: [
      { name: 'Editorial Storycraft & Pacing', level: 'Master', desc: 'Visual storytelling, scene rhythm & narrative arcs' },
      { name: 'Cinema Camera Pipelines', level: 'Expert', desc: 'ARRI Alexa LF, RED V-Raptor, Sony Venice' },
      { name: 'Anamorphic Lens Workflows', level: 'Expert', desc: 'De-squeeze monitoring & flare management' },
      { name: 'Sound Design & Stems Balancing', level: 'Advanced', desc: 'Foley, soundscape layering & loudness standards' },
    ]
  }
];

export const SERVICES = [
  {
    id: 'cinematic-editing',
    number: '01',
    title: 'Cinematic Offline & Online Editing',
    subtitle: 'From raw rushes to master cut',
    description: 'Editing high-impact narrative films, brand commercials, and music videos with obsessive attention to visual rhythm, emotional resonance, and seamless scene flow.',
    deliverables: ['Editorial Assembly & Pacing Strategy', 'Rough Cut to Picture Lock', 'Rhythm & Narrative Flow', 'Master Conforming'],
    icon: 'Film'
  },
  {
    id: 'editing',
    number: '02',
    title: 'High-Impact Video Editing',
    subtitle: 'Rhythm, pace & emotional pull',
    description: 'Precision editing that keeps viewers glued to the screen. Transforming raw footage into tight, emotionally resonant sequences with rhythmic cuts and seamless transitions.',
    deliverables: ['Offline Assembly & Rough Cut', 'Fine Cut & Precision Trim', 'Social Media Variations (9:16, 4:5)', 'Online Master conforming'],
    icon: 'Scissors'
  },
  {
    id: 'color',
    number: '03',
    title: 'Cinematic Color Grading',
    subtitle: 'Mood, tone & photochemical depth',
    description: 'Giving projects a rich, cohesive look. From gritty film emulation to clean luxury commercial polish, utilizing DaVinci Resolve and ACES color science.',
    deliverables: ['Custom Look Development (LUTs)', 'Shot Matching & Continuity', 'HDR & SDR DCI Deliverables', 'Film Grain & Halation'],
    icon: 'Palette'
  },
  {
    id: 'sound',
    number: '04',
    title: 'Sound Design & Audio Supervision',
    subtitle: 'Immersion you can feel',
    description: 'Sound is 50% of the film experience. Designing atmospheric sound beds, visceral impacts, clean dialogue balancing, and standard broadcast loudness normalization.',
    deliverables: ['Atmospheric Foley & FX', 'Beat-Synced Audio Track Mix', 'Dialogue Clean-Up & EQ', 'Broadcast LUFS Delivery'],
    icon: 'Volume2'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Pankaj has a rare instinct for visual rhythm. His edit on our global automotive launch transformed high-speed racing rushes into a coherent, heart-racing adrenaline journey.",
    author: "Julian Vance",
    role: "Head of Creative",
    company: "Bavaria Motorwerks",
    project: "Nocturn Campaign"
  },
  {
    id: 2,
    quote: "Working with Pankaj is effortless. He understands the subtle emotional cues of music and syncs visuals with astonishing precision. Our video reached 10M+ views in weeks.",
    author: "Elena Rostova",
    role: "Senior Head of A&R / Visuals",
    company: "Universal Music Group",
    project: "After Hours 2026"
  },
  {
    id: 3,
    quote: "The color grade and documentary pacing he delivered for our high-altitude expedition film exceeded every expectation. Our festival premiere was met with standing applause.",
    author: "David Lindqvist",
    role: "Executive Producer",
    company: "Nordic Geo Commission",
    project: "Solitude: Icelandic Drift"
  }
];

export const EXPERIENCES = [
  {
    period: '2022 — Present',
    role: 'Lead Cinematic Video Editor & Colorist',
    company: 'Regar Cinematic Studio',
    location: 'Mumbai & Remote Worldwide',
    description: 'Leading post-production editing for commercial spots, luxury fashion reels, narrative shorts, and music videos for international production agencies and brands.',
    highlights: ['Cut and finished 20+ commercial projects for global clients', 'Mastered color grading pipelines for 8K RED and ARRI raw rushes']
  },
  {
    period: '2019 — 2022',
    role: 'Senior Commercial Video Editor',
    company: 'BlackFrame Digital Post',
    location: 'Mumbai, India',
    description: 'Led post-production editorial teams for national automotive and FMCG television commercials. Managed offline-to-online finishing and client screening sessions.',
    highlights: ['Cut 40+ national broadcast commercials', 'Pioneered in-house ACES color management workflows']
  },
  {
    period: '2017 — 2019',
    role: 'Assistant Editor & Junior Colorist',
    company: 'Prime Cuts Studio',
    location: 'Mumbai, India',
    description: 'Handling dailies ingestion, proxy generation, rough assembly, audio sync, and basic grade passes on indie feature films and documentary projects.',
    highlights: ['Supported post-production on 3 festival-selected feature films', 'Specialized in multi-camera sync and project conforming']
  }
];
