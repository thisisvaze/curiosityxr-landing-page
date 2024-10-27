import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeatureCollabs from '../partials/FeatureCollabs';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import SupportOrg from '../partials/SupportOrg';
import CTA from '../partials/cta';


function Home() {
  return (
    <div className="flex bg-primary flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative mx-auto h-0  pointer-events-none" aria-hidden="true">
        </div>

        {/*  Page sections */}
        <HeroHome />
        <FeaturesBlocks  />
        <FeaturesZigZag />
        <Testimonials />
        <CTA/>
        <SupportOrg />

      </main>
      <Footer />
      {/*  Site footer */}

    </div>
  );
}

export default Home;