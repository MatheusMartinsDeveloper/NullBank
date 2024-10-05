import SectionHero from "./components/SectionHero";
import SectionAdvantages from "./components/SectionAdvantages";

export default function Home() {
  return (
    <main className="w-full">
      <SectionHero />
      <SectionAdvantages />
    </main>
  );
}