import { useEffect, useState } from "react";
import { convertLocaleTimeString } from "../utils/formatDate";
import { FlightScheduleItem } from "../models/interface";

export const useScheduleData = (rosterInfo: any[], todayString: string) => {
  const [schedules, setSchedules] = useState<FlightScheduleItem[]>([]);

  useEffect(() => {
    const info = rosterInfo
      .map((item) => ({
        rosterId: item.af_fcm_RosterId,
        tailNumber: item.af_Aircraft.af_TailNumber,
        startTime: convertLocaleTimeString(item.af_ChocksOutProjected),
        endTime: convertLocaleTimeString(item.af_ChocksInProjected),
        origin: item.af_Origin,
        destination: item.af_Destination,
        since: item.af_ChocksOutProjected,
        till: item.af_ChocksInProjected,
        flightStatus: item.af_Flight.af_FlightStatus,
        flightType: item.af_FlightType,
        crew: item.af_RosterPairing.af_Crew,
      }))
      .filter((item) => item.since.split("T")[0] === todayString);

    setSchedules(info);
  }, [rosterInfo, todayString]);

  return schedules;
};
