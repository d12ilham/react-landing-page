import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Brand from "./Components/Brands/Brand";
import Services from "./Components/Services/Services";
import Artoboard from "./Components/Artboard/Artboard";
import Device from "./Components/Device/Device";
import Started from "./Components/Started/Started";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brand />
      <Services />
      <Artoboard />
      <Device />
      <Started />
    </div>
  );
};

export default App;
