import { useState, type FormEvent } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/content";
import { whatsappLink } from "@/lib/whatsapp";

type SubmissionStatus = "idle" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const phone = String(formData.get("phone") || "").replace(/\D/g, "");
    if (phone.length < 10) {
      setError("Please enter a valid phone number.");
      setStatus("error");
      return;
    }

    setError("");
    const message = `Hello Siri Career Consultancy, I would like to talk to an expert.\n\nName: ${String(formData.get("name") || "")}\nPhone: ${String(formData.get("phone") || "")}\nService: ${String(formData.get("service") || "")}\nMessage: ${String(formData.get("message") || "")}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setStatus("success");
    form.reset();
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 card-shadow sm:p-7">
      <h3 className="font-display text-lg font-bold text-navy">Contact Us</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Fill in your details and our team will get back to you shortly.
      </p>
      <form className="mt-6 space-y-5" onSubmit={submit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-navy">
            Full Name *
            <input
              name="name"
              required
              minLength={2}
              placeholder="Enter your name"
              className="mt-1 block h-11 w-full rounded-xl border border-border bg-card px-3 font-normal outline-none focus:border-teal"
            />
          </label>
          <label className="block text-sm font-semibold text-navy">
            Phone Number *
            <input
              name="phone"
              type="tel"
              required
              placeholder="Enter your phone number"
              className="mt-1 block h-11 w-full rounded-xl border border-border bg-card px-3 font-normal outline-none focus:border-teal"
            />
          </label>
        </div>
        <label className="block text-sm font-semibold text-navy">
          Service Needed *
          <span className="relative mt-1 block">
            <select
              name="service"
              required
              defaultValue=""
              className="h-11 w-full appearance-none rounded-xl border border-border bg-card px-3 pr-9 font-normal text-navy outline-none focus:border-teal"
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-3.5 text-muted-foreground"
            />
          </span>
        </label>
        <label className="block text-sm font-semibold text-navy">
          Message
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your requirement..."
            className="mt-1 block w-full rounded-xl border border-border bg-card p-3 font-normal outline-none focus:border-teal"
          />
        </label>
        {status === "error" && (
          <p role="alert" className="text-sm text-coral-deep">
            {error}
          </p>
        )}
        {status === "success" && (
          <p role="status" className="text-sm text-teal-deep">
            Your enquiry has been sent.
          </p>
        )}
        <Button variant="teal" type="submit">
          Talk to an Expert
          <ArrowRight />
        </Button>
      </form>
    </div>
  );
}
