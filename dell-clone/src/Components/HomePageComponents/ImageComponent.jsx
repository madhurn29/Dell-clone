import React from "react";
import { Image, Box, Text, Button } from "@chakra-ui/react";
function ImageComponent() {
  return (
    <Box height="450px" border="1px solid black">
      <Image   src="https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/heroes/republic-day-cons-dell-xps-9315t-uhp-2304-12-in-homepage-hero-lf-2400x696-lr.png?fmt=pjpg&pscan=auto&scl=1&hei=696&wid=2400&qlt=100&resMode=sharp2&size=2400,696&op_usm=1.75,0.3,2,0" alt="laptop-image-1" />
      <Box
        position="relative"
        bottom="320px"
        left="35px"
        width="48%"
        // border="1px solid red"
      >
        {" "}
        <Text fontSize="20px" fontFamily="Roboto,Sans-serif">
          REPUBLIC DAY OFFERS{" "}
        </Text>
        <Text fontSize="40px" fontFamily="Roboto,Sans-serif">
          Be Free to Be More{" "}
        </Text>
        <Text fontSize="20px" fontFamily="Roboto,Sans-serif">
          Get 10% cashback up to ₹5,000 on Citi cards & 2 years onsite warranty
          at ₹1
        </Text>
        <Box
          width="40%"
          mt="25px"
          display="flex"
          justifyContent="space-between"
        >
          <Button colorScheme="blue" p="25px" borderRadius="none">
            {" "}
            Shop Now
          </Button>
          <Button
            variant="outline"
            p="25px"
            colorScheme="blue"
            borderRadius="none"
          >
            {" "}
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ImageComponent;
