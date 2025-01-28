"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollAnimationProps {
  children: React.ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Anima apenas na primeira vez que entra na tela
    threshold: 0.2, // 20% do elemento visível para ativar
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Ponto inicial
      animate={inView ? { opacity: 1, y: 0 } : {}} // Animação ao entrar
      transition={{ duration: 0.6, ease: "easeInOut" }} // Configuração da animação
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
