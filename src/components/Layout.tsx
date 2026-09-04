import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export const NAV_LINKS: ReadonlyArray<{ label: string; to: any }> = [
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/it-services" },
  { label: "Capabilities", to: "/capabilities" },
  { label: "Industries", to: "/industries" },
  { label: "Blogs", to: "/blogs" },
  { label: "Partnership", to: "/partnership" },
  { label: "Contact Us", to: "/contact" },
];

/* ------------------------------ smooth scroll ----------------------------- */

export function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      duration: 1.12,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    const handleScroll = () => ScrollTrigger.update();
    lenis.on("scroll", handleScroll);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.off("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);
}

/** Reveals children on scroll with a small stagger over direct children. */
export function Reveal({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const targets = el.children.length > 1 ? Array.from(el.children) : [el];
    const ctx = gsap.context(() => {
      gsap.set(targets, {
        opacity: 0,
        y: 32,
        scale: 0.97,
        transformOrigin: "center bottom",
        willChange: "opacity, transform",
      });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger,
        clearProps: "willChange",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* --------------------------------- chrome --------------------------------- */

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-md ${dark ? "bg-background px-2 py-1" : ""}`}
    >
      <img src="/assets/logo.jpg" alt="SMANV IT Logo" className="h-14 w-auto object-contain" />
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Set initial value
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      
      // Hide if scrolling down and past 80px, show if scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
          : "bg-transparent border-b border-transparent shadow-none"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-6 py-4"
      >
        <Link to="/" className="flex min-w-2 items-center">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="pb-1 text-[15px] font-medium leading-none text-ink/75 transition-colors hover:text-brand"
                activeProps={{
                  className: "pb-1 text-[15px] font-medium leading-none text-brand border-b-2 border-brand",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full px-7 py-2.5 text-[15px] font-medium font-raleway text-white transition-all duration-300 shadow-sm sm:inline-flex bg-gradient-to-r from-[#00A3FF] to-[#0066FF] hover:from-[#0B3058] hover:to-[#007AFF] active:from-[#061833] active:to-[#092B56]"
          >
            Talk to Us
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-ink lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="mx-6 mb-4 space-y-1 rounded-2xl bg-soft-grey p-3 lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-[15px] font-medium leading-none text-ink hover:bg-background"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export function SocialRail() {
  const items = [
    { icon: Facebook, label: "Facebook", cls: "bg-[#1877F2] text-white", href: "https://www.facebook.com/smanvgroups/" },
    { icon: Instagram, label: "Instagram", cls: "bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] text-white", href: "https://www.instagram.com/smanv_groups/" },
    { icon: MessageCircle, label: "WhatsApp", cls: "bg-[#25D366] text-white", href: "#" },
    { icon: Linkedin, label: "LinkedIn", cls: "bg-[#0A66C2] text-white", href: "https://www.linkedin.com/company/smanv-groups/" },
  ];
  return (
    <div className="fixed top-1/3 right-3 z-30 hidden flex-col gap-2.5 rounded-full bg-white/70 backdrop-blur-md p-2 shadow-lg lg:flex">
      {items.map(({ icon: Icon, label, cls, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`grid size-9 place-items-center rounded-full shadow-sm transition-all duration-300 hover:scale-110 ${cls}`}
        >
          <Icon className="size-4" />
        </a>
      ))}
    </div>
  );
}

/** Light animated mesh-gradient hero used on all inner pages. */
export function PageHero({
  title,
  subtitle,
  center = true,
}: {
  title: ReactNode;
  subtitle: string;
  center?: boolean;
}) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = hero.querySelectorAll("[data-page-hero-animate]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.12,
        },
      );
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden bg-background flex flex-col justify-center min-h-[calc(100vh-72px)] py-6"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-95"
        style={{ backgroundImage: `url(/assets/Vector.jpg)` }}
      />
      <div className={`relative mx-auto max-w-[1000px] px-6 py-12 ${center ? "text-center" : ""}`}>
        <h1
          data-page-hero-animate
          className="text-5xl leading-[1.1] font-black tracking-tight text-navy sm:text-6xl lg:text-[5rem]"
        >
          {title}
        </h1>
        <p
          data-page-hero-animate
          className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed font-medium text-ink/90 sm:text-[17px]"
        >
          {subtitle}
        </p>
        <div data-page-hero-animate className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="btn-animate rounded-full bg-brand px-8 py-3.5 text-[15px] font-semibold text-brand-foreground shadow-md"
          >
            Book a Free Consultation
          </Link>
          <Link
            to="/it-services"
            className="btn-animate rounded-full border border-brand/40 bg-background px-8 py-3.5 text-[15px] font-semibold text-brand shadow-sm"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Animated blurred blue mesh gradient (reference hero background). */
export function MeshBackdrop({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className={tone === "light" ? "mesh-bg-light" : "mesh-bg-dark"}>
        <span className="mesh-blob mesh-blob-1" />
        <span className="mesh-blob mesh-blob-2" />
        <span className="mesh-blob mesh-blob-3" />
        <span className="mesh-blob mesh-blob-4" />
      </div>
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-white via-[#F7FAFF] to-[#E8F0FE] px-8 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Blue radial glow behind person */}
          <div
            aria-hidden
            className="absolute top-1/2 right-0 -translate-y-1/2 w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full bg-[radial-gradient(circle,#3B8EF0_0%,#6CB4FF_30%,transparent_70%)] opacity-40 blur-2xl pointer-events-none"
          />

          {/* Left Text & CTA Content */}
          <div className="relative z-10 max-w-lg flex-1 text-left">
            <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-extrabold font-raleway tracking-tight text-[#0B1B3D] leading-[1.15]">
              Ready to Start? Let&apos;s Talk.
            </h2>
            <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.7] font-normal font-nunito text-[#5A6577] max-w-md">
              Whether you have a project ready to go or just an idea, our team will help you figure
              out the right next step. Free, fast, and no strings attached.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-[#188BF6] px-7 py-3 text-[14px] font-semibold font-nunito text-white shadow-sm hover:bg-[#0076E5] transition-all"
              >
                Book a Free Consultation
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-[#188BF6] bg-white px-7 py-3 text-[14px] font-semibold font-nunito text-[#188BF6] hover:bg-[#188BF6]/5 transition-all"
              >
                Talk to Us
              </Link>
            </div>
          </div>

          {/* Right Person Image (charmain_img.png) */}
          <div className="relative z-10 shrink-0 flex items-end justify-center self-end md:-mb-10 lg:-mb-10">
            <img
              src="/assets/charmain_img.png"
              alt="Chairman SMANV IT"
              className="h-56 sm:h-64 lg:h-[300px] xl:h-[320px] w-auto object-contain drop-shadow-xl select-none pointer-events-none"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" as const },
      { label: "IT Services", to: "/it-services" as const },
      { label: "Capabilities", to: "/capabilities" as const },
      { label: "Industries", to: "/industries" as const },
      { label: "Our Work", to: "/about" as const },
      { label: "Insights", to: "/about" as const },
      { label: "Contact Us", to: "/contact" as const },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web & App Development", to: "/it-services" as const },
      { label: "AI / ML Solutions", to: "/it-services" as const },
      { label: "Digital Marketing", to: "/capabilities" as const },
      { label: "Cybersecurity", to: "/it-services" as const },
      { label: "BPO / KPO", to: "/it-services" as const },
      { label: "GCC Setup", to: "/it-services" as const },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights / Blog", to: "/about" as const },
      { label: "Case Studies", to: "/industries" as const },
      { label: "FAQs", to: "/contact" as const },
      { label: "Privacy Policy", to: "/contact" as const },
      { label: "Terms of Service", to: "/contact" as const },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1240px] px-6 pb-10">
      <div className="relative overflow-hidden rounded-[28px] bg-[#0D0F14] px-10 py-14 text-white sm:px-12 lg:px-14">
        <span
          aria-hidden
          className="footer-brand-mark pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(5rem,12vw,10rem)] font-black font-raleway leading-none tracking-[0.22em] text-white/[0.04] select-none"
        >
          SMANV
        </span>

        {/* 5-Column Responsive Layout */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 items-start">
          {/* Column 1: Logo & Slogan */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 max-w-[200px]">
            <span className="inline-flex rounded-lg bg-white px-2.5 py-1.5">
              <img src="/assets/logo.jpg" alt="SMANV IT Logo" className="h-9 w-auto object-contain" />
            </span>
            <p className="mt-5 text-[15px] sm:text-[16px] font-normal font-nunito leading-[1.6] text-white/70">
              Technology +
              <br />
              Marketing,
              <br />
              All Under
              <br />
              One Roof.
            </p>
          </div>

          {/* Columns 2, 3, 4: Company, Services, Resources */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-bold font-raleway tracking-[0.12em] text-white uppercase">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-[14px] font-medium font-nunito leading-[1.5] text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: Connect & Contact Info */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h3 className="text-[13px] font-bold font-raleway tracking-[0.12em] text-white uppercase">
              Connect
            </h3>
            <ul className="mt-5 space-y-3.5 text-[14px] font-medium font-nunito leading-[1.5] text-white/60">
              <li>
                <a
                  href="mailto:Admin@smanvit.com"
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-white/60" aria-hidden />
                  <span>Admin@smanvit.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+917989692202"
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0 text-white/60" aria-hidden />
                  <span>79896 92202</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/smanvgroups/" },
                { Icon: Instagram, href: "https://www.instagram.com/smanv_groups/" },
                { Icon: MessageCircle, href: "#" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/smanv-groups/" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social link"
                  className="grid size-9 place-items-center rounded-full border border-white/20 text-white/70 transition-all hover:bg-white/10 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Terms Bar */}
        <div className="relative mt-14 border-t border-white/10 pt-6 text-center text-[13px] sm:text-[14px] font-medium font-nunito leading-[1.5] text-white/40">
          <p>
            © 2026 SMANV Info Tech Pvt. Ltd. All rights reserved.
            <span className="mx-2">|</span>
            <a href="/contact" className="transition-colors hover:text-white">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="/contact" className="transition-colors hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <div className="page-transition">
      {children}
    </div>
  );
}

export function SiteLayout({ children, hideCtaBand }: { children: ReactNode, hideCtaBand?: boolean }) {
  useSmoothScroll();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialRail />
      <main>
        <PageTransition>{children}</PageTransition>
      </main>
      {!hideCtaBand && <CtaBand />}
      <Footer />
    </div>
  );
}
