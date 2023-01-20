import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
function SingleProductTopPart({ title }) {
  return (
    <Box
      border={"1px solid blu"}
      display="flex"
      justifyContent={"space-around"}
      mt="15px"
    >
      <Box border={"1px solid re"} width={"50%"} display="flex">
        <Breadcrumb
          fontSize={"12px"}
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
            <BreadcrumbLink href="#">For Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/InspironList">
              Inspiron Laptops
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box
        border={"1px solid re"}
        width={"23%"}
        display="flex"
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Text fontSize={"12px"}>Intel® Core™ Processors</Text>
        <Image src="https://i.dell.com/sites/csimages/DellMicroContent_Images/all/family-core-i5i7i3-60h.png" />
      </Box>
    </Box>
  );
}

export default SingleProductTopPart;
