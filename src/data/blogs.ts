export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "5-signs-your-website-is-quietly-losing-you-customers",
    category: "Web Development",
    date: "May 11, 2026",
    readTime: "5 min read",
    title: "5 Signs Your Website Is Quietly Losing You Customers",
    description:
      "Your website might be costing you customers right now without you knowing it. Here are 5 real warning signs, backed by data, and what to do about each one.",
    image: "/assets/image 105.png",
  },
  {
    slug: "ai-chatbots-for-small-business",
    category: "AI & Automation",
    date: "Mar 16, 2026",
    readTime: "8 min read",
    title: "AI Chatbots for Small Business: Why 2026 Is the Tipping Point",
    description:
      "AI chatbots aren't just for big enterprises anymore. Here's what's actually changing in 2026, what a chatbot can realistically do for a sm...",
    image: "/assets/image 106.png",
  },
  {
    slug: "5-ways-business-automation-saves-small-businesses",
    category: "AI & Automation",
    date: "Feb 13, 2026",
    readTime: "5 min read",
    title: "5 Ways Business Automation Saves Small Businesses Hours Every Week",
    description:
      "You don't need a tech team to automate your business. Here are 5 practical automations small businesses in India are using right n...",
    image: "/assets/image 107.png",
  },
  {
    slug: "how-long-does-seo-actually-take",
    category: "SEO & Local Search",
    date: "Jan 20, 2026",
    readTime: "5 min read",
    title: "How Long Does SEO Actually Take to Show Results? An Honest Timeline",
    description:
      "No agency wants to tell you the truth about SEO timelines. Here's an honest, realistic breakdown of when SEO actually starts working and wh...",
    image: "/assets/image 108.png",
  },
  {
    slug: "how-much-should-a-business-website-cost",
    category: "Web Development",
    date: "Jan 8, 2026",
    readTime: "7 min read",
    title: "How Much Should a Business Website Cost in India in 2026?",
    description:
      "Real pricing, not vague \"contact us for a quote.\" Here's what a business website actually costs in India in 2026, broken down by what you act...",
    image: "/assets/image 109.png",
  },
  {
    slug: "strategic-workforce-expansion",
    category: "Case Study",
    date: "Feb 13, 2026",
    readTime: "5 min read",
    title: "Strategic Workforce Expansion With Human-Centered EOR",
    description:
      "Rapid scales cybersecurity talent globally while simplifying transitions and compliance with Pebl's expert partnership...",
    image: "/assets/image 110.png",
  },
];
