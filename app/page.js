'use client'

import HeroBanner from "../components/HeroBanner";
import FooterBanner from "../components/FooterBanner";
import { client } from "@/lib/client";
import { useEffect, useState } from "react";
import Product from "@/components/Product";

const Home = () => {

  const [ products, setProducts ] = useState(null);
  const [ bannerData, setBannerData ] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      let query = '*[_type == "product"]';
      let data1 = await client.fetch(query);

      let bannerQuery = '*[_type == "banner"]';
      let data2 = await client.fetch(bannerQuery);

      setProducts(data1);
      setBannerData(data2);
    }
    fetchProducts()
  }, [])
  
  return (
    <>
      <HeroBanner herobanner={bannerData?.length > 0 && bannerData[0]} />
      {/* {console.log(bannerData)}
      {console.log(products)} */}

      <div className="products-heading">
        <h2>
          Best Selling Products
        </h2>
        <p>
          Gaming products of different variations
        </p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <div key={product?._id}>
            <Product key={product._id} product={product} />
          </div>
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export default Home;