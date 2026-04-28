import { Button } from "./Buttons";
import SocialMedia from "./SocialMedia";
import { artistBio } from "./ArtistInformation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full sm:py-16 max-w-screen-md mx-auto text-white poj-blur-bg poj-blur-bg-1 rounded-2xl section-boundary"
    >
      <div className="flex sm:flex-row flex-col">
        <div className="mx-auto">
          <img
            src="/photos/poj-logo.jpg"
            alt="P-O-J Legacy logo"
            className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] object-cover mx-auto rounded-full border border-white/40"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div className="sm:text-start text-center justify-center flex flex-col mx-auto space-y-4 sm:pl-4">
          <h1 className="text-6xl ">{artistBio.name}</h1>
          <p className="max-w-sm">
            Piwee of Jeremiah and a powerhouse band reviving the spirit of 80s,
            90s, and today's OPM hits.
          </p>
          <SocialMedia />
          <div className="">
            <Button text="Listen Now" link="#listen" />
          </div>
        </div>
      </div>
    </section>
  );
}
