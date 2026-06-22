import { Link } from "react-router-dom";
import Container from "../Container";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import { useContent } from "../../provider/ContentProvider";

const FeaturedProjects = () => {
  const { content } = useContent();
  const featured = content.featuredProjects;

  return (
    <section id="projects" className="section-padding bg-bg-elevated/50">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Projects"
            title="Featured production work"
            description="Three flagship projects showcasing product thinking, system design, and polished execution."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <Link
                to={`/projects/${project.slug}`}
                className="card-premium group block overflow-hidden rounded-[2rem]"
                data-cursor-hover
              >
                <div className="overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">{project.category}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-muted">{project.shortDescription}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
