import { Link } from "react-router-dom";
import { useState } from "react";
import { Reveal, SiteLayout } from "@/components/Layout";

const TITLE = "Partnership | SMANV Info Tech";
const DESCRIPTION = "Partner with SMANV Info Tech for joint success. Earn flat 10% commission on every closed referral.";

export default PartnershipPage;

function PartnershipPage() {
  const [projectValue, setProjectValue] = useState<number>(30000);
  
  const commission = projectValue * 0.1;

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <SiteLayout hideCtaBand={true}>
      <section className="relative w-full bg-white pb-20 pt-16 lg:pt-24">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
          <Reveal className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8" stagger={0.2}>
            
            {/* Left Column: Text & Buttons */}
            <div className="flex flex-col items-start text-left max-w-[600px]">
              <h1 className="text-[40px] font-bold leading-[1.15] font-raleway text-[#111827] sm:text-[48px] lg:text-[56px]">
                Every project you refer pays you back automatically
              </h1>
              
              <p className="mt-5 text-[17px] font-semibold leading-relaxed font-nunito text-[#374151] sm:text-[18px]">
                Flat 10% commission on every closed referral. We handle the pitch, delivery, and support, you just make the introduction.
              </p>
              
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-[#188BF6] px-8 py-3.5 text-[16px] font-normal font-nunito text-white transition-colors hover:bg-blue-600">
                  Become a Partner
                </button>
                <Link
                  to="/it-services"
                  className="rounded-full border border-[#188BF6] bg-white px-8 py-3.5 text-[16px] font-normal font-nunito text-[#188BF6] transition-colors hover:bg-[#EAF3FF]"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            {/* Right Column: Calculator Widget */}
            <div className="relative w-full lg:pl-10">
              <div className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-[32px] bg-white p-8 sm:p-10 border border-gray-100" style={{ boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.05)' }}>
                <h3 className="text-[20px] font-medium text-black font-raleway">
                  Estimate your commission
                </h3>
                
                <div className="mt-10 flex items-end justify-between">
                  <span className="text-[16px] font-medium text-gray-500 font-nunito">Project value</span>
                  <span className="text-[22px] font-medium font-sans text-black">{formatCurrency(projectValue)}</span>
                </div>
                
                {/* Custom Slider */}
                <div className="relative mt-5 h-8 flex items-center">
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="1000"
                    value={projectValue}
                    onChange={(e) => setProjectValue(Number(e.target.value))}
                    className="absolute z-20 w-full opacity-0 cursor-pointer"
                  />
                  {/* Slider Track Background */}
                  <div className="absolute w-full h-[6px] rounded-full bg-gray-200"></div>
                  {/* Slider Track Fill */}
                  <div 
                    className="absolute h-[6px] rounded-full bg-[#0A1B3F]"
                    style={{ width: `${((projectValue - 5000) / 95000) * 100}%` }}
                  ></div>
                  {/* Slider Thumb */}
                  <div 
                    className="absolute size-5 rounded-full border-[4px] border-[#0A1B3F] bg-white pointer-events-none -ml-2.5 shadow-sm"
                    style={{ left: `${((projectValue - 5000) / 95000) * 100}%` }}
                  ></div>
                </div>
                
                <div className="mt-8 h-[1px] w-full bg-gray-100"></div>
                
                <div className="mt-8 flex items-baseline gap-4">
                  <span className="text-[15px] font-medium text-gray-500 font-nunito">You earn</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[42px] font-semibold leading-none font-sans text-[#0A1B3F] tracking-tight">{formatCurrency(commission)}</span>
                    <span className="text-[14px] font-medium text-gray-500 font-nunito">(10% flat)</span>
                  </div>
                </div>
              </div>
            </div>
            
          </Reveal>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="relative w-full bg-white py-24">
        <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8 text-center">
          <span className="text-[16px] font-medium font-nunito text-[#188BF6]">
            How it works
          </span>
          <h2 className="mt-4 text-[32px] font-bold leading-tight font-raleway text-black sm:text-[40px] lg:text-[46px]">
            Three steps. Zero delivery work.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="flex flex-col items-start rounded-[32px] bg-white p-8 text-left shadow-[0_15px_60px_rgba(0,0,0,0.12)] sm:p-10">
              <div className="inline-block border-b-4 border-[#188BF6] pb-0.5">
                <span className="text-[48px] font-bold leading-none font-raleway text-[#188BF6]">
                  01
                </span>
              </div>
              <h3 className="mt-6 text-[22px] font-semibold text-black font-raleway">
                You refer
              </h3>
              <p className="mt-4 text-[16px] font-normal leading-relaxed font-nunito text-gray-500">
                Share a warm introduction to someone who needs software, apps, or AI built.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-start rounded-[32px] bg-white p-8 text-left shadow-[0_15px_60px_rgba(0,0,0,0.12)] sm:p-10">
              <div className="inline-block border-b-4 border-[#188BF6] pb-0.5">
                <span className="text-[48px] font-bold leading-none font-raleway text-[#188BF6]">
                  02
                </span>
              </div>
              <h3 className="mt-6 text-[22px] font-semibold text-black font-raleway">
                We close
              </h3>
              <p className="mt-4 text-[16px] font-normal leading-relaxed font-nunito text-gray-500">
                Our team pitches, proposes, delivers, and supports the project end to end.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-start rounded-[32px] bg-white p-8 text-left shadow-[0_15px_60px_rgba(0,0,0,0.12)] sm:p-10">
              <div className="inline-block border-b-4 border-[#188BF6] pb-0.5">
                <span className="text-[48px] font-bold leading-none font-raleway text-[#188BF6]">
                  03
                </span>
              </div>
              <h3 className="mt-6 text-[22px] font-semibold text-black font-raleway">
                You earn
              </h3>
              <p className="mt-4 text-[16px] font-normal leading-relaxed font-nunito text-gray-500">
                Get 10% of the project value once the client's payment clears. No cap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Everything You Need To Know Section */}
      <section className="relative w-full bg-white pb-32 pt-12">
        <div className="mx-auto w-full max-w-[900px] px-6 text-center lg:px-8">
          <span className="text-[15px] font-medium font-nunito text-[#188BF6]">
            Explore the program
          </span>
          <h2 className="mt-3 text-[32px] font-semibold leading-tight font-raleway text-black sm:text-[36px] lg:text-[40px]">
            Everything you need to know
          </h2>

          {/* Services Subsection */}
          <div className="mt-14 flex justify-center">
            <span className="rounded-full bg-[#F3F4F6] px-4 py-1 text-[13px] font-medium text-gray-700">
              Services
            </span>
          </div>
          
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Service Card 1 */}
            <div className="flex items-start gap-4 rounded-[20px] border border-gray-200 bg-white p-5 text-left shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)] sm:p-6 transition-colors hover:border-gray-300">
              <div className="mt-0.5 flex-shrink-0 text-[#188BF6]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <div>
                <h4 className="text-[16px] font-semibold text-gray-900 font-raleway">Software</h4>
                <p className="mt-1 text-[14px] font-normal text-gray-500 font-nunito">Custom apps, platforms, integrations</p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="flex items-start gap-4 rounded-[20px] border border-gray-200 bg-white p-5 text-left shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)] sm:p-6 transition-colors hover:border-gray-300">
              <div className="mt-0.5 flex-shrink-0 text-[#188BF6]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>
              </div>
              <div>
                <h4 className="text-[16px] font-semibold text-gray-900 font-raleway">AI and automation</h4>
                <p className="mt-1 text-[14px] font-normal text-gray-500 font-nunito">AI agents, ML, RPA workflows</p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="flex items-start gap-4 rounded-[20px] border border-gray-200 bg-white p-5 text-left shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)] sm:p-6 transition-colors hover:border-gray-300">
              <div className="mt-0.5 flex-shrink-0 text-[#188BF6] font-medium text-[18px] leading-none tracking-widest">
                {`{ }`}
              </div>
              <div>
                <h4 className="text-[16px] font-semibold text-gray-900 font-raleway">Web and mobile</h4>
                <p className="mt-1 text-[14px] font-normal text-gray-500 font-nunito">Sites, apps, e-commerce builds</p>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="flex items-start gap-4 rounded-[20px] border border-gray-200 bg-white p-5 text-left shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)] sm:p-6 transition-colors hover:border-gray-300">
              <div className="mt-0.5 flex-shrink-0 text-[#188BF6]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
              </div>
              <div>
                <h4 className="text-[16px] font-semibold text-gray-900 font-raleway">IT support</h4>
                <p className="mt-1 text-[14px] font-normal text-gray-500 font-nunito">Staffing, cloud, outsourcing</p>
              </div>
            </div>
          </div>

          {/* Support Subsection */}
          <div className="mt-14 flex justify-center">
            <span className="rounded-full bg-[#F3F4F6] px-4 py-1 text-[13px] font-medium text-gray-700">
              Support
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Support Card 1 */}
            <div className="flex items-start gap-4 rounded-[20px] border border-gray-200 bg-white p-5 text-left shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)] sm:p-6 transition-colors hover:border-gray-300">
              <div className="mt-0.5 flex-shrink-0 text-[#188BF6]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div>
                <h4 className="text-[16px] font-semibold text-gray-900 font-raleway">Sales materials</h4>
                <p className="mt-1 text-[14px] font-normal leading-relaxed text-gray-500 font-nunito">Pitch decks, brochures, case studies, ready to send.</p>
              </div>
            </div>

            {/* Support Card 2 */}
            <div className="flex items-start gap-4 rounded-[20px] border border-gray-200 bg-white p-5 text-left shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)] sm:p-6 transition-colors hover:border-gray-300">
              <div className="mt-0.5 flex-shrink-0 text-[#188BF6]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
              </div>
              <div>
                <h4 className="text-[16px] font-semibold text-gray-900 font-raleway">Payout timing</h4>
                <p className="mt-1 text-[14px] font-normal leading-relaxed text-gray-500 font-nunito">Paid once the client's payment clears, no delays.</p>
              </div>
            </div>
          </div>

          {/* Fit Check Subsection */}
          <div className="mt-14 flex justify-center">
            <span className="rounded-full bg-[#F3F4F6] px-4 py-1 text-[13px] font-medium text-gray-700">
              Fit Check
            </span>
          </div>

          <h3 className="mt-6 text-[18px] font-semibold text-black font-raleway sm:text-[20px]">
            If you talk to decision-makers who need tech built, you qualify.
          </h3>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["Freelancer", "Agency founder", "Sales / BD pro", "Recruiter", "Consultant"].map((tag, idx) => (
              <span key={idx} className="rounded-full bg-[#DBEAFE] px-5 py-2 text-[14px] font-semibold text-gray-900">
                {tag}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* Apply Form Section */}
      <section className="relative w-full overflow-hidden bg-[#C9E2FA] mb-16 md:mb-24">
        {/* Frame.png positioned on the right */}
        <img 
          src="/assets/Frame.png" 
          alt="" 
          className="absolute right-0 top-0 h-full w-auto object-cover object-right pointer-events-none select-none"
        />

        {/* Content on top */}
        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 py-10 md:py-12 text-center">
          <span className="text-[14px] font-medium font-nunito text-[#188BF6]">
            Ready to get started
          </span>
          <h2 className="mt-1 text-[24px] font-semibold font-raleway text-black sm:text-[28px]">
            Apply in under two minutes
          </h2>

          <div className="mx-auto mt-5 w-full max-w-[460px] rounded-[20px] bg-white p-5 text-left shadow-[0_15px_50px_rgba(0,0,0,0.08)] sm:p-7">
            <form className="flex flex-col gap-3">
              
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-gray-900 font-raleway">Full name</label>
                <input 
                  type="text" 
                  placeholder="Jordan Reyes" 
                  className="w-full rounded-lg bg-[#F9FAFB] px-3.5 py-2 text-[14px] text-gray-900 placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-[#188BF6]/20 font-nunito"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-gray-900 font-raleway">Email</label>
                <input 
                  type="email" 
                  placeholder="jordan@company.com" 
                  className="w-full rounded-lg bg-[#F9FAFB] px-3.5 py-2 text-[14px] text-gray-900 placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-[#188BF6]/20 font-nunito"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-gray-900 font-raleway">Your role</label>
                <input 
                  type="text" 
                  placeholder="Select your role" 
                  className="w-full rounded-lg bg-[#F9FAFB] px-3.5 py-2 text-[14px] text-gray-900 placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-[#188BF6]/20 font-nunito"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-gray-900 font-raleway">LinkedIn/Website</label>
                <input 
                  type="text" 
                  placeholder="linkedin.com/in/john" 
                  className="w-full rounded-lg bg-[#F9FAFB] px-3.5 py-2 text-[14px] text-gray-900 placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-[#188BF6]/20 font-nunito"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-semibold text-gray-900 font-raleway">How do you plan to refer clients</label>
                <input 
                  type="text" 
                  placeholder="Select referral method" 
                  className="w-full rounded-lg bg-[#F9FAFB] px-3.5 py-2 text-[14px] text-gray-900 placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-[#188BF6]/20 font-nunito"
                />
              </div>

              <div className="mt-3 flex justify-center">
                <button 
                  type="button" 
                  className="rounded-full bg-[#188BF6] px-8 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-blue-600 font-nunito"
                >
                  Explore Our Services
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

    </SiteLayout>
  );
}
