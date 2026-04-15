import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

// Main artist information
export const artistBio = {
  name: "P-O-J Legacy",
  email: "bookings@pojlegacy.com",
  biography: [
    "Jeremiah became a familiar name in OPM by creating songs that spoke straight to the heart, with Nanghihinayang becoming one of their most memorable songs.",
    "Today, P-O-J Legacy (Piwee of Jeremiah) carries the same energy through powerful live performances that celebrate 80s, 90s, and today's hits.",
  ],
};

// Social media links and icons
export const socialMedia = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/pojlegacy",
    icon: <FontAwesomeIcon className="text-5xl" icon={faSquareFacebook} />,
  },
];





// Photos section
export const photos = [
  "/photos/pojband.png",
  "/photos/pojband-2.jpg",
  "/photos/pojband-3.jpg",
  "/photos/pojband-4.jpg",
  "/photos/pojband-5.jpg",
];

// Member showcase section
export const members = [
  {
    name: "Piwee",
    role: "Lead Vocalist",
    intro:
      "The voice and heart of P-O-J Legacy, carrying the emotional spirit of Jeremiah to today's stage.",
    image: "/photos/piwee.jpg",
    fallbackImage: "/photos/poj-logo.jpg",
  },
  {
    name: "Eliseo",
    role: "Bassist",
    intro:
      "Holds down the groove with warm low-end lines that keep every crowd moving.",
    image: "/photos/eliseo.jpg",
    fallbackImage: "/photos/poj-logo.jpg",
  },
  {
    name: "Tristan",
    role: "Guitarist",
    intro:
      "Drives each set with crisp riffs and strong stage timing that energize the room.",
    image: "/photos/tristan.jpg",
    fallbackImage: "/photos/poj-logo.jpg",
  },
  {
    name: "Julz",
    role: "Singer",
    intro:
      "Brings expressive vocals that blend classic OPM feeling with a fresh live spirit.",
    image: "/photos/julz.jpg",
    fallbackImage: "/photos/poj-logo.jpg",
  },
  {
    name: "Katrina",
    role: "Singer",
    intro:
      "Delivers a confident presence on stage and helps shape the band's warm, nostalgic sound.",
    image: "/photos/katrina.png",
    fallbackImage: "/photos/poj-logo.jpg",
  },
  {
    name: "Gian",
    role: "Drummer",
    intro:
      "Sets the heartbeat of the show with steady power, dynamic fills, and clean transitions.",
    image: "/photos/gian.jpg",
    fallbackImage: "/photos/poj-logo.jpg",
  },
];
