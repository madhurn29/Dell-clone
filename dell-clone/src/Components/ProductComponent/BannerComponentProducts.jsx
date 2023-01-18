import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";

function BannerComponentProducts({
  imageUrl,
  head,
  tagLine,
  content,
  button1Text,
  button2Text,
  contentBoxOrder,
  imageBoxOrder,
  flexDirection,
  contentBoxWidth,
  imageBoxWidth,
  bg,
  button_2_action,
  button_1_action
}) {



  
  return (
    <Box
      display="flex"
      flexDirection={flexDirection}
      border="1px solid blue"
      justifyContent={"center"}
      bg={bg}
      py="35px"
    >
      <Box
        className="ImageBox"
        // border="1px solid red"
        width={imageBoxWidth || "45%"}
        margin="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        order={imageBoxOrder}
      >
        <Box width="80%">
          <Image width="100%" ml="40px" src={imageUrl} />
        </Box>
      </Box>
      <Box
        className="ContentBox"
        width={contentBoxWidth || "55%"}
        margin="auto"
        // border="1px solid red"
        display="flex"
        justifyContent="center"
        alignItems="center"
        order={contentBoxOrder}
      >
        <Box
          display="flex"
          flexDirection="column"
          // justifyContent="center"
          // alignItems="center"
          width="82%"
          textAlign={"left"}
          border="1px solid re"
        >
          <Text
            lineHeight="55px"
            fontWeight={"200"}
            color="#0076ce"
            fontSize="48px"
          >
            {head}
          </Text>

          <Text
            lineHeight="55px"
            fontSize="16px"
            textAlign={"left"}
            fontWeight={"bold"}
          >
            {tagLine}
          </Text>

          <Text fontSize="16px"  textAlign="left">
            {content}
          </Text>

          <Box
            border="1px solid re"
            width="100%"
            display="flex"
            justifyContent="space-between"
            mt="30px"
          >
            <Button onClick={()=>button_1_action()} h="45px" width={"48%"} colorScheme={"blue"} borderRadius="4px">
              {button1Text} 
            </Button>

            {button2Text && <Button h="45px" width={"48%"} variant={"outline"} colorScheme={"blue"} borderRadius="4px" onClick={()=>button_2_action()}> 
              {button2Text} 
            </Button> }
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BannerComponentProducts;
