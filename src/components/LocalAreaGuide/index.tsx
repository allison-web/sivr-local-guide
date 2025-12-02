import HeroSection from './HeroSection';
import WelcomeSection from './WelcomeSection';
import AttractionsGrid from './AttractionsGrid';
import QuickTips from './QuickTips';
import CallToAction from './CallToAction';

const LocalAreaGuide = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WelcomeSection />
      <AttractionsGrid />
      <QuickTips />
      <CallToAction />
    </main>
  );
};

export default LocalAreaGuide;
