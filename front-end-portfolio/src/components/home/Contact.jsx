import { useState } from "react";
import { toast } from "react-toastify";
import Container from "../Container";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import { useContent } from "../../provider/ContentProvider";
import { submitContactMessage } from "../../services/contentService";

const Contact = () => {
  const { content } = useContent();
  const { siteSettings, socialLinks } = content;
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitContactMessage(form);
      toast.success("Message received. I will get back to you shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Could not send message. Please try again or email directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Something Great Together"
            description="Share your product vision, timeline, and goals. I'll respond with a clear next step."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <ScrollReveal>
            <div className="card-premium rounded-[2rem] p-8">
              <h3 className="text-2xl font-semibold text-white">Direct channels</h3>
              <div className="mt-8 space-y-5 text-sm text-text-muted">
                <p>
                  <span className="block text-xs uppercase tracking-[0.15em] text-accent">Email</span>
                  <a href={`mailto:${siteSettings.email}`} className="text-base text-white hover:text-accent">
                    {siteSettings.email}
                  </a>
                </p>
                <p>
                  <span className="block text-xs uppercase tracking-[0.15em] text-accent">WhatsApp</span>
                  <a href={siteSettings.whatsapp} target="_blank" rel="noreferrer" className="text-base text-white hover:text-accent">
                    Message on WhatsApp
                  </a>
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {socialLinks.slice(0, 4).map((link) => (
                  <Button key={link.platform} href={link.url} variant="secondary">
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card-premium rounded-[2rem] p-8">
              <div className="grid gap-5">
                {[
                  { name: "name", label: "Name", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "phone", label: "Phone Number", type: "tel" },
                ].map((field) => (
                  <label key={field.name} className="block">
                    <span className="mb-2 block text-sm text-text-muted">{field.label}</span>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      required={field.name !== "phone"}
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-accent/50"
                    />
                  </label>
                ))}

                <label className="block">
                  <span className="mb-2 block text-sm text-text-muted">Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-accent/50"
                  />
                </label>
              </div>

              <Button type="submit" className="mt-6 w-full" disabled={submitting}>
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
