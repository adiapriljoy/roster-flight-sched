import { useMemo } from "react";

const useStatusColor = (flightStatus: string) => {
  const statusColor = useMemo(() => {
    switch (flightStatus?.toLowerCase()) {
      case "assigned":
        return "linear-gradient(45deg, #81C784, #A5D6A7)";
      case "to be assigned":
        return "linear-gradient(45deg, #B0BEC5, #CFD8DC)";
      case "in progress":
        return "linear-gradient(45deg, #64B5F6, #90CAF9)";
      case "completed":
        return "linear-gradient(45deg, #FFF176, #FFF59D)";
      case "delayed":
        return "linear-gradient(45deg, #E57373, #EF9A9A)";
      default:
        return "linear-gradient(45deg, #64B5F6, #90CAF9)";
    }
  }, [flightStatus]);

  return statusColor;
};

export default useStatusColor;
