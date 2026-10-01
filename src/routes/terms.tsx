import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Siri Career Consultancy" },
      {
        name: "description",
        content: "Terms governing Siri Career Consultancy's staffing and banking support services.",
      },
      { property: "og:title", content: "Terms & Conditions | Siri Career Consultancy" },
      {
        property: "og:description",
        content: "Service engagements, confidentiality, and website content terms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Terms,
});
function Terms() {
  return (
    <main className="site-container max-w-4xl py-20">
      <p className="text-sm font-bold text-teal-deep">Legal</p>
      <h1 className="mt-3 font-display text-4xl font-extrabold text-navy">
        Terms &amp; Conditions
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: September 2026</p>
      <div className="mt-12 space-y-10">
        {[
          [
            "Services",
            "Siri Career Consultancy provides telecalling, staffing, lead generation, documentation and verification services to banks and financial institutions.",
          ],
          [
            "Engagements",
            "Scope, team size, timelines and commercials for each engagement are defined in a separate agreement with the institution.",
          ],
          [
            "Confidentiality",
            "Both parties agree to keep business and customer information confidential during and after the engagement.",
          ],
          [
            "Website Content",
            "Institution names shown on this website are for reference only and do not indicate an official partnership or endorsement.",
          ],
        ].map(([title, text]) => (
          <section key={title}>
            <h2 className="font-display text-xl font-bold text-navy">{title}</h2>
            <p className="mt-3 text-muted-foreground">{text}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
