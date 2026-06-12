import Banner from "@/components/Banner";
import CTASection from "@/components/CTASection";
import FeaturedCompanies from "@/components/FeaturedCompanies";
import JobCategories from "@/components/JobCategories";
import LatestJobs from "@/components/LatestJobs";
import WhyChooseHireLoop from "@/components/WhyChooseHireLoop";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedCompanies />
      <JobCategories />
      <LatestJobs />
      <WhyChooseHireLoop />
      <CTASection />
    </div>
  );
}
