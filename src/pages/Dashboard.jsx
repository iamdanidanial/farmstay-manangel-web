import React from "react";
import {
  hero,
  memory,
  placesAPI,
  brands,
  pricingapi,
  bannerAPI,
} from "../data/travigodata";
import Hero from "../components/Hero";
import Memory from "../components/Memory";
import Explore from "../components/Explore";
import Pricings from "../components/Pricings";
import Advertise from "../components/Advertise";
import Newslatter from "../components/Newslatter";
import Banner from "../components/Banner";

export const Dashboard = () => {
  return (
    <>
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title="Explore The Beauty of Cianjur" placesAPI={placesAPI} />
      <Pricings pricingapi={pricingapi} />
      <Advertise brands={brands} />
      <Banner bannerAPI={bannerAPI} />
      <Newslatter />
    </>
  );
};
