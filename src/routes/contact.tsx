import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";
import { PageHero, Reveal, SiteLayout } from "@/components/Layout";
import { submitToGoogleSheet } from "@/lib/google-sheets";

const TITLE = "Contact SMANV Info Tech | Let's Build Something Great";
const DESCRIPTION =
  "Talk to SMANV Info Tech in Hyderabad about your project. Free consultation, response within 24 hours, clients in India, UAE, US and Europe.";

const SERVICES = [
  "Web & App Development",
  "AI / ML Solutions",
  "Cloud & Infrastructure",
  "Cybersecurity & Compliance",
  "Digital Marketing",
  "BPO / KPO",
  "GCC Setup",
];

const FAQS = [
  {
    q: "How quickly can your team get started?",
    a: "Most projects kick off within 5 - 7 business days of signing the agreement. For urgent requirements, we can mobilise within 48 hours.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We currently serve clients across India, the UAE, the US, the UK, and Europe, with overlapping working hours and dedicated points of contact.",
  },
  {
    q: "Can you handle both IT and marketing together?",
    a: "That is exactly how we are built. One accountable team delivers engineering and marketing together, with no handover chaos between vendors.",
  },
  {
    q: "What is the minimum project size you take on?",
    a: "We work with everything from focused single-sprint engagements to multi-year enterprise programmes. We will tell you honestly if we are not the right fit.",
  },
  {
    q: "Do you offer ongoing support after delivery?",
    a: "Yes. Every launch includes monitoring, documentation, and training, with optional monthly support and maintenance retainers.",
  },
  {
    q: "How do you price your services?",
    a: "Fixed-scope projects are quoted milestone by milestone. Long-running work is billed as a dedicated team or monthly retainer. Pricing is always transparent up front.",
  },
  {
    q: "Is the consultation really free?",
    a: "Completely free, with no obligation. You get a 30-minute call, a clear recommendation, and a written summary of next steps.",
  },
];

export default ContactPage;

function Field({
  label,
  placeholder,
  type = "text",
  id,
  value,
  onChange,
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-[14px] font-medium text-[#111827] font-raleway">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-gray-300 bg-transparent pb-2.5 text-[15px] font-normal text-gray-900 font-nunito outline-none placeholder:text-gray-400 focus:border-[#188BF6]"
      />
    </div>
  );
}

function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setErrorMsg("Please fill in your name and email.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    const success = await submitToGoogleSheet({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service || "General Inquiry",
      message: formData.message,
    });

    setIsSubmitting(false);

    if (success) {
      setSent(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } else {
      setErrorMsg("Failed to connect to spreadsheet. Please try again.");
    }
  };

  return (
    <SiteLayout>
      <section className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center bg-white px-6 py-20 text-center">
        <div className="mx-auto max-w-[900px]">
          <h1 className="text-[40px] font-bold leading-[1.2] text-[#111827] sm:text-[56px] lg:text-[64px] font-raleway">
            Let's Build Something Great
            <br />
            Together
          </h1>
          <p className="mx-auto mt-6 max-w-[750px] text-[16px] font-medium leading-relaxed text-[#374151] sm:text-[18px] font-nunito">
            Whether you have a project in mind, a question about our services, or just want to explore what's possible, we'd love to hear from you.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-full bg-[#188BF6] px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-blue-600 font-nunito">
              Book a Free Consultation
            </button>
            <button className="rounded-full border border-[#188BF6] bg-white px-8 py-3.5 text-[15px] font-semibold text-[#188BF6] transition-colors hover:bg-[#EAF3FF] font-nunito">
              Explore Our Services
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1080px] px-6 py-10">
        <Reveal>
          <div className="grid overflow-hidden rounded-[24px] bg-white shadow-[0_15px_60px_rgba(0,0,0,0.06)] md:grid-cols-[0.85fr_1.15fr]">
            <div className="relative overflow-hidden bg-[#188BF6] p-8 sm:p-10 text-white">
              <span
                aria-hidden
                className="absolute -top-10 -left-10 size-48 rounded-full border border-white/20"
              />
              <span
                aria-hidden
                className="absolute -right-12 -bottom-16 size-64 rounded-full bg-[#0B6DD0] blur-3xl opacity-50"
              />
              <h2 className="relative text-[24px] sm:text-[26px] font-semibold font-raleway">Contact Information</h2>
              <p className="relative mt-3 text-[14px] leading-relaxed text-white/90 font-nunito pr-2">
                We'll create high-quality linkable content and build at least 40 high-authority links.
              </p>
              <ul className="relative mt-8 space-y-4 text-[14px] font-nunito">
                <li className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/20">
                    <Phone className="size-4" aria-hidden />
                  </span>
                  +91 79896 92202
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/20">
                    <Mail className="size-4" aria-hidden />
                  </span>
                  admin@smanv.com
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/20">
                    <MapPin className="size-4" aria-hidden />
                  </span>
                  <span className="max-w-[200px]">4-72, Nacharam, Uppal, Hyderabad, Telangana, India.</span>
                </li>
              </ul>
              <div className="relative mt-10 flex gap-3">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/smanvgroups/" },
                  { Icon: Instagram, href: "https://www.instagram.com/smanv_groups/" },
                  { Icon: X, href: "#" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/smanv-groups/" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Social link"
                    className="grid size-8 place-items-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
                  >
                    <Icon className="size-3.5" />
                  </a>
                ))}
              </div>
            </div>

            <form className="p-8 sm:p-10 flex flex-col justify-between" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field
                    id="name"
                    label="Your Name"
                    placeholder="John Trangely"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    id="phone"
                    label="Your Phone"
                    placeholder="+91 98765 43210"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <Field
                    id="email"
                    label="Your Email"
                    placeholder="hello@nurency.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <div className="flex flex-col">
                    <label htmlFor="service" className="text-[14px] font-medium text-[#111827] font-raleway">
                      Service Interested In
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="mt-2 w-full appearance-none border-b border-gray-300 bg-transparent pb-2 text-[14px] font-normal text-gray-900 font-nunito outline-none focus:border-[#188BF6]"
                      >
                        <option value="" disabled>
                          Select your service
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-0 top-[12px] size-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="message" className="text-[14px] font-medium text-[#111827] font-raleway">
                    Message
                  </label>
                  <input
                    id="message"
                    type="text"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full border-b border-gray-300 bg-transparent pb-2 text-[14px] font-normal text-gray-900 font-nunito outline-none placeholder:text-gray-400 focus:border-[#188BF6]"
                  />
                </div>
              </div>

              {errorMsg && (
                <p className="mt-3 text-[14px] font-medium text-red-500">{errorMsg}</p>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full border border-[#188BF6] bg-white px-8 py-2.5 text-[14px] font-medium text-[#188BF6] transition-colors hover:bg-[#EAF3FF] font-nunito disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Saving...
                    </>
                  ) : sent ? (
                    <>
                      <CheckCircle2 className="size-4 text-[#188BF6]" />
                      Sent Successfully
                    </>
                  ) : (
                    "Send A Message"
                  )}
                </button>
              </div>


              {sent && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-green-500/10 p-3 text-[11.5px] text-green-700 dark:text-green-300">
                  <CheckCircle2 className="size-4 shrink-0" />
                  <span>
                    Thank you! Your response has been securely recorded in our Google Sheet
                    database. We&apos;ll be in touch within 24 hours.
                  </span>
                </div>
              )}
            </form>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <iframe
            title="SMANV Info Tech office location map"
            src="https://www.google.com/maps?q=Nacharam,Hyderabad,Telangana&output=embed"
            loading="lazy"
            className="h-[320px] w-full rounded-2xl border border-border shadow-sm"
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-[800px] px-6 py-16">
        <h2 className="text-center text-[32px] sm:text-[36px] font-semibold tracking-tight text-[#111827] font-raleway">
          Frequently Asked Questions
        </h2>
        <Reveal className="mt-10 space-y-4" stagger={0.05}>
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl px-6 py-5 transition-all duration-200 ${
                  isOpen 
                    ? "bg-[#D6EEFF] shadow-sm" 
                    : "bg-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] border border-gray-50 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.12)]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className={`text-[16px] font-medium font-raleway ${isOpen ? "text-[#111827]" : "text-[#111827]"}`}>{faq.q}</span>
                  <ChevronDown 
                    className={`size-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#111827]" : "text-gray-500"}`} 
                    aria-hidden 
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-[15px] font-normal leading-relaxed text-gray-600 font-nunito pr-8">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </Reveal>
      </section>
    </SiteLayout>
  );
}
