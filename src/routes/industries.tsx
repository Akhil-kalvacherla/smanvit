import { Link } from "react-router-dom";

import { ShieldCheck, ShieldAlert } from "lucide-react";
import { Reveal, SiteLayout } from "@/components/Layout";

const TITLE = "Industries We Serve | SMANV Info Tech";
const DESCRIPTION =
  "Technology and marketing solutions across FinTech, healthcare, retail, real estate, education, manufacturing, travel, legal, SaaS and government.";

interface Industry {
  title: string;
  tag: string;
  challenge: string;
  solution: string;
  kicker: string;
  cta: string;
}

const INDUSTRIES: Industry[] = [
  {
    title: "Financial Services & FinTech",
    tag: "SECURE, COMPLIANT, AND BUILT FOR SPEED",
    challenge:
      "Banks, NBFCs, and FinTech startups need technology that is secure by default, audit-ready, and able to scale fast as regulations change.",
    solution:
      "We build compliant web and mobile banking platforms, automate compliance workflows, run targeted digital marketing for lead acquisition, and help global FinTech firms set up their India GCC.",
    kicker: "Is your tech stack audit-ready?",
    cta: "Book a Free Consultation",
  },
  {
    title: "Healthcare & MedTech",
    tag: "TECHNOLOGY THAT IMPROVES CARE AND OPERATIONS",
    challenge:
      "Healthcare providers and MedTech startups need reliable software, secure patient data management, and digital marketing that navigates regulatory constraints.",
    solution:
      "We build patient portals, appointment systems, and health-data platforms. We run compliant digital campaigns and help healthcare brands build trust online.",
    kicker: "Build better healthcare technology with us",
    cta: "Get Started",
  },
  {
    title: "Retail & E-Commerce",
    tag: "SELL MORE. EVERYWHERE. ALWAYS",
    challenge:
      "Retail and D2C brands struggle with fragmented digital presence, poor website conversion, and inconsistent marketing performance across channels.",
    solution:
      "We build high-converting e-commerce stores, run performance marketing campaigns across Google and Meta, and optimise for conversion at every step.",
    kicker: "Ready to grow your online revenue?",
    cta: "Let's Build Your Store",
  },
  {
    title: "Real Estate & Construction",
    tag: "MORE ENQUIRIES. BETTER QUALIFIED LEADS",
    challenge:
      "Real estate developers and agencies need digital presence that generates property enquiries, not just impressions.",
    solution:
      "We build property listing websites, run high-ROI Google and Meta lead campaigns, manage social presence, and automate lead follow-up with CRM integrations.",
    kicker: "Generate more property leads this month",
    cta: "Book a Call",
  },
  {
    title: "Education & EdTech",
    tag: "TECHNOLOGY THAT SCALES LEARNING",
    challenge:
      "EdTech startups and educational institutions need robust learning platforms, strong online enrolment funnels, and content marketing that reaches the right students.",
    solution:
      "We build LMS platforms, student portals, and mobile learning apps. We run enrolment-focused campaigns and create content that ranks for course-related queries.",
    kicker: "More learners with smarter technology",
    cta: "Talk to Us",
  },
  {
    title: "Manufacturing & Industry",
    tag: "DIGITIZE OPERATIONS. COMPETE GLOBALLY",
    challenge:
      "Manufacturers are under pressure to digitise, from supply chain visibility to B2B lead generation. Most don't know where to start.",
    solution:
      "We build custom ERP integrations, B2B websites with product catalogues, and run digital marketing that positions manufacturers in front of global procurement teams.",
    kicker: "Start your digital transformation today",
    cta: "Get a Free Assessment",
  },
  {
    title: "Travel, Hospitality & Tourism",
    tag: "FILL ROOMS. DRIVE BOOKINGS. BUILD LOYALTY",
    challenge:
      "Hotels, travel agencies, and tourism businesses need beautiful digital experiences, strong SEO, and campaigns that drive direct bookings.",
    solution:
      "We build booking engines, hospitality websites, and travel apps. We run Google Travel Ads, social campaigns, and manage online reputation across review platforms.",
    kicker: "More direct bookings start here",
    cta: "Let's Talk",
  },
  {
    title: "Legal, Consulting & Professional Services",
    tag: "BUILD CREDIBILITY. WIN HIGH-VALUE",
    challenge:
      "Law firms, consultancies, and professional service providers win business through trust and visibility. A weak digital presence directly loses deals.",
    solution:
      "We build authority-positioning websites, run LinkedIn and Google Ads for professional lead gen, and produce long-form content that establishes thought leadership.",
    kicker: "Build your digital authority",
    cta: "Book a Discovery Call",
  },
  {
    title: "Technology & SaaS Startups",
    tag: "GO TO MARKET FASTER. GROW SMARTER",
    challenge:
      "Tech startups need to move fast, from MVP to market to their first 100 customers. Most need engineering support and marketing acceleration at the same time.",
    solution:
      "We are the rare partner who delivers both: full-stack development AND full-service digital marketing. Product builds, growth campaigns, SEO, and investor-ready web presence.",
    kicker: "Let's accelerate your go-to-market",
    cta: "Start the Conversation",
  },
  {
    title: "Government & Public Sector",
    tag: "RELIABLE, SECURE, AND POLICY-COMPLIANT",
    challenge:
      "Government bodies and public institutions need technology partners who understand compliance, data security, and the importance of reliability at scale.",
    solution:
      "We build secure government portals, citizen-facing apps, and data management systems, with full compliance documentation and audit-cycle support.",
    kicker: "Compliant technology, delivered on time",
    cta: "Request Information",
  },
];

export default IndustriesPage;

function Block({ type, label, body }: { type: "challenge" | "solution"; label: string; body: string }) {
  return (
    <div className="mt-5">
      <h4 className="flex items-center gap-2 text-[14px] font-bold font-raleway text-black">
        {type === "challenge" ? (
          <ShieldAlert className="size-4 text-[#1A2359] fill-[#1A2359]/10" aria-hidden />
        ) : (
          <ShieldCheck className="size-4 text-[#1A2359] fill-[#1A2359]/10" aria-hidden />
        )}
        {label}
      </h4>
      <p className="mt-2 text-[14px] font-semibold leading-[1.7] font-nunito text-gray-700">{body}</p>
    </div>
  );
}

function IndustriesPage() {
  return (
    <SiteLayout>
      <section className="relative bg-white pt-32 pb-16 px-6 overflow-hidden">
        <Reveal className="relative mx-auto flex max-w-[1080px] flex-col items-center text-center" stagger={0.1}>
          <h1 className="text-[40px] font-bold font-raleway leading-[1.1] tracking-tight text-black sm:text-[48px] md:text-[56px] lg:text-[64px]">
            Whatever Your Industry
            <br />
            We Know Your World
          </h1>
          <p className="mt-8 max-w-[850px] text-[16px] font-semibold font-nunito leading-[1.5] text-[#1F2937] sm:text-[18px] md:text-[20px]">
            We've built products, run campaigns, and solved technology problems across 10+
            <br className="hidden md:block" />
            sectors. Browse your industry and see exactly what SMANV can do for your business
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link to="/contact" className="rounded-full bg-[#0084FF] px-8 py-3.5 text-[15px] font-semibold font-nunito text-white shadow-sm transition-colors hover:bg-[#0070D6]">
              Book a Free Consultation
            </Link>
            <Link to="/it-services" className="rounded-full border border-[#0084FF] bg-white px-8 py-3.5 text-[15px] font-semibold font-nunito text-[#0084FF] transition-colors hover:bg-blue-50">
              Explore Our Services
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1140px] px-6 py-20">
        <h2 className="text-center text-[32px] sm:text-[40px] font-bold font-raleway tracking-tight text-black">
          Powering Innovation Across Industries
        </h2>

        <Reveal className="mt-14 flex flex-col items-center">
          {/* Top 9 items in a 3-column grid */}
          <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.slice(0, 9).map((ind) => (
              <article
                key={ind.title}
                className="flex h-full flex-col rounded-[32px] border border-gray-50 bg-white p-8 shadow-[0_10px_40px_-10px_rgba(200,190,230,0.4)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_-10px_rgba(200,190,230,0.6)]"
              >
                <h3 className="text-[20px] leading-[1.3] font-bold font-raleway text-[#1A2359]">{ind.title}</h3>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-wide font-nunito text-[#188BF6]">{ind.tag}</p>
                <Block type="challenge" label="The Challenge" body={ind.challenge} />
                <Block type="solution" label="Our Solution" body={ind.solution} />
                <p className="mt-auto pt-6 text-[14px] font-bold font-nunito text-black">{ind.kicker}</p>
                <Link
                  to="/contact"
                  className="mt-4 flex w-full justify-center rounded-full border border-[#188BF6] bg-white px-6 py-2.5 text-[13px] font-bold font-nunito text-[#188BF6] transition-colors hover:bg-blue-50"
                >
                  {ind.cta}
                </Link>
              </article>
            ))}
          </div>

          {/* Bottom 1 item centered */}
          <div className="mt-8 flex w-full max-w-[380px] flex-col">
            {INDUSTRIES.slice(9).map((ind) => (
              <article
                key={ind.title}
                className="flex h-full flex-col rounded-[32px] border border-gray-50 bg-white p-8 shadow-[0_10px_40px_-10px_rgba(200,190,230,0.4)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_-10px_rgba(200,190,230,0.6)]"
              >
                <h3 className="text-[20px] leading-[1.3] font-bold font-raleway text-[#1A2359]">{ind.title}</h3>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-wide font-nunito text-[#188BF6]">{ind.tag}</p>
                <Block type="challenge" label="The Challenge" body={ind.challenge} />
                <Block type="solution" label="Our Solution" body={ind.solution} />
                <p className="mt-auto pt-6 text-[14px] font-bold font-nunito text-black">{ind.kicker}</p>
                <Link
                  to="/contact"
                  className="mt-4 flex w-full justify-center rounded-full border border-[#188BF6] bg-white px-6 py-2.5 text-[13px] font-bold font-nunito text-[#188BF6] transition-colors hover:bg-blue-50"
                >
                  {ind.cta}
                </Link>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

