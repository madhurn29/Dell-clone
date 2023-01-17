import { Box, Text, Image, Link } from "@chakra-ui/react";
function WelcomeCard({ imageUrl = null, heading, text, linkText }) {
  return (
    <Box
      padding="25px"
      height="300px"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
    >
      <Text fontSize="30px">{heading}</Text>
      <hr />
      <Box display="flex" height="150px">
        {imageUrl && <Image src={imageUrl}></Image>}
        <Text mt="10px" fontSize="20px">
          {text}
        </Text>
      </Box>
      <Box position="relative" top="20px">
        <Link fontSize="20px" color="blue" textDecoration="none">
          {linkText}
        </Link>
      </Box>
    </Box>
  );
}

export default WelcomeCard;
// box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
