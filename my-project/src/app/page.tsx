import SectionHero from "./components/SectionHero";
import SectionCard from "./components/SectionCard";
import SectionApp from "./components/SectionApp";
import SectionAdvantages from "./components/SectionAdvantages";
import SectionReviews from "./components/SectionReviews";
import SectionDownload from "./components/SectionDownload";
import SectionFAQ from "./components/SectionFAQ";

export default function Home() {
  return (
    <main className="w-full">
      <SectionHero />
      <SectionCard />
      <SectionApp />
      <SectionAdvantages />
      <SectionReviews />
      <SectionDownload />
      <SectionFAQ />
    </main>
  );
}