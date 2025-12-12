import { motion } from 'framer-motion';
import ServicesSection from '../sections/Services';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

export default function ServicesPage() {
  return (
    <motion.div {...pageTransition}>
      <ServicesSection />
    </motion.div>
  );
}
