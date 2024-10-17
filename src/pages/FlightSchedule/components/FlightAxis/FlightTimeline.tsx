import { Grid, Box, VStack, Flex, Text } from "@chakra-ui/react";
import { styleAsFlightBoxTimeline } from "../../styles";

const FlightTimeline = () => {
  const timeSlots = ["12:00 AM", "6:00 AM", "12:00 PM"];
  
  return (
    <>
      <Grid templateColumns="100px repeat(4, 1fr)" gap={4} w="98%">
        <Box />
        {timeSlots.map((time, index) => (
          <VStack key={index} alignItems="left">
            <Box textAlign="left">
              <Text marginLeft={-5}>{time}</Text>
            </Box>
            <Box textAlign="left" sx={styleAsFlightBoxTimeline} />
          </VStack>
        ))}

        <Flex justifyContent="space-between">
          <VStack alignItems="left">
            <Box textAlign="left">
              <Text marginLeft={-5}>6:00 PM</Text>
            </Box>
            <Box textAlign="left" sx={styleAsFlightBoxTimeline} />
          </VStack>
          <VStack alignItems="left">
            <Box textAlign="right">
              <Text marginRight={-5}>12:00 AM</Text>
            </Box>
            <Box marginLeft={12}>
              <Box textAlign="right" sx={styleAsFlightBoxTimeline} />
            </Box>
          </VStack>
        </Flex>
      </Grid>
      <Box
        marginLeft="7rem"
        height="1px"
        backgroundColor="primaryDark"
        width="91%"
        mt={0}
        mb={5}
      />
    </>
  );
};

export default FlightTimeline