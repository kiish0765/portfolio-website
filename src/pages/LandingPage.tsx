import HeroSection from '../components/LandingPageComponents/HeroSection';
import FeaturesSection from '../components/LandingPageComponents/FeaturesSection';
import StatsSection from '../components/LandingPageComponents/StatsSection';
import FAQsSection from '../components/LandingPageComponents/FAQsSection';
import AboutSection from '../components/LandingPageComponents/AboutSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <FAQsSection />
      <AboutSection />
    </div>
  );
};

export default LandingPage;