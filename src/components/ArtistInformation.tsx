import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

// Main artist information
export const artistBio = {
  name: "P-O-J Legacy",
  tagline: "Piwee of Jeremiah & The Revival of Timeless OPM",
  genre: "OPM • 80s & 90s Classics • Nostalgic Ballads • Pop & Rock",
  email: "bookings@pojlegacy.com",
  phones: [
    { name: "Tristan", number: "+63 908 583 1913", raw: "+639085831913" },
    { name: "Maria", number: "+63 977 628 1086", raw: "+639776281086" },
  ],
  biography: [
    "Jeremiah became an unforgettable cornerstone of Philippine popular music with iconic masterpieces that spoke straight to the heart — none more transcendent than 'Nanghihinayang', an anthem etched into the collective memories of generations.",
    "Today, that sacred musical torch is carried forward with passion and honor through P-O-J Legacy (Piwee of Jeremiah). Bringing together seasoned virtuoso musicians with a renewed contemporary vigor, the 7-piece powerhouse delivers stadium-grade emotion, electric nostalgia, and tight live musicianship across the country and beyond.",
  ],
};

// Social media links
export const socialMedia = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/pojlegacy",
    icon: <FontAwesomeIcon className="text-3xl sm:text-4xl" icon={faSquareFacebook} />,
  },
];

// Highlight stats
export const stats = [
  { label: "OPM Heritage", value: "25+ Yrs" },
  { label: "Live Lineup", value: "7-Piece" },
  { label: "Signature Hit", value: "Nanghihinayang" },
  { label: "Set Duration", value: "60 - 120 mins" },
];

// Repertoire highlights
export const repertoireCategories = [
  {
    category: "The Jeremiah Signatures",
    description: "The gold-standard heartbreakers and romantic anthems that defined Philippine radio.",
    tracks: ["Nanghihinayang", "Hindi Akin Ang Mundo", "Kasalanan Ba?", "Bakit Ka Pa Nakita?"],
  },
  {
    category: "90s Manila Sound & Pop",
    description: "High-energy crowd favorites, sing-alongs, and nostalgic acoustic-driven gems.",
    tracks: ["Ang Huling El Bimbo", "Harana", "214", "With A Smile", "Kisapmata"],
  },
  {
    category: "80s Retro Anthems & Ballads",
    description: "Timeless disco, funk, and soulful melodies crafted for electrifying corporate & festival crowds.",
    tracks: ["Be My Lady", "Awitin Mo At Isasayaw Ko", "Rock Baby Rock", "Farewell"],
  },
  {
    category: "Modern Hits & Crowd Anthems",
    description: "Contemporary chart-toppers reimagined with lush live brass-feel, keys, and twin lead vocals.",
    tracks: ["Mahika", "Pasilyo", "Raining in Manila", "Umaaraw, Umuulan"],
  },
];

// Photos section (using high-performance optimized images)
export const photos = [
  "/photos/pojband.jpg",
  "/photos/pojband-2.jpg",
  "/photos/pojband-3.jpg",
  "/photos/pojband-4.jpg",
  "/photos/pojband-5.jpg",
];

// Member showcase section
export const members = [
  {
    id: "piwee",
    name: "Piwee",
    role: "Former Band Leader of Jeremiah Full Band",
    instrument: "Band Leader & Founder",
    intro:
      "Forever Remembered: Piwee's passion for music and unwavering dedication shaped the identity of this band. As a former member of the original Jeremiah boy band, he left an enduring mark on everyone who had the privilege of hearing him perform. Today, P-O-J Legacy Band proudly carries forward the legacy he created, honoring his memory through every stage, every performance, and every song.",
    image: "/photos/piwee.jpg",
    fallbackImage: "/photos/poj-logo.jpg",
    tag: "The Foundation",
  },
  {
    id: "eliseo",
    name: "Eliseo",
    role: "Bassist",
    instrument: "Bass Guitar",
    intro:
      "Holds down the groove with warm low-end lines and melodic pocket precision that keep every crowd moving from start to finish.",
    image: "/photos/eliseo.jpg",
    fallbackImage: "/photos/poj-logo.jpg",
    tag: "Groove & Low-End",
  },
  {
    id: "tristan",
    name: "Tristan",
    role: "Guitarist",
    instrument: "Lead & Rhythm Guitars",
    intro:
      "Drives each set with crisp riffs, soaring melodic solos, and strong stage timing that energize the room and anchor the band's signature tone.",
    image: "/photos/tristan.jpg",
    fallbackImage: "/photos/poj-logo.jpg",
    tag: "Electric & Acoustic",
  },
  {
    id: "julz",
    name: "Julz",
    role: "Singer",
    instrument: "Lead Vocals",
    intro:
      "Brings deeply expressive vocals and raw storytelling that blend classic OPM feeling with a fresh, captivating live spirit.",
    image: "/photos/julz.jpg",
    fallbackImage: "/photos/poj-logo.jpg",
    tag: "Lead Harmony",
  },
  {
    id: "katrina",
    name: "Katrina",
    role: "Singer",
    instrument: "Lead Vocals",
    intro:
      "Delivers a confident, mesmerizing vocal presence on stage, shaping the band's lush dual harmonies and heartfelt emotional connection.",
    image: "/photos/katrina.jpg",
    fallbackImage: "/photos/poj-logo.jpg",
    tag: "Lead Harmony",
  },
  {
    id: "gian",
    name: "Gian",
    role: "Drummer",
    instrument: "Drums & Percussion",
    intro:
      "Sets the heartbeat of every live concert with steady power, dynamic acoustic fills, and clean musical transitions that push the band forward.",
    image: "/photos/gian.jpg",
    fallbackImage: "/photos/poj-logo.jpg",
    tag: "Rhythm Engine",
  },
  {
    id: "bryanne",
    name: "Bryanne",
    role: "Pianist",
    instrument: "Keyboards & Synth",
    intro:
      "Brings rich harmonic depth, iconic piano introductions, and elegant arrangements that elevate every classic ballad into an emotional journey.",
    image: "/photos/bryanne.jpeg",
    fallbackImage: "/photos/poj-logo.jpg",
    tag: "Keys & Atmosphere",
  },
];

