import { useState, useEffect } from "react";

import Slider from "../component/Slider"
import ModuleCollection from "../component/ModuleCollection";
import FlashSale from "../component/ModuleFlashSale/FlashSale";
import BannerIndex from "../component/BannerIndex";
import ProductTab from "../component/ModuleProductTab";
import ModuleBlog from "../component/ModuleBlog";

import '../css/index.css'

export default function Home() {
  const [products, setProducts] = useState([])
  const [blogs, setBlogs] = useState([])

  useEffect(()=> {
    const getDataProducts = async() => {
      const rest = await fetch ("https://json-sever-do-an-web-react.onrender.com/api/products/")
      const data = await rest.json()
      setProducts(data)
    }
    getDataProducts();
  }, []);

  useEffect((()=> {
    const getDataBlogs = async () => {
      const rest =await fetch ("https://json-sever-do-an-web-react.onrender.com/api/posts/")
      const data = await rest.json()
      setBlogs(data)
    };
    getDataBlogs()
  }))

  return (
    <>
      <Slider />
      <ModuleCollection />
      <FlashSale products={products}/>
      <BannerIndex />
      <ProductTab products={products}/>
      <ModuleBlog blogs={blogs}/>
    </>
  );
}
