import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection';
import AboutUs from './components/AboutUs/AboutUs';
import Testimonials from './components/Testimonials/Testimonials';
import WhyChooseUs from './components/WhyChoose/WhyChooseUs';
import ServicePlans from './components/ServicePlans/ServicePlans';
import PricingPlans from './components/PricingPlans/PricingPlans';
import AdvancePlanCard from './components/AdvancePlanCard/AdvancePlanCard';
import ContactButton from './components/AdvancePlanCard/ContactButton';
import PricingPlans2 from './components/PricingPlans/PricingPlans2';
import ResumeBuildingSection from './components/ResumeBuildingSection/ResumeBuildingSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <AboutUs></AboutUs>
      <Testimonials></Testimonials>
      <WhyChooseUs></WhyChooseUs>
      <ServicePlans></ServicePlans>
      <PricingPlans></PricingPlans>
      <AdvancePlanCard 
        title="Pro Plan"
        price="$299/mo"
        features={[
          "Unlimited access to all features",
          "Priority customer support",
          "Free updates forever",
          "Advanced analytics dashboard",
        ]}
        buttonText="Upgrade Now"
      />
      <ResumeBuildingSection></ResumeBuildingSection>
      <PricingPlans2></PricingPlans2>
      <ContactButton></ContactButton>
      <Footer></Footer>
    </div>
  );
}

export default App;
