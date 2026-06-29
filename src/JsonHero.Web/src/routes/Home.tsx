import { HomeFeatureGridSection } from "~/components/Home/HomeFeatureGridSection";
import { HomeFooter } from "~/components/Home/HomeFooter";
import { HomeHeader } from "~/components/Home/HomeHeader";
import { HomeHeroSection } from "~/components/Home/HomeHeroSection";
import { HomeInfoBoxSection } from "~/components/Home/HomeInfoBoxSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <HomeHeader fixed={true} />
      <HomeHeroSection />
      <HomeInfoBoxSection />
      <HomeFeatureGridSection />
      <HomeFooter />
    </div>
  );
}
