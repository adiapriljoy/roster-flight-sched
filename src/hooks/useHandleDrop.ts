import { useCallback } from "react";
import { FlightScheduleItem } from "../models/interface";

const useHandleDrop = (
  onScheduleUpdate: (updatedSchedule: FlightScheduleItem) => void
) => {
  const handleDrop = useCallback(
    (schedule: FlightScheduleItem, newStartTime: string) => {
      const [startHours, startMinutes] = newStartTime.split(":").map(Number);
      const [endHours, endMinutes] = schedule.endTime.split(":").map(Number);

      const durationMinutes =
        endHours * 60 +
        endMinutes -
        (parseInt(schedule.startTime.split(":")[0]) * 60 +
          parseInt(schedule.startTime.split(":")[1]));

      const newEndTimeMinutes = startHours * 60 + startMinutes + durationMinutes;
      const newEndHours = Math.floor(newEndTimeMinutes / 60) % 24;
      const newEndMinutes = newEndTimeMinutes % 60;

      const newEndTime = `${String(newEndHours).padStart(2, "0")}:${String(
        newEndMinutes
      ).padStart(2, "0")}`;

      onScheduleUpdate({
        ...schedule,
        startTime: newStartTime,
        endTime: newEndTime,
      });
    },
    [onScheduleUpdate]
  );

  return handleDrop;
};

export default useHandleDrop;
