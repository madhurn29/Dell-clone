import React from "react";
import { Box, Text } from "@chakra-ui/react";
import TopPartPrdouctList from "../Components/ProductListComponent/TopPartPrdouctList";
import AccordianTags from "../Components/ProductComponent/AccordianTags";
import ProductSpecs from "../Components/ProductListComponent/ProductSpecs";
function ProductList() {
  return (
    <Box>
      <TopPartPrdouctList />
      <Box border={"1px solid re"} textAlign="center" my="15px">
        <Text fontSize={"36px"} fontWeight={400}>
          Inspiron Laptops & 2-in-1 PCs
        </Text>
      </Box>
      <Box className="middlePart" display={"flex"}>
        <Box className="filterSection" width={"20%"} border={"1px solid red"}>
          <AccordianTags />
        </Box>
        <Box
          className="ContentSection"
          width={"80%"}
          border={"1px solid red"}
          display={"flex"}
          flexDirection={"column"}
          pb="10px"
        >
          <Box
            className="ActualContent"
            border={"1px solid blue"}
            width="95%"
            m="auto"
            // borderRadius={"12px"}
            mt="15px"
          >
            {" "}
            <ProductSpecs/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductList;
