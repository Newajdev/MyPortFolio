import Container from "../Container";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import { useContent } from "../../provider/ContentProvider";

const AboutPreview = () => {
  const { content } = useContent();
  const { aboutPreview } = content;
  return (
    <section id="about" className="section-padding">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="About"
            title={aboutPreview.title}
            description={aboutPreview.shortIntro}
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {aboutPreview.highlights.map((item, index) => (
            <ScrollReveal key={item} delay={index * 0.08}>
              <div className="card-premium rounded-3xl p-6">
                <div className="mb-4 h-1 w-12 rounded-full bg-accent" />
                <p className="text-base leading-7 text-text-muted">{item}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 flex justify-center">
          <Button to="/about">Learn More</Button>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default AboutPreview;
