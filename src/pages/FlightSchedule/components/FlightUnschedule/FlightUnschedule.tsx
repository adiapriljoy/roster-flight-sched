import { Box, Text, VStack, Tooltip } from "@chakra-ui/react";
import { FlightScheduleItem } from "../../../../models/interface";
import { useDrag } from "react-dnd";
import FlightTooltipContent from "../FlightUtils/FlightToolTipContent";

const ITEM_TYPE = "SCHEDULE_ITEM";

const UnscheduledFlight: React.FC<{
  schedule: FlightScheduleItem;
  onDrop: (flight: FlightScheduleItem) => void;
}> = ({ schedule, onDrop }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: ITEM_TYPE,
    item: { schedule },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Tooltip
      label={
        <FlightTooltipContent
          schedule={schedule}
          flightDeckCrewCount={0}
          cabinCrewCount={0}
        />
      }
      fontSize="sm"
      hasArrow
      placement="left"
      bg="primaryDark"
      borderRadius={8}
    >
      <Box
        ref={dragRef}
        p={2}
        mb={2}
        bg="gray.200"
        borderRadius="lg"
        opacity={isDragging ? 0.5 : 1}
        cursor="grab"
      >
        <VStack alignItems="left" gap={0}>
          <Text variant="schedTitle">
            {schedule.origin} → {schedule.destination}
          </Text>
        </VStack>
      </Box>
    </Tooltip>
  );
};

export default UnscheduledFlight;
