import { useState } from "react";

const useAnalytics = () => {
  const [noOfUsers] = useState<number>(25478); // Example static data, replace with actual logic
  return { noOfUsers };
};

export default useAnalytics;
