import { createFileRoute } from "@tanstack/react-router";
import { InnerHero, ProcessSection, ContactCTA, Eyebrow } from "@/components/Site";
import telecallers from "@/assets/telecallers.jpg";
import { steps } from "@/lib/content";
export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works | Siri Career Consultancy" },
      {
        name: "description",
        content:
          "See how Siri Career Consultancy recruits, trains, deploys and manages support teams for banks.",
      },
      { property: "og:title", content: "How It Works | Siri Career Consultancy" },
      {
        property: "og:description",
        content: "Four clear steps from your requirement to a fully managed team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: How,
});
function How() {
  return (
    <main>
      <InnerHero
        parent="How It Works"
        title="How We Work With You"
        description="A simple and transparent process designed to take your requirement from brief to a fully managed team."
        image={telecallers}
        alt="Telecalling team handling banking support calls"
      />
      <ProcessSection
        eyebrow="Our Process"
        description="Four clear steps, with our team managing everything for you."
      />
      <section className="surface-sky section-space">
        <div className="site-container">
          <Eyebrow>In Detail</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy">
            What Happens at Each Stage
          </h2>
          <p className="mt-3 text-muted-foreground">
            Here is what you can expect from our team once you share your requirement.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {steps.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-border bg-card p-7">
                <span className="text-sm font-bold text-teal-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </main>
  );
}
