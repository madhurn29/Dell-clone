import React from "react";
import { Box, Image, Text, Table, Tr, Td } from "@chakra-ui/react";
function ProductSpecs({
  title,
  imageUrl,
  orderCode,
  rating,
  processor,
  Os,
  graphics,
  memory,
  storage,
  display,
}) {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Box className="ImageVox" width={"30%"} border={"1px solid red"}>
        <Image src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7420-2n1/media-gallery/notebook-inspiron-14-7420-2-in-1-gallery-3.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500" />
      </Box>
      <Box className="SpecsBox" width={"30%"} border={"1px solid red"}>
        <Box borderBottom={"1px solid grey"}>
          <Text fontSize={"20px"}>{title}Inspiron 14 2-in-1 Laptop</Text>
          <Text fontSize={"14px"}>OrderCode{orderCode}</Text>
          <Text fontSize={"14px"}> Rating {rating}</Text>
          <Text>Specs</Text>
          
        </Box>
      </Box>
      <Box className="PriceBox" width={"30%"} border={"1px solid red"}></Box>
    </Box>
  );
}

export default ProductSpecs;
