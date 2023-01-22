import React from "react";
import { Box, Text } from "@chakra-ui/react";
function RatingScale() {
  const onHover = {
    background: "#b3a2a2",
  };
  return (
    <Box border={"1px solid blac"} width={"99.50%"} padding={"20px"}>
      <Box
        border={"1px solid #a49f9f"}
        width={"99%"}
        m="auto"
        py="20px"
        textAlign={"center"}
      >
        <Text my="20px">How easy is it to find what you are looking for?</Text>
        <Box
          display={"flex"}
          border="1px solid blac"
          width={"70%"}
          m=" 10px auto "
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Text>Very Difficult</Text>
          <Box
            border="1px solid #a49f9f"
            borderRadius={"50%"}
            px="22px"
            py="12px"
            color={"#0076ce"}
            bg="#f3f3f3"
            _hover={onHover}
          >
            1
          </Box>
          <Box
            border="1px solid #a49f9f"
            borderRadius={"50%"}
            px="22px"
            py="12px"
            color={"#0076ce"}
            bg="#f3f3f3"
            _hover={onHover}
          >
            2
          </Box>
          <Box
            border="1px solid #a49f9f"
            borderRadius={"50%"}
            px="22px"
            py="12px"
            color={"#0076ce"}
            bg="#f3f3f3"
            _hover={onHover}
          >
            3
          </Box>
          <Box
            border="1px solid #a49f9f"
            borderRadius={"50%"}
            px="22px"
            py="12px"
            color={"#0076ce"}
            _hover={onHover}
            bg="#f3f3f3"
          >
            4
          </Box>
          <Box
            border="1px solid #a49f9f"
            borderRadius={"50%"}
            px="22px"
            py="12px"
            color={"#0076ce"}
            _hover={onHover}
            bg="#f3f3f3"
          >
            5
          </Box>
          <Box
            border="1px solid #a49f9f"
            borderRadius={"50%"}
            px="22px"
            py="12px"
            color={"#0076ce"}
            _hover={onHover}
            bg="#f3f3f3"
          >
            6
          </Box>
          <Box
            border="1px solid #a49f9f"
            borderRadius={"50%"}
            px="22px"
            py="12px"
            color={"#0076ce"}
            _hover={onHover}
            bg="#f3f3f3"
          >
            7
          </Box>
          <Text>Very Easy</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default RatingScale;
