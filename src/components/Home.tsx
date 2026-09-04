import {
  ArrowUpRight,
  Award,
  CalendarCheck,
  Check,
  Clock,
  Cloud,
  Code2,
  Cpu,
  Globe,
  Handshake,
  Layers,
  Lock,
  Rocket,
  Server,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MeshBackdrop, Reveal, SiteLayout } from "@/components/Layout";
import OrbitalIndustryGroup from "@/components/OrbitalIndustryGroup";

/* ---------------------------------- data --------------------------------- */

const STATS = [
  { value: "50+", label: "Clients Worldwide", hint: "No obligation" },
  { value: "12+", label: "Service Areas", hint: "Response within 24 hours" },
  {
    value: "100+",
    label: "Compliance Ready",
    hint: "Trusted by businesses in India, UAE, US & Europe",
  },
];

const ASSURANCES = [
  "No obligation",
  "Response within 24 hours",
  "Trusted by businesses in India, UAE, US & Europe",
];

const INFO_CARDS = [
  {
    title: "Who We Are?",
    body: "SMANV Info Tech is a Hyderabad-based technology and digital marketing company helping businesses across India, the UAE, the US, and Europe build, scale, and grow with smart digital solutions. Founded with a mission to combine engineering excellence with marketing intelligence, we are the single partner businesses trust for both their technology backbone and their digital presence.",
    tone: "blue" as const,
  },
  {
    title: "What We Do?",
    body: "We deliver two integrated service lines, IT Services and Digital Marketing Services, giving our clients both the technology foundation and the growth engine they need, all from one team.",
    tone: "pink" as const,
  },
];

interface Step {
  number: string;
  title: string;
  body: string;
  icon: LucideIcon;
  x: number;
  y: number;
}

const STEPS: Step[] = [
  {
    number: "1",
    title: "Discovery Call",
    body: "A free 30-minute call to understand your business, your goals, and the challenges you want to solve. No pressure, no commitments.",
    icon: Target,
    x: 161,
    y: 57,
  },
  {
    number: "2",
    title: "Engineering & Scope",
    body: "Our technical team goes deeper, mapping architecture, tech stack, integrations, and a realistic timeline for your project.",
    icon: Layers,
    x: 552,
    y: 190,
  },
  {
    number: "3",
    title: "Proposal & Agreement",
    body: "A detailed proposal with deliverables, milestones, team structure, timeline, and transparent pricing. You review and confirm.",
    icon: Handshake,
    x: 221,
    y: 354,
  },
  {
    number: "4",
    title: "Kickoff & Planning",
    body: "Your dedicated project lead sets up all tools, aligns the team, and runs the first sprint planning session. Work begins.",
    icon: CalendarCheck,
    x: 561,
    y: 514,
  },
  {
    number: "5",
    title: "Build & Deliver",
    body: "Agile sprints with weekly updates and live demos. Your feedback is woven into every stage. You stay in control throughout",
    icon: Code2,
    x: 144,
    y: 696,
  },
  {
    number: "6",
    title: "Launch & Ongoing Support",
    body: "We go live together, then stay alongside you with monitoring, documentation, training, and continued support as you grow.",
    icon: Rocket,
    x: 561,
    y: 832,
  },
];

const CONNECTORS = [
  "M425 132 H690 V190",
  "M690 330 V435 H500",
  "M352 520 V583 H556",
  "M690 658 V775 H415",
  "M275 858 V905 H556",
];

interface Reason {
  title: string;
  body: string;
  icon: LucideIcon;
  tone: "navy" | "light";
}

const REASONS = [
  {
    title: "Compliance-Ready by Default",
    body: "Every solution we build is designed with security and regulatory standards in mind.",
    icon: ShieldCheck,
    tone: "navy",
  },
  {
    title: "Scalable as You Grow",
    body: "Our model is built to scale, from a 2-person startup to a 500-person enterprise.",
    icon: TrendingUp,
    tone: "light",
  },
  {
    title: "Global Expertise, Local Presence",
    body: "Hyderabad-based team serving clients in UAE, US, UK, and Europe.",
    icon: Globe,
    tone: "navy",
  },
  {
    title: "End-to-End Delivery",
    body: "From first strategy call to final launch, one team, zero handover chaos.",
    icon: Workflow,
    tone: "light",
  },
  {
    title: "Transparent & On-Time",
    body: "Clear timelines, weekly updates, and honest communication. Always.",
    icon: Clock,
    tone: "navy",
  },
] as const satisfies readonly Reason[];

/* -------------------------------- partials -------------------------------- */

function ServiceCta({ label }: { label: string }) {
  return (
    <Link
      to="/contact"
      className="group inline-flex items-center gap-4 rounded-full border border-black bg-white py-2 pr-2 pl-6 text-[15px] sm:text-[16px] font-medium text-black transition-all hover:bg-slate-50 shadow-sm"
    >
      {label}
      <span className="grid size-9 place-items-center rounded-full bg-[#0B1B3D] text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        <ArrowUpRight className="size-4 stroke-[1.5]" aria-hidden />
      </span>
    </Link>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex w-fit justify-self-start rounded-md bg-soft-blue px-2.5 py-1 text-[10px] font-semibold font-raleway tracking-wide text-navy uppercase">
      {children}
    </span>
  );
}

function AnimatedStatCard({ value, label, hint }: { value: string; label: string; hint: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const valueEl = valueRef.current;
    if (!card || !valueEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cleanValue = Number.parseInt(value.replace(/\D/g, ""), 10);
    const suffix = value.includes("+") ? "+" : "";
    if (Number.isNaN(cleanValue)) return;

    gsap.registerPlugin(ScrollTrigger);
    const counter = { current: 0 };
    const ctx = gsap.context(() => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 22, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            once: true,
          },
        },
      );

      gsap.to(counter, {
        current: cleanValue,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 92%",
          once: true,
        },
        onUpdate: () => {
          if (valueEl) {
            valueEl.textContent = `${Math.round(counter.current)}${suffix}`;
          }
        },
        onComplete: () => {
          if (valueEl) {
            valueEl.textContent = `${cleanValue}${suffix}`;
          }
        },
      });
    }, card);

    return () => ctx.revert();
  }, [value]);

  return (
    <div
      ref={cardRef}
      className="interactive-card flex flex-col items-center rounded-2xl border border-border/50 bg-background/70 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-sm"
    >
      <span ref={valueRef} className="text-4xl font-black font-raleway tracking-tight text-navy lg:text-5xl">
        0
      </span>
      <span className="mt-2 text-xs font-semibold font-nunito text-muted-foreground">{label}</span>
      <div className="mt-3 flex items-center gap-1.5 text-[11px] font-nunito text-muted-foreground">
        <span className="flex items-center shrink-0 text-emerald-500">
          <Check className="size-3.5 stroke-[3]" />
          <Check className="size-3.5 stroke-[3] -ml-1.5" />
        </span>
        <span>{hint}</span>
      </div>
    </div>
  );
}

function StepCard({ step }: { step: Step }) {
  const Icon = step.icon;
  return (
    <article className="interactive-card flex w-full max-w-[330px] overflow-hidden rounded-2xl bg-soft-grey shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
      <div className="flex w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-lg font-bold text-brand-foreground">
        {step.number}
      </div>
      <div className="p-5 text-left">
        <h3 className="flex items-center gap-2 text-[15px] font-bold font-raleway text-black">
          <Icon className="size-4 shrink-0 text-black" aria-hidden />
          {step.title}
        </h3>
        <p className="mt-2 text-[13px] font-medium leading-[1.65] font-nunito text-black">{step.body}</p>
      </div>
    </article>
  );
}

function Connectors() {
  return (
    <svg
      viewBox="0 0 986 1010"
      className="pointer-events-none absolute inset-0 h-full w-full"
      fill="none"
      aria-hidden
    >
      <defs>
        <marker
          id="process-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="var(--brand)" />
        </marker>
      </defs>
      {CONNECTORS.map((d) => (
        <path
          key={d}
          d={d}
          stroke="var(--brand)"
          strokeWidth="1.5"
          strokeDasharray="7 7"
          markerEnd="url(#process-arrow)"
        />
      ))}
    </svg>
  );
}

function ReasonCard({ reason }: { reason: Reason }) {
  const Icon = reason.icon;
  const isNavy = reason.tone === "navy";
  return (
    <article
      className={`interactive-card flex h-full flex-col justify-end rounded-2xl p-6 ${isNavy ? "bg-navy text-navy-foreground" : "bg-soft-grey text-ink"
        }`}
    >
      <Icon
        className={`mb-8 size-9 ${isNavy ? "text-navy-foreground" : "text-brand"}`}
        aria-hidden
      />
      <h3 className="text-[16px] leading-snug font-bold font-raleway">{reason.title}</h3>
      <p
        className={`mt-3 text-[14px] font-medium leading-[1.65] font-nunito ${isNavy ? "text-navy-foreground" : "text-black"}`}
      >
        {reason.body}
      </p>
    </article>
  );
}

function FlowingWaveRibbons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg
        className="absolute w-full h-[120%] top-[-10%] left-0"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ribbon-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.65 0.17 255 / 0.3)" />
            <stop offset="50%" stopColor="oklch(0.55 0.22 260 / 0.45)" />
            <stop offset="100%" stopColor="oklch(0.48 0.24 265 / 0.3)" />
          </linearGradient>
          <linearGradient id="ribbon-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.7 0.15 250 / 0.2)" />
            <stop offset="50%" stopColor="oklch(0.6 0.18 260 / 0.35)" />
            <stop offset="100%" stopColor="oklch(0.5 0.22 265 / 0.2)" />
          </linearGradient>
          <linearGradient id="ribbon-grad-3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.75 0.12 250 / 0.25)" />
            <stop offset="100%" stopColor="oklch(0.58 0.2 265 / 0.4)" />
          </linearGradient>
        </defs>

        {/* Ribbon 1 */}
        <path
          className="animate-wave-path-1"
          d="M-100,300 C300,100 600,500 1000,200 C1300,50 1500,250 1600,150 L1600,600 C1500,500 1300,400 1000,500 C600,600 300,200 -100,500 Z"
          fill="url(#ribbon-grad-1)"
        />

        {/* Ribbon 2 */}
        <path
          className="animate-wave-path-2"
          d="M-100,450 C350,200 700,600 1050,350 C1300,200 1480,450 1600,350 L1600,750 C1480,650 1300,500 1050,650 C700,800 350,400 -100,750 Z"
          fill="url(#ribbon-grad-2)"
        />

        {/* Ribbon 3 */}
        <path
          className="animate-wave-path-3"
          d="M-100,150 C400,300 750,100 1100,250 C1350,350 1500,150 1600,250 L1600,450 C1500,350 1350,550 1100,450 C750,300 400,500 -100,350 Z"
          fill="url(#ribbon-grad-3)"
        />
      </svg>
    </div>
  );
}

function HeroVectorBg({ idSuffix = "1", className = "" }: { idSuffix?: string; className?: string }) {
  const filterId = `hero-vector-filter-${idSuffix}`;
  const gradId = `hero-vector-grad-${idSuffix}`;
  return (
    <svg
      viewBox="-275 -172 781 845"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none -z-10 overflow-visible ${className}`}
      aria-hidden
    >
      <g filter={`url(#${filterId})`}>
        <path
          d="M-172.852 375.888C-172.852 375.888 -23.7147 574.723 67.2871 573.648C158.289 572.574 322.447 449.467 373.158 369.44C423.869 289.414 411.125 166.774 371.552 93.4902C331.98 20.2068 226.671 -63.1786 135.723 -70.2599C44.7759 -77.3412 -121.411 -52.3489 -174.133 51.0022"
          fill={`url(#${gradId})`}
        />
      </g>
      <defs>
        <filter
          id={filterId}
          x="-274.133"
          y="-171.377"
          width="780.556"
          height="845.029"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient
          id={gradId}
          x1="251.194"
          y1="-27.8689"
          x2="-87.3796"
          y2="503.401"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0D85F6" stopOpacity="0.45" />
          <stop offset="1" stopColor="#8FBFFA" stopOpacity="0.35" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ---------------------------------- page ---------------------------------- */

export function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const heroElements = hero.querySelectorAll<HTMLElement>("[data-hero-animate]");
      gsap.set(heroElements, { opacity: 0, y: 24 });

      gsap.to(heroElements, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: hero,
          start: "top 90%",
          once: true,
          toggleActions: "play none none none",
        },
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <SiteLayout>
      {/* Hero */}
      <section
        ref={heroRef}
        id="home"
        className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F6F9FF] to-[#EDF3FF] -mt-[88px] pt-[104px] pb-16 lg:pb-24 text-ink"
      >
        {/* Exact Inline Vector_hero SVG Artworks (Zero Clipping / Zero Border Lines) */}
        <HeroVectorBg
          idSuffix="left"
          className="absolute -top-10 -left-24 w-[600px] h-auto opacity-80"
        />
        <HeroVectorBg
          idSuffix="right"
          className="absolute bottom-0 -right-24 w-[600px] h-auto opacity-80 scale-x-[-1]"
        />

        {/* Soft Radial Backlight Glows */}
        <div className="absolute top-0 left-0 size-[600px] -translate-x-1/4 -translate-y-1/4 rounded-full bg-[#188BF6]/15 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-0 size-[500px] translate-x-1/4 rounded-full bg-[#833AB4]/10 blur-[120px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-[1240px] px-6 w-full flex flex-col items-center text-center">
          {/* Top Pill Badge */}
          <span
            data-hero-animate
            className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/70 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-black shadow-xs"
          >
            Technology + Marketing – All Under One Roof
          </span>

          {/* Main Centered Title */}
          <h1
            data-hero-animate
            className="mt-6 text-[48px] sm:text-[56px] font-bold font-raleway tracking-tight text-[#0B1B3D] leading-[1.15]"
          >
            Your Business
            <br />
            Our <span className="text-[#188BF6]">Technology</span>
            <br />
            Shared Growth
          </h1>

          {/* Subtitle */}
          <p
            data-hero-animate
            className="mt-6 text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed font-bold font-nunito text-black max-w-none"
          >
            From Web &amp; App Development to AI Solutions, Digital Marketing and Compliance. We Deliver It All.
          </p>

          {/* CTA Buttons */}
          <div data-hero-animate className="mt-8 flex flex-row flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-[#188BF6] px-7 py-3 text-[15px] sm:text-[16px] font-semibold leading-none font-nunito text-white shadow-sm hover:bg-[#0076E5] transition-all"
            >
              Book a Free Consultation
            </Link>
            <Link
              to="/it-services"
              className="rounded-full border border-[#188BF6] bg-transparent px-7 py-3 text-[15px] sm:text-[16px] font-semibold leading-none font-nunito text-[#188BF6] shadow-xs hover:bg-[#188BF6]/10 transition-all"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Hero Artwork Composite with Surrounding Stats */}
          <div
            data-hero-animate
            className="relative mt-8 sm:mt-12 w-full max-w-[1080px] grid grid-cols-1 lg:grid-cols-12 items-center gap-6"
          >
            {/* Left Stat: 50+ Clients Worldwide */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
              <span className="text-[40px] sm:text-[44px] font-bold font-raleway text-[#0B1B3D] tracking-tight leading-[1.1]">
                50+
              </span>
              <span className="text-[13px] sm:text-[14px] font-bold font-nunito leading-[1.5] text-black">
                Clients Worldwide
              </span>
            </div>

            {/* Center Visual: Man holding laptops & 12+ Service Areas Stat above right side */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
              {/* 12+ Service Areas (Positioned top-right relative to image on desktop) */}
              <div className="lg:absolute lg:-top-8 lg:right-4 flex flex-col items-center lg:items-start text-center lg:text-left mb-4 lg:mb-0 z-20">
                <span className="text-[40px] sm:text-[44px] font-bold font-raleway text-[#0B1B3D] tracking-tight leading-[1.1]">
                  12+
                </span>
                <span className="text-[13px] sm:text-[14px] font-bold font-nunito leading-[1.5] text-black">
                  Service Areas
                </span>
              </div>

              {/* Exact Hero Image Artwork */}
              <img
                src="/assets/herosection_lmg.png"
                alt="SMANV IT Web Development and Digital Marketing Solutions"
                className="w-full max-w-[640px] h-auto object-contain drop-shadow-xl relative z-10 transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Right Stat: 100% Compliance Ready */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-end text-center lg:text-right space-y-1">
              <span className="text-[40px] sm:text-[44px] font-bold font-raleway text-[#0B1B3D] tracking-tight leading-[1.1]">
                100%
              </span>
              <span className="text-[13px] sm:text-[14px] font-bold font-nunito leading-[1.5] text-black">
                Compliance Ready
              </span>
            </div>
          </div>

          {/* Assurances Row (Double Green Checkmarks with generous gap) */}
          <div
            data-hero-animate
            className="mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20 text-xs sm:text-sm font-bold font-nunito text-black"
          >
            <div className="flex items-center gap-2">
              <span className="flex items-center text-emerald-500">
                <Check className="size-4 stroke-[3]" />
                <Check className="size-4 stroke-[3] -ml-2" />
              </span>
              <span>No obligation</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center text-emerald-500">
                <Check className="size-4 stroke-[3]" />
                <Check className="size-4 stroke-[3] -ml-2" />
              </span>
              <span>Response within 24 hours</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center text-emerald-500">
                <Check className="size-4 stroke-[3]" />
                <Check className="size-4 stroke-[3] -ml-2" />
              </span>
              <span>Trusted by businesses in India, UAE, US &amp; Europe</span>
            </div>
          </div>

          {/* Approved By Section */}
          <Reveal className="mt-14 w-full flex flex-col items-center" stagger={0.1}>
            <h3 className="text-[16px] sm:text-[18px] font-bold font-raleway leading-[1.4] text-black tracking-wide mb-4">
              Approved By
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
              <img
                src="/assets/Ministry of Micro, Small and Medium Enterprises Logo PNG Vector (SVG) Free Download 1.png"
                alt="Ministry of MSME"
                className="h-16 sm:h-24 w-auto object-contain mix-blend-multiply"
              />
              <img
                src="/assets/startup_india_logo.png.jpg"
                alt="Startup India"
                className="h-14 sm:h-20 w-auto object-contain mix-blend-multiply"
              />
              <img
                src="/assets/image 114.jpg"
                alt="Department for Promotion of Industry and Internal Trade"
                className="h-14 sm:h-20 w-auto object-contain mix-blend-multiply"
              />
            </div>
          </Reveal>

          {/* Trusted By Section */}
          <div data-hero-animate className="mt-12 w-full flex flex-col items-center">
            <h3 className="text-[16px] sm:text-[18px] font-bold font-raleway leading-[1.4] text-black tracking-wide">
              Trusted By
            </h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
              {/* Logos matching Figma Image 2 */}
              <div className="flex items-center gap-2 text-slate-800 font-bold text-lg">
                <span className="grid size-8 place-items-center rounded-full bg-orange-500 text-white font-extrabold">
                  ◎
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#1877F2] font-bold text-xl">
                <span className="text-2xl font-black">mcc</span>
              </div>
              <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                <span className="grid size-7 place-items-center rounded-md border-2 border-slate-900 font-black text-xs">
                  |||
                </span>
                <span>Terra</span>
              </div>
              <div className="flex items-center gap-2 text-teal-600 font-bold text-lg">
                <span className="grid size-7 place-items-center rounded-full bg-teal-500 text-white font-bold">
                  ◈
                </span>
              </div>
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-lg">
                <span className="grid size-7 place-items-center text-indigo-600 font-bold">
                  ❖
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-xl">
                <span className="text-blue-600">↖</span> Nextmove
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Know Us Better */}
      <section id="about" className="bg-background py-20">
        <div className="mx-auto max-w-[1180px] px-6">
          <h2 className="text-center text-[32px] sm:text-[36px] font-semibold font-raleway leading-[1.2] tracking-tight text-ink">Know Us Better</h2>

          <Reveal className="mt-12 grid gap-8 md:grid-cols-2">
            {INFO_CARDS.map((card) => (
              <article
                key={card.title}
                className={`interactive-card rounded-[26px] p-8 ${card.tone === "blue" ? "bg-soft-blue" : "bg-soft-pink"
                  }`}
              >
                <h3 className="text-[20px] sm:text-[22px] font-bold font-raleway leading-[1.3] text-black">{card.title}</h3>
                <p className="mt-4 text-[15px] sm:text-[16px] font-medium font-nunito leading-[1.6] text-black">{card.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-background py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <h2 className="text-center text-[36px] sm:text-[44px] lg:text-[48px] font-bold font-raleway leading-[1.2] tracking-tight text-black">Our Services</h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <h3 className="text-[24px] sm:text-[28px] font-bold font-raleway leading-[1.3] text-black">
              Two Powerful Service Lines.
              <br />
              One Trusted Partner.
            </h3>
            <p className="text-[16px] sm:text-[18px] font-medium font-nunito leading-[1.6] text-black">
              Whether you need a website built, an AI product developed, or a full digital marketing
              campaign, we have the team and the track record to deliver.
            </p>
          </div>

          <Reveal className="mt-8 grid items-start gap-6 md:grid-cols-2">
            <div className="grid gap-6">
              <article className="interactive-card rounded-2xl bg-soft-grey p-8">
                <h4 className="text-[20px] sm:text-[22px] font-bold font-raleway leading-[1.4] text-black">
                  From Code to Cloud.
                  <br />
                  We Build What Your Business Needs.
                </h4>
                <p className="mt-4 text-[15px] sm:text-[16px] font-medium font-nunito leading-[1.5] text-black">
                  Web &amp; app development, AI/ML, cloud hosting, cybersecurity, BPO, GCC setup and
                  more.
                </p>
                <div className="mt-6">
                  <ServiceCta label="Explore IT Services" />
                </div>
              </article>

              <article className="interactive-card grid rounded-2xl bg-soft-grey p-8">
                <Tag>IT Services</Tag>
                <img
                  src="/assets/itServices.png"
                  alt="Isometric illustration of firmware development on a laptop"
                  className="mx-auto mt-8 w-full max-w-[240px] self-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </article>
            </div>

            <div className="grid gap-6">
              <article className="interactive-card grid rounded-2xl bg-soft-grey p-8">
                <Tag>Digital Marketing Services</Tag>
                <img
                  src="/assets/digitalMarketing.png"
                  alt="Isometric illustration of digital marketing channels"
                  className="mx-auto mt-8 w-full max-w-[240px] self-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </article>

              <article className="interactive-card rounded-2xl bg-soft-grey p-8">
                <h4 className="text-[20px] sm:text-[22px] font-bold font-raleway leading-[1.4] text-black">
                  Grow Your Brand. Reach More Customers.
                  <br />
                  Drive Real Results
                </h4>
                <p className="mt-4 text-[15px] sm:text-[16px] font-medium font-nunito leading-[1.5] text-black">
                  SEO, social media marketing, email, branding and performance campaigns.
                </p>
                <div className="mt-6">
                  <ServiceCta label="Explore Marketing Services" />
                </div>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section id="capabilities" className="bg-background py-20">
        <div className="mx-auto max-w-[1000px] px-6 text-center">
          <h2 className="text-[32px] sm:text-[36px] font-bold font-raleway leading-[1.2] tracking-tight text-black">
            How We Work With You
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] sm:text-[16px] font-medium font-nunito leading-[1.6] text-black">
            From the first call to final delivery, here is exactly what happens when you partner
            with SMANV.
          </p>

          <ol className="mt-12 flex flex-col items-center gap-6 lg:hidden">
            {STEPS.map((step) => (
              <li key={step.number} className="w-full max-w-[330px]">
                <StepCard step={step} />
              </li>
            ))}
          </ol>

          <div className="relative mx-auto mt-10 hidden h-[1010px] w-[986px] lg:block">
            <Connectors />
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="absolute w-[272px]"
                style={{ left: `${step.x}px`, top: `${step.y}px` }}
              >
                <StepCard step={step} />
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/contact"
              className="btn-animate inline-flex rounded-full bg-brand px-6 py-3 text-[15px] sm:text-[16px] font-semibold leading-none text-brand-foreground"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section id="industries" className="bg-background py-20">
        <div className="mx-auto max-w-[1180px] px-6">
          <h2 className="text-center text-[32px] sm:text-[36px] font-bold font-raleway leading-[1.2] tracking-tight text-black">
            Why Businesses Choose SMANV
          </h2>
          <p className="mt-4 text-center text-[15px] sm:text-[16px] font-medium font-nunito leading-[1.6] text-black">
            We&apos;re more than a vendor
            <br />
            We&apos;re the team that grows with you.
          </p>

          <Reveal className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ReasonCard reason={REASONS[0]} />
            <ReasonCard reason={REASONS[1]} />
            <ReasonCard reason={REASONS[2]} />
            <div className="row-span-2 grid place-items-center rounded-2xl bg-soft-grey p-6">
              <img
                src="/assets/questions.png"
                alt="Illustration of a person leaning on a large question mark"
                className="w-full max-w-[160px]"
                loading="lazy"
              />
            </div>
            <ReasonCard reason={REASONS[3]} />
            <ReasonCard reason={REASONS[4]} />
          </Reveal>
        </div>
      </section>

      {/* 3D Global Section */}
      <section className="bg-background pb-20">
        <div className="mx-auto max-w-[1180px] px-6">
          <OrbitalIndustryGroup />
        </div>
      </section>

      {/* Insights Section */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="text-center mb-12">
            <h2 className="text-[36px] sm:text-[44px] font-bold font-raleway leading-[1.2] tracking-tight text-black">
              Explore SMANV Insights
            </h2>
            <p className="mt-4 text-[16px] sm:text-[18px] font-medium font-nunito leading-[1.6] text-slate-600">
              Expert Perspectives on Technology, Innovation &amp; Growth
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <article className="flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm transition-transform hover:-translate-y-1">
              <div className="aspect-video w-full overflow-hidden bg-slate-100">
                <img src="/assets/image 105.png" alt="Web Development" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8 bg-[#F8FAFC]">
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-[#DCEFFF] px-4 py-1.5 text-[12px] font-bold text-[#0B1B3D]">
                    Web Development
                  </span>
                  <span className="text-[13px] font-medium text-slate-400">May 11, 2026</span>
                </div>
                <div className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500 mb-4">
                  <Clock className="size-4" />
                  5 min read
                </div>
                <h3 className="mb-3 text-[20px] font-bold font-raleway leading-[1.4] text-black">
                  5 Signs Your Website Is Quietly Losing You Customers
                </h3>
                <p className="mb-6 flex-1 text-[14px] font-medium leading-[1.6] text-slate-600">
                  Your website might be costing you customers right now without you knowing it. Here are 5 real warning signs, backed by data, and what to do about each one.
                </p>
                <button className="group inline-flex w-full items-center justify-between rounded-full border border-black bg-white px-6 py-2.5 text-[14px] font-bold text-black transition-colors hover:bg-slate-50">
                  Read Full Blog
                  <span className="grid size-7 place-items-center rounded-full bg-[#0B1B3D] text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="size-3.5 stroke-[1.5]" />
                  </span>
                </button>
              </div>
            </article>

            {/* Card 2 */}
            <article className="flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm transition-transform hover:-translate-y-1">
              <div className="aspect-video w-full overflow-hidden bg-slate-100">
                <img src="/assets/image 106.png" alt="AI & Automation" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8 bg-[#F8FAFC]">
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-[#DCEFFF] px-4 py-1.5 text-[12px] font-bold text-[#0B1B3D]">
                    AI &amp; Automation
                  </span>
                  <span className="text-[13px] font-medium text-slate-400">Mar 16, 2026</span>
                </div>
                <div className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500 mb-4">
                  <Clock className="size-4" />
                  8 min read
                </div>
                <h3 className="mb-3 text-[20px] font-bold font-raleway leading-[1.4] text-black">
                  AI Chatbots for Small Business: Why 2026 Is the Tipping Point
                </h3>
                <p className="mb-6 flex-1 text-[14px] font-medium leading-[1.6] text-slate-600">
                  AI chatbots aren't just for big enterprises anymore. Here's what's actually changing in 2026, what a chatbot can realistically do for a small business, and what to wat...
                </p>
                <button className="group inline-flex w-full items-center justify-between rounded-full border border-black bg-white px-6 py-2.5 text-[14px] font-bold text-black transition-colors hover:bg-slate-50">
                  Read Full Blog
                  <span className="grid size-7 place-items-center rounded-full bg-[#0B1B3D] text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="size-3.5 stroke-[1.5]" />
                  </span>
                </button>
              </div>
            </article>

            {/* Card 3 */}
            <article className="flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm transition-transform hover:-translate-y-1">
              <div className="aspect-video w-full overflow-hidden bg-slate-100">
                <img src="/assets/image 107.png" alt="AI & Automation" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8 bg-[#F8FAFC]">
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-[#DCEFFF] px-4 py-1.5 text-[12px] font-bold text-[#0B1B3D]">
                    AI &amp; Automation
                  </span>
                  <span className="text-[13px] font-medium text-slate-400">Feb 13, 2026</span>
                </div>
                <div className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500 mb-4">
                  <Clock className="size-4" />
                  5 min read
                </div>
                <h3 className="mb-3 text-[20px] font-bold font-raleway leading-[1.4] text-black">
                  5 Ways Business Automation Saves Small Businesses Hours Every Week
                </h3>
                <p className="mb-6 flex-1 text-[14px] font-medium leading-[1.6] text-slate-600">
                  You don't need a tech team to automate your business. Here are 5 practical automations small businesses in India are using right now to save real hours every...
                </p>
                <button className="group inline-flex w-full items-center justify-between rounded-full border border-black bg-white px-6 py-2.5 text-[14px] font-bold text-black transition-colors hover:bg-slate-50">
                  Read Full Blog
                  <span className="grid size-7 place-items-center rounded-full bg-[#0B1B3D] text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="size-3.5 stroke-[1.5]" />
                  </span>
                </button>
              </div>
            </article>
          </div>

          <div className="mt-14 flex justify-center">
            <button className="rounded-full bg-[#188BF6] px-10 py-3.5 text-[15px] sm:text-[16px] font-medium font-nunito text-white shadow-sm transition-colors hover:bg-[#0076E5]">
              View All Blogs
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="lg:pr-8">
            <span className="inline-flex items-center rounded-full bg-[#E5E7EB] px-4 py-1.5 text-[12px] font-bold font-raleway uppercase tracking-wider text-[#374151]">
              TESTIMONIALS
            </span>
            <h2 className="mt-6 text-[36px] sm:text-[44px] font-bold font-raleway leading-[1.2] tracking-tight text-black">
              Trusted by industry experts worldwide!
            </h2>
            <p className="mt-6 max-w-md text-[16px] sm:text-[18px] font-medium font-nunito leading-[1.6] text-slate-500">
              Our clients&apos; stories highlight the passion and expertise in every project.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                rating: "4.9",
                quote: "SMANV handled our GCC setup in Hyderabad end-to-end, compliance, team hiring support, and full IT infrastructure. Delivered in under 90 days.",
                name: "Arjun Mehta",
                title: "CTO, FinTech Startup | UAE",
                avatar: "/assets/Michael Grant (3).png"
              },
              {
                rating: "4.5",
                quote: "Their cybersecurity audit caught critical gaps our previous vendor missed. We're now fully ISO-aligned and our board is confident going into audits.",
                name: "Sarah Okonkwo",
                title: "COO, Logistics Firm | UK",
                avatar: "/assets/Michael Grant (2).png"
              },
              {
                rating: "4.0",
                quote: "From rebuilding our website to managing our Google Ads, SMANV delivers like a full in-house team at a fraction of the cost.",
                name: "David Torres",
                title: "Founder, E-Commerce Brand | USA",
                avatar: "/assets/Michael Grant (1).png"
              },
              {
                rating: "4.7",
                quote: "SMANV handled our product redesign and PPC campaigns seamlessly, they feel like an in-house partner without the overhead.",
                name: "Priya Kapoor",
                title: "Head of Growth, Beauty Brand | India",
                avatar: "/assets/Michael Grant.png"
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex flex-col overflow-hidden rounded-3xl bg-[#F8FAFC] p-3 shadow-sm border border-slate-100 transition-transform hover:-translate-y-1"
              >
                <div className="flex-1 rounded-2xl bg-white p-6 shadow-sm border border-slate-50">
                  <div className="flex items-center gap-1.5 text-[14px] font-bold text-slate-800">
                    {item.rating}
                    <Star className="size-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <p className="mt-4 text-[13px] font-medium leading-[1.6] text-slate-500">
                    &quot;{item.quote}&quot;
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-3 px-3 pb-2">
                  <img src={item.avatar} alt={item.name} className="size-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="text-[14px] font-bold font-raleway text-slate-900">{item.name}</p>
                    <p className="text-[11px] font-medium text-slate-400">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default Home;
