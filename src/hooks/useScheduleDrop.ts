import { useDrop } from "react-dnd";
import { FlightScheduleItem } from "../models/interface";
import { positionToTime, timeToPosition } from "../utils/flightRoster";

const ITEM_TYPE = "SCHEDULE_ITEM";
const MIN_TIME = "00:00";
const MAX_TIME = "23:59";

interface UseScheduleDropProps {
  schedule: FlightScheduleItem;
  onDrop: (schedule: FlightScheduleItem, newStartTime: string) => void;
}

export const useScheduleDrop = ({ schedule, onDrop }: UseScheduleDropProps) => {
  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: ITEM_TYPE,
    drop: (_item, monitor) => {
      const deltaX = monitor.getDifferenceFromInitialOffset()?.x || 0;
      const percentageMoved =
        (deltaX / document.documentElement.clientWidth) * 100;

      const newStartTime = positionToTime(
        timeToPosition(schedule.startTime) + percentageMoved
      );
      const newEndTime = positionToTime(
        timeToPosition(schedule.endTime) + percentageMoved
      );

      if (newStartTime < MIN_TIME || newEndTime > MAX_TIME) {
        return;
      }
      onDrop(schedule, newStartTime);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return { dropRef, canDrop, isOver };
};