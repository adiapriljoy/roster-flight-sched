import { useMemo } from "react";

interface CrewMember {
  af_CrewType: string;
}

export const useCrewCount = (crew: any) => {
  const { flightDeckCrewCount, cabinCrewCount } = useMemo(() => {
    let flightDeckCrewCount = 0;
    let cabinCrewCount = 0;

    const countCrewMembers = (crewMember: CrewMember) => {
      if (
        crewMember.af_CrewType === "Captain" ||
        crewMember.af_CrewType === "First Officer"
      ) {
        flightDeckCrewCount++;
      } else {
        cabinCrewCount++;
      }
    };

    if (Array.isArray(crew)) {
      crew.forEach(countCrewMembers);
    } else if (typeof crew === "object" && crew !== null) {
      countCrewMembers(crew);
    }

    return { flightDeckCrewCount, cabinCrewCount };
  }, [crew]);

  return { flightDeckCrewCount, cabinCrewCount };
};
