import HomeHero from "../organisms/HomeHero";

export default function HomeTemplate() {
  return (
    <main className="bg-black w-screen h-screen font-mono">
      <div className="flex  w-full">
        <HomeHero />
      </div>
    </main>
  );
}
