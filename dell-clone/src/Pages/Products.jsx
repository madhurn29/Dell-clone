import React from "react";
import { Box } from "@chakra-ui/react";
import TopBanner from "../Components/ProductComponent/TopBanner";
import AccordianTags from "../Components/ProductComponent/AccordianTags";
function Products() {
  return (
    <Box>
      <TopBanner />
      <Box className="middlePart" display={"flex"}>
        <Box
          className="FilterSection"
          width={"20%"}
          border={"1px solid black"}
        >
          <AccordianTags/>
        </Box>
        <Box
          className="Content Section"
          width={"80%"}
          border={"1px solid red"}
        >hsbffb</Box>
      </Box>
    </Box>
  );
}

export default Products;
