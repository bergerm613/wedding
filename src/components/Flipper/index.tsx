import { motion } from "framer-motion";
import * as React from "react";

import "./styles.css";

type FlipperProps = {
  subtitle: string;
  amount: number;
};

export const Flipper = ({ amount, subtitle }: FlipperProps) => {
  return (
    <div className="flipper-block">
      <h3>{subtitle}</h3>

      <div className="amount-box top">{amount}</div>
      <div className="amount-box bottom">{amount}</div>

      <motion.div
        className="amount-box bottom flip"
        key={amount}
        initial={{ y: -125 }}
        animate={{
          rotateX: 180,
          y: -240,
          background: "#562c2c",
          opacity: [100, 100, 0],
        }}
        transition={{ duration: 0.05, default: { ease: "easeIn" } }}
      >
        {amount}
      </motion.div>
    </div>
  );
};
