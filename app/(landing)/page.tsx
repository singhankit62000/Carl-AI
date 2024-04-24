import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import LandingNavbar from "@/components/landing-navbar";

export default function LandingPage() {
  return (
    <div className="h-full -ms-overflow-style-none scrollbar-width-none">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}
