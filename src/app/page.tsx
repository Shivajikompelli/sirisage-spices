import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { StoryBanner } from "@/components/home/StoryBanner";

// Content stack per slide 05 (Home Page):
// 1. Hero promise  2. Trust strip  3. Featured categories  4. Story banner  5. Footer CTA
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedCategories />
      <StoryBanner />
    </>
  );
}
