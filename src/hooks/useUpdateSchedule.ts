import { useCallback } from "react";
import { FlightScheduleItem } from "../models/interface";
import { positionToTime, timeToPosition } from "../utils/flightRoster";
import { useToast } from "@chakra-ui/react";

const MIN_TIME = "00:00";
const MAX_TIME = "23:59";

interface UpdateScheduleHookProps {
  onScheduleUpdate: (updatedSchedule: FlightScheduleItem) => void;
}

const useUpdateSchedule = ({ onScheduleUpdate }: UpdateScheduleHookProps) => {
  const toast = useToast();
  const updateSchedule = useCallback(
    (schedule: any, monitor: any) => {
      const sched = schedule.schedule;

      const deltaX = monitor.getDifferenceFromInitialOffset()?.x || 0;
      const percentageMoved =
        (deltaX / document.documentElement.clientWidth) * 130;

      const newStartTime = positionToTime(
        timeToPosition(sched.startTime) +
          (sched.flightType === "Scheduled" ? percentageMoved : 0)
      );
      const newEndTime = positionToTime(
        timeToPosition(sched.endTime) +
          (sched.flightType === "Scheduled" ? percentageMoved : 0)
      );

      sched.flightType = "Scheduled";

      if (newStartTime < MIN_TIME || newEndTime > MAX_TIME) {
        toast({
          variant: "subtle",
          title:
            "Please ensure the schedule starts no earlier than 12:00 AM and ends no later than 12:00 AM.",
          status: "error",
          isClosable: true,
          position: "bottom",
        });
        return;
      }

      onScheduleUpdate({
        ...sched,
        startTime: newStartTime,
        endTime: newEndTime,
      });
    },
    [onScheduleUpdate, toast]
  );

  return updateSchedule;
};

export default useUpdateSchedule;
