import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Container from "../../components/Container";
import Button from "../../components/ui/Button";
import ScrollReveal from "../../components/ui/ScrollReveal";
import SectionHeading from "../../components/ui/SectionHeading";
import VideoModal from "../../components/layout/VideoModal";
import { useContent } from "../../provider/ContentProvider";
import { fetchAboutFull } from "../../services/contentService";

const AboutPage = () => {
  const { content } = useContent();
  const { siteSettings, aboutFull: defaultAbout } = content;
  const [aboutFull, setAboutFull] = useState(defaultAbout);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    fetchAboutFull().then(setAboutFull);
  }, []);

  return (
    <div className="pt-28 pb-20">
      <section className="section-padding pb-10">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="About Me"
              title={`Who I am — ${siteSettings.name}`}
              description={aboutFull.intro}
              align="left"
            />
          </ScrollReveal>

          <ScrollReveal className="mt-10">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10"
              data-cursor-hover
            >
              <img
                src={`https://img.youtube.com/vi/${siteSettings.heroVideoId}/maxresdefault.jpg`}
                alt="About video"
                className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-black">
                  <FaPlay className="ml-1" />
                </div>
              </div>
            </button>
          </ScrollReveal>
        </Container>
      </section>

      <section className="section-padding bg-bg-elevated/40">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Journey"
              title="Career progression"
              description="From frontend foundations to SaaS product engineering and AI-focused system design."
            />
          </ScrollReveal>

          <div className="mt-12 space-y-6">
            {aboutFull.journey.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 0.08}>
                <div className="card-premium grid gap-4 rounded-3xl p-6 md:grid-cols-[160px_1fr]">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">{item.year}</p>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-text-muted">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Philosophy"
              title="Engineering philosophy"
              description="Principles that guide how I design, build, and ship production systems."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {aboutFull.philosophy.map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.08}>
                <motion.blockquote className="card-premium rounded-3xl p-6 text-base leading-8 text-text-muted">
                  “{item}”
                </motion.blockquote>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12 flex justify-center">
            <Button href={siteSettings.resumeUrl} variant="primary">
              Download My Resume
            </Button>
          </ScrollReveal>
        </Container>
      </section>

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoId={siteSettings.heroVideoId}
      />
    </div>
  );
};

export default AboutPage;
