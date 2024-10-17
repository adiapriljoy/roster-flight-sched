import { SimpleGrid, Box } from "@chakra-ui/react";
import CustomInputText from "../CustomField/CustomInputText";
import CustomSelect from "../CustomField/CustomSelect";
import { MdOutlineFilterAlt } from "react-icons/md";
import { HiRefresh } from "react-icons/hi";

const FlightFilterSection = () => {
  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} p={0} m="-4">
        <CustomInputText id="flightNumber" placeholder="Flight number" />
        <CustomSelect id="origin" placeholder="Origin" />
        <CustomSelect id="destination" placeholder="Destination" />
        <CustomInputText
          id="airCraftTailNumber"
          placeholder="Aircraft tail number"
        />
        <CustomInputText id="crewName" placeholder="Crew name" />
        <CustomSelect id="crewRank" placeholder="Crew rank" />
        <CustomInputText id="date" inputType="date" placeholder="Date" />
        <CustomInputText
          id="filter"
          placeholder="Filter"
          rightIcon={<MdOutlineFilterAlt fontSize="18" />}
        />
      </SimpleGrid>
      <Box pt={12} display="flex" justifyContent="flex-end" width="100%">
        <HiRefresh fontSize={24} color="text" />
      </Box>
    </Box>
  );
};

export default FlightFilterSection;
