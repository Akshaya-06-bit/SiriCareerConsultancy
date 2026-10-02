import { createFileRoute } from "@tanstack/react-router";
import { InnerHero, Eyebrow, BenefitGrid, ContactCTA } from "@/components/Site";
import consultation from "@/assets/consultation.jpg";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Siri Career Consultancy" },
      {
        name: "description",
        content:
          "Learn about Siri Career Consultancy's staffing, telecalling and operational support services for banks and financial institutions.",
      },
      { property: "og:title", content: "About Us | Siri Career Consultancy" },
      {
        property: "og:description",
        content:
          "A team built around institutional trust, dependable staffing and transparent reporting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});
function About() {
  return (
    <main>
      <InnerHero
        parent="About Us"
        title="About Siri Career Consultancy"
        description="We provide staffing, telecalling and operational support services to banks and financial institutions with clarity, care and complete accountability."
      />
      <section className="section-space">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2">
          <img
            src={consultation}
            loading="lazy"
            width={1216}
            height={832}
            alt="Consultancy team supporting banking operations"
            className="rounded-2xl"
          />
          <div>
            <Eyebrow>Your Operations, Our Support</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
              Who We Are
            </h2>
            <h3 className="mt-4 font-display text-xl font-bold text-navy">
              A Team Built Around Institutional Trust
            </h3>
            <p className="mt-3 text-muted-foreground">
              Siri Career Consultancy supplies trained telecallers, staff and managed support teams
              to banks and financial institutions across India.
            </p>
            <div className="mt-8 space-y-5">
              {[
                [
                  "Our Mission",
                  "To give banks and financial institutions dependable teams that keep their operations running smoothly.",
                ],
                [
                  "Our Approach",
                  "We understand your process first, then recruit, train and deploy people who fit it exactly.",
                ],
                [
                  "Our Promise",
                  "Clear communication, honest reporting and continuous support for every engagement.",
                ],
              ].map(([a, b]) => (
                <div key={a}>
                  <h4 className="font-display font-bold text-navy">{a}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="surface-sky section-space">
        <div className="site-container grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>What Drives Us</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
              Service You Can Rely On
            </h2>
            <p className="mt-3 text-muted-foreground">
              From the first briefing to ongoing operations, we keep every engagement transparent
              and easy to manage.
            </p>
          </div>
          <BenefitGrid />
        </div>
      </section>
      <ContactCTA />
    </main>
  );
}
