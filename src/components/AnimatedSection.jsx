import { motion } from "framer-motion";

export default function AnimatedSection({ children, id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="scroll-mt-24"
    >
      {children}
    </motion.section>
  );
}
