import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Container from "../Container";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";
import VideoModal from "../layout/VideoModal";
import { useContent } from "../../provider/ContentProvider";

const Hero = () => {
  const { content } = useContent();
  const { heroContent, siteSettings } = content;
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 hero-grid">
      <div className="glow-orb left-[-10%] top-[10%] h-72 w-72 bg-accent/20" />
      <div className="glow-orb right-[-5%] top-[30%] h-96 w-96 bg-accent-mint/10" />

      <Container className="relative grid min-h-[calc(100vh-7rem)] items-center gap-16 lg:grid-cols-2">
        <ScrollReveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            {heroContent.greeting}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            {siteSettings.name.split(" ").slice(0, 2).join(" ")}
            <span className="block text-gradient">{siteSettings.role}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-text-muted">
            {heroContent.positioning}
          </p>
          <p className="mt-4 max-w-xl text-base text-text-soft">{heroContent.headline}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            {heroContent.ctas.map((cta) => (
              <Button key={cta.label} href={cta.href} variant={cta.variant}>
                {cta.label}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <motion.button
            type="button"
            className="group relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-surface p-3 text-left shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            whileHover={{ y: -8 }}
            onClick={() => setVideoOpen(true)}
            data-cursor-hover
          >
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <img
                src={`https://img.youtube.com/vi/${siteSettings.heroVideoId}/maxresdefault.jpg`}
                alt="Portfolio intro video preview"
                className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-black shadow-[0_0_40px_var(--color-accent-glow)] transition group-hover:scale-110">
                  <FaPlay className="ml-1" />
                </div>
              </div>
            </div>
            <div className="px-4 py-5">
              <p className="text-sm uppercase tracking-[0.2em] text-accent">Showreel</p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Watch my engineering & product story
              </h3>
            </div>
          </motion.button>
        </ScrollReveal>
      </Container>

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoId={siteSettings.heroVideoId}
      />
    </section>
  );
};

export default Hero;
