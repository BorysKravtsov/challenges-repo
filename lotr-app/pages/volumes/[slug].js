import { volumes } from "@/lib/data";
import Volume from "../../components/Volume";
import { useRouter } from "next/router";
export default function volumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  if (!slug) return <p>Loading...</p>;
  const volumeData = volumes.find((volume) => volume.slug === slug);
  return <Volume volumeData={volumeData} />;
}
