import React from "react";
import { Box } from "@chakra-ui/react";
import { FlightScheduleItem } from "../../../../models/interface";
import FlightUnschedule from "./FlightUnschedule";

const FlightUnschedulePanel: React.FC<{
  unscheduledFlights: FlightScheduleItem[];
  onDrop: (flight: FlightScheduleItem) => void;
}> = ({ unscheduledFlights, onDrop }) => {
  return (
    <Box>
      {unscheduledFlights.map((flight) => (
        <FlightUnschedule key={flight.rosterId} schedule={flight} onDrop={onDrop} />
      ))}
    </Box>
  );
};

export default FlightUnschedulePanel;
