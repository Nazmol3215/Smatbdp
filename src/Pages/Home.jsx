import React from "react";
// import PropertyList from "../Property/PropertyList";
// import PropertySlider from "../Property/PropertySlider";
import OffcanvasExample from "../Layout/OffcanvasExample";
import Footer from "../Layout/Footer";
// import Neighborhoods1 from "../FirstPages/Neighborhoods1";
// import ScrollingText from "../FirstPages/ScrollingText";
// import One from "../TrendingAndRecommended/One";
// import ProductCard from "../FirstPages/ProductCard";
import ServiceGrid from "../BhalukaAbout/ServiceGrid";


export default function Home() {
  return (
    <div>
      <OffcanvasExample />
      {/* <ScrollingText /> */}


      <ServiceGrid />

      {/* <PropertySlider /> */}
      {/* <Neighborhoods1/> */}
      {/* <One /> */}
      {/* <ProductCard /> */}
      {/* <PropertyList /> */}
      <Footer />
    </div>
  );
}

