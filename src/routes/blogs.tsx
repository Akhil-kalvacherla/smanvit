import { Link } from "react-router-dom";
import { Clock, ArrowUpRight } from "lucide-react";
import { SiteLayout, Reveal } from "@/components/Layout";
import { BLOG_POSTS } from "@/data/blogs";

const TITLE = "Blogs | SMANV Info Tech";
const DESCRIPTION =
  "Explore expert perspectives, emerging technologies, and practical insights to navigate the ever-evolving digital landscape.";

export default BlogsPage;

function BlogsPage() {
  return (
    <SiteLayout>
      <section className="relative bg-white pt-32 pb-16 px-6 overflow-hidden">
        <Reveal className="relative mx-auto flex max-w-[1080px] flex-col items-center text-center" stagger={0.1}>
          <h1 className="text-[40px] font-bold font-raleway leading-[1.1] tracking-tight text-black sm:text-[48px] md:text-[56px] lg:text-[64px]">
            Technology, Insights & Ideas
            <br />
            That Move Business Forward
          </h1>
          <p className="mt-8 max-w-[850px] text-[16px] font-semibold font-nunito leading-[1.5] text-[#1F2937] sm:text-[18px] md:text-[20px]">
            Explore expert perspectives, emerging technologies, and practical insights to navigate
            <br className="hidden md:block" />
            the ever-evolving digital landscape.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-20">
        <h2 className="text-center text-[32px] sm:text-[40px] font-bold font-raleway tracking-tight text-black">
          Stay Ahead of What's Next
        </h2>

        <Reveal className="mt-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, idx) => (
              <article
                key={idx}
                className="group flex flex-col overflow-hidden rounded-[32px] bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-[250px] w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="relative z-10 -mt-8 flex flex-1 flex-col rounded-[32px] bg-[#F8F9FA] p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#EAF3FF] px-3 py-1 text-[10px] sm:text-[11px] font-bold text-[#188BF6]">
                      {post.category}
                    </span>
                    <span className="text-[12px] font-medium text-gray-500">
                      {post.date}
                    </span>
                  </div>
                  
                  <div className="mt-3 flex items-center gap-1.5 text-gray-500">
                    <Clock className="size-3.5" />
                    <span className="text-[12px] font-medium">{post.readTime}</span>
                  </div>

                  <h3 className="mt-3 text-[17px] sm:text-[18px] font-semibold leading-tight font-raleway text-[#1A2359]">
                    {post.title}
                  </h3>
                  
                  <p className="mt-3 text-[13px] sm:text-[14px] font-medium leading-relaxed font-nunito text-gray-600">
                    {post.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <Link
                      to={`/blogs/${post.slug}` as any}
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
        </Reveal>
      </section>
    </SiteLayout>
  );
}
