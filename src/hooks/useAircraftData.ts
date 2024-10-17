import { useEffect, useState } from "react";

export const useAircraftData = (rosterInfo: any[]) => {
  const [aircrafts, setAircrafts] = useState<any[]>([]);

  useEffect(() => {
    const seenTailNumbers = new Set();
    const info = rosterInfo
      .filter((item) => {
        const tailNumber = item.af_Aircraft.af_TailNumber;
        const isDuplicate = seenTailNumbers.has(tailNumber);
        if (!isDuplicate) {
          seenTailNumbers.add(tailNumber);
          return true;
        }
        return false;
      })
      .map((item) => ({
        rosterId: item.af_fcm_RosterId,
        tailNumber: item.af_Aircraft.af_TailNumber,
        aircraftType: item.af_Aircraft.af_AircraftType,
        totalFlightHours: item.af_TotalFlightHours,
      }));

    setAircrafts(info);
  }, [rosterInfo]);

  return aircrafts;
};
