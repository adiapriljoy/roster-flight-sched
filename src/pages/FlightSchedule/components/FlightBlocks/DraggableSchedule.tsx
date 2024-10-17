import { Box, Text, VStack, Tooltip } from "@chakra-ui/react";
import { FlightScheduleItem } from "../../../../models/interface";
import { timeToPosition } from "../../../../utils/flightRoster";
import { useDrag } from "react-dnd";
import { useScheduleDrop } from "../../../../hooks/useScheduleDrop";
import useStatusColor from "../../../../hooks/useBlockStatusColor";
import { useCrewCount } from "../../../../hooks/useCrewCount";
import FlightTooltipContent from "../FlightUtils/FlightToolTipContent";

const ITEM_TYPE = "SCHEDULE_ITEM";

const DraggableSchedule: React.FC<{
  schedule: FlightScheduleItem;
  onDrop: (schedule: FlightScheduleItem, newStartTime: string) => void;
}> = ({ schedule, onDrop }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: ITEM_TYPE,
    item: { schedule },
    collect: (monitor: { isDragging: () => any }) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const { canDrop, isOver } = useScheduleDrop({ schedule, onDrop });
  const statusColor = useStatusColor(schedule.flightStatus);
  const { flightDeckCrewCount, cabinCrewCount } = useCrewCount(schedule.crew);

  return (
    <Tooltip
      label={
        <FlightTooltipContent
          schedule={schedule}
          flightDeckCrewCount={flightDeckCrewCount}
          cabinCrewCount={cabinCrewCount}
        />
      }
      fontSize="sm"
      hasArrow
      placement="left"
      bg="primaryDark"
      borderRadius={8}
    >
      <Box
        ref={(el) => {
          dragRef(el);
        }}
        position="absolute"
        top={0}
        h="auto"
        left={`${timeToPosition(schedule.startTime)}%`}
        width={`${
          timeToPosition(schedule.endTime) - timeToPosition(schedule.startTime)
        }%`}
        bg={statusColor}
        color="background"
        boxShadow="lg"
        p={2}
        borderRadius="lg"
        opacity={isDragging ? 0.5 : isOver ? 0.8 : 1}
        cursor={canDrop ? "move" : "grab"}
      >
        <VStack alignItems="left" gap={0}>
          <Text variant="schedTitle">
            {schedule.origin}-{schedule.destination}
          </Text>
          <Text letterSpacing="tighter">
            {flightDeckCrewCount} FDC | {cabinCrewCount} Cabin
          </Text>
        </VStack>
      </Box>
    </Tooltip>
  );
};

export default DraggableSchedule;
