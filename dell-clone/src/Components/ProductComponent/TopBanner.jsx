import React from "react";
import {
  Box,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import laptopbanner from "./images/laptopbanner.png";
function TopBanner() {
  return (
    <Box display={"flex"} mt="3px" bg="linear-gradient(90deg, rgba(216,210,221,1) 0%, rgba(255,255,255,0.829656862745098) 49%, rgba(216,210,221,1) 100%)">
      <Box border={"1px solid re"} width="50%">
        <Box border={"1px solid blac"} width="70%" m="auto">
          <Breadcrumb
            border={"1px solid blu"}
            width="90%"
            mt="20px"
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">India</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Products</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Laptops</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Text fontSize={"58px"}>Laptop Computers & 2-in-1 PCs</Text>
          <Text fontSize={"16px"}>Shop the best laptops & notebooks from DellCo. See top laptop deals today</Text>
        </Box>
      </Box>
      <Box border={"1px solid re"} width="50%">
        <Image src={laptopbanner} />
      </Box>
    </Box>
  );
}

export default TopBanner;
