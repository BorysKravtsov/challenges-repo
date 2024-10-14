import { volumes } from "@/lib/data";
import Volume from "./components/Volume";
export default function theFellowshipOfTheRing() {
  const volumeData = volumes.find(
    (volume) => volume.slug === "the-fellowship-of-the-ring"
  );
  return <Volume volumeData={volumeData} />;
}
