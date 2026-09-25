import { Link, useParams } from "react-router-dom";
import { Clock, ArrowUpRight, ChevronLeft, ChevronRight, Share2, Facebook, Twitter, Linkedin, Link2 } from "lucide-react";
import { SiteLayout, Reveal } from "@/components/Layout";
import { BLOG_POSTS } from "@/data/blogs";

export default BlogPostPage;

function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  return (
    <SiteLayout>
      <div className="bg-[#F8F9FA] pb-24">
        {/* Hero Banner */}
        <div className="relative mx-auto max-w-[1440px] px-4 pt-4 sm:px-6">
          <div className="h-[300px] w-full overflow-hidden rounded-[32px] sm:h-[400px] md:h-[500px]">
            <img
              src="/assets/image 111.png"
              alt="Blog Hero Banner"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="relative z-10 mx-auto -mt-16 max-w-[1240px] px-4 sm:-mt-24 sm:px-6 lg:-mt-48 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            
            {/* Left Column: Article */}
            <article className="flex-1 rounded-[32px] bg-white p-6 shadow-sm sm:p-10 lg:p-12">
              {/* Breadcrumbs */}
              <div className="flex flex-wrap items-center justify-between gap-4 text-[13px] font-medium text-gray-800">
                <div className="flex items-center gap-2">
                  <Link to="/blogs" className="flex items-center font-semibold hover:text-[#188BF6]">
                    <ChevronLeft className="mr-1 size-4" />
                    Back
                  </Link>
                  <span className="text-gray-300 px-2">|</span>
                  <Link to="/" className="hover:text-[#188BF6]">Homepage</Link>
                  <span className="text-gray-400">/</span>
                  <Link to="/blogs" className="hover:text-[#188BF6]">Blogs</Link>
                  <span className="text-gray-400">/</span>
                  <span className="font-semibold">{post.category}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <Clock className="size-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h1 className="mt-8 text-[32px] font-semibold leading-[1.2] font-raleway text-black sm:text-[36px] md:text-[40px]">
                {post.title} | SMANV
              </h1>
              
              <p className="mt-5 text-[15px] font-medium leading-relaxed font-nunito text-gray-600 sm:text-[16px]">
                {post.description}
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-full border border-[#188BF6] bg-[#EAF3FF]">
                  <span className="text-[10px] font-bold text-[#188BF6]">S</span>
                </div>
                <span className="text-[13px] font-medium text-black">by SMANV</span>
              </div>

              {/* Feature Image */}
              <div className="mt-8 overflow-hidden rounded-[24px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Mock Article Content */}
              <Reveal className="mt-10 font-nunito text-[14.5px] font-normal leading-[1.8] text-gray-800" stagger={0.1}>
                {post.slug === "how-much-should-business-website-cost-india-2026" ? (
                  <>
                    <h3 className="text-[20px] font-semibold text-black mb-4">How Much Should a Business Website Cost in India in 2026?</h3>
                    <p className="mb-6">
                      Ask five web development agencies what a website costs and you'll get five different answers, three vague quotes, and at least one "it depends, let's hop on a call." Business owners are left with no real reference point — which makes it easy to either overpay by lakhs for something simple, or underpay for something that quietly hurts the business for years.
                    </p>
                    <p className="mb-6">
                      Here's a straight answer, broken into what you actually get at each price point, based on real market pricing in 2026.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">Why "It Depends" Isn't a Cop-Out (But Shouldn't Be the Whole Answer)</h3>
                    <p className="mb-6">
                      Website cost genuinely does depend on scope — a five-page brochure site and a full e-commerce platform with inventory management are not the same project. But "it depends" shouldn't be the end of the conversation. Any agency worth working with should be able to give you real tiers and real numbers before you've handed over any information about your business.
                    </p>
                    <p className="mb-6">
                      Here's roughly how the market breaks down for small and mid-sized businesses in India right now:
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">Tier 1: Basic Business Website — Around ₹9,999–₹15,000</h3>
                    <p className="mb-4"><strong>What this gets you:</strong> A clean, professional 4–6 page site — home, about, services, contact, maybe a gallery or testimonials page. Mobile-responsive, reasonably fast, connected to Google Analytics and Search Console so you can actually see who's visiting.</p>
                    <p className="mb-4"><strong>Who this is for:</strong> A business that needs a credible online presence — somewhere to send people who Google you, somewhere your Google Business Profile links to — but isn't relying on the website itself to generate leads directly.</p>
                    <p className="mb-6"><strong>What it won't include:</strong> Custom functionality, blog infrastructure built for serious SEO, or ongoing optimization. It's a foundation, not a growth engine.</p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">Tier 2: Standard Business Website — Around ₹15,000–₹20,000</h3>
                    <p className="mb-4"><strong>What this gets you:</strong> Everything in the basic tier, plus more custom design work rather than a templated look, a properly structured blog section (which matters far more than most business owners realize — see below), on-page SEO setup, and often basic lead-capture forms tied into a CRM or spreadsheet.</p>
                    <p className="mb-6"><strong>Who this is for:</strong> A business actively trying to generate leads through the website — not just exist online, but actually convert visitors into enquiries.</p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">Tier 3: Premium / Custom Website — ₹20,000 and Up</h3>
                    <p className="mb-4"><strong>What this gets you:</strong> Fully custom design (not a modified template), advanced functionality — booking systems, payment integration, multi-language support, custom animations — and often ongoing maintenance and SEO support built into the package.</p>
                    <p className="mb-4"><strong>Who this is for:</strong> Businesses where the website is a core part of the sales process itself — not a brochure, but the thing doing real work: booking appointments, processing payments, qualifying leads before a human ever gets involved.</p>
                    <p className="mb-6">Beyond this tier, pricing scales with genuine complexity — e-commerce platforms with large catalogs, custom web applications, multi-vendor marketplaces — and can run well into lakhs depending on scope. That's a different conversation than a standard business website.</p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">The Question Nobody Asks: What's the Real Cost of the Cheap Option?</h3>
                    <p className="mb-6">
                      A website priced far below the basic tier — the ₹2,000–₹5,000 "we'll build it in two days" offers you'll find on freelance marketplaces — usually comes with hidden costs that don't show up until later: no mobile optimization, no SEO foundation at all, template code that breaks the moment you try to add anything, and often no ownership of your own site files if you ever want to switch providers.
                    </p>
                    <p className="mb-6">
                      The cheapest quote and the cheapest total cost of ownership are frequently two very different numbers.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">What to Actually Ask Before You Pay Anyone</h3>
                    <ul className="mb-6 list-disc pl-5 space-y-2">
                      <li>Do I own the domain and hosting, or does the agency control it?</li>
                      <li>Is the site mobile-responsive by design, or "responsive-ish"?</li>
                      <li>Is basic SEO (page titles, meta descriptions, sitemap, Search Console setup) included, or a separate line item?</li>
                      <li>What happens after launch — is there any support window, or are you on your own the moment it goes live?</li>
                      <li>Can I see actual examples of sites they've built, not just a portfolio slide?</li>
                    </ul>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">The Bottom Line</h3>
                    <p className="mb-6">
                      A business website in India in 2026 realistically starts around ₹9,999 for something clean and credible, moves into the ₹15,000–₹20,000 range for something built to actually generate leads, and scales upward from there based on real functionality — not vague "premium" branding.
                    </p>
                    <p className="mb-6">
                      The right number for your business depends less on your budget ceiling and more on what job you actually need the website to do: exist credibly, or actively bring in business. Get honest about which one you need before you get a quote, and the right tier becomes obvious.
                    </p>

                    <hr className="my-8 border-gray-200" />
                    <p className="mb-6 text-[15px] italic text-gray-600">
                      Want a straight quote based on what your business actually needs — no vague "contact us for pricing"? <Link to="/contact#contact-form" className="text-[#188BF6] font-semibold hover:underline">Talk to SMANV</Link> — our tiers and what's included in each are fully transparent upfront.
                    </p>
                  </>
                ) : post.slug === "business-automation-small-business-hours-saved" ? (
                  <>
                    <h3 className="text-[20px] font-semibold text-black mb-4">5 Ways Business Automation Is Saving Small Businesses Hours Every Week</h3>
                    <p className="mb-6">
                      Ask most small business owners what's eating their day, and it's rarely the "real" work. It's the copy-pasting between WhatsApp and a spreadsheet. It's manually typing the same follow-up message to the fifteenth lead this week. It's remembering to send an invoice, then remembering to chase the invoice that never got paid.
                    </p>
                    <p className="mb-6">
                      None of that requires a person. It requires a workflow — and building simple workflows that quietly run in the background is one of the highest-return, lowest-effort changes a small business can make right now.
                    </p>
                    <p className="mb-6">
                      Here are five automations that are genuinely saving business owners hours every week, not hypothetical ones.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">1. Lead Capture to Follow-Up, Automatically</h3>
                    <p className="mb-6">
                      The problem: someone fills out your website form or messages your Instagram, and depending on how busy your day is, they might get a reply in ten minutes or ten hours.
                    </p>
                    <p className="mb-6">
                      The automation: the moment a new lead comes in — from your website, Instagram, Google Ads, wherever — it's automatically added to a spreadsheet or CRM, and an instant acknowledgment goes out ("Thanks for reaching out, we'll call you within the hour"). No one has to remember to do this. It just happens the second the form is submitted.
                    </p>
                    <p className="mb-6">
                      This alone tends to have the biggest visible impact, because speed-to-response is one of the strongest predictors of whether a lead actually converts.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">2. Invoicing and Payment Reminders</h3>
                    <p className="mb-6">
                      The problem: you did the work, you meant to send the invoice, and three weeks later you're still meaning to send it. Then you're awkwardly chasing payment.
                    </p>
                    <p className="mb-6">
                      The automation: invoices generate and send automatically once a project is marked complete, and polite reminder messages go out on a schedule — 3 days before due, on the due date, and a few days after — without you having to remember any of it or have the uncomfortable "just checking in" conversation yourself.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">3. Appointment and Booking Reminders</h3>
                    <p className="mb-6">
                      The problem: no-shows. Every clinic, salon, coaching center, or service business loses real money to people who simply forget.
                    </p>
                    <p className="mb-6">
                      The automation: a WhatsApp or SMS reminder goes out automatically 24 hours before and again a couple of hours before an appointment. Businesses that add this typically see a meaningful drop in no-shows almost immediately — it's one of the simplest automations to set up and one of the most directly tied to revenue.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">4. Review Requests, Sent at the Right Moment</h3>
                    <p className="mb-6">
                      The problem: you know reviews matter for local SEO and trust, but remembering to actually ask every single happy customer is inconsistent at best.
                    </p>
                    <p className="mb-6">
                      The automation: a review request — with a direct link, not a generic "please review us" — goes out automatically a day or two after a completed purchase or service, timed for when the experience is still fresh. Consistency here matters more than any individual ask, and automation is the only reliable way to get that consistency.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">5. Social Media and Content Scheduling</h3>
                    <p className="mb-6">
                      The problem: content only gets posted when someone remembers to sit down and post it, which means posting happens in bursts and then goes silent for two weeks.
                    </p>
                    <p className="mb-6">
                      The automation: content gets planned in a batch — say, once every two weeks — and then scheduled to go out automatically across Instagram, Facebook, and LinkedIn on a consistent cadence, without anyone needing to remember to hit "post" each day.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">Why This Matters More Than It Sounds Like It Does</h3>
                    <p className="mb-6">
                      None of these five things are individually dramatic. But add them up across a normal week, and business owners routinely find they've reclaimed several hours — hours that were previously going into repetitive admin instead of the parts of the business that actually need a human's judgment: talking to customers, improving the product, making decisions.
                    </p>
                    <p className="mb-6">
                      The tools that make this possible — platforms like Make.com, along with WhatsApp Business APIs and basic CRM integrations — have gotten dramatically more accessible over the last couple of years. You no longer need an in-house developer or a five-figure budget to set up workflows like these. Most can be built and running within days.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">Where to Start</h3>
                    <p className="mb-6">
                      Don't try to automate everything at once. Pick the one task that's costing you the most time or the most money right now — usually it's either lead follow-up or payment chasing — and start there. Get that one workflow running cleanly, then move to the next.
                    </p>
                    <p className="mb-6">
                      The businesses that get the most value from automation aren't the ones with the fanciest setup. They're the ones who started small, got one thing working reliably, and built from there.
                    </p>

                    <hr className="my-8 border-gray-200" />
                    <p className="mb-6 text-[15px] italic text-gray-600">
                      Want to see which of your daily tasks could run on autopilot? <Link to="/contact#contact-form" className="text-[#188BF6] font-semibold hover:underline">Talk to SMANV</Link> — we map out and build these workflows for real businesses, not just software demos.
                    </p>
                  </>
                ) : post.slug === "how-long-does-seo-take-results" ? (
                  <>
                    <h3 className="text-[20px] font-semibold text-black mb-4">How Long Does SEO Actually Take to Show Results? An Honest Answer</h3>
                    <p className="mb-6">
                      This is the question we get asked in almost every first conversation with a new client, and it's also the question most agencies answer badly — either with an unrealistic "you'll see results in 30 days!" to close the deal, or with a vague "SEO takes time" that tells you nothing useful.
                    </p>
                    <p className="mb-6">
                      Here's the honest, specific answer.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">Why SEO Isn't Instant (And Why That's Actually the Point)</h3>
                    <p className="mb-6">
                      Google Ads works immediately because you're paying for placement — turn the campaign on, and you're visible. SEO works differently: you're earning placement by proving to Google, over time, that your site is genuinely the best answer to what someone searched for. That proof takes time to establish and, crucially, time for Google to trust.
                    </p>
                    <p className="mb-6">
                      This is also exactly why SEO is worth the wait. Paid placement disappears the moment you stop paying. Organic rankings, once earned, keep bringing traffic without an ongoing per-click cost — the investment compounds instead of resetting to zero every month.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">The Realistic Timeline, Phase by Phase</h3>
                    <p className="mb-6">
                      <strong>Weeks 1–4: Foundation work.</strong> This is technical fixes — site speed, mobile issues, broken links, proper page titles and meta descriptions, Google Search Console and Analytics setup. You typically won't see ranking movement yet, but this phase is what everything after it depends on. Skip it, and nothing built on top works as well.
                    </p>
                    <p className="mb-6">
                      <strong>Months 2–3: Early signals.</strong> Google starts crawling and indexing new or improved content more frequently. You might see small movement on low-competition, long-tail keywords — a specific service plus your city, for example — even while your main target keywords haven't moved much yet.
                    </p>
                    <p className="mb-6">
                      <strong>Months 3–6: Real movement begins.</strong> This is typically when clients start seeing their first meaningful ranking improvements and organic traffic growth on moderately competitive terms. It's also usually when the first real leads start arriving directly from search, not just from ads.
                    </p>
                    <p className="mb-6">
                      <strong>Months 6–12: Compounding growth.</strong> This is where SEO starts to look genuinely different from paid advertising. Content published months ago keeps ranking and keeps bringing traffic. Domain authority has built up enough that new content tends to rank faster than it did at month one. Growth starts compounding instead of requiring constant new effort just to maintain the same traffic level.
                    </p>
                    <p className="mb-6">
                      <strong>Beyond 12 months:</strong> For competitive keywords — anything a lot of businesses in your city are also targeting — this is often when you actually start seriously competing for the top positions, not just appearing somewhere on page one.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">What Speeds This Up (And What Slows It Down)</h3>
                    <p className="mb-6">
                      <strong>Speeds it up:</strong> A brand-new domain with zero history takes longer to build trust than a domain that's existed for years, even if it's been dormant. Consistent publishing beats sporadic bursts — Google rewards sites that show ongoing activity, not a flurry of ten posts followed by silence. Local, less-competitive keywords ("interior designer in Kukatpally" vs. "interior designer") show results faster than broad, nationally-contested ones.
                    </p>
                    <p className="mb-6">
                      <strong>Slows it down:</strong> A site with serious technical problems — broken mobile experience, painfully slow load times — will fight an uphill battle no matter how good the content is. Highly competitive industries (real estate, legal services, insurance) simply take longer because you're competing against businesses that have been investing in SEO for years already.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">The Honest Trade-Off</h3>
                    <p className="mb-6">
                      If you need leads next week, SEO is the wrong tool — that's what paid ads are for, and the two should usually run together rather than SEO replacing ads entirely in the short term.
                    </p>
                    <p className="mb-6">
                      If you're thinking about where your business needs to be in a year, SEO is very likely the better long-term investment, because the traffic it brings doesn't stop the moment you pause spending, the way paid traffic does.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">What "No Results Yet" Actually Means</h3>
                    <p className="mb-6">
                      If you're three months into SEO work and you're not seeing anything, that's not automatically a sign something's wrong — it may just mean you're still in the foundation-building window. But it is worth asking your agency to show you specifically what's been done and what early signals (even small ones — new keywords appearing in Search Console, improving average position) are showing up behind the scenes. A good SEO process is trackable well before it's dramatically visible in your monthly enquiry count.
                    </p>
                    <p className="mb-6">
                      The businesses that get the most out of SEO are the ones that understand it's a compounding investment, not a light switch — and who stay consistent through the first few months before the growth becomes obvious.
                    </p>

                    <hr className="my-8 border-gray-200" />
                    <p className="mb-6 text-[15px] italic text-gray-600">
                      Want an honest look at where your website actually stands right now, and a realistic timeline for your specific industry? <Link to="/contact#contact-form" className="text-[#188BF6] font-semibold hover:underline">Talk to SMANV</Link> — we'll show you the real picture, not a sales pitch.
                    </p>
                  </>
                ) : post.slug === "ai-chatbots-small-business-2026" ? (
                  <>
                    <h3 className="text-[20px] font-semibold text-black mb-4">AI Chatbots for Small Business: Why 2026 Is the Year to Stop Waiting</h3>
                    <p className="mb-6">
                      Two years ago, if you asked a small business owner in India whether they needed a chatbot, the honest answer was usually no. The technology was clunky, the setup was expensive, and most "chatbots" were really just glorified FAQ menus that annoyed customers more than they helped.
                    </p>
                    <p className="mb-6">
                      That's not the conversation anymore. Something shifted quietly over the last 18 months, and most small business owners haven't noticed yet — which is exactly why this is the moment to pay attention.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">The Numbers Nobody's Talking About</h3>
                    <p className="mb-6">
                      India's chatbot market was worth around $316 million in 2024. By 2030, it's projected to cross $1.26 billion — growing at close to 26% a year. That's not enterprise software money. That's a market that's expanding because smaller businesses are finally the ones driving adoption.
                    </p>
                    <p className="mb-6">
                      Here's the number that matters most if you run a small business: only about 16% of small businesses currently use any form of chatbot. But roughly 64% say they plan to adopt one by the end of 2026 — up from just 38% in 2024. That's not a gradual trend. That's a wave building right now, and it means the businesses that move first get a real head start before it becomes the new normal (and the new expectation).
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">What a Chatbot Actually Does for a Small Business</h3>
                    <p className="mb-6">
                      Forget the sci-fi framing. For a real business — a clinic, a coaching institute, a services company, a shop with an online presence — a chatbot's job is much simpler than "AI":
                    </p>
                    <p className="mb-6">
                      <strong>It answers the questions you answer fifty times a day.</strong> What are your hours? Do you deliver to my area? What's the price for X? A chatbot handles up to 80% of these routine, repetitive questions without a human ever touching them.
                    </p>
                    <p className="mb-6">
                      <strong>It responds instantly, at 2 AM, on a Sunday.</strong> The single most valued chatbot feature, according to most user surveys, is simply 24-hour availability — not intelligence, not personality. Just being there when your team isn't.
                    </p>
                    <p className="mb-6">
                      <strong>It stops leads from going cold.</strong> A visitor who messages your Instagram at 11 PM and gets no reply until Monday morning has usually already messaged three competitors by then. A chatbot that responds immediately — even just to say "got it, here's what happens next" — keeps that lead warm.
                    </p>
                    <p className="mb-6">
                      <strong>It cuts real cost.</strong> Businesses using chatbots for customer service report saving up to 30% on the cost of handling routine service requests, simply because fewer of those requests need a human at all.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">What It Doesn't Do (And Where Businesses Get This Wrong)</h3>
                    <p className="mb-6">
                      A chatbot is not a replacement for your team — it's a filter. The businesses that get disappointed are usually the ones that expect it to close complex sales or handle upset customers. It shouldn't try to. The right design hands off to a real person the moment a conversation gets complicated, and handles the repetitive 80% so your team can focus on the 20% that actually needs a human.
                    </p>
                    <p className="mb-6">
                      The other common mistake: treating the chatbot like a one-time install. A chatbot trained once on your services and never updated becomes the exact clunky, annoying experience that gave chatbots a bad name in the first place. It needs to be trained on your actual FAQs, updated as your offerings change, and reviewed periodically for conversations it's handling badly.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">Where This Is Heading</h3>
                    <p className="mb-6">
                      The businesses already using conversational AI aren't just using it for customer support anymore — sales and marketing now account for a growing share of chatbot deployments, handling everything from initial lead qualification to appointment booking. What used to require a dedicated person answering WhatsApp messages all day is increasingly something a well-trained chatbot handles as a first pass, escalating only what actually needs a human.
                    </p>
                    <p className="mb-6">
                      For small businesses specifically, WhatsApp-based bots are proving especially effective in the Indian market — customers are already comfortable messaging businesses there, so there's no new app to download, no new habit to build. It meets people exactly where they already are.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">Should Your Business Get One in 2026?</h3>
                    <p className="mb-6">
                      If you're spending real time each day answering the same five or six questions across WhatsApp, Instagram DMs, and your website contact form — yes, almost certainly. The ROI on a well-built chatbot for a business fielding routine, repetitive queries tends to be fast and obvious.
                    </p>
                    <p className="mb-6">
                      If your business runs on complex, high-touch conversations where every customer's situation is genuinely different, a chatbot will help less — though even then, it's usually worth having one just for hours, pricing, and basic qualification questions.
                    </p>
                    <p className="mb-6">
                      Either way, 2026 is the year this stops being optional for businesses that want to compete on responsiveness. The gap between businesses that reply in seconds and businesses that reply next business day is only going to get more visible to customers who are increasingly used to instant answers everywhere else in their lives.
                    </p>

                    <hr className="my-8 border-gray-200" />
                    <p className="mb-6 text-[15px] italic text-gray-600">
                      Curious what a chatbot built specifically for your business would actually look like? <Link to="/contact#contact-form" className="text-[#188BF6] font-semibold hover:underline">Talk to SMANV</Link> — we build and train these for real businesses, not demo scripts.
                    </p>
                  </>
                ) : post.slug === "signs-your-website-losing-customers" ? (
                  <>
                    <h3 className="text-[20px] font-semibold text-black mb-4">5 Signs Your Website Is Quietly Losing You Customers</h3>
                    <p className="mb-6">
                      Most business owners find out their website has a problem the hard way — a slow month, a client mentioning they "almost didn't bother" filling out the contact form, or a gut feeling that traffic looks fine but enquiries don't match up.
                    </p>
                    <p className="mb-6">
                      The truth is, a website rarely fails loudly. It fails quietly, one abandoned visit at a time, and the data behind why is more concrete than most people expect.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">1. It Takes More Than 2–3 Seconds to Load</h3>
                    <p className="mb-6">
                      This is the single biggest, most measurable killer of website performance, and most business owners have no idea how slow their own site actually is.
                    </p>
                    <p className="mb-6">
                      The average website today loads in about 3.2 seconds. The average website that actually ranks on Google's first page loads in about 1.65 seconds — roughly half the time. That gap isn't a coincidence; page speed is a direct Google ranking factor, so a slow site is fighting an uphill battle before a visitor even arrives.
                    </p>
                    <p className="mb-6">
                      Once they do arrive, the cost compounds: a one-second delay in load time can reduce conversions by up to 20%. Sites that load in one second convert at roughly three times the rate of sites that take five seconds. If you've never actually timed your own site loading on a mobile connection, that's worth doing today — it's often the single easiest fix with the biggest payoff.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">2. It Wasn't Really Designed for Mobile — Just "Responsive"</h3>
                    <p className="mb-6">
                      There's a real difference between a site that technically resizes on a phone and one that was actually designed mobile-first. Mobile traffic makes up more than half of all website visits now, yet mobile conversion rates still lag well behind desktop on most sites — often converting at roughly half the rate.
                    </p>
                    <p className="mb-6">
                      If your site has tiny tap targets, a contact form that's painful to fill out on a phone keyboard, or images that take forever to load on mobile data, you're losing the majority of your traffic at the exact moment they're trying to become a customer.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">3. Your Contact Form Asks for Too Much</h3>
                    <p className="mb-6">
                      Every additional field on a form is a small piece of friction, and friction compounds fast. Forms with more than three fields see conversion drop noticeably compared to shorter ones — yet it's common to see business websites asking for name, email, phone, company, budget, timeline, and a message, all before someone can just say "I'm interested, call me."
                    </p>
                    <p className="mb-6">
                      Ask for the minimum you need to make the first contact. You can get the rest of the details on the actual call.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">4. There's No Clear Next Step on Any Page</h3>
                    <p className="mb-6">
                      Visit your own website as if you'd never seen it before, and check: on every page, is it completely obvious what to do next? Many small business sites bury the phone number in the footer, have a "Contact Us" link that's easy to miss, or simply describe the business without ever directly asking the visitor to do anything.
                    </p>
                    <p className="mb-6">
                      A visitor who's interested but isn't told clearly what to do next usually just... leaves. Every page should have an obvious, low-friction next step — call, WhatsApp, fill this short form — not buried three scrolls down.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">5. It Hasn't Been Touched Since It Launched</h3>
                    <p className="mb-6">
                      A website that's identical to how it looked two or three years ago signals something to both visitors and Google: nothing's happening here. No new content, no updated services, no blog, no fresh signals for search engines to re-crawl and re-rank.
                    </p>
                    <p className="mb-6">
                      This is also usually the most revealing sign of the group, because it's rarely about the website's design — it's about whether the business is treating the website as a living asset or a one-time task that got checked off the list.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">What This Actually Costs You</h3>
                    <p className="mb-6">
                      None of these five things individually feels dramatic. But they stack. A visitor arrives from a slow-loading ad click, waits three extra seconds, gets a clunky mobile experience, hits a form with too many fields, can't immediately spot how to contact you, and leaves — never to return, because your competitor's site did all five things slightly better.
                    </p>
                    <p className="mb-6">
                      That's not a design problem. That's a revenue problem, and it's one of the few genuinely fixable ones in a business — usually without a full rebuild, just targeted fixes to the specific friction points actually costing you visitors.
                    </p>

                    <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">Where to Start</h3>
                    <p className="mb-6">
                      Pick the one from this list that made you wince a little reading it. That's usually the right place to start — not the theoretical worst problem, but the one you already suspected was true.
                    </p>

                    <hr className="my-8 border-gray-200" />
                    <p className="mb-6 text-[15px] italic text-gray-600">
                      Not sure which of these is actually happening on your site? <Link to="/contact#contact-form" className="text-[#188BF6] font-semibold hover:underline">Talk to SMANV</Link> — we'll run through your site with you and show you exactly where visitors are dropping off.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-[20px] font-semibold text-black mb-4">{post.title}</h3>
                    <p className="mb-6">
                      More content for this post is coming soon.
                    </p>
                  </>
                )}
              </Reveal>

              {/* Article Footer (Share & Next) */}
              <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-8">
                <div className="flex gap-4 text-black">
                  <a href="#" className="hover:text-[#188BF6]"><Facebook className="size-[18px]" /></a>
                  <a href="#" className="hover:text-[#188BF6]"><Twitter className="size-[18px]" /></a>
                  <a href="#" className="hover:text-[#188BF6]"><Linkedin className="size-[18px]" /></a>
                  <a href="#" className="hover:text-[#188BF6]"><Link2 className="size-[18px]" /></a>
                </div>

                <Link
                  to="/blogs"
                  className="flex items-center text-[14px] font-medium text-black transition-colors hover:text-[#188BF6]"
                >
                  Next <ChevronRight className="ml-1 size-4" />
                </Link>
              </div>
            </article>

            {/* Right Column: Sidebar */}
            <aside className="w-full shrink-0 lg:w-[320px]">
              <div className="sticky top-32 rounded-[32px] bg-white p-8 shadow-sm">
                <h3 className="text-[20px] font-bold font-raleway text-[#1A2359]">Categories</h3>
                <ul className="mt-6 flex flex-col gap-4">
                  {[
                    "All",
                    "Web Development",
                    "UI / UX Design",
                    "Digital Marketing",
                    "Mobile App Development",
                    "AI & Automation",
                    "Cloud Services",
                  ].map((category, idx) => (
                    <li key={idx}>
                      <Link
                        to="/blogs"
                        className="flex items-center text-[14px] font-semibold text-gray-600 transition-colors hover:text-[#188BF6]"
                      >
                        <ChevronRight className="mr-2 size-3 text-[#188BF6]" />
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>

        {/* Recommended For You Section */}
        <section className="mx-auto mt-24 max-w-[1240px] px-6 lg:px-8">
          <h2 className="text-[28px] font-bold font-raleway tracking-tight text-[#1A2359] sm:text-[32px]">
            Recommended For You
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((recPost, idx) => (
              <article
                key={idx}
                className="group flex flex-col overflow-hidden rounded-[32px] bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-[250px] w-full overflow-hidden">
                  <img
                    src={recPost.image}
                    alt={recPost.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="relative z-10 -mt-8 flex flex-1 flex-col rounded-[32px] bg-[#F8F9FA] p-6 sm:p-7 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#EAF3FF] px-3 py-1 text-[10px] sm:text-[11px] font-bold text-[#188BF6]">
                      {recPost.category}
                    </span>
                    <span className="text-[12px] font-medium text-gray-500">
                      {recPost.date}
                    </span>
                  </div>
                  
                  <div className="mt-3 flex items-center gap-1.5 text-gray-500">
                    <Clock className="size-3.5" />
                    <span className="text-[12px] font-medium">{recPost.readTime}</span>
                  </div>

                  <h3 className="mt-3 text-[17px] sm:text-[18px] font-semibold leading-tight font-raleway text-[#1A2359]">
                    {recPost.title}
                  </h3>
                  
                  <p className="mt-3 text-[13px] sm:text-[14px] font-medium leading-relaxed font-nunito text-gray-600 line-clamp-2">
                    {recPost.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <Link
                      to={`/blogs/${recPost.slug}` as any}
                      className="relative flex w-full items-center justify-center rounded-full border border-gray-900 bg-transparent py-2.5 transition-colors hover:border-[#188BF6] group-hover:border-[#188BF6]"
                    >
                      <span className="text-[14px] font-medium font-nunito text-black">
                        Read Full Blog
                      </span>
                      <div className="absolute right-1 flex size-[34px] items-center justify-center rounded-full bg-[#031B4E]">
                        <ArrowUpRight className="size-4 text-white" strokeWidth={1.5} />
                      </div>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </SiteLayout>
  );
}
