import * as React from "react";

import "./styles.css";

type FlipperProps = {
  subtitle: string;
  amount: number;
};

export const Flipper = ({ amount, subtitle }: FlipperProps) => {
  return (
    <div className="flipper-block">
      <div className="amount-box top">{amount}</div>
      <div className="amount-box bottom">{amount}</div>
      <h3>{subtitle}</h3>
    </div>
  );
};
