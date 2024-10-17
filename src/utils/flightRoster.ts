import { FlightScheduleItem } from "../models/interface";

const timeToPosition = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes;
  return (totalMinutes / 1440) * 100;
};

const positionToTime = (position: number): string => {
  const totalMinutes = (position / 100) * 1440;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}`;
};

const classifyCrewMembers = (data: any) => {
  const flightDeckCrew = [];
  const cabinCrew = [];

  const crewMembers = data.crew;

  if (Array.isArray(crewMembers)) {
    crewMembers.forEach((member) => {
      if (
        member.af_CrewType === "Captain" ||
        member.af_CrewType === "First Officer"
      ) {
        flightDeckCrew.push(member.af_CrewName);
      } else {
        cabinCrew.push(member.af_CrewName);
      }
    });
  } else if (typeof crewMembers === "object" && crewMembers !== null) {
    if (
      crewMembers.af_CrewType === "Captain" ||
      crewMembers.af_CrewType === "First Officer"
    ) {
      flightDeckCrew.push(crewMembers.af_CrewName);
    } else {
      cabinCrew.push(crewMembers.af_CrewName);
    }
  }

  return {
    flightDeckCrew: flightDeckCrew.length > 0 ? flightDeckCrew.join(", ") : "N/A",
    cabinCrew: cabinCrew.length > 0 ? cabinCrew.join(", ") : "N/A",
  };
};

const calculateOverlaps = (schedules: FlightScheduleItem[]) => {
  const overlapCounts: Record<string, number> = {};

  schedules.forEach((schedule) => {
    const key = `${schedule.startTime}-${schedule.endTime}`;
    overlapCounts[key] = (overlapCounts[key] || 0) + 1;
  });

  return overlapCounts;
};

export { timeToPosition, positionToTime, classifyCrewMembers, calculateOverlaps };
