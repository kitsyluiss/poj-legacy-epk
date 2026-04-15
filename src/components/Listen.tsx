import { useEffect, useState, useRef } from "react";
import { members } from "./ArtistInformation";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface Member {
  name: string;
  role: string;
  intro: string;
  image: string;
  fallbackImage: string;
}

interface MemberTriggerProps {
  index: number;
  name: string;
  role: string;
  intro: string;
  setActiveIndex: (index: number) => void;
}

function MemberTrigger({
  index,
  name,
  role,
  intro,
  setActiveIndex,
}: MemberTriggerProps) {
  const { ref, inView } = useInView({
    threshold: 0.65,
    rootMargin: "-10% 0px -20% 0px",
  });

  useEffect(() => {
    if (inView) {
      setActiveIndex(index);
    }
  }, [inView, index, setActiveIndex]);

  return (
    <article
      ref={ref}
      className="relative min-h-[55vh] rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm z-0"
    >
      <p className="text-sm uppercase tracking-[0.2em] text-[#f0ece2]">{role}</p>
      <h3 className="mt-2 text-3xl font-semibold text-[#f0ece2]">{name}</h3>
      <p className="mt-4 text-lg leading-relaxed text-[#d9d4ca]">{intro}</p>
    </article>
  );
}

function MobilePortraitCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left, go to next member
      setActiveIndex((prev) => (prev + 1) % members.length);
    }

    if (touchEnd - touchStart > 50) {
      // Swiped right, go to previous member
      setActiveIndex((prev) => (prev - 1 + members.length) % members.length);
    }
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % members.length);
  };

  const currentMember = members[activeIndex];

  return (
    <section
      id="listen"
      className="py-16 px-3 text-white poj-blur-bg poj-blur-bg-3 poj-blur-bg-sticky section-boundary"
    >
      <div className="mx-auto max-w-screen-lg">
        <h2 className="text-center text-4xl text-[#f0ece2]">Meet P-O-J Legacy</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#d9d4ca]">
          Swipe left or right to discover each member.
        </p>

        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="mt-10 space-y-6"
        >
          <div className="relative h-[52vh] min-h-[300px] overflow-hidden rounded-3xl border border-white/20 bg-black/20">
            {(members as Member[]).map((member, index) => {
              const isActive = activeIndex === index;

              return (
                <img
                  key={member.name}
                  src={member.image}
                  alt={member.name}
                  onError={(event) => {
                    const imageElement = event.currentTarget;

                    if (imageElement.src.includes(member.fallbackImage)) {
                      return;
                    }

                    imageElement.src = member.fallbackImage;
                  }}
                  className={`absolute inset-0 h-full w-full object-cover will-change-transform transition-all duration-500 ease-out ${
                    isActive
                      ? "opacity-100 scale-100 blur-0"
                      : "opacity-0 scale-105 blur-[2px]"
                  }`}
                />
              );
            })}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-[#d9d4ca]">
                Now Featuring
              </p>
              <h3 className="text-3xl text-[#f0ece2]">{currentMember.name}</h3>
            </div>
          </div>

          <article className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-[#f0ece2]">
              {currentMember.role}
            </p>
            <h3 className="text-3xl font-semibold text-[#f0ece2]">
              {currentMember.name}
            </h3>
            <p className="text-lg leading-relaxed text-[#d9d4ca]">
              {currentMember.intro}
            </p>
          </article>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full border border-white/30 hover:bg-white/10 transition-all"
              aria-label="Previous member"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
            </button>

            <div className="flex gap-2">
              {members.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-[#f0ece2]"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to member ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full border border-white/30 hover:bg-white/10 transition-all"
              aria-label="Next member"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Listen() {
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px) and (orientation: portrait)");

    const updateMatch = () => {
      setIsMobilePortrait(query.matches);
    };

    updateMatch();
    query.addEventListener("change", updateMatch);

    return () => {
      query.removeEventListener("change", updateMatch);
    };
  }, []);

  // Mobile portrait swipe carousel
  if (isMobilePortrait) {
    return <MobilePortraitCarousel />;
  }

  // Desktop scroll-based layout
  return (
    <section
      id="listen"
      className="py-16 px-3 text-white poj-blur-bg poj-blur-bg-3 poj-blur-bg-sticky section-boundary"
    >
      <div className="mx-auto max-w-screen-lg">
        <h2 className="text-center text-4xl text-[#f0ece2]">Meet P-O-J Legacy</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#d9d4ca]">
          Scroll down and discover each member. The featured image changes
          smoothly as the spotlight moves from one artist to the next.
        </p>

        <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-[1.05fr_1fr]">
          <div className="sticky top-32 h-fit z-0">
            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/20 bg-black/20">
              {(members as Member[]).map((member, index) => {
                const isActive = activeIndex === index;

                return (
                  <img
                    key={member.name}
                    src={member.image}
                    alt={member.name}
                    onError={(event) => {
                      const imageElement = event.currentTarget;

                      if (imageElement.src.includes(member.fallbackImage)) {
                        return;
                      }

                      imageElement.src = member.fallbackImage;
                    }}
                    className={`absolute inset-0 h-full w-full object-cover will-change-transform transition-all duration-700 ease-out ${
                      isActive
                        ? "opacity-100 scale-100 blur-0"
                        : "opacity-0 scale-105 blur-[2px]"
                    }`}
                  />
                );
              })}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-[#d9d4ca]">
                  Now Featuring
                </p>
                <h3 className="text-3xl text-[#f0ece2]">
                  {members[activeIndex].name}
                </h3>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {members.map((member, index) => (
              <MemberTrigger
                key={member.name}
                index={index}
                name={member.name}
                role={member.role}
                intro={member.intro}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
