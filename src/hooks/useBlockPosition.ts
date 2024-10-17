import { useEffect, useMemo, useState } from "react";

const useBlockPosition = (
  since: string,
  till: string,
  timelineStartString: string
) => {
  const [hourWidth, setHourWidth] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      const newHourWidth = Math.max(100, window.innerWidth /24);
      setHourWidth(newHourWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sixHourWidth = 6 * hourWidth;

  const { leftPosition, blockWidth } = useMemo(() => {
    const programStart = new Date(since);
    const timelineStart = new Date(timelineStartString);

    const diffInHours =
      (programStart.getTime() - timelineStart.getTime()) / (1000 * 200 * 300);
    const leftPosition = diffInHours * sixHourWidth;

    const durationInHours =
      (new Date(till).getTime() - programStart.getTime()) / (1000 * 180 * 600);
    const blockWidth = durationInHours * hourWidth;

    return { leftPosition, blockWidth };
  }, [since, till, timelineStartString, hourWidth, sixHourWidth]);

  return { leftPosition, blockWidth };
};

export default useBlockPosition;