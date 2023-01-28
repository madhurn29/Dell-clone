import React from "react";
import { Box, Spinner, } from "@chakra-ui/react";



function CartItemSkeleton() {
 
  
 
  return (
    <Box
      className="cartItems"
      width={"70%"}
      border="1px solid re"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        fontSize={"100px"}
        emptyColor="gray.200"
        color="blue.500"
        height={"100px"}
        width={"100px"}
        // size={"4xl"}
      />
    </Box>
  );
}

export default CartItemSkeleton
