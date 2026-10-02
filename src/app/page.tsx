import { Hero } from "@/components/home/Hero";
import { UspBar } from "@/components/home/UspBar";
import { CategoryCircles } from "@/components/home/CategoryCircles";
import { HomeSpiceCatalog } from "@/components/home/HomeSpiceCatalog";
import { HomeVideoShowcase } from "@/components/home/HomeVideoShowcase";
import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";
import { HomeCta } from "@/components/home/HomeCta";
import { HomeContact } from "@/components/home/HomeContact";
import { ScrollTargetHandler } from "@/components/shared/ScrollTargetHandler";
import { PageHeroBand } from "@/components/shared/PageHeroBand";

export default function HomePage() {
  return (
    <>
      <ScrollTargetHandler />
      <Hero />
      <UspBar />
      <PageHeroBand
        id="spices"
        title="Explore Our Spices"
        sub="Discover a wide range of premium spices, carefully sourced and packed to preserve their natural goodness."
        photos={["/images/spices/turmeric-powder.jpg", "/images/spices/red-chilli.jpg"]}
        compact
      />
      <CategoryCircles />
      <HomeSpiceCatalog />
      <HomeVideoShowcase />
      <HomeAbout />
      <HomeTestimonials />
      <HomeCta />
      <HomeContact />
    </>
  );
}
