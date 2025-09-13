import CaseStudiesCarousel from '@/components/CaseStudies/page';
import Hero from '@/components/hero/page';
import PricingSection from '@/components/PricingSection/page';
import ProcessSection from '@/components/ProcessSection/page';
import TrustUs from '@/components/Trust Us/page';
import React from 'react';

const page = () => {
  return (
    <div>
      <Hero />
      <TrustUs />
      <CaseStudiesCarousel />
      <PricingSection />
      <ProcessSection />
    </div>
  );
};

export default page;