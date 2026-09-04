import { PageHero, Reveal, SiteLayout } from "@/components/Layout";

const TITLE = "IT Services | SMANV Info Tech";
const DESCRIPTION =
  "Web and mobile development, AI/ML, cloud, cybersecurity, QA, BPO/KPO, GCC setup and virtual IT staffing delivered by SMANV Info Tech.";

const SERVICES = [
  {
    title: "Web Development",
    tag: "YOUR DIGITAL PRESENCE, BUILT TO PERFORM.",
    body: "We build websites and web applications that look great and work harder, ensuring high performance and accessibility.",
    image: "/assets/webdevlopment.jpg",
    imageAlt: "Landing page and web development illustration",
    points: [
      "Custom Architecture & Design",
      "React / Node / WordPress / Laravel",
      "Responsive SEO-first approach",
      "Enterprise Portals & E-commerce",
    ],
  },
  {
    title: "Mobile Development",
    tag: "APPS YOUR USERS WILL ACTUALLY LOVE.",
    body: "From consumer apps to enterprise mobile solutions, we design and build mobile experiences that are intuitive and scale.",
    image: "/assets/App development-rafiki 1.jpg",
    imageAlt: "Mobile app development illustration",
    points: [
      "Native iOS & Android",
      "Flutter & React Native",
      "Store Submission & Optimization",
      "Long-term Maintenance",
    ],
  },
  {
    title: "AI & ML Solutions",
    tag: "INTELLIGENCE BUILT INTO YOUR BUSINESS.",
    body: "We build practical AI and machine learning solutions for real business problems, from automation to prediction.",
    image: "/assets/Digital presentation-bro 1.jpg",
    imageAlt: "AI and digital presentation illustration",
    points: [
      "Custom Generative AI Apps",
      "ML Model Training & Deployment",
      "Advanced Predictive Analytics",
      "Intelligent Workflow Automation",
    ],
  },
  {
    title: "Hosting & Domains",
    tag: "YOUR DIGITAL FOUNDATION, ROCK-SOLID.",
    body: "Reliable hosting is the foundation of everything digital. We manage your infrastructure so you don't have to.",
    image: "/assets/Cloud hosting-amico 1.jpg",
    imageAlt: "Cloud hosting and domains illustration",
    points: [
      "Cloud & VPS Managed Hosting",
      "Global DNS Configuration",
      "SSL & Security Hardening",
      "99.9% Enterprise Uptime SLA",
    ],
  },
  {
    title: "Cloud Solutions",
    tag: "SCALE WITHOUT LIMITS.",
    body: "We move businesses to the cloud and manage them there with secure, cost-effective technical architectures.",
    image: "/assets/Cloud hosting-amico 1.jpg",
    imageAlt: "Cloud infrastructure illustration",
    points: [
      "AWS / Azure / GCP Migration",
      "DevOps & CI/CD Pipelines",
      "Serverless & Auto-scaling",
      "Automated Backup Strategy",
    ],
  },
  {
    title: "Cybersecurity",
    tag: "PROTECT WHAT YOU'VE BUILT.",
    body: "Our cybersecurity team proactively identifies and closes vulnerabilities before they become critical breaches.",
    image: "/assets/Security-amico 1.jpg",
    imageAlt: "Cybersecurity and data protection illustration",
    points: [
      "Penetration Testing (Ethical)",
      "ISO 27001 & GDPR Compliance",
      "Real-time Threat Detection",
      "Endpoint & Cloud Protection",
    ],
  },
  {
    title: "Software QA",
    tag: "QUALITY AT EVERY STAGE.",
    body: "We embed quality into your delivery process, finding bugs early and making sure every release is perfect.",
    image: "/assets/QA engineers-rafiki 1.jpg",
    imageAlt: "Quality assurance engineers illustration",
    points: [
      "Selenium & Cypress Automation",
      "Regression & UAT Testing",
      "Secure API Testing",
      "Strategic Test Consulting",
    ],
  },
  {
    title: "BPO / KPO",
    tag: "YOUR OPERATIONS, HANDLED.",
    body: "Our operations teams work as an extension of your business — handling high-volume tasks with total accuracy.",
    image: "/assets/Active Support-rafiki 1.jpg",
    imageAlt: "Active customer support illustration",
    points: [
      "24/7 Multi-channel Support",
      "Data Processing & Intelligence",
      "Technical Helpdesk Operations",
      "Back-office Managed Services",
    ],
  },
  {
    title: "GCC Setup",
    tag: "BUILD YOUR INDIA OFFICE WITH CONFIDENCE.",
    body: "We help global companies establish their India Global Capability Center from scratch, from legal to office setup.",
    image: "/assets/At the office-amico 1.png",
    imageAlt: "Global capability center office setup illustration",
    points: [
      "Entity Setup & Legal Governance",
      "Strategic Talent Acquisition",
      "Tier-1 IT Infrastructure",
      "Full Operational Management",
    ],
  },
  {
    title: "Virtual IT Staffing",
    tag: "THE RIGHT TALENT, WHEN YOU NEED IT.",
    body: "Scale your team fast with pre-vetted IT professionals who integrate seamlessly into your existing workflows.",
    image: "/assets/Profiling-pana 1.jpg",
    imageAlt: "Virtual IT staffing and profiling illustration",
    points: [
      "Full-Stack Vetted Developers",
      "Architects & Project Managers",
      "Scrum Masters & DevOps Pros",
      "Flexible, On-demand Hiring",
    ],
  },
];

const DIGITAL_SERVICES = [
  {
    pill: "WEB DEVELOPMENT",
    tagline: "YOUR DIGITAL PRESENCE, BUILT TO PERFORM.",
    title: "Websites that work as hard as you do",
    body: "We build websites and web applications that look great and work harder, ensuring high performance and accessibility.",
    points: [
      "Custom architecture & design",
      "React / Node / WordPress / Laravel",
      "Responsive, SEO-first approach",
      "Enterprise portals & e-commerce"
    ],
    buttonText: "Start a Web Project",
    image: "/assets/webdevlopment.jpg",
    imageAlt: "Web development illustration",
    imageRight: false,
  },
  {
    pill: "MOBILE DEVELOPMENT",
    tagline: "APPS YOUR USERS WILL ACTUALLY LOVE.",
    title: "Mobile experiences built to scale",
    body: "From consumer apps to enterprise mobile solutions, we design and build mobile experiences that are intuitive and scale.",
    points: [
      "Native iOS & Android",
      "Flutter & React Native",
      "Store submission & optimization",
      "Long-term maintenance"
    ],
    buttonText: "Start a Mobile Project",
    image: "/assets/App development-rafiki 1.jpg",
    imageAlt: "Mobile experiences illustration",
    imageRight: true,
  },
  {
    pill: "DIGITAL MARKETING",
    tagline: "MARKETING THAT EARNS ITS BUDGET EVERY MONTH.",
    title: "Visibility that turns into pipeline",
    body: "We plan and run digital marketing that gets found, gets clicked, and gets measured, visibility that becomes pipeline, not just impressions.",
    points: [
      "SEO & local search",
      "Google & Meta ads",
      "Content & social strategy",
      "Performance reporting & analytics"
    ],
    buttonText: "Start a Marketing Project",
    image: "/assets/digitalMarketing.png",
    imageAlt: "Digital marketing illustration",
    imageRight: false,
  },
  {
    pill: "AI & ML SOLUTIONS",
    tagline: "INTELLIGENCE BUILT INTO YOUR BUSINESS.",
    title: "Practical AI, not hype",
    body: "We build practical AI and machine learning solutions for real business problems, from automation to prediction.",
    points: [
      "Custom generative AI apps",
      "ML model training & deployment",
      "Advanced predictive analytics",
      "Intelligent workflow automation"
    ],
    buttonText: "Start a AI Project",
    image: "/assets/Digital presentation-bro 1.jpg",
    imageAlt: "Practical AI illustration",
    imageRight: true,
  },
];

const TECHNOLOGY_SERVICES = [
  {
    pill: "CLOUD SOLUTIONS",
    tagline: "SCALE WITHOUT LIMITS",
    title: "Move to the cloud, without the guesswork",
    body: "We move businesses to the cloud and manage them there with secure, cost-effective technical architectures.",
    points: [
      "AWS / Azure / GCP migration",
      "DevOps & CI/CD pipelines",
      "Serverless & auto-scaling",
      "Automated backup strategy"
    ],
    buttonText: "Talk Cloud Strategy",
    image: "/assets/Cloud hosting-amico 1.jpg",
    imageAlt: "Cloud solutions illustration",
    imageRight: false,
  },
  {
    pill: "HOSTING & DOMAINS",
    tagline: "YOUR DIGITAL FOUNDATION, ROCK-SOLID.",
    title: "Infrastructure you don't have to think about",
    body: "Reliable hosting is the foundation of everything digital. We manage your infrastructure so you don't have to.",
    points: [
      "Cloud & VPS managed hosting",
      "Global DNS configuration",
      "SSL & security hardening",
      "99.9% enterprise uptime SLA"
    ],
    buttonText: "Talk to Hosting Experts",
    image: "/assets/Vector (1).jpg", // Placeholder until verified, using one of the existing images
    imageAlt: "Hosting and domains illustration",
    imageRight: true,
  },
  {
    pill: "CYBERSECURITY",
    tagline: "PROTECT WHAT YOU'VE BUILT",
    title: "Vulnerabilities closed before they matter",
    body: "Our cybersecurity team proactively identifies and closes vulnerabilities before they become critical breaches.",
    points: [
      "Penetration testing (ethical)",
      "ISO 27001 & GDPR compliance",
      "Real-time threat detection",
      "Endpoint & cloud protection"
    ],
    buttonText: "Get Security Audit",
    image: "/assets/Security-amico 1.jpg",
    imageAlt: "Cybersecurity illustration",
    imageRight: false,
  },
  {
    pill: "SOFTWARE QA",
    tagline: "QUALITY AT EVERY STAGE.",
    title: "Bugs found early, not by your users",
    body: "We embed quality into your delivery process, finding bugs early and making sure every release is perfect.",
    points: [
      "Selenium & Cypress automation",
      "Regression & UAT testing",
      "Secure API testing",
      "Strategic test consulting"
    ],
    buttonText: "Talk to QA",
    image: "/assets/QA engineers-rafiki 1.jpg",
    imageAlt: "Software QA illustration",
    imageRight: true,
  },
];

const ENTERPRISE_SERVICES = [
  {
    pill: "IT STAFFING AUGMENTATION",
    tagline: "THE RIGHT TALENT, WHEN YOU NEED IT",
    title: "Scale your team without the search",
    body: "Scale your team fast with pre-vetted IT professionals who integrate seamlessly with your existing workflows.",
    points: [
      "All-stack vetted developers",
      "Architects & project managers",
      "Cost-effective engagement",
      "Fast onboarding, no overhead"
    ],
    buttonText: "Find your Team",
    image: "/assets/Profiling-pana 1.jpg",
    imageAlt: "IT Staffing illustration",
    imageRight: false,
  },
  {
    pill: "GCC SETUP",
    tagline: "BUILD YOUR INDIA OFFICE WITH CONFIDENCE.",
    title: "A fully operational India presence",
    body: "We help global companies establish their India Global Capability Center from scratch, from legal to office setup.",
    points: [
      "Entity setup & legal governance",
      "Strategic talent acquisition",
      "Tier-1 IT infrastructure",
      "Full operational management"
    ],
    buttonText: "Plan your GCC",
    image: "/assets/Business mission-amico 1.jpg",
    imageAlt: "GCC Setup illustration",
    imageRight: true,
  },
  {
    pill: "BPO / KPO",
    tagline: "YOUR OPERATIONS, HANDLED",
    title: "An operations team as an extension of yours",
    body: "Our operations teams work as an extension of your business, handling high-volume tasks with total accuracy.",
    points: [
      "24/7 multi-channel support",
      "Data processing & intelligence",
      "Technical helpdesk operations",
      "Back-office managed services"
    ],
    buttonText: "Discuss your Operations",
    image: "/assets/Active Support-rafiki 1.jpg",
    imageAlt: "BPO Operations illustration",
    imageRight: false,
  },
];

export default ITServicesPage;

function ITServicesPage() {
  return (
    <SiteLayout>
      <section className="relative isolate flex flex-col justify-center min-h-[calc(100vh-72px)] bg-white py-12 pt-16 sm:pt-24">
        <Reveal className="relative mx-auto max-w-[1000px] px-6 text-center" stagger={0.1}>
          <h1 className="text-[48px] sm:text-[64px] font-bold font-raleway leading-[1.15] tracking-tight text-black">
            From the First Line of Code to<br />
            Full-Scale Enterprise<br />
            Infrastructure
          </h1>
          <p className="mx-auto mt-8 max-w-[900px] text-[18px] sm:text-[22px] font-medium font-nunito leading-[1.6] text-black">
            We don't just build software. We engineer systems that scale, secure data<br className="hidden sm:block" />
            that matters, and automate processes that drive revenue.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <button className="rounded-full bg-[#188BF6] px-8 py-3.5 text-[16px] font-medium font-nunito text-white shadow-sm transition-colors hover:bg-[#0076E5]">
              Discuss Your Project
            </button>
            <button className="rounded-full border border-[#188BF6] bg-white px-8 py-3.5 text-[16px] font-medium font-nunito text-[#188BF6] transition-colors hover:bg-blue-50">
              See Our Capabilities
            </button>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1080px] px-6 py-14">
        <h2 className="text-center text-[36px] sm:text-[40px] font-bold font-raleway tracking-tight text-black">
          Technology With Purpose
        </h2>

        <Reveal className="mt-14 max-w-[1050px] mx-auto overflow-hidden rounded-[32px] flex flex-col md:flex-row shadow-sm">
          {/* Panel 1 */}
          <div className="flex-1 bg-[#F9F9F9] p-8 sm:p-10 lg:p-12 flex flex-col">
            <span className="text-[11px] font-medium font-nunito text-[#828282] uppercase tracking-wide">04 SERVICES</span>
            <h3 className="mt-4 text-[22px] sm:text-[24px] font-bold font-raleway text-black">SMANV Digital</h3>
            <p className="mt-3 text-[15px] sm:text-[16px] font-medium font-nunito leading-[1.6] text-[#374151]">Building and growing what your users see, web, mobile, AI, and marketing.</p>
            <a href="#" className="mt-14 flex items-center gap-2 text-[15px] sm:text-[16px] font-bold font-nunito text-[#188BF6] hover:text-[#0076E5] transition-colors mt-auto">
              Explore Digital 
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Panel 2 */}
          <div className="flex-1 bg-[#E2EFFE] p-8 sm:p-10 lg:p-12 flex flex-col">
            <span className="text-[11px] font-medium font-nunito text-[#828282] uppercase tracking-wide">04 SERVICES</span>
            <h3 className="mt-4 text-[22px] sm:text-[24px] font-bold font-raleway text-black">SMANV Technology</h3>
            <p className="mt-3 text-[15px] sm:text-[16px] font-medium font-nunito leading-[1.6] text-[#374151]">The engineering backbone that keeps everything fast, secure, and online.</p>
            <a href="#" className="mt-14 flex items-center gap-2 text-[15px] sm:text-[16px] font-bold font-nunito text-[#188BF6] hover:text-[#0076E5] transition-colors mt-auto">
              Explore Digital 
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Panel 3 */}
          <div className="flex-1 bg-[#F9F9F9] p-8 sm:p-10 lg:p-12 flex flex-col">
            <span className="text-[11px] font-medium font-nunito text-[#828282] uppercase tracking-wide">03 SERVICES</span>
            <h3 className="mt-4 text-[22px] sm:text-[24px] font-bold font-raleway text-black">SMANV Enterprise</h3>
            <p className="mt-3 text-[15px] sm:text-[16px] font-medium font-nunito leading-[1.6] text-[#374151]">Scaling your operations, talent, and global footprint.</p>
            <a href="#" className="mt-14 flex items-center gap-2 text-[15px] sm:text-[16px] font-bold font-nunito text-[#188BF6] hover:text-[#0076E5] transition-colors mt-auto">
              Explore Digital 
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1080px] px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full bg-gray-100 px-4 py-1.5 text-[12px] font-bold text-gray-700">Digital</span>
          <h2 className="mt-6 text-[32px] sm:text-[40px] font-bold font-raleway leading-[1.2] text-black">
            Building and Growing<br />What Your Users See
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] font-semibold font-nunito text-[#1F2937]">
            Product, presence, and growth - the outward-facing work that turns<br className="hidden sm:block" />
            visitors into customers.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-24">
          {DIGITAL_SERVICES.map((ds, index) => (
            <div key={index} className="grid gap-12 lg:grid-cols-2 items-center">
              {/* Image Block */}
              <div className={`rounded-[32px] bg-[#EAF3FD] p-10 flex items-center justify-center min-h-[400px] ${ds.imageRight ? 'lg:order-2' : 'lg:order-1'}`}>
                <img src={ds.image} alt={ds.imageAlt} className="w-full max-w-[320px] object-contain mix-blend-multiply" loading="lazy" />
              </div>
              
              {/* Text Block */}
              <div className={`flex flex-col items-start ${ds.imageRight ? 'lg:order-1' : 'lg:order-2'}`}>
                <span className="rounded-full bg-gray-100 px-3 py-1.5 text-[11px] font-bold font-nunito text-gray-600 uppercase tracking-wide">
                  {ds.pill}
                </span>
                <p className="mt-5 text-[12px] font-bold font-nunito tracking-wide text-[#188BF6] uppercase">
                  {ds.tagline}
                </p>
                <h3 className="mt-2 text-[28px] sm:text-[34px] font-bold font-raleway text-black leading-[1.2]">
                  {ds.title}
                </h3>
                <p className="mt-4 text-[16px] font-semibold font-nunito leading-[1.6] text-[#1F2937]">
                  {ds.body}
                </p>
                
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 w-full">
                  {ds.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-2 size-1.5 shrink-0 rounded-full bg-black"></div>
                      <span className="text-[15px] font-bold font-nunito text-black leading-snug">{point}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-10 flex items-center gap-4 rounded-full border border-gray-900 pl-5 pr-1.5 py-1.5 text-[13px] font-semibold font-nunito text-black hover:bg-gray-50 transition-colors">
                  {ds.buttonText}
                  <span className="flex size-7 items-center justify-center rounded-full bg-[#001A41] text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section className="w-full bg-[#F9FAFB] py-24">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="flex flex-col items-center text-center">
            <span className="rounded-full bg-gray-200 px-4 py-1.5 text-[12px] font-bold text-gray-700">Technology</span>
            <h2 className="mt-6 text-[32px] sm:text-[40px] font-bold font-raleway leading-[1.2] text-black">
              The Engineering Backbone<br />That Keeps It Running
            </h2>
            <p className="mt-4 text-[16px] sm:text-[18px] font-semibold font-nunito text-[#1F2937]">
              Infrastructure, security, and quality, the invisible layer that makes<br className="hidden sm:block" />
              everything else actually work at scale.
            </p>
          </div>

          <div className="mt-20 flex flex-col gap-24">
            {TECHNOLOGY_SERVICES.map((ts, index) => (
              <div key={index} className="grid gap-12 lg:grid-cols-2 items-center">
                {/* Image Block */}
                <div className={`rounded-[32px] bg-[#EAF3FD] p-10 flex items-center justify-center min-h-[400px] ${ts.imageRight ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img src={ts.image} alt={ts.imageAlt} className="w-full max-w-[320px] object-contain mix-blend-multiply" loading="lazy" />
                </div>
                
                {/* Text Block */}
                <div className={`flex flex-col items-start ${ts.imageRight ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="rounded-full bg-gray-200 px-3 py-1.5 text-[11px] font-bold font-nunito text-gray-600 uppercase tracking-wide">
                    {ts.pill}
                  </span>
                  <p className="mt-5 text-[12px] font-bold font-nunito tracking-wide text-[#188BF6] uppercase">
                    {ts.tagline}
                  </p>
                  <h3 className="mt-2 text-[28px] sm:text-[34px] font-bold font-raleway text-black leading-[1.2]">
                    {ts.title}
                  </h3>
                  <p className="mt-4 text-[16px] font-semibold font-nunito leading-[1.6] text-[#1F2937]">
                    {ts.body}
                  </p>
                  
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 w-full">
                    {ts.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-2 size-1.5 shrink-0 rounded-full bg-black"></div>
                        <span className="text-[15px] font-bold font-nunito text-black leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-10 flex items-center gap-4 rounded-full border border-gray-900 pl-5 pr-1.5 py-1.5 text-[13px] font-semibold font-nunito text-black hover:bg-gray-100 transition-colors">
                    {ts.buttonText}
                    <span className="flex size-7 items-center justify-center rounded-full bg-[#001A41] text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="flex flex-col items-center text-center">
            <span className="rounded-full bg-gray-100 px-4 py-1.5 text-[12px] font-bold text-gray-700">Enterprise</span>
            <h2 className="mt-6 text-[32px] sm:text-[40px] font-bold font-raleway leading-[1.2] text-black">
              Scaling Your Operations and<br />Global Footprint
            </h2>
            <p className="mt-4 text-[16px] sm:text-[18px] font-semibold font-nunito text-[#1F2937]">
              People, entities, and operations at scale, where SMANV becomes an<br className="hidden sm:block" />
              extension of your org, not just a vendor.
            </p>
          </div>

          <div className="mt-20 flex flex-col gap-24">
            {ENTERPRISE_SERVICES.map((es, index) => (
              <div key={index} className="grid gap-12 lg:grid-cols-2 items-center">
                {/* Image Block */}
                <div className={`rounded-[32px] bg-[#EAF3FD] p-10 flex items-center justify-center min-h-[400px] ${es.imageRight ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img src={es.image} alt={es.imageAlt} className="w-full max-w-[320px] object-contain mix-blend-multiply" loading="lazy" />
                </div>
                
                {/* Text Block */}
                <div className={`flex flex-col items-start ${es.imageRight ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="rounded-full bg-gray-100 px-3 py-1.5 text-[11px] font-bold font-nunito text-gray-600 uppercase tracking-wide">
                    {es.pill}
                  </span>
                  <p className="mt-5 text-[12px] font-bold font-nunito tracking-wide text-[#188BF6] uppercase">
                    {es.tagline}
                  </p>
                  <h3 className="mt-2 text-[28px] sm:text-[34px] font-bold font-raleway text-black leading-[1.2]">
                    {es.title}
                  </h3>
                  <p className="mt-4 text-[16px] font-semibold font-nunito leading-[1.6] text-[#1F2937]">
                    {es.body}
                  </p>
                  
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 w-full">
                    {es.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-2 size-1.5 shrink-0 rounded-full bg-black"></div>
                        <span className="text-[15px] font-bold font-nunito text-black leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-10 flex items-center gap-4 rounded-full border border-gray-900 pl-5 pr-1.5 py-1.5 text-[13px] font-semibold font-nunito text-black hover:bg-gray-50 transition-colors">
                    {es.buttonText}
                    <span className="flex size-7 items-center justify-center rounded-full bg-[#001A41] text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
