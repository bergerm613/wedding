import * as React from "react";

import "./styles.css";

type FlipperProps = {
  subtitle: string;
  amount: number;
};

export const Flipper = ({ amount, subtitle }: FlipperProps) => {
  return (
    <div className="flipper-block">
      <div className="amount-box">
        <h2>{amount}</h2>
      </div>
      <h3>{subtitle}</h3>
    </div>
  );
};
