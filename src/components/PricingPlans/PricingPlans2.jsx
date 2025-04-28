import React from 'react';
import PricingCard from './PricingCard';
import './PricingPlans.css';

const PricingPlans = () => {
  return (
    <div className="pricing-plans">
      <PricingCard
        title="April Promo"
        price="35"
        period="week"
        features={[
          "Curated jobs from 1M+ listings, refreshed every 48 hours",
          "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
          "Need more? Add extra apps for just $15 each",
          "Your own dedicated application analyst",
          "Personalized with up to 10 filters & 5 job titles"
        ]}
        buttonText="Get Started"
      />

      <PricingCard
        title="Starter"
        price="50"
        period="week"
        features={[
          "All the perks of the Promo Plan, plus:",
          "Resume review & story-focused feedback",
          "Dedicated search specialist",
          "Up to 50 job apps/week",
          "Extra apps at $15 each",
          "Analyst support within 6 hours (SLA/PST hours)"
        ]}
        buttonText="Get Started"
        badge="Popular"
      />
    </div>
  );
};

export default PricingPlans;
