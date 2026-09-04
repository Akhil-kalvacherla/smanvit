import { Link } from "react-router-dom";

import { PageHero, Reveal, SiteLayout } from "@/components/Layout";

const TITLE = "Capabilities | SMANV Info Tech";
const DESCRIPTION =
  "Eight core capabilities across consulting, engineering, AI automation, cloud, cybersecurity, digital marketing, GCC setup and managed services.";

interface Capability {
  title: string;
  tag: string;
  body: string;
  points: string[];
  image: string;
  imageAlt: string;
}

const CAPABILITIES: Capability[] = [
  {
    title: "Strategic Technology Consulting",
    tag: "WE THINK BEFORE WE BUILD",
    body: "You make smarter technology decisions, faster, with less wasted spend.",
    points: [
      "Technology audit of your current systems",
      "Digital transformation roadmap",
      "Build vs. buy analysis",
      "Stack recommendations aligned to your budget and scale",
      "Risk and compliance gap assessment",
    ],
    image: "/assets/image 93.png",
    imageAlt: "Strategic technology consulting icon",
  },
  {
    title: "Full-Stack Software Engineering",
    tag: "CLEAN CODE, SCALABLE SYSTEMS, ZERO SHORTCUTS",
    body: "Software that works on Day 1 and scales without breaking on Day 1,000.",
    points: [
      "Web apps, mobile apps, and enterprise platforms",
      "React, Angular, Node.js, Python, Java, Laravel",
      "Cloud-native and API-first architecture",
      "Agile delivery with weekly demos and progress updates",
    ],
    image: "/assets/image 92.jpg",
    imageAlt: "Full-stack software engineering icon",
  },
  {
    title: "AI & Intelligent Automation",
    tag: "WE DON'T JUST TALK ABOUT AI. WE BUILD WITH IT",
    body: "Repetitive tasks automated. Smart decisions made faster. Real business value delivered.",
    points: [
      "Custom AI applications and language model integrations",
      "Machine learning models for prediction and classification",
      "AI agents that automate complex business workflows",
      "Chatbots and virtual assistants for customer service",
      "Data pipelines, analytics dashboards and BI tools",
    ],
    image: "/assets/image 91.jpg",
    imageAlt: "AI and intelligent automation icon",
  },
  {
    title: "Cloud & Infrastructure Engineering",
    tag: "YOUR INFRASTRUCTURE, BUILT TO LAST",
    body: "Infrastructure that stays fast, secure, and online, even when traffic spikes.",
    points: [
      "Cloud migrations to AWS, Azure, and Google Cloud",
      "Web hosting, DNS, and domain management",
      "DevOps, CI/CD, and automated deployment pipelines",
      "Auto-scaling, cost optimisation, and disaster recovery",
      "Server setup, monitoring, and 24/7 uptime management",
    ],
    image: "/assets/image 90.jpg",
    imageAlt: "Cloud and infrastructure engineering icon",
  },
  {
    title: "Cybersecurity & Compliance",
    tag: "PROTECT YOUR BUSINESS BEFORE IT'S TOO LATE",
    body: "Fewer vulnerabilities. Audit-ready systems. Clients and partners who trust you.",
    points: [
      "Vulnerability assessment and penetration testing",
      "ISO 27001, GDPR, and regulatory compliance readiness",
      "Security monitoring and threat detection",
      "Access control, endpoint protection, and network security",
      "Audit support, documentation, and incident response",
    ],
    image: "/assets/image 89.jpg",
    imageAlt: "Cybersecurity and compliance icon",
  },
  {
    title: "Performance Digital Marketing",
    tag: "MARKETING THAT EARNS ITS BUDGET EVERY MONTH",
    body: "More website visitors. Better leads. Lower cost per acquisition.",
    points: [
      "SEO that ranks your website for the searches that matter",
      "Google Ads, Meta Ads, and LinkedIn campaigns with clear ROI",
      "Social media that builds community and drives action",
      "Content that educates your audience and converts them",
      "Monthly reporting, you always know what you're getting",
    ],
    image: "/assets/image 88.jpg",
    imageAlt: "Performance digital marketing icon",
  },
  {
    title: "GCC Setup & Global Operations",
    tag: "YOUR INDIA OFFICE — BUILT RIGHT, FROM DAY ONE",
    body: "A fully operational India presence, without the setup headache.",
    points: [
      "Entity setup, legal structure, and regulatory compliance",
      "Office infrastructure and IT systems",
      "Talent acquisition, onboarding, and HR operations support",
      "Governance frameworks and reporting structures",
      "Ongoing operational management as your team scales",
    ],
    image: "/assets/image 87.jpg",
    imageAlt: "GCC setup and global operations icon",
  },
  {
    title: "BPO, KPO & Managed Services",
    tag: "YOUR OPERATIONS HANDLED. YOUR TEAM FOCUSED ON WHAT MATTERS",
    body: "Operations run smoothly. Overhead stays low. Your core team stays focused.",
    points: [
      "Customer support across voice, email, and chat",
      "Technical helpdesk and Level 1/2 IT support",
      "Data entry, processing, and management",
      "Business intelligence, research, and reporting",
      "Virtual IT staffing, hire the exact talent you need",
    ],
    image: "/assets/image 86.jpg",
    imageAlt: "BPO, KPO and managed services icon",
  },
];

export default CapabilitiesPage;

function CapabilitiesPage() {
  return (
    <SiteLayout>
      <section className="relative bg-white pt-32 pb-16 px-6 overflow-hidden">
        <Reveal className="relative mx-auto flex max-w-[1080px] flex-col items-center text-center" stagger={0.1}>
          <h1 className="text-[40px] font-bold font-raleway leading-[1.1] tracking-tight text-black sm:text-[48px] md:text-[56px] lg:text-[64px]">
            Transforming Ideas Into
            <br />
            Intelligent Solutions
          </h1>
          <p className="mt-6 max-w-[850px] text-[16px] font-semibold font-nunito leading-[1.5] text-[#1F2937] sm:text-[18px] md:text-[20px]">
            Eight core capabilities. Two service lines. One team that delivers all of it, with the
            <br className="hidden md:block" />
            experience, tools, and track record to back it up.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <button className="rounded-full bg-[#188BF6] px-8 py-3.5 text-[15px] font-bold font-nunito text-white shadow-sm transition-colors hover:bg-[#0076E5]">
              Book a Free Consultation
            </button>
            <button className="rounded-full border border-[#188BF6] bg-white px-8 py-3.5 text-[15px] font-bold font-nunito text-[#188BF6] transition-colors hover:bg-blue-50">
              Explore Our Services
            </button>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1140px] px-6 py-20">
        <h2 className="text-center text-[32px] sm:text-[40px] font-bold font-raleway tracking-tight text-black">
          This Is What We're Built For
        </h2>

        <Reveal className="mt-14 flex flex-col items-center">
          {/* Top 6 items in a 3-column grid */}
          <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.slice(0, 6).map((c) => (
              <article
                key={c.title}
                className="flex h-full flex-col rounded-[32px] border border-gray-50 bg-white p-8 sm:p-10 shadow-[0_10px_40px_-10px_rgba(200,190,230,0.4)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_-10px_rgba(200,190,230,0.6)]"
              >
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  className="h-[72px] w-auto object-contain object-left"
                  loading="lazy"
                />
                <h3 className="mt-8 text-[20px] leading-[1.3] font-bold font-raleway text-[#1A2359]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-wide font-nunito text-[#188BF6]">
                  {c.tag}
                </p>
                <p className="mt-5 text-[14px] font-semibold leading-[1.7] font-nunito text-gray-700">
                  {c.body}
                </p>
                <ul className="mt-6 space-y-3">
                  {c.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#1A2359]" aria-hidden />
                      <span className="text-[14px] font-semibold leading-[1.6] font-nunito text-gray-800">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Bottom 2 items centered */}
          <div className="mt-8 flex w-full max-w-[750px] flex-col gap-8 sm:flex-row">
            {CAPABILITIES.slice(6).map((c) => (
              <article
                key={c.title}
                className="flex h-full flex-1 flex-col rounded-[32px] border border-gray-50 bg-white p-8 sm:p-10 shadow-[0_10px_40px_-10px_rgba(200,190,230,0.4)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_-10px_rgba(200,190,230,0.6)]"
              >
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  className="h-[72px] w-auto object-contain object-left"
                  loading="lazy"
                />
                <h3 className="mt-8 text-[20px] leading-[1.3] font-bold font-raleway text-[#1A2359]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-wide font-nunito text-[#188BF6]">
                  {c.tag}
                </p>
                <p className="mt-5 text-[14px] font-semibold leading-[1.7] font-nunito text-gray-700">
                  {c.body}
                </p>
                <ul className="mt-6 space-y-3">
                  {c.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#1A2359]" aria-hidden />
                      <span className="text-[14px] font-semibold leading-[1.6] font-nunito text-gray-800">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-14">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-[#F8F9FA] px-8 py-12 sm:py-14 text-center shadow-sm">
            {/* Blurry abstract circles using the provided asset */}
            <img
              src="/assets/Ellipse 5.svg"
              alt=""
              className="absolute top-[40%] -translate-y-1/2 -left-20 h-[400px] w-[250px] object-cover object-right max-w-none pointer-events-none"
              aria-hidden
            />
            <img
              src="/assets/Ellipse 5.svg"
              alt=""
              className="absolute top-[60%] -translate-y-1/2 -right-20 h-[400px] w-[250px] object-cover object-right max-w-none pointer-events-none rotate-180"
              aria-hidden
            />
            
            <h2 className="relative z-10 text-[32px] sm:text-[36px] font-bold font-raleway leading-[1.2] text-black">
              Not Sure Which Capability You
              <br className="hidden sm:block" />
              Need?
            </h2>
            <p className="relative z-10 mx-auto mt-5 max-w-[550px] text-[16px] font-semibold font-nunito leading-[1.6] text-gray-700">
              Tell us about your business challenge, our team
              <br className="hidden sm:block" />
              will come back with the right capability match and
              <br className="hidden sm:block" />
              a free initial recommendation.
            </p>
            <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-full bg-[#188BF6] px-8 py-3.5 text-[15px] font-bold font-nunito text-white shadow-sm transition-colors hover:bg-[#0076E5]"
              >
                Book a Free Consultation
              </Link>
              <Link
                to="/it-services"
                className="rounded-full border border-[#188BF6] bg-white px-8 py-3.5 text-[15px] font-bold font-nunito text-[#188BF6] transition-colors hover:bg-blue-50"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
