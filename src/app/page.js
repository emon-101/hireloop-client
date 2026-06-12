import Banner from "@/components/Banner";
import CTASection from "@/components/CTASection";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import JobCategories from "@/components/JobCategories";
import LatestJobs from "@/components/LatestJobs";
import PricingSection from "@/components/PricingSection";
import WhyChooseHireLoop from "@/components/WhyChooseHireLoop";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedCompanies />
      <JobCategories />
      <LatestJobs />
      <WhyChooseHireLoop />
      <PricingSection />
      <CTASection />
    </div>
  );
}
