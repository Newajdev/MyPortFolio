import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoChevronBack, IoChevronForward, IoExpand } from "react-icons/io5";
import Container from "../../components/Container";
import Button from "../../components/ui/Button";
import ScrollReveal from "../../components/ui/ScrollReveal";
import { fetchProjectBySlug } from "../../services/contentService";

const DetailSection = ({ title, children }) => (
  <ScrollReveal className="card-premium rounded-3xl p-6 md:p-8">
    <h2 className="text-2xl font-semibold text-white">{title}</h2>
    <div className="mt-4 space-y-3 text-sm leading-7 text-text-muted md:text-base">{children}</div>
  </ScrollReveal>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProjectBySlug(slug).then((data) => {
      setProject(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <Container className="flex min-h-[70vh] items-center justify-center pt-28 text-text-muted">
        Loading project...
      </Container>
    );
  }

  if (!project) {
    return (
      <Container className="flex min-h-[70vh] flex-col items-center justify-center pt-28 text-center">
        <h1 className="text-3xl font-bold text-white">Project not found</h1>
        <Button to="/#projects" className="mt-6">
          Back to Projects
        </Button>
      </Container>
    );
  }

  const nextImage = () => setActiveImage((prev) => (prev + 1) % project.gallery.length);
  const prevImage = () =>
    setActiveImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);

  return (
    <div className="pb-20 pt-28">
      <Container>
        <ScrollReveal>
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent">
            ← Back to projects
          </Link>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-accent">{project.category}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold text-white md:text-6xl">{project.name}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">{project.overview}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={project.liveUrl}>Live Demo</Button>
            <Button href={project.githubUrl} variant="secondary">
              GitHub Repository
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-14">
          <div className="card-premium overflow-hidden rounded-[2rem]">
            <div className="relative">
              <img
                src={project.gallery[activeImage]}
                alt={`${project.name} screenshot ${activeImage + 1}`}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prevImage}
                    className="rounded-full border border-white/20 p-2 text-white hover:border-accent"
                    aria-label="Previous image"
                  >
                    <IoChevronBack />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    className="rounded-full border border-white/20 p-2 text-white hover:border-accent"
                    aria-label="Next image"
                  >
                    <IoChevronForward />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setZoomOpen(true)}
                  className="rounded-full border border-white/20 p-2 text-white hover:border-accent"
                  aria-label="Zoom image"
                >
                  <IoExpand />
                </button>
              </div>
            </div>
            <div className="flex gap-3 overflow-x-auto p-4">
              {project.gallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`shrink-0 overflow-hidden rounded-xl border ${
                    activeImage === index ? "border-accent" : "border-white/10"
                  }`}
                >
                  <img src={image} alt="" className="h-20 w-32 object-cover" />
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <DetailSection title="Case Study">
            <p>{project.caseStudy}</p>
          </DetailSection>
          <DetailSection title="Problem Statement">
            <p>{project.problem}</p>
          </DetailSection>
          <DetailSection title="Solution">
            <p>{project.solution}</p>
          </DetailSection>
          <DetailSection title="Architecture / Technical Design">
            <p>{project.architecture}</p>
          </DetailSection>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <DetailSection title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </DetailSection>
          <DetailSection title="Key Features">
            <ul className="space-y-2">
              {project.keyFeatures.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DetailSection>
          <DetailSection title="Challenges">
            <ul className="space-y-2">
              {project.challenges.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DetailSection>
        </div>

        <ScrollReveal className="mt-6">
          <DetailSection title="Results / Impact">
            <ul className="space-y-2">
              {project.results.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </DetailSection>
        </ScrollReveal>
      </Container>

      {zoomOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setZoomOpen(false)}
        >
          <img
            src={project.gallery[activeImage]}
            alt=""
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
