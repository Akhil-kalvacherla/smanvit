import { SiteLayout } from "../components/Layout";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <SiteLayout hideCtaBand hideFooter hideSocials>
      <div className="flex min-h-[calc(100vh-100px)] flex-col items-center justify-center px-6 py-12 text-center bg-white">
        <img
          src="/assets/404 img.png"
          alt="404 Page Not Found Illustration"
          className="w-full max-w-[600px] object-contain mb-10"
        />
        <h1 className="text-[32px] sm:text-[40px] font-bold font-raleway text-black">
          Opps! Page Not Found
        </h1>
        <p className="mt-4 max-w-lg text-[16px] sm:text-[18px] font-medium font-nunito text-black/80">
          Sorry, we couldn't find the page you requested. It may have been moved or deleted.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-full bg-[#188BF6] px-8 py-3 text-[15px] sm:text-[16px] font-semibold font-nunito text-white shadow-sm hover:bg-[#0076E5] transition-all"
        >
          Go to Homepage
        </Link>
      </div>
    </SiteLayout>
  );
}
