import { AnimatePresence, motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import FeatureGrid from './components/FeatureGrid';
import StatsSection from './components/StatsSection';
import SecuritySection from './components/SecuritySection';
import Footer from './components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.main
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="min-h-screen"
        >
          <HeroSection />
          <TrustSection />
          <FeatureGrid />
          <StatsSection />
          <SecuritySection />
          <Footer />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default App;
