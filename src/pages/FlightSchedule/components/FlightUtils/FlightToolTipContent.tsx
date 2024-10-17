import { VStack, Text } from "@chakra-ui/react";
import { FlightScheduleItem } from "../../../../models/interface";
import { convertTo12HourFormat } from "../../../../utils/formatDate";
import FlightStatusBadge from "./FlightStatusBadge";
import { classifyCrewMembers } from "../../../../utils/flightRoster";

const FlightTooltipContent: React.FC<{
  schedule: FlightScheduleItem;
  flightDeckCrewCount: number;
  cabinCrewCount: number;
}> = ({ schedule }) => {
  const { flightDeckCrew, cabinCrew } = classifyCrewMembers(schedule);
  return (
    <VStack alignItems="left" spacing={1} p={2}>
      <Text fontWeight="bold" color="background">
        {schedule.origin} → {schedule.destination}
      </Text>
      <Text color="background">
        Departure: {convertTo12HourFormat(schedule.startTime)}
      </Text>
      <Text color="background">
        Estimated Arrival: {convertTo12HourFormat(schedule.endTime)}
      </Text>
      <FlightStatusBadge status={schedule.flightStatus} />
      <Text color="background">Flight Deck Crew: {flightDeckCrew}</Text>
      <Text color="background">Cabin Crew: {cabinCrew}</Text>
    </VStack>
  );
};

export default FlightTooltipContent;
