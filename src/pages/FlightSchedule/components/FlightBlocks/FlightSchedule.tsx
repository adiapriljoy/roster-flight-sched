import { Grid, Box, useDisclosure, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React, { useState } from "react";
import { FlightScheduleItem } from "../../../../models/interface";
import DraggableSchedule from "./DraggableSchedule";
import { styleAsFlightBox } from "../../styles";
import FlightTimeline from "../FlightAxis/FlightTimeline";
import useHandleDrop from "../../../../hooks/useHandleDrop";
import FlightAirCraft from "../FlightAxis/FlightAirCraft";
import { useDrop } from "react-dnd";
import useAdjustedSchedules from "../../../../hooks/useAdjustedSchedules";
import useUpdateSchedule from "../../../../hooks/useUpdateSchedule";
import { positionToTime } from "../../../../utils/flightRoster";

interface FlightScheduleProps {
  schedules: FlightScheduleItem[];
  aircrafts: any[];
  onScheduleUpdate: (updatedSchedule: FlightScheduleItem) => void;
}

const FlightSchedule: React.FC<FlightScheduleProps> = ({
  schedules,
  aircrafts,
  onScheduleUpdate,
}) => {
  const onDrop = useHandleDrop(onScheduleUpdate);
  const adjustedSchedules = useAdjustedSchedules({ schedules, aircrafts });
  const updateSchedule = useUpdateSchedule({ onScheduleUpdate });

  const [{}, drop] = useDrop(() => ({
    accept: "SCHEDULE_ITEM",
    drop: (item: any, monitor) => {
      updateSchedule(item, monitor);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAircraft, setSelectedAircraft] = useState<any>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement>,
    aircraft: any
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    const panelWidth = rect.width;
    const percentageX = clickX / panelWidth;

    const equivalentTime = positionToTime(percentageX * 100);

    console.log("Click Coordinates: ", { x: clickX, y: clickY });
    console.log("Equivalent Time: ", equivalentTime);
    console.log("Equivalent aircraft: ", aircraft);

    aircraft.startTime = equivalentTime;
    setSelectedAircraft(aircraft);
    onOpen();
  };

  return (
    <Box sx={styleAsFlightBox}>
      <FlightTimeline />
      <Grid
        templateColumns="100px repeat(4, 1fr)"
        gap={4}
        w="98%"
        h="100%"
        ref={drop}
      >
        {adjustedSchedules.map(
          ({ aircraft, schedules: aircraftSchedules }, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <Box gridColumn="1" display="flex" alignItems="center">
                <FlightAirCraft aircraft={aircraft} />
              </Box>
              <Box
                gridColumn="span 4"
                position="relative"
                onClick={(event) => handleClick(event, aircraft)}
              >
                {aircraftSchedules.map((schedule) => (
                  <DraggableSchedule
                    key={`schedule-${schedule.rosterId}-${aircraft.tailNumber}-${schedule.startTime}`}
                    schedule={schedule}
                    onDrop={onDrop}
                  />
                ))}
              </Box>
            </React.Fragment>
          )
        )}
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Aircraft Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedAircraft ? (
              <>
                <p><strong>Aircraft Tail Number:</strong> {selectedAircraft.tailNumber}</p>
                <p><strong>Total Flight hours:</strong> {selectedAircraft.totalFlightHours}</p>
                <p><strong>Total Flight hours:</strong> {selectedAircraft.startTime}</p>
              </>
            ) : (
              <p>No aircraft selected.</p>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default FlightSchedule;
