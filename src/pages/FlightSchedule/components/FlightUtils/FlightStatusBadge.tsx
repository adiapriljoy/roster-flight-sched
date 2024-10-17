import { Badge } from "@chakra-ui/react";

const FlightStatusBadge = ({ status }: any) => {
  const flightStatus = status.toLowerCase();
  const colorScheme = () => {
    switch (flightStatus) {
      case "assigned":
        return "green";
      case "to be assigned":
        return "gray";
      case "in progress":
        return "blue";
      case "completed":
        return "yellow";
      case "delayed":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <Badge
      variant="outline"
      colorScheme={colorScheme()}
      padding={1}
      w="fit-content"
    >
      {flightStatus}
    </Badge>
  );
};

export default FlightStatusBadge;
