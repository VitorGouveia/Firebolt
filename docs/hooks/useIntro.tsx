import { useEffect } from "react";

const useIntro = () => {
  const storage = typeof window !== "undefined" && localStorage;
  const currTimestamp = Date.now();
  const timestamp = JSON.parse(
    (typeof window !== "undefined" && storage.getItem("timestamp")) || "1000"
  );

  const timeLimit = 3 * 60 * 60 * 1000; // 3 hours

  const hasTimePassed = currTimestamp - timestamp > timeLimit;

  useEffect(() => {
    if (typeof window !== "undefined") {
      hasTimePassed
        ? storage.setItem("timestamp", currTimestamp.toString())
        : storage.setItem("timestamp", timestamp.toString());
    }
  }, []);

  return hasTimePassed;
};

export default useIntro;
