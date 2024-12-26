import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FlightScheduleItem } from "../../models/interface";
import FlightSchedule from "./components/FlightBlocks/FlightSchedule";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useRosterData } from "../../hooks/useFetchFlight";
import { useAircraftData } from "../../hooks/useAircraftData";
import { useScheduleData } from "../../hooks/useScheduleData";
import FlightFilterSection from "./components/FlightFilters/FlightFilterSection";
import FlightUnschedulePanel from "./components/FlightUnschedule/FlightUnschedulePanel";

const Flight: React.FC = () => {
  const [schedules, setSchedules] = useState<FlightScheduleItem[]>([]);
  const [aircrafts, setAircrafts] = useState<any[]>([]);
  const { rosterInfo, loading: isRosterDataLoading, error } = useRosterData();

  const aircraftsData = useAircraftData(rosterInfo);
  // const today = new Date();
  const todayString = "2024-09-18";
  // today.toISOString().split("T")[0];
  const schedulesData = useScheduleData(rosterInfo, todayString);

  const unscheduledFlights = schedulesData.filter(
    (sched) => sched.flightType !== "Scheduled"
  );

  useEffect(() => {
    if (rosterInfo.length > 0) {
      setAircrafts(aircraftsData);
      setSchedules(schedulesData);
    }
  }, [rosterInfo, aircraftsData, schedulesData]);

  const handleScheduleUpdate = (updatedSchedule: FlightScheduleItem) => {
    console.log("update: ", updatedSchedule);
    setSchedules((prevSchedules) =>
      prevSchedules.map((sched) =>
        sched.rosterId === updatedSchedule.rosterId ? updatedSchedule : sched
      )
    );
  };

  const handleDrop = (flight: FlightScheduleItem) => {
    const updatedFlight = { ...flight, isScheduled: true };
    handleScheduleUpdate(updatedFlight);
  };

  const handleAddFlight = (time: string) => {
    // Logic to add a new flight (you may want to implement a modal or form here)
    console.log("Add flight at", time);
  };

  return (
    <Box padding={4}>
      <DndProvider backend={HTML5Backend}>
        <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={6} padding={4}>
            <FlightFilterSection />
          </GridItem>
          <GridItem colSpan={5} padding={0}>
            {isRosterDataLoading ? (
              <></>
            ) : (
              <FlightSchedule
                schedules={schedules}
                aircrafts={aircrafts}
                onScheduleUpdate={handleScheduleUpdate}
              />
            )}
          </GridItem>
          <GridItem
            colSpan={1}
            padding={4}
            bg="primary.600"
            borderRadius={8}
            boxShadow="xl"
          >
            <Text mb={2} fontWeight="bold" color="background">
              {unscheduledFlights.length > 0
                ? "UNSCHEDULED FLIGHTS"
                : "NO UNSCHEDULED FLIGHTS"}
            </Text>
            <FlightUnschedulePanel
              unscheduledFlights={unscheduledFlights}
              onDrop={handleDrop}
            />
          </GridItem>
        </Grid>
      </DndProvider>
    </Box>
  );
};

export default Flight;
