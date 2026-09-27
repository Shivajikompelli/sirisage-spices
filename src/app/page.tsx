import { Hero } from "@/components/home/Hero";
import { UspBar } from "@/components/home/UspBar";
import { CategoryCircles } from "@/components/home/CategoryCircles";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HomeVideoShowcase } from "@/components/home/HomeVideoShowcase";
import { HomeAbout } from "@/components/home/HomeAbout";
import { TogetherBanner } from "@/components/home/TogetherBanner";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeCta } from "@/components/home/HomeCta";
import { HomeContact } from "@/components/home/HomeContact";
import { ScrollTargetHandler } from "@/components/shared/ScrollTargetHandler";

export default function HomePage() {
  return (
    <>
      <ScrollTargetHandler />
      <Hero />
      <UspBar />
      <CategoryCircles />
      <FeaturedProducts />
      <HomeVideoShowcase />
      <HomeAbout />
      <TogetherBanner />
      <HomeTestimonials />
      <HomeCta />
      <HomeContact />
    </>
  );
}
