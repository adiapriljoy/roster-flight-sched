import { Box, Text, VStack } from "@chakra-ui/react";
import { styleAsFlightBoxAircraft } from "../../styles";

const FlightAirCraft = (props: any) => {
  const aircraft = props.aircraft;
  return (
    <Box sx={styleAsFlightBoxAircraft}>
      <VStack alignItems="left">
        <Text variant="title">{aircraft.tailNumber}</Text>
        <Text variant="subtitle">
          {aircraft.aircraftType} | {aircraft.totalFlightHours} hours
        </Text>
      </VStack>
    </Box>
  );
};

export default FlightAirCraft;
