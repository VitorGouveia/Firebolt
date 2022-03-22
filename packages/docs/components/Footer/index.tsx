import { memo, useCallback, useEffect, useState } from "react";

import styles from "./style.module.css";

const Footer: React.FC = () => {
  const [isUsingRGB, setIsUsingRGB] = useState(false);

  const handleToggleRGB = useCallback(() => {
    setIsUsingRGB((state) => {
      if (state) {
        document.querySelector("html").setAttribute("data-theme", "");
      } else {
        document.querySelector("html").setAttribute("data-theme", "rgb");
      }

      return !state;
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (document.querySelector("html").getAttribute("data-theme")) {
      setIsUsingRGB(true);
    }
  }, []);

  return (
    <div className="w-full flex justify-between items-center">
      <div>
        Made with love by{" "}
        <a href="https://github.com/vitorGouveia">Vitor Gouveia</a> ❤️
      </div>

      <button
        onClick={handleToggleRGB}
        className={`
          ${styles.button}
          px-3 py-2
          leading-tight rounded-lg appearance-none  

          text-gray-500 bg-gray-300 bg-opacity-40
          hover:bg-opacity-90
          
          dark:text-gray-100 dark:bg-gray-800 dark:bg-opacity-40
          dark:hover:bg-opacity-80

          transition-colors
          `}
      >
        {isUsingRGB ? "Disable RGB" : "Click for a surprise"}
      </button>
    </div>
  );
};

export default memo(Footer);
