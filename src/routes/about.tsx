import { PageHero, Reveal, SiteLayout } from "@/components/Layout";

const TITLE = "About SMANV Info Tech | Engineers, Marketers & Strategists";
const DESCRIPTION =
  "Meet SMANV Info Tech — a Hyderabad-based technology and digital marketing company serving startups and enterprises across India, the UAE, the US and Europe.";

const LEADERS = [
  {
    name: "Dr. Sam K Kolli",
    role: "Founder & Group Chairman & Managing Director",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit",
    image: "/assets/sam.jpg",
    imageAlt: "Dr. Sam K Kolli",
  },
  {
    name: "Mr. Manohar Dandu",
    role: "Founder | CEO & CFO",
    bio: "Driving operational excellence and financial strategy",
    image: "/assets/manohar.jpg",
    imageAlt: "Mr. Manohar Dandu",
  },
  {
    name: "Mr. Raj Kumar Battina",
    role: "Executive Director",
    bio: "Leading project execution and delivery, every client commitment is met, on time",
    image: "/assets/rajkumar.jpg",
    imageAlt: "Mr. Raj Kumar Battina",
  },
] as const;

export default AboutPage;

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative isolate flex flex-col justify-center min-h-[calc(100vh-72px)] bg-white py-12 pt-16 sm:pt-24">
        <Reveal className="relative mx-auto max-w-[900px] px-6 text-center" stagger={0.1}>
          <h1 className="text-[48px] sm:text-[64px] font-bold font-raleway leading-[1.15] tracking-tight text-black">
            Built to Serve<br />
            Engineered to Scale<br />
            Driven to Grow Your<br />
            Business
          </h1>
          <p className="mx-auto mt-8 max-w-[900px] text-[18px] sm:text-[22px] font-medium font-nunito leading-[1.6] text-black">
            We are SMANV, a team of engineers, marketers, and strategists united by one goal -<br className="hidden sm:block" />
            your growth
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <button className="rounded-full bg-[#188BF6] px-8 py-3.5 text-[16px] font-medium font-nunito text-white shadow-sm transition-colors hover:bg-[#0076E5]">
              Book a Free Consultation
            </button>
            <button className="rounded-full border border-[#188BF6] bg-white px-8 py-3.5 text-[16px] font-medium font-nunito text-[#188BF6] transition-colors hover:bg-blue-50">
              Explore Our Services
            </button>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1080px] px-6 py-14">
        <h2 className="text-center text-[32px] sm:text-[36px] font-bold font-raleway tracking-tight text-black">
          Meet SMANV
        </h2>

        <Reveal className="mt-10 space-y-6" stagger={0.15}>
          <div className="max-w-[720px] rounded-[28px] bg-soft-blue px-8 py-8 shadow-sm sm:px-10">
            <p className="text-[15px] sm:text-[16px] font-medium font-nunito leading-[1.6] text-black">
              SMANV Info Tech is a Hyderabad-based technology and digital marketing company with a
              global delivery mindset. We work with startups, growing businesses, and enterprises
              across India, the UAE, the US, and Europe, helping them build reliable digital
              systems, launch effective marketing campaigns, and scale with confidence.
            </p>
          </div>
          <div className="ml-auto max-w-[720px] rounded-[28px] bg-soft-pink px-8 py-8 shadow-sm sm:px-10">
            <p className="text-[15px] sm:text-[16px] font-medium font-nunito leading-[1.6] text-black">
              We combine the depth of a specialist engineering firm with the agility of a
              growth-focused partner. Our team covers web and app development, AI and automation,
              cloud infrastructure, cybersecurity, digital marketing, BPO operations, and GCC setup,
              all under one roof, delivered as one unified team.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Our Mission",
              body: "To be the most trusted technology and growth partner for businesses worldwide, delivering solutions that are secure, scalable, and built to last.",
              image: "/assets/Business mission-amico 1.jpg",
              imageAlt: "Business mission and growth illustration",
            },
            {
              title: "Our Vision",
              body: "A world where every business, regardless of size or location, has access to world-class technology, marketing intelligence, and operational support through a single, reliable partner.",
              image: "/assets/Business mission-bro 1.jpg",
              imageAlt: "Leadership vision and future goals illustration",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="interactive-card rounded-[28px] bg-soft-grey p-8 sm:p-9"
            >
              <h3 className="text-[20px] sm:text-[22px] font-bold font-raleway text-black">{item.title}</h3>
              <p className="mt-3 text-[15px] sm:text-[16px] font-medium font-nunito leading-[1.6] text-black">{item.body}</p>
              <div className="mt-8 flex items-center justify-center rounded-2xl bg-background/80 p-5">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-auto w-full max-w-[180px] object-contain transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1080px] px-6 py-6">
        <h2 className="text-center text-[32px] sm:text-[36px] font-bold font-raleway tracking-tight text-black">
          The Leadership Behind SMANV
        </h2>
        <Reveal className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.1}>
          {LEADERS.map((leader) => (
            <article
              key={leader.name}
              className="relative overflow-hidden rounded-3xl bg-[#E2EFFE] shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="aspect-[3/4] w-full">
                <img
                  src={leader.image!}
                  alt={leader.imageAlt}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6 pt-24 text-white">
                <h3 className="text-[20px] font-bold font-raleway sm:text-[24px]">{leader.name}</h3>
                <p className="mt-1 text-[11px] sm:text-[12px] font-medium text-white/70">{leader.role}</p>
                <p className="mt-3 text-[13px] sm:text-[14px] font-medium leading-[1.5] text-white/90">{leader.bio}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1080px] px-6 py-14">
        <h2 className="text-center text-[32px] sm:text-[36px] font-bold font-raleway tracking-tight text-black">
          Delivery Advantage
        </h2>
        <Reveal className="mt-8" stagger={0.1}>
          <div className="grid items-center gap-10 rounded-[32px] bg-[#E2EFFE] p-8 sm:p-12 md:grid-cols-[280px_1fr] lg:gap-16">
            <div className="flex items-center justify-center">
              <img
                src="/assets/At the office-amico 1.png"
                alt="SMANV team working together in the office"
                className="h-auto w-full max-w-[280px] object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold font-raleway leading-[1.3] text-black">
                One Team. Two Powerful Service Lines. Zero Compromise.
              </h3>
              <p className="mt-3 text-[15px] sm:text-[16px] lg:text-[17px] font-medium font-nunito leading-[1.6] text-black">
                SMANV, you get one accountable team that covers it all. From the first strategy call
                to post-launch support, we show up fully, with the engineering depth, marketing
                expertise, and compliance knowledge to grow your business right.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
