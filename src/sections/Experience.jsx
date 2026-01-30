import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { educationCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useGSAP(() => {
    // Animate each education card on scroll
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    // Timeline shrink animation
    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // Text fade-in animation
    gsap.utils.toArray(".eduText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 70%",
        },
      });
    });
  }, []);

  return (
    <section
      id="education"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        {/* Header */}
        <TitleHeader
          title="My Educational Journey"
          sub="🎓 Academic Background"
        />

        {/* Timeline */}
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {educationCards.map((card) => (
              <div key={card.degree} className="exp-card-wrapper">
                {/* Left Image Card */}
                <div className="xl:w-2/6 timeline-card">
                  <GlowCard card={card}>
                    {/* <div>
                      <img src={card.imgPath} alt="education-img" />
                    </div> */}
                  </GlowCard>
                </div>

                {/* Right Content */}
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    {/* Timeline Line */}
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    {/* Education Text */}
                    <div className="eduText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      {/* Institute Logo */}
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="college-logo" />
                      </div>

                      {/* Details */}
                      <div>
                        <h1 className="font-semibold text-3xl">
                          {card.degree}
                        </h1>

                        <p className="my-3 text-white-50">
                          🏫 {card.institute}
                        </p>

                        <p className="my-3 text-white-50">
                          🗓️ {card.year}
                        </p>

                        <p className="text-[#839CB5] italic mt-4">
                          Highlights
                        </p>

                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.highlights.map((point, index) => (
                            <li key={index} className="text-lg">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* End Text */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
