import {
  Headset,
  Users,
  CreditCard,
  ClipboardList,
  FileText,
  Landmark,
  ShieldCheck,
  HeartHandshake,
  ChartNoAxesCombined,
  Clock3,
} from "lucide-react";

export const company = "Siri Career Consultancy";
export const contactInfo = {
  phone: "8919508969",
  email: "siricareercoonsultants@gmail.com",
  address: "H.No. 27-117/1, Main Bazar, Near Church Road, Miryalguda, Nalgonda, 508207",
  hours: "9:30 AM - 5:30 PM",
};
export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
] as const;
export const institutions = ["Bajaj Finance"];
export const services = [
  {
    title: "Telecalling Teams",
    description:
      "Trained telecallers for banks — lead follow-ups, product promotion, reminders and customer engagement campaigns.",
    short:
      "Dedicated telecallers for lead follow-ups, product promotion, payment reminders and customer engagement.",
    icon: Headset,
  },
  {
    title: "Bank Staffing",
    description:
      "Skilled, verified staff for branches and back offices — sales officers, relationship executives and support roles.",
    short:
      "Verified sales officers, relationship executives and branch support staff, deployed quickly.",
    icon: Users,
  },
  {
    title: "Lead Generation",
    description:
      "Quality lead sourcing and DSA-style support for loans, cards and other banking products.",
    short: "Quality lead sourcing for loans, credit cards and other banking products.",
    icon: CreditCard,
  },
  {
    title: "Documentation Processing",
    description:
      "Accurate collection, verification and processing of customer documents and application files.",
    short: "Accurate collection, verification and processing of customer documents and files.",
    icon: ClipboardList,
  },
  {
    title: "Field Verification",
    description:
      "On-ground address and employment verification support with timely, reliable reporting.",
    short: "On-ground address and employment verification with reliable, timely reporting.",
    icon: FileText,
  },
  {
    title: "Customer Support Operations",
    description:
      "Dedicated support teams that handle customer queries, follow-ups and service requests on your behalf.",
    short: "Support teams handling customer queries, follow-ups and service requests for you.",
    icon: Landmark,
  },
];
export const benefits = [
  {
    title: "Trained Professionals",
    description: "Every team member is screened, trained and process-ready before deployment.",
    icon: ShieldCheck,
  },
  {
    title: "Quick Deployment",
    description: "Teams up and running in days, not months — sized to your requirement.",
    icon: Clock3,
  },
  {
    title: "Transparent Reporting",
    description: "Clear performance reports, call metrics and regular review meetings.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Bank-First Approach",
    description:
      "Processes built around your compliance, quality and customer experience standards.",
    icon: HeartHandshake,
  },
];
export const steps = [
  {
    title: "Share Your Requirement",
    description: "Tell us the roles, team size and locations your bank or institution needs.",
  },
  {
    title: "We Deploy Trained Teams",
    description: "We recruit, train and deploy telecallers and staff matched to your process.",
  },
  {
    title: "Managed Operations",
    description: "We run day-to-day operations with quality checks, scripts and supervision.",
  },
  {
    title: "Reporting & Scale-Up",
    description:
      "Transparent reports and reviews, with the flexibility to scale teams as you grow.",
  },
];
