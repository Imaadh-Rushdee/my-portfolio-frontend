import { motion } from "framer-motion";

export default function AnimatedSection({ children }) {
  return (
    <motion.section
  initial={{ opacity: 1, y: 30, scale: 0.98 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.2 }}
  className="scroll-mt-24 bg-gray-900 dark:bg-gray-900"
>
  {children}
</motion.section>


  );
}
