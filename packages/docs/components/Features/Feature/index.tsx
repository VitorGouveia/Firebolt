import { memo, ReactNode } from "react";

import styles from "./style.module.css";

type FeatureProps = {
  text: string;
  icon: ReactNode;
};

const Feature: React.FC<FeatureProps> = ({ icon, text }) => {
  return (
    <div className={styles.feature}>
      {icon}
      <h4>{text}</h4>
    </div>
  );
};

export default memo(Feature);
