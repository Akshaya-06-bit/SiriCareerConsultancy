import BajajFinanceLogo from "@/components/BajajFinanceLogo";
import { createFileRoute } from "@tanstack/react-router";
import { InnerHero, TrustSection, SectionHeading, ContactCTA } from "@/components/Site";
import { institutions } from "@/lib/content";
export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners | Siri Career Consultancy" },
      {
        name: "description",
        content:
          "Banking and lending institutions served by Siri Career Consultancy's staffing and operations teams.",
      },
      { property: "og:title", content: "Partners | Siri Career Consultancy" },
      {
        property: "og:description",
        content: "Support services for leading banks, NBFCs and financial institutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Partners,
});
function Partners() {
  return (
    <main>
      <InnerHero
        parent="Partners"
        title="Institutions We Serve"
        description="We provide trained teams and support services to leading banks, NBFCs and financial institutions."
      />
      <div className="py-10">
        <TrustSection />
      </div>
      <section className="section-space">
        <div className="site-container">
          <SectionHeading
            eyebrow="Institutions We Work With"
            title="Supporting Leading Banks & Lenders"
            description="Names are listed for reference to show the kind of institutions we serve. They do not represent an official partnership or endorsement."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {institutions.map((name) => (
              <div className="rounded-2xl border border-border bg-card p-6 card-shadow" key={name}>
                <div className="mb-5 flex h-12 min-w-0 items-center">
                  <div className="h-9 w-full max-w-[170px] overflow-hidden">
                    <BajajFinanceLogo className="block h-full w-full object-contain object-left" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-navy">{name}</h3>
                <p className="mt-2 text-xs text-muted-foreground">Supported Banking Institution</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </main>
  );
}
