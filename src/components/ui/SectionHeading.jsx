const SectionHeading = ({ eyebrow, title, description, align = "center" }) => {
  const alignment =
    align === "left" ? "text-left items-start" : "text-center items-center mx-auto";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">{title}</h2>
      {description && (
        <p className="text-base leading-7 text-text-muted md:text-lg">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
