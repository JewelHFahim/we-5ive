import FeatureProducts from "@/components/FeatureProducts";
import Hero from "@/components/Hero";
import MenCollection from "@/components/MenCollection";
import NewOffer from "@/components/NewOffer";
import Option from "@/components/Option";
import SummerCollectionMobile from "@/components/SummerCollectionMobile";
import SummerCollections from "@/components/SummerColllections";
import WomenCollection from "@/components/WomenCollection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Option />
      <div className="px-4 md:px-10 lg:px-0 lg:w-[1280px] mx-auto">
        <FeatureProducts />
        <NewOffer />
        <MenCollection />
        <WomenCollection />
        <SummerCollections /> {/* Lare Device Summer Collection Slider*/}
        <SummerCollectionMobile /> {/* Small Device Summer Collection Slider*/}
      </div>
    </main>
  );
}
