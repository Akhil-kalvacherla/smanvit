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
                <h3 className="text-[18px] font-semibold text-black mb-4">5 Signs Your Website Is Quietly Losing You Customers</h3>
                <p className="mb-6">
                  Most business owners find out their website has a problem the hard way: a slow month, a client mentioning they "almost didn't bother" filling out the contact form, or a gut feeling that traffic looks fine but enquiries don't match up.
                </p>
                <p className="mb-6">
                  The truth is, a website rarely fails loudly. It fails quietly, one abandoned visit at a time, and the data behind why is more concrete than most people expect.
                </p>

                <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">1. It Takes More Than 2 - 3 Seconds to Load</h3>
                <p className="mb-6">
                  This is the single biggest, most measurable killer of website performance, and most business owners have no idea how slow their own site actually is.
                </p>
                <p className="mb-6">
                  The average website today loads in about 3.2 seconds. The average website that actually ranks on Google's first page loads in about 1.65 seconds, roughly half the time. That gap isn't a coincidence; page speed is a direct Google ranking factor, so a slow site is fighting an uphill battle before a visitor even arrives.
                </p>
                <p className="mb-6">
                  Once they do arrive, the cost compounds: a one-second delay in load time can reduce conversions by up to 20%. Sites that load in one second convert at roughly three times the rate of sites that take five seconds. If you've never actually timed your own site loading on a mobile connection, that's worth doing today, it's often the single easiest fix with the biggest payoff.
                </p>

                <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">2. It Wasn't Really Designed for Mobile. Just "Responsive"</h3>
                <p className="mb-6">
                  There's a real difference between a site that technically resizes on a phone and one that was actually designed mobile-first. Mobile traffic makes up more than half of all website visits now, yet mobile conversion rates still lag well behind desktop on most sites, often converting at roughly half the rate.
                </p>
                <p className="mb-6">
                  If your site has tiny tap targets, a contact form that's painful to fill out on a phone keyboard, or images that take forever to load on mobile data, you're losing the majority of your traffic at the exact moment they're trying to become a customer.
                </p>

                <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">3. Your Contact Form Asks for Too Much</h3>
                <p className="mb-6">
                  Every additional field on a form is a small piece of friction, and friction compounds fast. Forms with more than three fields see conversion drop noticeably compared to shorter ones, yet it's common to see business websites asking for name, email, phone, company, budget, timeline, and a message, all before someone can just say "I'm interested, call me."
                </p>
                <p className="mb-6">
                  Ask for the minimum you need to make the first contact. You can get the rest of the details on the actual call.
                </p>

                <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">4. There's No Clear Next Step on Any Page</h3>
                <p className="mb-6">
                  Visit your own website as if you'd never seen it before, and check: on every page, is it completely obvious what to do next? Many small business sites bury the phone number in the footer, have a "Contact Us" link that's easy to miss, or simply describe the business without ever directly asking the visitor to do anything.
                </p>
                <p className="mb-6">
                  A visitor who's interested but isn't told clearly what to do next usually just... leaves. Every page should have an obvious, low-friction next step, call, WhatsApp, fill this short form, not buried three scrolls down.
                </p>

                <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">5. It Hasn't Been Touched Since It Launched</h3>
                <p className="mb-6">
                  A website that's identical to how it looked two or three years ago signals something to both visitors and Google: nothing's happening here. No new content, no updated services, no blog, no fresh signals for search engines to re-crawl and re-rank.
                </p>
                <p className="mb-6">
                  This is also usually the most revealing sign of the group, because it's rarely about the website's design, it's about whether the business is treating the website as a living asset or a one-time task that got checked off the list.
                </p>

                <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">What This Actually Costs You</h3>
                <p className="mb-6">
                  None of these five things individually feels dramatic. But they stack. A visitor arrives from a slow-loading ad click, waits three extra seconds, gets a clunky mobile experience, hits a form with too many fields, can't immediately spot how to contact you, and leaves, never to return, because your competitor's site did all five things slightly better.
                </p>
                <p className="mb-6">
                  That's not a design problem. That's a revenue problem, and it's one of the few genuinely fixable ones in a business, usually without a full rebuild, just targeted fixes to the specific friction points actually costing you visitors.
                </p>
                
                <h3 className="text-[16px] font-semibold text-black mb-4 mt-8">Where to Start?</h3>
                <p className="mb-6">
                  Pick the one from this list that made you wince a little reading it. That's usually the right place to start, not the theoretical worst problem, but the one you already suspected was true.
                </p>
                <p className="mb-6">
                  Not sure which of these is actually happening on your site? [Talk to SMANV], we'll run through your site with you and show you exactly where visitors are dropping off.
                </p>
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
