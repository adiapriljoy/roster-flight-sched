import { useMemo } from "react";
import { FlightScheduleItem } from "../models/interface";
import { timeToPosition } from "../utils/flightRoster";

interface AdjustedScheduleHookProps {
  schedules: FlightScheduleItem[];
  aircrafts: any[];
}

const useAdjustedSchedules = ({
  schedules,
  aircrafts,
}: AdjustedScheduleHookProps) => {
  const adjustedSchedules = useMemo(() => {
    return aircrafts.map((aircraft) => {
      const aircraftSchedules = schedules
        .filter(
          (schedule) =>
            schedule.tailNumber === aircraft.tailNumber &&
            schedule.flightType === "Scheduled"
        )
        .sort(
          (a, b) => timeToPosition(a.startTime) - timeToPosition(b.startTime)
        );

      const positionedSchedules = aircraftSchedules.reduce(
        (acc: any[], schedule) => {
          let row = 1;
          for (const pos of acc) {
            if (
              !(
                timeToPosition(schedule.startTime) >=
                timeToPosition(pos.endTime)
              )
            ) {
              row++;
            }
          }
          acc.push({ ...schedule, row });
          return acc;
        },
        []
      );
      return { aircraft, schedules: positionedSchedules };
    });
  }, [aircrafts, schedules]);

  return adjustedSchedules;
};

export default useAdjustedSchedules;
