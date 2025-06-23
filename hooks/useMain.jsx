import { useEffect, useState } from "react";
/**
 * Custom hook to fetch and return the main data.
 * It fetches data from the '/api/main' endpoint and returns it.
 *
 * @returns {Object|null} The main data or null if not yet fetched.
 */

export const useMain = () => {
  const [main, setMain] = useState(null);

  useEffect(() => {
    const fetchMain = async () => {
      try {
        const response = await fetch("/api/main");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMain(data);
      } catch (error) {
        console.error("Failed to fetch main:", error);
      }
    };

    fetchMain();
  }, []);

  return main;
};
