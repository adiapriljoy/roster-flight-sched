import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { HiRefresh } from "react-icons/hi";
import { MdOutlineFilterAlt } from "react-icons/md";
import CustomInputText from "../CustomField/CustomInputText";
import CustomSelect from "../CustomField/CustomSelect";

interface FlightAddModalProps {
  selectedAircraft: any;
  isOpen: boolean;
  onClose: () => void;
}

const FlightAddModal: React.FC<FlightAddModalProps> = ({
  selectedAircraft,
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add flight</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* {selectedAircraft ? (
            <>
              <p>
                <strong>Aircraft Tail Number:</strong>{" "}
                {selectedAircraft.tailNumber}
              </p>
              <p>
                <strong>Total Flight hours:</strong>{" "}
                {selectedAircraft.totalFlightHours}
              </p>
              <p>
                <strong>Total Flight hours:</strong>{" "}
                {selectedAircraft.startTime}
              </p>
            </>
          ) : (
            <p>No aircraft selected.</p>
          )} */}
          <Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} p={0}>
              <CustomInputText id="flightNumber" placeholder="Flight number" />
              <Box></Box>
              <CustomSelect id="origin" placeholder="Origin" />
              <CustomSelect id="destination" placeholder="Destination" />
              <CustomInputText
                id="flightDeckCrewNum"
                placeholder="No. of flight deck crew"
                inputType="number"
              />
              <CustomInputText
                id="cabinCrewNum"
                placeholder="No. of cabin crew"
                inputType="number"
              />
              <CustomInputText
                id="startTime"
                inputType="time"
                value={selectedAircraft.startTime}
                placeholder="Start time"
              />
              <CustomInputText
                id="endTime"
                inputType="time"
                placeholder="End time"
              />
            </SimpleGrid>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button variant="outline" colorScheme="blue" onClick={onClose} mr={2}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={onClose}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FlightAddModal;
