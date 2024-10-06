import SectionHero from "./components/SectionHero";
import SectionCard from "./components/SectionCard";
import SectionApp from "./components/SectionApp";
import SectionAdvantages from "./components/SectionAdvantages";
import SectionReviews from "./components/SectionReviews";
import SectionDownload from "./components/SectionDownload";

export default function Home() {
  return (
    <main className="w-full">
      <SectionHero />
      <SectionCard />
      <SectionApp />
      <SectionAdvantages />
      <SectionReviews />
      <SectionDownload />
    </main>
  );
}