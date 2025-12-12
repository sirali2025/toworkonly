import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import Integrations from '../components/Integrations';
import About from '../sections/About';
import Agentic from '../sections/Agentic';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

export default function HomePage() {
  return (
    <motion.div {...pageTransition}>
      <Hero />
      <About />
      <Agentic />
      <Integrations />
    </motion.div>
  );
}
