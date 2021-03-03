import React from 'react';
import HeroFull from '../components/sections/HeroFull';
import Clients from '../components/sections/Clients';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroFull invertColor className="illustration-section-01" />
        <Clients topDivider bottomDivider />
        <FeaturesTiles />
        <FeaturesSplit invertMobile imageFill topDivider />
        <Pricing topDivider pricingSlider />
        <Cta hasBgColor invertColor split />
      </React.Fragment>
    );
  }
}

export default Home;