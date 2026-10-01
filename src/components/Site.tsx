import BajajFinanceLogo from "@/components/BajajFinanceLogo";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Users, ShieldCheck, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import { benefits, institutions, services, steps } from "@/lib/content";
import consultation from "@/assets/consultation.jpg";
import hero from "@/assets/hero-banking.jpg";
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-bold text-teal-deep">
      {children}
    </span>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
        {description}
      </p>
    </div>
  );
}
export function PillLink({
  to,
  children,
}: {
  to: "/contact" | "/services";
  children: React.ReactNode;
}) {
  return (
    <Button asChild variant="coral">
      <Link to={to}>
        {children}
        <span className="ml-2 flex size-8 items-center justify-center rounded-full bg-navy text-primary-foreground">
          <ArrowRight size={16} />
        </span>
      </Link>
    </Button>
  );
}
export function Hero() {
  return (
    <section className="px-3 pt-4 sm:px-5 sm:pt-6">
      <div className="surface-peri relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] sm:rounded-[2.75rem]">
        <div className="grid items-center gap-8 px-5 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:px-14 lg:py-16">
          <div className="min-w-0 reveal">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase text-navy/70">
              <span className="size-1.5 rounded-full bg-coral" />
              Staffing &amp; support services for banks
            </span>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-extrabold leading-[1.05] text-navy sm:text-5xl lg:text-[3.6rem]">
              Powering Banks with Trained Teams
            </h1>
            <p className="mt-4 max-w-md text-sm text-navy/65 sm:text-base">
              Siri Career Consultancy provides telecallers, staffing, lead generation and
              back-office support to banks and financial institutions — all under one roof.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PillLink to="/contact">Get Started</PillLink>
              <Link
                to="/services"
                className="text-sm font-bold text-navy underline decoration-coral decoration-2 underline-offset-4 hover:text-coral-deep"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-3">
              {[
                { icon: Users, title: "Trained Telecallers" },
                { icon: ShieldCheck, title: "Verified Staffing" },
                { icon: HeartHandshake, title: "Bank-First Approach" },
              ].map(({ icon: Icon, title }) => (
                <div key={title} className="rounded-2xl bg-card/70 p-3 sm:p-4">
                  <span className="inline-flex size-8 items-center justify-center rounded-lg bg-accent text-teal-deep">
                    <Icon size={16} />
                  </span>
                  <p className="mt-2 text-[11px] font-bold leading-snug text-navy sm:text-xs">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-w-0 reveal">
            <img
              src={hero}
              alt="Illustration of a banking support professional at work with cards, coins and documents"
              width={1216}
              height={832}
              className="mx-auto w-full max-w-lg rounded-[1.75rem]"
            />
            <div className="absolute -bottom-3 left-2 flex items-center gap-2.5 rounded-2xl bg-card px-4 py-3 float-shadow sm:left-4">
              <CheckCircle2 size={20} className="shrink-0 text-teal" />
              <p className="text-xs font-bold text-navy sm:text-sm">
                Telecalling • Staffing • Lead Generation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export function TrustSection({ heading = "Trusted by Banking Teams" }: { heading?: string }) {
  return (
    <section className="border-y border-border bg-card py-8 sm:py-10">
      <div className="site-container grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-center lg:gap-10">
        <div>
          <h3 className="font-display text-base font-bold sm:text-lg">{heading}</h3>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            We provide services to leading banks and financial institutions.
          </p>
        </div>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="marquee-track flex w-max gap-3 sm:gap-4">
            {[...institutions, ...institutions].map((name, i) => (
              <div
                key={i}
                className="flex h-16 shrink-0 items-center gap-3 rounded-2xl border border-border bg-card px-4.5 card-shadow"
              >
                <BajajFinanceLogo className="h-7 w-auto max-w-[170px] object-contain" />
              </div>
            ))}
          </div>
        </div>
        <p className="col-span-full -mt-4 text-[11px] text-muted-foreground">
          Institution names are shown for reference only and do not indicate an official partnership
          or endorsement.
        </p>
      </div>
    </section>
  );
}
export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map(({ title, description, short, icon: Icon }) => (
        <Link
          to="/services"
          key={title}
          className="group flex min-h-36 items-start gap-4 rounded-2xl border border-border bg-card p-6 card-shadow transition-transform hover:-translate-y-1 hover:border-teal/40"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-teal-deep">
            <Icon size={20} />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-sm font-bold text-navy sm:text-base">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {detailed ? short : description}
            </p>
            {detailed && (
              <span className="mt-3 inline-block text-sm font-semibold text-teal-deep">
                Learn More
              </span>
            )}
          </div>
          <ArrowRight
            size={16}
            className="shrink-0 text-teal transition-transform group-hover:translate-x-1"
          />
        </Link>
      ))}
    </div>
  );
}
export function ServicesSection() {
  return (
    <section className="section-space">
      <div className="site-container">
        <SectionHeading
          eyebrow="Our Services"
          title="Services Built for Banks & Financial Institutions"
          description="From telecalling teams to documentation processing, we deliver trained people and managed operations that keep your banking processes running smoothly."
        />
        <ServicesGrid />
      </div>
    </section>
  );
}
export function WhyChoose({
  title = "Your Trusted Partner for Banking Operations",
  eyebrow = "Why Choose Siri Career Consultancy",
  description = "We are committed to dependable teams, transparent processes and a smooth working relationship with every institution we serve.",
}: {
  title?: string;
  eyebrow?: string;
  description?: string;
}) {
  return (
    <section className="surface-sky section-space">
      <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
        <div className="relative">
          <img
            src={consultation}
            alt="Consultant explaining financial options to a client"
            loading="lazy"
            width={1216}
            height={832}
            className="w-full rounded-2xl object-cover float-shadow"
          />
          <div className="absolute -bottom-4 left-4 max-w-56 rounded-2xl bg-card px-4 py-3 text-xs font-bold text-navy float-shadow">
            Reliable Teams for Every Banking Process
          </div>
        </div>
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">{description}</p>
          <BenefitGrid />
        </div>
      </div>
    </section>
  );
}
export function BenefitGrid() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {benefits.map(({ title, description, icon: Icon }) => (
        <div key={title} className="min-h-44 rounded-2xl border border-border bg-card p-5">
          <span className="flex size-9 items-center justify-center rounded-full bg-accent text-teal-deep">
            <Icon size={17} />
          </span>
          <h3 className="mt-3 font-display text-sm font-bold text-navy">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      ))}
    </div>
  );
}
export function ProcessSection({
  description = "Share your requirement and we handle the rest — recruitment, training, deployment and reporting.",
  eyebrow = "How It Works",
}: {
  description?: string;
  eyebrow?: string;
}) {
  return (
    <section className="section-space">
      <div className="site-container">
        <SectionHeading
          eyebrow={eyebrow}
          title="A Simple Process to Power Your Operations"
          description={description}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, description }, i) => (
            <div
              key={title}
              className="relative rounded-2xl border border-border bg-card p-5 card-shadow"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal-deep text-xs font-bold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-sm font-bold text-navy">{title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
              {i < 3 && (
                <span className="absolute -right-4 top-1/2 z-10 hidden text-teal lg:block">›</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ContactCTA() {
  return (
    <section className="surface-sky section-space">
      <div className="site-container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Let's Get Started</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Need Telecallers, Staff or Support Teams for Your Bank?
          </h2>
          <p className="mt-3 max-w-lg text-sm text-muted-foreground sm:text-base">
            Tell us your requirement and our experts will get back with the right team and plan for
            your institution.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export function InnerHero({
  parent,
  title,
  description,
  image = consultation,
  alt = "Consultancy team meeting with banking partners",
}: {
  parent: string;
  title: string;
  description: string;
  image?: string;
  alt?: string;
}) {
  return (
    <section className="px-3 pt-4 sm:px-5 sm:pt-6">
      <div className="surface-peri mx-auto max-w-7xl overflow-hidden rounded-[2rem] sm:rounded-[2.75rem]">
        <div className="grid items-center gap-8 px-5 py-10 sm:px-10 sm:py-14 lg:grid-cols-2 lg:px-14">
          <div className="reveal">
            <p className="text-xs font-bold text-teal-deep">
              <Link to="/">Home</Link> / {parent}
            </p>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground">{description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PillLink to="/contact">Discuss Your Requirement</PillLink>
              <Link
                to="/contact"
                className="text-sm font-bold text-navy underline decoration-coral decoration-2 underline-offset-4"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <img
            src={image}
            alt={alt}
            width={1216}
            height={832}
            className="w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
