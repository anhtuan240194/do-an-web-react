import Slider from "../component/Slider"
import ModuleCollection from "../component/ModuleCollection";
import FlashSale from "../component/ModuleFlashSale/FlashSale";
import BannerIndex from "../component/BannerIndex";
import ProductTab from "../component/ProductTab";
import ModuleBlog from "../component/ModuleBlog";

import '../css/index.css'

export default function Home() {
  return (
    <>
      <Slider />
      <ModuleCollection />
      <FlashSale />
      <BannerIndex />
      <ProductTab />
      <ModuleBlog />
    </>
  );
}
