import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Clock3, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import siriLogo from "/siricareerconsultant-logo.png";
import { company, contactInfo, navItems, services } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";

export function Brand() {
  return (
    <Link to="/" className="flex items-center" aria-label={`${company} home`}>
      <img
        src={siriLogo}
        alt="Siri Career Consultancy - Loan Recovery Agency"
        className="h-11 w-auto max-w-[240px] object-contain"
      />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card">
      <div className="bg-navy text-[11px] text-primary-foreground/85 sm:text-xs">
        <div className="site-container flex min-h-8 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-1.5">
          <span className="hidden sm:inline">Staffing &amp; Support Services for Banks</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-1.5 hover:underline focus-visible:underline"
            >
              <Phone size={12} />
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="hidden items-center gap-1.5 hover:underline focus-visible:underline sm:flex"
            >
              <Mail size={12} />
              {contactInfo.email}
            </a>
            <span className="hidden items-center gap-1.5 md:flex">
              <Clock3 size={12} />
              {contactInfo.hours}
            </span>
          </div>
        </div>
      </div>
      <div className="site-container flex h-16 items-center justify-between gap-4">
        <Brand />
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`rounded-sm text-sm transition-colors hover:text-teal-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-deep focus-visible:outline-offset-4 ${pathname === item.href ? "font-semibold text-teal-deep" : "text-navy/80"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="header" className="hidden lg:inline-flex">
          <a href={whatsappLink()} target="_blank" rel="noreferrer">
            Talk to an Expert <ArrowRight />
          </a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-border bg-card px-4 py-3 lg:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-sm border-b border-border py-3 text-sm font-semibold text-navy last:border-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-deep focus-visible:outline-offset-2"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="header" className="mt-3 w-full">
            <a
              onClick={() => setOpen(false)}
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
            >
              Talk to an Expert <ArrowRight />
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="site-container grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr_1.4fr]">
        <div>
          <div className="rounded-lg bg-card p-2 inline-block">
            <Brand />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Providing telecalling, staffing and support services to banks and financial
            institutions, helping them run smooth, scalable operations.
          </p>
        </div>
        <div>
          <h3 className="font-display font-bold">Quick Links</h3>
          <div className="mt-5 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display font-bold">Our Services</h3>
          <div className="mt-5 space-y-3">
            {services.map((service) => (
              <Link
                key={service.title}
                to="/services"
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display font-bold">Contact Information</h3>
          <div className="mt-5 space-y-4 text-sm text-primary-foreground/70">
            <p className="flex items-start gap-2">
              <Phone size={16} />
              <a
                href={`tel:${contactInfo.phone}`}
                className="hover:underline focus-visible:underline"
              >
                {contactInfo.phone}
              </a>
            </p>
            <p className="flex items-start gap-2">
              <Mail size={16} />
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:underline focus-visible:underline"
              >
                {contactInfo.email}
              </a>
            </p>
            <p className="flex items-start gap-2">
              <MapPin size={16} />
              {contactInfo.address}
            </p>
            <p className="flex items-start gap-2">
              <Clock3 size={16} />
              {contactInfo.hours}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="site-container flex flex-col justify-between gap-3 py-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© 2026 Siri Career Consultancy. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-primary-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
