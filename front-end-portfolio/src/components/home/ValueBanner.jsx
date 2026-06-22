import { motion } from "framer-motion";
import Container from "../Container";
import ScrollReveal from "../ui/ScrollReveal";
import { useContent } from "../../provider/ContentProvider";

const ValueBanner = () => {
  const { content } = useContent();
  const { valueBanner } = content;
  return (
    <section className="relative overflow-hidden py-24">
      <div className="glow-orb left-1/2 top-1/2 h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2 bg-accent/15" />
      <Container>
        <ScrollReveal>
          <motion.div
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent px-8 py-16 text-center md:px-16"
            whileInView={{ scale: [0.98, 1] }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-accent">Value Proposition</p>
            <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {valueBanner.statement}
            </h2>
          </motion.div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default ValueBanner;
