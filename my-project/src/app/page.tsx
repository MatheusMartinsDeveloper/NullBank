import SectionHero from "./components/SectionHero";
import SectionCard from "./components/SectionCard";
import SectionApp from "./components/SectionApp";

export default function Home() {
  return (
    <main className="w-full">
      <SectionHero />
      <SectionCard />
      <SectionApp />
    </main>
  );
}