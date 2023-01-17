import { Box, Text, Image } from "@chakra-ui/react";
import headset from "./images/headset.svg";
function DellSupport() {
  return (
    <Box display="flex">
      <Box
        width="50%"
        // border="1px solid red"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box textAlign="center">
          <Text fontSize="40px">Dell Support</Text>
          <Text fontSize="20px">Get your questions answered</Text>
        </Box>
      </Box>
      <Box width="50%">
        <Box mt={"20px"}>
          <Box width="80%" mb="10px">
            <Box display="flex" color="blue">
              <Image src={headset} mr="20px" />
              <Text fontSize="24px" lineHeight={"50px"}>
                Contact Support
              </Text>
            </Box>
            <Text fontSize={"20px"} ml="55px">
              Let us assist you with any product or service questions
            </Text>
          </Box>
          <hr width="80%" />
        </Box>
        <Box mt={"20px"}>
          <Box width="80%" mb="10px">
            <Box display="flex" color="blue">
              <Image src={headset} mr="20px" />
              <Text fontSize="24px" lineHeight={"50px"}>
                Warranty and Contracts
              </Text>
            </Box>
            <Text fontSize={"20px"} ml="55px">
              Check warranty of the product
            </Text>
          </Box>
          <hr width="80%" />
        </Box>
        <Box mt={"20px"}>
          <Box width="80%" mb="10px">
            <Box display="flex" color="blue">
              <Image src={headset} mr="20px" />
              <Text fontSize="24px" lineHeight={"50px"}>
                Product Support
              </Text>
            </Box>
            <Text fontSize={"20px"} ml="55px">
              Expertise. Convenience. Quality Support.
            </Text>
          </Box>
          <hr width="80%" />
        </Box>
        <Box mt={"20px"}>
          <Box width="80%" mb="10px">
            <Box display="flex" color="blue">
              <Image src={headset} mr="20px" />
              <Text fontSize="24px" lineHeight={"50px"}>
                Drivers and Downloads
              </Text>
            </Box>
            <Text fontSize={"20px"} ml="55px">
              Get the latest Drivers and Softwares
            </Text>
          </Box>
          <hr width="80%" />
        </Box>
      </Box>
    </Box>
  );
}

export default DellSupport;
