import { Button } from "./Buttons";
import SocialMedia from "./SocialMedia";
import { artistBio } from "./ArtistInformation";

export default function Footer() {
  return (
    <section className="text-white py-24 space-y-16 flex flex-col items-center poj-blur-bg poj-blur-bg-4 section-boundary">
      <p className="text-center text-3xl">Book {artistBio.name}</p>
      <SocialMedia />
      <div className="text-center space-y-1">
        <p>Tristan: +63 908 583 1913</p>
        <p>Maria: +63 977 628 1086</p>
      </div>

      <div className="w-[200px] mx-auto">
        <Button text="Back to top" link="#hero" />
      </div>
    </section>
  );
}
